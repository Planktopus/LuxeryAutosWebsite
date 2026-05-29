const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Use your Master Key from Render's Environment Variables
const MASTER_KEY = process.env.JSONBIN_KEY;
const BIN_ID = "6a194908ddf5aa59f77347c2"; // Your Bin ID

app.use(express.json());
app.use(express.static("."));

// Endpoint to save a new sale
app.post("/save-sale", async (req, res) => {
  try {
    // 1. Fetch current data
    const getResponse = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: { "X-Master-Key": MASTER_KEY },
      },
    );
    const currentData = await getResponse.json();

    // Ensure sales is an array
    let sales = Array.isArray(currentData.record) ? currentData.record : [];

    // 2. Add the new sale
    sales.push(req.body);

    // 3. Update the Bin
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY,
      },
      body: JSON.stringify(sales),
    });

    res.send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
  }
});

// Endpoint to get all sales
app.get("/get-sales", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: { "X-Master-Key": MASTER_KEY },
      },
    );
    const data = await response.json();
    res.json(data.record);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

// Endpoint for the sales log page
app.get("/api/sales", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: { "X-Master-Key": MASTER_KEY },
      },
    );
    const data = await response.json();
    const record = data.record;

    let salesText = "";
    if (Array.isArray(record)) {
      salesText = record
        .map((item) => {
          if (!item) return "";
          if (typeof item === "string") return item;
          if (typeof item.data === "string") return item.data;
          return JSON.stringify(item);
        })
        .filter(Boolean)
        .join("\n\n----\n\n");
    } else if (typeof record === "string") {
      salesText = record;
    } else if (record && typeof record.data === "string") {
      salesText = record.data;
    }

    res.json({ sales: salesText });
  } catch (err) {
    res.status(500).send("Error fetching server sales");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
