import {Grid, Paper, Box} from '@material-ui/core';

function Palette(props) {

    var colourStrs = [];
    props.rgbList.forEach(elem => {
        var rVal = elem['red'];
        var gVal = elem['green'];
        var bVal = elem['blue'];
        colourStrs.push(`rgb(${rVal}, ${gVal}, ${bVal})`);
    });

    return (
        <Box m={2}>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: colourStrs[0]}}/>
                </Grid>
                <Grid item>
                    <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: colourStrs[1]}}/>
                </Grid>
                <Grid item>
                    <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: colourStrs[2]}}/>
                </Grid>
                <Grid item>
                    <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: colourStrs[3]}}/>
                </Grid>
                <Grid item>
                    <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: colourStrs[4]}}/>
                </Grid>
            </Grid>
      </Box>
    );
}

export default Palette;