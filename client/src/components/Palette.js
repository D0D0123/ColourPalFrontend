import {Grid, Paper, Box} from '@material-ui/core';
import { useState, Fragment } from 'react';
import ColourCard from "./ColourCard.js";

function Palette(props) {

    var colourStrs = [];
    var keyArray = [];
    var i = 0;
    props.rgbList.forEach(elem => {
        var rVal = elem['red'];
        var gVal = elem['green'];
        var bVal = elem['blue'];
        colourStrs.push(`rgb(${rVal}, ${gVal}, ${bVal})`);
        keyArray.push(i);
        i++;
    });

    const [cardColour, setCardColour] = useState('white');
    const [palKey, setPalKey] = useState(0);
    const defaultRgbList = [
        { red: 90, green: 181, blue: 122 },
        { red: 205, green: 152, blue: 78 },
        { red: 197, green: 76, blue: 178 },
        { red: 190, green: 205, blue: 80 },
        { red: 213, green: 92, blue: 182 }
      ];

    const handleMouseHover = (event) => {
        setCardColour(event.target.style.backgroundColor);
        console.log("key: " + event.target.getAttribute('listID'));
        setPalKey(event.target.getAttribute('listID'));
    }

    return (
        <Fragment>
            <Box m={2}>
                <Grid container justify="center" spacing={3}>
                    { keyArray.map(i => {
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
                    };
                </Grid>
        </Box>
        <ColourCard 
        colour={cardColour} 
        palKey={palKey} 
        rgbList={props.rgbList !== undefined ? props.rgbList : defaultRgbList}
        />
      </Fragment>
    );
}

export default Palette;