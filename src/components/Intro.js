import Box from '@material-ui/core/Box';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(224,44,44,1) 52%, rgba(252,176,69,1) 100%)',
//         border: 0,
//         borderRadius: 10,
//         color: 'white',
//         padding: '20px 250px'
//     }
// })

function Intro() {
    // const classes = useStyles();

    return (
        <Fragment>
        <Box display="flex" justifyContent="center">
            <h1 className="title"> [ ColourPal ]</h1>
        </Box>
        <Box display="flex" justifyContent="center">
            <p className="intro-text">ColourPal uses the Google Cloud Vision API to extract and form a palette 
             from the dominant colours of an image.
            </p>
        </Box>
        </Fragment>
    );
}

export default Intro;