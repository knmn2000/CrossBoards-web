import React, { useContext } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { auth, googleAuthProvider, AuthContext } from '../auth';
import useIsMobile from '../hooks/useIsMobile';
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
  const isMobile = useIsMobile();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const signin = () => {
    auth.signInWithPopup(googleAuthProvider).catch(alert);
    // .then(()=>{ do something })
  };
  const signout = () => {
    auth.signOut();
    // .then(() => {
    // do something
    // });
  };
  return (
    <AppBar position='static'>
      <Toolbar className={classes.nav}>
        <Grid container justifyContent='center'>
          <Grid item xs />
          <Grid item xs={9}>
            <Typography
              variant='h6'
              className={classes.title}
              style={isMobile ? { fontSize: 35 } : { fontSize: 40 }}
            >
              CrossBoards
            </Typography>
          </Grid>
          <Grid item xs className={classes.authButtonContainer}>
            <IconButton size='small' onClick={currentUser ? signout : signin}>
              {currentUser ? (
                <>
                  {!isMobile && (
                    <Typography variant='button'>Logout</Typography>
                  )}
                  <MeetingRoomIcon className={classes.authButton} />
                </>
              ) : (
                <>
                  {!isMobile && <Typography variant='button'>Login</Typography>}
                  <ExitToAppIcon className={classes.authButton} />
                </>
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
