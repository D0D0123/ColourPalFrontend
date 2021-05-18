const express = require('express');
const app = express();
const cors = require('cors');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const ColorThief = require('colorthief');
const fs = require('fs');


//middleware
app.use(cors());
app.use(fileUpload());

app.listen(8000, () => {
    console.log("Server is starting on port 8000");
});

// ROUTES //
app.post('/upload', async (req, res) => {

    if (req.files == null)  {
        var file = null;
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
                // in format e.g. { red: 187, green: 118, blue: 161 }
                palette.forEach(element => {
                    var rgbDict = {};
                    rgbDict["red"] = element[0];
                    rgbDict["green"] = element[1];
                    rgbDict["blue"] = element[2];
                    rgbList.push(rgbDict);
                });
                console.log(rgbList);
                // send response containing colour palette to frontend
                res.json({filePath: filePath, palette: rgbList});
                // remove file from server once palette response is sent
                if (file != null) {
                    try {fs.unlinkSync(filePath);} 
                    catch(err) {console.error(err);}
                }
            })
            .catch(err => { console.log(err) })
    } catch (err) {
        console.error(err);
    }

});





