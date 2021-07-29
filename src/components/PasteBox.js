import React, { useCallback, useContext, useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { AuthContext, db } from '../auth';
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

export const PasteBox = () => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState('');
  const handleText = (txt) => {
    setText(txt);
  };
  useEffect(() => {
    if (currentUser) {
      db.collection('users')
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
          if (doc) {
            setText(doc.data().clip);
          }
        });
    }
  }, [currentUser]);
  const paste = useCallback(async () => {
    if (text.length < 1) {
      await navigator.clipboard.readText().then((clip) => {
        if (currentUser) {
          db.collection('users').doc(currentUser.uid).set({
            clip: clip,
          });
        }
      });
    } else {
      if (currentUser) {
        db.collection('users').doc(currentUser.uid).set({
          clip: text,
        });
      }
    }
  }, [text, currentUser]);

  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  const clear = () => {
    setText('');
  };
  useEffect(() => {
    async function pasteText() {
      await navigator.clipboard
        .readText()
        .then((clip) => {
          if (clip === text) {
            paste();
          }
        })
        .catch((err) => console.log(err));
    }
    pasteText();
  }, [text, paste]);
  return (
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
            value={text}
            variant='outlined'
            className={classes.textField}
            onChange={(e) => handleText(e.target.value)}
          />
        </Grid>
        <Grid container direction='column' item spacing={1}>
          <Grid container item direction='row' spacing={2}>
            <Grid item xs>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={copy}
              >
                Copy
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={paste}
              >
                Paste
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              onClick={clear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
