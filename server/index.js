const express = require("express");
const app = express();
const cors = require('cors');
const ColorThief = require('colorthief');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const path = require('path');
const multer = require('multer');

//middleware
app.use(cors());
app.use(fileUpload());

app.listen(8000, () => {
    console.log("Server is starting on port 8000");
});

// function returnPalette(img) {
//     var palette = ColorThief.getPalette(img, 10)
//         .then(palette => { console.log(palette) })
//         .catch(err => { console.log(err) })
//     return palette;
// }



// ROUTES //
app.post('/upload', async (req, res) => {

    var img;
    var file;

    async function getFiles(req) {
        file = req.files.file;
        file.mv(`${__dirname}/uploads/${file.name}`);
    }

    async function getImg(file) {
        // img = resolve(process.cwd(), `${__dirname}/uploads/${file.name}`);
        img = `${__dirname}/uploads/${file.name}`;
    }

    await getFiles(req);
    console.log(file.name);
    await getImg(file);
    console.log(img);
    console.log("debug1");
    
    // ColorThief.getColor(img)
    //     .then(color => { console.log(color) })
    //     .catch(err => { console.log(err) })

    // https://javascript.info/promise-basics

    var palette;
    await ColorThief.getPalette(img, 10)
        .then(palette => { 
            console.log(palette);
            res.json({fileName: file.name, paletteObj: palette}); 
        })
        .catch(err => { console.log(err) })
    
});





