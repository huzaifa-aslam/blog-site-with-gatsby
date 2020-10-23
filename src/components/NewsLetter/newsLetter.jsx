import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  TextField } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  form: {
    '& > *': {
        width: '36ch',
    },
},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewsLetter() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
    
        <form className={classes.form} noValidate autoComplete="off">
                    <Typography>NEWSLETTER</Typography>
                    <TextField id="filled-basic" label="Enter Email" variant="filled" />
                    <Button variant="outlined" color="primary">
                        SUBSCRIBE
              </Button>
                </form>
       
      </CardContent>
     
    </Card>
  );
}
