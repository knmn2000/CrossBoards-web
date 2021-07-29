import React from 'react';
import './App.css';
import { Grid, makeStyles } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { PasteBox } from './components/PasteBox';
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
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
            <PasteBox />
          </Grid>
          <Grid item xs />
        </Grid>
      </>
    </div>
  );
}

export default App;
