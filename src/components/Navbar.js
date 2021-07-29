import React from 'react';
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  nav: {
    backgroundColor: 'white',
  },
  authButtonContainer: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  authButton: {
    color: 'black',
    fontSize: 35,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.nav}>
        <Grid container justifyContent='center'>
          <Grid item xs />
          <Grid item xs={9}>
            <Typography variant='h6' className={classes.title}>
              CrossBoards
            </Typography>
          </Grid>
          <Grid item xs className={classes.authButtonContainer}>
            <IconButton size='small'>
              <ExitToAppIcon className={classes.authButton} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
