import { Button, ButtonGroup, TextField} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function InputBar() {
    return (
            <form>
            <Box display="flex" justifyContent="center">
                <div style={{width: '36%'}}>
                    <TextField fullWidth='true' variant="filled" placeholder="Enter URL"></TextField>
                </div>
            </Box>
            <Box m={1.5} display="flex" justifyContent="center">
            <ButtonGroup>
                <Button startIcon={<CheckCircleIcon/>} variant="contained" color="secondary" size="large">Enter</Button>
                <Button startIcon={<AddPhotoAlternateIcon/>} variant="contained" color="primary" size="large">Upload Image</Button>
            </ButtonGroup>
            </Box>
            </form>
    );
}

export default InputBar;