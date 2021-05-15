import {Grid, Paper, Box} from '@material-ui/core';

function Palette() {

    return (
        <Box m={2}>
            <Grid container justify="center" spacing={3}>
            <Grid item>
                <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: 'purple'}}/>
            </Grid>
            <Grid item>
                <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: 'violet'}}/>
            </Grid>
            <Grid item>
                <Paper className="colour-circle" style={{ transition: '200ms', borderRadius: 50, height: 50, width: 50, backgroundColor: 'navy'}}/>
            </Grid>
            </Grid>
      </Box>
    );
}

export default Palette;