let currentUser = localStorage.getItem("loggedInUser") || "";
let allTestDrives = [];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function renderSummary(drives) {
  const countEl = document.getElementById("summary-td-count");
  const incomeEl = document.getElementById("summary-td-income");
  const vehiclesEl = document.getElementById("summary-td-vehicles");

  const totalCount = drives.length;
  const totalIncome = totalCount * 500; // Always $500 per test drive

  // Count unique vehicles
  const uniqueVehicles = new Set(drives.map((d) => d.vehicle).filter(Boolean));

  if (countEl) countEl.textContent = String(totalCount);
  if (incomeEl) incomeEl.textContent = formatCurrency(totalIncome);
  if (vehiclesEl) vehiclesEl.textContent = String(uniqueVehicles.size);
}

function renderLeaderboard(drives) {
  const leaderboardEl = document.getElementById("td-leaderboard");
  if (!leaderboardEl) return;

  // Calculate count of test drives per salesperson
  const totals = drives.reduce((agg, entry) => {
    const name = entry.salesperson || "Unknown";
    if (!agg[name]) {
      agg[name] = { count: 0, volume: 0 };
    }
    agg[name].count += 1;
    agg[name].volume += 500;
    return agg;
  }, {});

  const rows = Object.entries(totals)
    .map(([name, stats]) => ({ name, ...stats }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  if (!rows.length) {
    leaderboardEl.innerHTML =
      '<div class="sales-empty">No test drives recorded yet.</div>';
    return;
  }

  leaderboardEl.innerHTML = rows
    .map(
      (row, index) => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">#${index + 1}</div>
            <div class="leaderboard-name">${row.name}</div>
            <div class="leaderboard-stats"><span>${row.count} drives</span><span>${formatCurrency(row.volume)}</span></div>
        </div>
    `,
    )
    .join("");
}

function renderTestDriveCards(drives) {
  const listEl = document.getElementById("td-logs-list");
  if (!listEl) return;

  if (!drives.length) {
    listEl.innerHTML =
      '<div class="sales-empty">No test drives match your criteria.</div>';
    return;
  }

  listEl.innerHTML = drives
    .map((entry) => {
      return `
            <div class="td-card">
                <div class="td-header">
                    <div class="td-vehicle-title">${entry.vehicle || "Unknown vehicle"}</div>
                    <div class="td-date">${entry.date || "N/A"}</div>
                </div>
                <div class="td-row"><span>Salesperson:</span> ${entry.salesperson || "Unknown"}</div>
                <div class="td-badge">Test Drive Fee: ${formatCurrency(entry.price || 500)}</div>
            </div>
        `;
    })
    .join("");
}

function filterDrives(drives, query) {
  if (!query) return drives;
  const term = query.toLowerCase();
  return drives.filter((d) => {
    return (
      (d.vehicle && d.vehicle.toLowerCase().includes(term)) ||
      (d.salesperson && d.salesperson.toLowerCase().includes(term))
    );
  });
}

function updatePageDisplay(query = "") {
  const filtered = filterDrives(allTestDrives, query);
  renderTestDriveCards(filtered);
  renderSummary(allTestDrives);
  renderLeaderboard(allTestDrives);
}

function loadStoredLocalDrives() {
  try {
    return JSON.parse(localStorage.getItem("testDrivesLogs") || "[]");
  } catch (e) {
    return [];
  }
}

function getDriveKey(d) {
  return `${d.date || ""}|${d.salesperson || ""}|${d.vehicle || ""}`.toLowerCase();
}

function loadAndRender() {
  const filterInput = document.getElementById("td-filter-input");
  const clearBtn = document.getElementById("td-clear-filter");

  allTestDrives = loadStoredLocalDrives().sort((a, b) => {
    return new Date(b.date) - new Date(a.date) || 1;
  });

  updatePageDisplay(filterInput?.value || "");

  if (filterInput && !filterInput.dataset.listener) {
    filterInput.dataset.listener = "true";
    filterInput.addEventListener("input", () => {
      updatePageDisplay(filterInput.value);
    });
  }

  if (clearBtn && !clearBtn.dataset.listener) {
    clearBtn.dataset.listener = "true";
    clearBtn.addEventListener("click", () => {
      if (filterInput) filterInput.value = "";
      updatePageDisplay();
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  currentUser = localStorage.getItem("loggedInUser") || "";
  loadAndRender();
});
