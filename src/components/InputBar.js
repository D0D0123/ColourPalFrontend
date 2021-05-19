import { useState, Fragment } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImageFrame from "./ImageFrame.js";
import Palette from "./Palette.js";
import axios from 'axios';

function InputBar() {
    const [filePreview, setFilePreview] = useState(`./colour-bg.png`);
    const [file, setFile] = useState(null);
    // const [filename, setFilename] = useState('');
    const [rgbList, setRgbList] = useState([]);

    // runs when file input element is changed, sets the image preview and gets the actual file
    const handleChange = (event) => {
        setFilePreview(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0]);
        // setFilename(event.target.files[0].name);
    }

    // runs when form element is submitted
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('file', file);

        // use axios library to send formData (including image file) to localhost:8000
        // change to 'https://localhost:3001' or another number when working locally
        await axios.post("https://colour-pal.herokuapp.com/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => { 
            console.log(res.data);
            setRgbList(res.data.palette);
            console.log(rgbList);
        })
    }

    return (
        <Fragment>
            <form 
            onSubmit={handleSubmit}
            >
            {/* <Box display="flex" justifyContent="center">
                <div style={{width: '36%'}}>
                    <TextField 
                        fullWidth='true' 
                        variant="filled" 
                        placeholder="Enter Image URL"
                        onChange={handleLinkChange}>
                    </TextField>
                </div>
            </Box> */}
            <Box m={1.5} display="flex" justifyContent="center">
            <ButtonGroup>
                <Button 
                    startIcon={<AddPhotoAlternateIcon/>} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    component="label"> 
                    Upload Image 
                    <input type="file" name='myImage' hidden accept="image/*" onChange={handleChange}/> 
                </Button>
                <Button 
                    startIcon={<CheckCircleIcon/>} 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    type="submit"> 
                    Enter
                </Button>
            </ButtonGroup>
            </Box>
            </form>
            <ImageFrame file={filePreview}/>
            <Palette rgbList={rgbList}/>
        </Fragment>
    );
}

export default InputBar;