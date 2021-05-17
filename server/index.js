const express = require("express");
const app = express();
const cors = require('cors');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const path = require('path');
// const multer = require('multer');
const vision = require('@google-cloud/vision');
const ColorThief = require('colorthief');


//middleware
const client = new vision.ImageAnnotatorClient();
app.use(cors());
app.use(fileUpload());

app.listen(8000, () => {
    console.log("Server is starting on port 8000");
});

// ROUTES //
app.post('/upload', async (req, res) => {

    if (req.files == null)  {
        filePath = `${__dirname}/colour-bg.png`;
    }
    else {
        // obtain file from request
        var file = req.files.file;
        // wait for file to be moved to proper directory
        await file.mv(`${__dirname}/uploads/${file.name}`);
        var filePath = `${__dirname}/uploads/${file.name}`;
    }
    
    console.log(filePath);

    try {
        // get image filepath
        const img = resolve(process.cwd(), filePath);
        // get top 5 dominant colours
        ColorThief.getPalette(img, 7)
            .then(palette => { 
                // console.log(palette);
                var rgbList = [];
                // serialise palette into a list of dictionaries
                palette.forEach(element => {
                    var rgbDict = {};
                    rgbDict["red"] = element[0];
                    rgbDict["green"] = element[1];
                    rgbDict["blue"] = element[2];
                    rgbList.push(rgbDict);
                    // console.log(rgbDict);
                });
                console.log(rgbList);
                res.json({filePath: filePath, palette: rgbList});
            })
            .catch(err => { console.log(err) })
    } catch (err) {
        console.error(err);
    }

    // try {
    //     // Performs property detection on the local file
    //     const [result] = await client.imageProperties(filePath);
    //     console.log(result);
    //     const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    //     colors.forEach(color => console.log(color));
    // } catch (err) {
    //     console.error(err);
    // }

});





