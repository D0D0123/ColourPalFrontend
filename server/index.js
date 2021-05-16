const express = require("express");
const app = express();
const cors = require('cors');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const path = require('path');
const multer = require('multer');
const vision = require('@google-cloud/vision');


//middleware
const client = new vision.ImageAnnotatorClient();
app.use(cors());
app.use(fileUpload());

app.listen(8000, () => {
    console.log("Server is starting on port 8000");
});

// ROUTES //
app.post('/upload', async (req, res) => {

    var file = req.files.file;
    await file.mv(`${__dirname}/uploads/${file.name}`);
    var filePath = `${__dirname}/uploads/${file.name}`;
    console.log(filePath);

    try {
        // Performs property detection on the local file
        const [result] = await client.imageProperties(filePath);
        console.log(result);
        const colors = result.imagePropertiesAnnotation.dominantColors.colors;
        colors.forEach(color => console.log(color));
    } catch (err) {
        console.error(err);
    }

});





