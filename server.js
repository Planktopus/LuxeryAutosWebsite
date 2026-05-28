const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Render sets the PORT variable automatically
const PORT = process.env.PORT || 3000;
const SALES_LOG_FILE = 'sales-log.txt';

app.use(express.json());
app.use(express.static('.')); // Serve files from the root

// Endpoint to save a sale
app.post('/save-sale', (req, res) => {
    const data = req.body.data;
    
    if (!data) {
        return res.status(400).json({ error: 'No data provided' });
    }

    // Append to sales-log.txt with separator
    const separator = '\n----\n';
    fs.appendFile(SALES_LOG_FILE, data + separator, (err) => {
        if (err) {
            console.error('Error saving sale:', err);
            return res.status(500).json({ error: 'Failed to save sale' });
        }
        res.json({ success: true, message: 'Sale saved successfully' });
    });
});

// Endpoint to get all sales
app.get('/api/sales', (req, res) => {
    fs.readFile(SALES_LOG_FILE, 'utf8', (err, data) => {
        if (err) {
            // File doesn't exist yet - return empty
            if (err.code === 'ENOENT') {
                return res.json({ sales: '' });
            }
            console.error('Error reading sales log:', err);
            return res.status(500).json({ error: 'Failed to read sales log' });
        }
        res.json({ sales: data });
    });
});

// Legacy endpoint for backward compatibility
app.get('/sales-log.txt', (req, res) => {
    res.sendFile(path.join(__dirname, SALES_LOG_FILE));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));