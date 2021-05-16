const express = require("express");
const app = express();
const cors = require('cors');
const ColorThief = require('colorthief');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');

//middleware
app.use(cors());
app.use(fileUpload());

app.listen(8000, () => {
    console.log("Server is starting on port 8000");
});

// ROUTES //
app.post('/upload', (req, res) => {
    const file = req.files.file;

    file.mv(`${__dirname}/uploads/${file.name}`);

    res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
})



const img = resolve(process.cwd(), 'server/space.jpg');

ColorThief.getColor(img)
    .then(color => { console.log(color) })
    .catch(err => { console.log(err) })

ColorThief.getPalette(img, 10)
    .then(palette => { console.log(palette) })
    .catch(err => { console.log(err) })
