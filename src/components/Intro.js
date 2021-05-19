import Box from '@material-ui/core/Box';
import { Fragment } from 'react';


function Intro(props) {

    return (
        <Fragment>
        <Box display="flex" justifyContent="center">
            <h1 className="title"> [ ColourPal ]</h1>
        </Box>
        <Box display="flex" justifyContent="center">
            <p className="intro-text" style={{color: props.textcolour}}>ColourPal extracts and forms a palette 
             from the dominant colours of an image.
            </p>
        </Box>
        </Fragment>
    );
}

export default Intro;