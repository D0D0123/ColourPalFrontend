import {Grid, Paper, Box} from '@material-ui/core';
import { useState, Fragment } from 'react';
import ColourCard from "./ColourCard.js";

function Palette(props) {

    console.log("debug1");
    console.log(props.rgbList);

    // list of rgb(rVal, gVal, bVal) strings for css styling
    var colourStrs = [];
    // list of keys [0, 1, 2, 3, 4]
    var keyArray = [];
    var i = 0;
    // for each dict in props.rgbList, 
    // convert it to rgb(rVal, gVal, bVal) strings, add to colourStrs
    // add index to keyArray
    props.rgbList.forEach(elem => {
        var rVal = elem['red'];
        var gVal = elem['green'];
        var bVal = elem['blue'];
        colourStrs.push(`rgb(${rVal}, ${gVal}, ${bVal})`);
        keyArray.push(i);
        i++;
    });

    const [cardColour, setCardColour] = useState('white');
    // sets the key to pass into the ColourCard component when hovering over a palette square
    const [palKey, setPalKey] = useState(0);
    // sets a default RgbList to display in case it hasn't been passed to props
    const defaultRgbList = [
        { red: 90, green: 181, blue: 122 },
        { red: 205, green: 152, blue: 78 },
        { red: 197, green: 76, blue: 178 },
        { red: 190, green: 205, blue: 80 },
        { red: 213, green: 92, blue: 182 }
      ]

    // when hovering over a palette square, set the ColourCard colour and key to pass in 
    const handleMouseHover = (event) => {
        setCardColour(event.target.style.backgroundColor);
        console.log("key: " + event.target.getAttribute('listID'));
        setPalKey(event.target.getAttribute('listID'));
    }

    return (
        <Fragment>
            <Box m={2}>
                <Grid container justify="center" spacing={3}>
                    { // for each int in keyArray, return and render a palette square with that ID 
                    keyArray.map(i => {
                            return (<Grid item>
                                <Paper 
                                    key={i}
                                    listID={i}
                                    onMouseEnter={handleMouseHover}
                                    className="colour-circle" 
                                    style={{ 
                                        transition: '200ms', 
                                        borderRadius: 10,
                                        backgroundColor: colourStrs[i]
                                    }}
                                />
                            </Grid>)
                        })
                    }
                </Grid>
        </Box>
        <ColourCard 
        colour={cardColour} 
        palKey={palKey} 
        rgbList={(props.rgbList !== undefined && props.rgbList.length !== 0) ? props.rgbList : defaultRgbList}
        />
      </Fragment>
    );
}

export default Palette;