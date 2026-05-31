let salesLogEditMode = false;
let allSalesLogs = [];

function normalizeLogEntry(entry) {
  if (!entry) return null;

  if (typeof entry === "string") {
    const legacy = parseLegacyLog(entry);
    if (legacy) return legacy;
    const raw = parseRawLog(entry);
    if (raw) return raw;
    return {
      date: new Date().toISOString(),
      rawText: entry,
    };
  }

  if (entry.date && entry.salesperson) {
    return entry;
  }

  return null;
}

function parseLegacyLog(raw) {
  const parts = raw.split(" - ");
  const maybeDate = parts[0];
  const timestamp = new Date(maybeDate);
  if (Number.isNaN(timestamp.getTime())) {
    return null;
  }

  const body = parts.slice(1).join(" - ").trim();
  const entry = {
    date: timestamp.toISOString(),
    rawText: raw,
  };

  body.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;
    const value = rest.join(":").trim();
    switch (key.trim().toLowerCase()) {
      case "salesperson":
        entry.salesperson = value;
        break;
      case "customer name":
        entry.customer = value;
        break;
      case "id number":
        entry.idNumber = value;
        break;
      case "vehicle sold":
        entry.vehicle = value;
        break;
      case "msrp (base price)":
        entry.basePrice = parseCurrencyValue(value);
        break;
      case "sell price":
        entry.sellPrice = parseCurrencyValue(value);
        break;
      case "discount given":
        entry.discountPercent = Number(value.replace("%", "").trim()) || 0;
        break;
      case "license plate":
        entry.licensePlate = value;
        break;
      default:
        break;
    }
  });

  return entry;
}

function parseRawLog(raw) {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const entry = { rawText: raw };

  lines.forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;
    const value = rest.join(":").trim();

    switch (key.trim().toLowerCase()) {
      case "date": {
        const parsedDate = new Date(value);
        if (!Number.isNaN(parsedDate.getTime())) {
          entry.date = parsedDate.toISOString();
        }
        break;
      }
      case "salesperson":
        entry.salesperson = value;
        break;
      case "customer":
      case "customer name":
        entry.customer = value;
        break;
      case "id number":
      case "id_number":
        entry.idNumber = value;
        break;
      case "vehicle":
      case "vehicle sold":
      case "vehicle_sold":
        entry.vehicle = value;
        break;
      case "sell price":
      case "sell_price":
        entry.sellPrice = parseCurrencyValue(value);
        break;
      case "discount":
      case "discount given":
      case "discount_given":
        entry.discountPercent = Number(value.replace("%", "").trim()) || 0;
        break;
      case "license plate":
      case "license_plate":
        entry.licensePlate = value;
        break;
      default:
        break;
    }
  });

  if (!entry.date) {
    entry.date = new Date().toISOString();
  }

  return entry;
}
function parseCurrencyValue(value) {
  return Number(value.replace(/[^0-9.-]+/g, "")) || 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function parseSalesLogTextToEntries(text) {
  if (!text || typeof text !== "string") return [];
  const chunks = text
    .split(/\n-{4,}\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  return chunks
    .map((chunk) => normalizeLogEntry(chunk))
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function saveSalesLogEntriesLocally(logText) {
  const records = parseSalesLogTextToEntries(logText);
  if (!records.length) {
    throw new Error("No valid sales records found to save.");
  }

  const structuralText = generateLogText(records);
  localStorage.setItem("salesLogText", structuralText);

  const existingLogs = loadStoredLogs();
  const mergedLogs = [...existingLogs, ...records].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  localStorage.setItem("salesLogs", JSON.stringify(mergedLogs));

  return true;
}

function loadStoredLogs() {
  const rawLogs = JSON.parse(localStorage.getItem("salesLogs") || "[]");
  return rawLogs
    .map(normalizeLogEntry)
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadEditableLogs() {
  const rawText = localStorage.getItem("salesLogText");
  if (!rawText) return null;
  const chunks = rawText
    .split(/\n-{4,}\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
  const entries = chunks.map(normalizeLogEntry).filter(Boolean);
  return entries.length
    ? entries.sort((a, b) => new Date(b.date) - new Date(a.date))
    : null;
}

function getLogKey(entry) {
  return [
    entry.date || "",
    entry.salesperson || "",
    entry.customer || "",
    entry.idNumber || "",
    entry.vehicle || "",
    entry.sellPrice || "",
    entry.discountPercent || "",
    entry.licensePlate || "",
    entry.rawText || "",
  ]
    .map((value) => value.toString().toLowerCase())
    .join("|");
}

function mergeLogs(editableLogs, storedLogs) {
  const existingKeys = new Set(editableLogs.map(getLogKey));
  const merged = [...editableLogs];
  storedLogs.forEach((entry) => {
    const key = getLogKey(entry);
    if (!existingKeys.has(key)) {
      merged.push(entry);
      existingKeys.add(key);
    }
  });
  return merged.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadLogs() {
  const editableLogs = loadEditableLogs();
  const storedLogs = loadStoredLogs();
  if (!editableLogs) return storedLogs;
  return mergeLogs(editableLogs, storedLogs);
}

function filterLogs(logs, searchValue) {
  if (!searchValue) return logs;
  const query = searchValue.toLowerCase();
  return logs.filter((entry) => {
    return [
      entry.salesperson,
      entry.customer,
      entry.vehicle,
      entry.idNumber,
      entry.licensePlate,
      entry.rawText,
    ]
      .filter(Boolean)
      .some((value) => value.toString().toLowerCase().includes(query));
  });
}

function renderSaleCards(logs) {
  const list = document.getElementById("sales-log-list");
  if (!list) return;

  const isAdmin = false;

  if (!logs.length) {
    list.innerHTML = '<div class="sales-empty">No sales recorded yet.</div>';
    return;
  }

  const rawLogs = allSalesLogs.length ? allSalesLogs : logs;
  list.innerHTML = logs
    .map((entry, index) => {
      const date = new Date(entry.date);
      const formattedDate = date.toLocaleString();
      const rawIndex = rawLogs.findIndex(
        (item) =>
          item.date === entry.date &&
          item.rawText === entry.rawText &&
          item.salesperson === entry.salesperson,
      );
      const editButton = "";
      return `
            <div class="sale-card">
                ${editButton}
                <div class="sale-card-header">
                    <div><strong>${entry.vehicle || "Unknown vehicle"}</strong></div>
                    <div>${formattedDate}</div>
                </div>
                <div class="sale-card-row"><span>Salesperson:</span> ${entry.salesperson || "Unknown"}</div>
                <div class="sale-card-row"><span>Customer:</span> ${entry.customer || "Unknown"}</div>
                <div class="sale-card-row"><span>ID Number:</span> ${entry.idNumber || "N/A"}</div>
                <div class="sale-card-row"><span>Sell Price:</span> ${formatCurrency(entry.sellPrice || 0)}</div>
                <div class="sale-card-row"><span>Discount:</span> ${entry.discountPercent || 0}%</div>
                <div class="sale-card-row"><span>License Plate:</span> ${entry.licensePlate || "N/A"}</div>
            </div>
        `;
    })
    .join("");

  // Admin edit UI removed: no edit buttons or handlers
}

function renderLeaderboard(logs) {
  const leaderboard = document.getElementById("leaderboard-list");
  if (!leaderboard) return;

  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const recent = logs.filter((entry) => new Date(entry.date) >= cutoff);

  const totals = recent.reduce((agg, entry) => {
    const name = entry.salesperson || "Unknown";
    if (!agg[name]) {
      agg[name] = { count: 0, volume: 0 };
    }
    agg[name].count += 1;
    agg[name].volume += Number(entry.sellPrice || 0);
    return agg;
  }, {});

  const rows = Object.entries(totals)
    .map(([name, stats]) => ({ name, ...stats }))
    .sort((a, b) => b.count - a.count || b.volume - a.volume)
    .slice(0, 10);

  if (!rows.length) {
    leaderboard.innerHTML =
      '<div class="sales-empty">No sales in the last 30 days.</div>';
    return;
  }

  leaderboard.innerHTML = rows
    .map(
      (row, index) => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">#${index + 1}</div>
            <div class="leaderboard-name">${row.name}</div>
            <div class="leaderboard-stats"><span>${row.count} sales</span><span>${formatCurrency(row.volume)}</span></div>
        </div>
    `,
    )
    .join("");
}

function renderSummary(logs) {
  const summaryCount = document.getElementById("summary-count");
  const summary30d = document.getElementById("summary-30d");
  const summaryRevenue = document.getElementById("summary-revenue");
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const recentCount = logs.filter(
    (entry) => new Date(entry.date) >= cutoff,
  ).length;
  const totalRevenue = logs.reduce((sum, entry) => {
    return sum + (Number(entry.sellPrice) || 0) * 0.0125;
  }, 0);

  if (summaryCount) summaryCount.textContent = String(logs.length);
  if (summary30d) summary30d.textContent = String(recentCount);
  if (summaryRevenue)
    summaryRevenue.textContent = formatCurrency(Math.round(totalRevenue));
}

function generateLogText(logs) {
  return logs
    .map((entry) => {
      const date = new Date(entry.date).toLocaleString();
      return [
        `Date: ${date}`,
        `Salesperson: ${entry.salesperson || "Unknown"}`,
        `Customer: ${entry.customer || "Unknown"}`,
        `ID Number: ${entry.idNumber || "N/A"}`,
        `Vehicle: ${entry.vehicle || "Unknown"}`,
        `Sell Price: ${formatCurrency(entry.sellPrice || 0)}`,
        `Discount: ${entry.discountPercent || 0}%`,
        `License Plate: ${entry.licensePlate || "N/A"}`,
      ].join("\n");
    })
    .join("\n\n----\n\n");
}

let currentEditEntryIndex = null;

function getRawLogChunks(logs) {
  const rawText = localStorage.getItem("salesLogText") || generateLogText(logs);
  return rawText
    .split(/\n-{4,}\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

function saveEditedEntryText(index, newText, logs) {
  const chunks = getRawLogChunks(logs);
  if (index < 0 || index >= chunks.length) return;

  // Clean up any stray whitespaces or missing linebreaks within the edited chunk
  chunks[index] = newText.trim();
  const newFullText = chunks.join("\n\n----\n\n");

  localStorage.setItem("salesLogText", newFullText);
}

function activateSaleEntryEdit(entry, index, logs) {
  const editor = document.getElementById("sales-log-editor");
  if (!editor) return;
  currentEditEntryIndex = index;
  setLogEditMode(true);
  editor.value = entry.rawText || generateLogText([entry]);
  editor.focus();
}

function setLogEditMode(enabled) {
  const editor = document.getElementById("sales-log-editor");
  const toggleButton = document.getElementById("toggle-edit-button");
  const doneButton = document.getElementById("done-log-button");

  salesLogEditMode = enabled;
  if (editor) {
    editor.readOnly = !enabled;
    editor.style.display = enabled ? "block" : "none";
  }
  if (toggleButton) {
    toggleButton.textContent = enabled ? "Done" : "✏️ Edit";
  }
  if (doneButton) {
    doneButton.style.display = enabled ? "inline-block" : "none";
  }
}

function renderEditableLogSection(logs) {
  const section = document.getElementById("editable-log-section");
  if (!section) return;
  section.style.display = "none";
  return;
  const textValue =
    localStorage.getItem("salesLogText") || generateLogText(logs);

  if (editor) {
    editor.value = textValue;
  }
  if (status) status.textContent = "";

  setLogEditMode(false);
}

function initializeEditableLogControls() {
  const toggleButton = document.getElementById("toggle-edit-button");
  const doneButton = document.getElementById("done-log-button");
  const resetButton = document.getElementById("reset-log-button");
  const status = document.getElementById("log-save-status");

  if (toggleButton) {
    toggleButton.addEventListener("click", async () => {
      const editor = document.getElementById("sales-log-editor");
      if (!salesLogEditMode) {
        setLogEditMode(true);
        if (editor) editor.focus();
        return;
      }

      const logs = loadLogs();
      if (editor) {
        if (currentEditEntryIndex !== null) {
          saveEditedEntryText(currentEditEntryIndex, editor.value, logs);
          currentEditEntryIndex = null;
        } else {
          localStorage.setItem("salesLogText", editor.value);
        }
      }

      const fullLogText =
        localStorage.getItem("salesLogText") || editor?.value || "";
      let saveMessage = "Sales log updated locally.";
      if (editor) {
        try {
          await saveSalesLogEntriesLocally(fullLogText);
          saveMessage = "Sales log updated locally.";
        } catch (saveErr) {
          console.warn(saveErr);
          saveMessage = "Saved locally.";
        }
      }

      setLogEditMode(false);
      if (status) {
        status.textContent = saveMessage;
        status.style.color = saveMessage.includes("failed")
          ? "#ff6b6b"
          : "#d4af37";
      }
      const filterInput = document.getElementById("sales-log-filter");
      const refreshedLogs = loadLogs();
      allSalesLogs = refreshedLogs;
      renderEditableLogSection(refreshedLogs);
      renderPage(refreshedLogs, filterInput?.value || "");
    });
  }

  if (doneButton) {
    doneButton.addEventListener("click", async () => {
      const editor = document.getElementById("sales-log-editor");
      const logs = loadLogs();
      if (editor) {
        if (currentEditEntryIndex !== null) {
          saveEditedEntryText(currentEditEntryIndex, editor.value, logs);
          currentEditEntryIndex = null;
        } else {
          localStorage.setItem("salesLogText", editor.value);
        }
      }

      const fullLogText =
        localStorage.getItem("salesLogText") || editor?.value || "";
      let saveMessage = "Sales log updated locally.";
      if (editor) {
        try {
          await saveSalesLogEntriesLocally(fullLogText);
          saveMessage = "Sales log updated locally.";
        } catch (saveErr) {
          console.warn(saveErr);
          saveMessage = "Saved locally.";
        }
      }

      setLogEditMode(false);
      if (status) {
        status.textContent = saveMessage;
        status.style.color = saveMessage.includes("failed")
          ? "#ff6b6b"
          : "#d4af37";
      }
      const filterInput = document.getElementById("sales-log-filter");
      const refreshedLogs = loadLogs();
      allSalesLogs = refreshedLogs;
      renderEditableLogSection(refreshedLogs);
      renderPage(refreshedLogs, filterInput?.value || "");
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.removeItem("salesLogText");
      if (status) {
        status.textContent =
          "Sales log reset. Reload the page to restore generated log view.";
        status.style.color = "#d4af37";
      }
      const logs = loadLogs();
      allSalesLogs = logs;
      const editor = document.getElementById("sales-log-editor");
      if (editor) editor.value = generateLogText(logs);
      setLogEditMode(false);
      const filterInput = document.getElementById("sales-log-filter");
      renderEditableLogSection(logs);
      renderPage(logs, filterInput?.value || "");
    });
  }
}

function renderPage(logs, filterValue) {
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const filtered = filterLogs(sortedLogs, filterValue);
  renderSaleCards(filtered);
  renderSummary(sortedLogs);
  renderLeaderboard(sortedLogs);
}

function loadAndRender() {
  const status = document.getElementById("log-status");
  const filterInput = document.getElementById("sales-log-filter");
  const clearFilter = document.getElementById("clear-filter-button");
  const downloadButton = document.getElementById("download-log-button");

  const logs = loadLogs();
  allSalesLogs = logs;
  renderPage(logs, filterInput?.value || "");

  if (filterInput && !filterInput.dataset.listener) {
    filterInput.dataset.listener = "true";
    filterInput.addEventListener("input", () =>
      renderPage(logs, filterInput.value),
    );
  }

  if (clearFilter && !clearFilter.dataset.listener) {
    clearFilter.dataset.listener = "true";
    clearFilter.addEventListener("click", () => {
      if (filterInput) filterInput.value = "";
      renderPage(logs, "");
    });
  }

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const payload = generateLogText(logs) || "No sales recorded yet.";
      const blob = new Blob([payload], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sales-log.txt";
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }

  if (status) {
    status.textContent = "Static mode: showing local browser data only.";
    status.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadAndRender();
});

// redeploy
