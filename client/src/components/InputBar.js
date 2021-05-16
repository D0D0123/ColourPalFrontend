import { useState, Fragment } from 'react';
import { Button, ButtonGroup, TextField} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImageFrame from "./ImageFrame.js";
import axios from 'axios';

function InputBar() {
    const [filePreview, setFilePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');

    const handleChange = (event) => {
        setFilePreview(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        
        await axios.post("http://localhost:8000/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => { // then print response status
            console.log(res.statusText)
        })
    }

    return (
        <Fragment>
            <form 
            onSubmit={handleSubmit}
            >
            <Box display="flex" justifyContent="center">
                <div style={{width: '36%'}}>
                    <TextField fullWidth='true' variant="filled" placeholder="Enter Image URL"></TextField>
                </div>
            </Box>
            <Box m={1.5} display="flex" justifyContent="center">
            <ButtonGroup>
                <Button 
                    startIcon={<CheckCircleIcon/>} 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    type="submit"> 
                    Enter
                </Button>
                <Button 
                    startIcon={<AddPhotoAlternateIcon/>} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    component="label"
                    > Upload Image 
                    <input type="file" hidden accept="image/*" onChange={handleChange}/> 
                </Button>
            </ButtonGroup>
            </Box>
            </form>
            <ImageFrame file={filePreview}/>
        </Fragment>
    );
}

export default InputBar;