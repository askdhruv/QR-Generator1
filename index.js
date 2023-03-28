const express = require('express');
const app = express();
const qr = require('qr-image');
const fs = require('fs');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "./index.html")); // Serve the HTML file

app.get('/generateQRCode', (req, res) => {
    const url = req.query.url;

    if (url) {
        const qr_png = qr.image(url);
        res.setHeader('Content-Type', 'image/png');
        qr_png.pipe(res);
    } else {
        res.status(400).send('Invalid URL');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
