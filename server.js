const express = require('express');
const fs = require('fs');
const app = express();

// Render sets the PORT variable automatically
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.')); // Serve files from the root

app.post('/save-sale', (req, res) => {
    const data = req.body.data;
    fs.appendFile('sales-log.txt', data + '\n----\n', (err) => {
        if (err) return res.status(500).send('Error');
        res.send('Success');
    });
});

app.get('/sales-log.txt', (req, res) => {
    res.sendFile(__dirname + '/sales-log.txt');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));