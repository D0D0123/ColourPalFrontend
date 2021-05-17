import { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      width: 300,
      borderRadius: '20px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);'
    },
    media: {
      height: 140,
    },
});

function ColourCard(props) {
    const classes = useStyles();

    // const [rgbObj, setRgbObj] = useState({"red": 0, "green": 0, "blue": 0})
    
    console.log(props.rgbList);
    console.log(props.palKey);
    // setRgbObj(props.rgbList[props.palKey]);

    // gets the rgb dict from the passed in rgbList and key
    const rgbObj = props.rgbList[props.palKey];
    console.log(rgbObj);
    
    const [rVal, gVal, bVal] = [rgbObj['red'], rgbObj['green'], rgbObj['blue']];

    return (
        <Box display="flex" justifyContent="center" m={5}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                style={{ backgroundColor: props.colour }}
                />
                <CardContent>
                <Typography variant="h5" color="textSecondary" component="p">
                    {`RGB: ${rVal}, ${gVal}, ${bVal}`}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    Hex: #FFFFFF
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </Box>
    );
}

export default ColourCard;