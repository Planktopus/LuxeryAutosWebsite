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
    // 1. Fetch current data without the JSONBin metadata wrapper
    const getResponse = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: {
          "X-Master-Key": MASTER_KEY,
          "X-Bin-Meta": "false",
        },
      },
    );

    const currentData = await getResponse.json();

    // Since X-Bin-Meta is false, currentData is directly the array
    let sales = Array.isArray(currentData) ? currentData : [];

    // 2. Add the new sale object (comes from your frontend form)
    sales.push(req.body);

    // 3. Update the Bin with the updated clean array
    const putResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY,
      },
      body: JSON.stringify(sales),
    });

    if (!putResponse.ok) {
      throw new Error(`JSONBin update failed: ${putResponse.statusText}`);
    }

    res.send({ success: true });
  } catch (err) {
    console.error("Error saving sale:", err);
    res.status(500).send("Error saving data");
  }
});

// Endpoint to get all raw sales (useful for frontend tables/charts)
app.get("/get-sales", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: {
          "X-Master-Key": MASTER_KEY,
          "X-Bin-Meta": "false",
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).send("Error fetching data");
  }
});

// Endpoint for the sales log page (returns formatted text logs)
app.get("/api/sales", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
      {
        headers: {
          "X-Master-Key": MASTER_KEY,
          "X-Bin-Meta": "false",
        },
      },
    );
    const records = await response.json();

    let salesText = "";

    if (Array.isArray(records) && records.length > 0) {
      salesText = records
        .map((item) => {
          if (!item) return "";

          // Formats your clean JSON object properties into a readable text block
          return `Date: ${item.date || "N/A"}
Salesperson: ${item.salesperson || "Unknown"}
Customer: ${item.customer || "Unknown"} (ID: ${item.id_number || "N/A"})
Vehicle: ${item.vehicle || "Unknown"}
Price: ${item.sell_price || "$0"} (Discount: ${item.discount || "0%"})
Plate: ${item.license_plate || "N/A"}`;
        })
        .filter(Boolean)
        .join("\n\n--------------------\n\n");
    } else {
      salesText = "No sales records found or database is empty.";
    }

    res.json({ sales: salesText });
  } catch (err) {
    console.error("Error generating sales log:", err);
    res.status(500).send("Error fetching server sales");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
