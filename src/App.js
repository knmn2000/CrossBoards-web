import './App.css';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nav: {
    backgroundColor: 'white',
  },
  authButton: {
    fontSize: 30,
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignLast: 'end',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <AppBar position='static'>
          <Toolbar className={classes.nav}>
            <Grid container justifyContent='center'>
              <Grid item xs />
              <Grid item xs>
                <Typography variant='h6' className={classes.title}>
                  CrossBoards
                </Typography>
              </Grid>
              <Grid item xs>
                <IconButton className={classes.authButton}>
                  <ExitToAppIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container style={{ flex: 1 }}>
          <Grid item>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
