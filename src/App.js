import './App.css';
import {
  Grid,
  TextField,
  Paper,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Navbar } from './components/Navbar';
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
  },
  headerText: {
    fontWeight: 500,
    textAlign: 'center',
  },
  centerGrid: {
    display: 'block',
    verticalAlign: 'middle',
    height: '50%',
  },

  paper: {
    margin: '10% 10% 10% 10%',
    textAlign: 'center',
  },
  paperContent: {
    padding: '5%',
  },
  button: {
    width: '100%',
    margin: '10px',
  },
  textField: {
    width: '100%',
    margin: '10px',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <Navbar />
        <Grid container direction='row'>
          <Grid item xs />
          <Grid item xs={8}>
            <Paper className={classes.paper} elevation={2}>
              <Grid
                container
                direction='column'
                alignContent='center'
                spacing={3}
                className={classes.paperContent}
              >
                <Grid item xs>
                  <Typography variant='h4' className={classes.headerText}>
                    Copy/Paste here:{' '}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <TextField
                    id='outlined-multiline-flexible'
                    multiline
                    maxRows={4}
                    value='paste'
                    onChange={() => {}}
                    variant='outlined'
                    className={classes.textField}
                  />
                </Grid>
                <Grid container direction='column' item spacing={1}>
                  <Grid container item direction='row' spacing={2}>
                    <Grid item xs>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                      >
                        Copy
                      </Button>
                    </Grid>
                    <Grid item xs>
                      <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                      >
                        Paste
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.button}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </>
    </div>
  );
}

export default App;
