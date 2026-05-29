const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const app = express();
const PORT = process.env.PORT || 3000;

// Supabase configuration
const SUPABASE_URL =
  process.env.SUPABASE_URL || "https://ughlabwtcwcnosmirhpy.supabase.co";
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_KEY ||
  process.env.SUPABASE_KEY ||
  "sb_secret_P2K43AiwbQvlaYUcJQPkUA_PNVP95J5";
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

app.use(express.json());
app.use(express.static("."));

// Table names (configurable via env vars for flexibility)
// Default to the existing table names in your Supabase DB.
const SALES_TABLE = process.env.SALES_TABLE || "Sales";
const TEST_DRIVE_TABLE = process.env.TEST_DRIVE_TABLE || "Test-Drive";

console.log("Using Supabase tables:", { SALES_TABLE, TEST_DRIVE_TABLE });

// Endpoint to save a new sale
app.post("/save-sale", async (req, res) => {
  try {
    const payload = req.body || {};
    const { data, error } = await supabase.from(SALES_TABLE).insert([payload]);
    if (error) throw error;
    res.json({ success: true, data });
  } catch (err) {
    console.error("Error saving sale:", err);
    res.status(500).send("Error saving data");
  }
});

// Endpoint to get all raw sales (useful for frontend tables/charts)
app.get("/get-sales", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from(SALES_TABLE)
      .select("*")
      .order("date", { ascending: false });
    if (error) throw error;
    res.json(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).send("Error fetching data");
  }
});

// Endpoint for the sales log page (returns the raw array directly to be mapped on the frontend)
app.get("/api/sales", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from(SALES_TABLE)
      .select("*")
      .order("date", { ascending: false });
    if (error) throw error;
    res.json(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error("Error fetching server sales:", err);
    res.status(500).send("Error fetching server sales");
  }
});

// Endpoint to replace the full sales log in the database
app.put("/save-sales-log", async (req, res) => {
  try {
    const records = req.body;
    if (!Array.isArray(records)) {
      return res
        .status(400)
        .json({ error: "Expected an array of sales records" });
    }

    // Delete existing rows (where id > 0) then insert the new payload
    const del = await supabase.from(SALES_TABLE).delete().gt("id", 0);
    if (del.error) {
      console.warn(
        "Warning deleting existing sales:",
        del.error.message || del.error,
      );
    }

    const { data, error } = await supabase.from(SALES_TABLE).insert(records);
    if (error) throw error;

    res.json({
      success: true,
      inserted: Array.isArray(data) ? data.length : 0,
    });
  } catch (err) {
    console.error("Error saving sales log:", err);
    res
      .status(500)
      .json({ error: "Error saving sales log", details: err.message });
  }
});

// Test Drives table endpoints (migrated to Supabase)
app.post("/save-test-drive", async (req, res) => {
  try {
    const payload = req.body || {};
    // Remove `date` if present; some Test-Drive tables use a different timestamp column
    const insertPayload = Object.assign({}, payload);
    delete insertPayload.date;

    console.log("Test drive insert payload:", insertPayload);

    const { data, error } = await supabase
      .from(TEST_DRIVE_TABLE)
      .insert([insertPayload]);
    if (error) throw error;
    res.json({ success: true, data });
  } catch (err) {
    console.error("Error saving test drive:", err);
    res.status(500).send("Error saving test drive");
  }
});

app.get("/api/test-drives", async (req, res) => {
  try {
    // Attempt to order by common timestamp columns, else fallback to id desc or plain select
    const orderCandidates = ["date", "created_at", "id"];
    let result = null;
    for (const col of orderCandidates) {
      try {
        result = await supabase
          .from(TEST_DRIVE_TABLE)
          .select("*")
          .order(col, { ascending: false });
        if (!result.error) break;
      } catch (e) {
        result = { error: e };
      }
    }

    // If ordering attempts failed, try a plain select without ordering
    if (result && result.error) {
      console.warn(
        "Ordering by common columns failed for test drives, trying plain select:",
        result.error,
      );
      result = await supabase.from(TEST_DRIVE_TABLE).select("*");
    }

    if (result.error) throw result.error;
    res.json(Array.isArray(result.data) ? result.data : []);
  } catch (err) {
    console.error("Error fetching test drives:", err);
    res.status(500).send("Error fetching test drives");
  }
});

// Diagnostic endpoint: check DB connectivity and basic schema info
app.get("/api/db-status", async (req, res) => {
  try {
    const salesCountRes = await supabase
      .from(SALES_TABLE)
      .select("id", { count: "exact" })
      .limit(1);
    const salesSampleRes = await supabase
      .from(SALES_TABLE)
      .select("*")
      .limit(1);

    const tdCountRes = await supabase
      .from(TEST_DRIVE_TABLE)
      .select("id", { count: "exact" })
      .limit(1);
    const tdSampleRes = await supabase
      .from(TEST_DRIVE_TABLE)
      .select("*")
      .limit(1);

    const makeResult = (countRes, sampleRes) => ({
      count: countRes && countRes.count != null ? countRes.count : null,
      sampleKeys:
        Array.isArray(sampleRes.data) && sampleRes.data[0]
          ? Object.keys(sampleRes.data[0])
          : [],
      error: countRes.error || sampleRes.error || null,
    });

    res.json({
      sales: makeResult(salesCountRes, salesSampleRes),
      test_drives: makeResult(tdCountRes, tdSampleRes),
    });
  } catch (err) {
    console.error("Error checking db-status:", err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
