import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

import './sidebar.css'
import RecentPosts from './RecentPosts/recentPosts'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#80808080',
        height: '500px',
        // justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    bgWhite: {
        backgroundColor: 'white',
        height: '175px',
        width: '219px',
    }

}));


const Sidebar = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.bgWhite} >

                <form className={classes.form} noValidate autoComplete="off">
                    <Typography>NEWSLETTER</Typography>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <Button variant="outlined" color="primary">
                        Primary
              </Button>
                </form>
            </div>
            <div className={classes.bgWhite} >

                <form className={classes.form} noValidate autoComplete="off">
                    <Typography>ADVERTISEMENT</Typography>
                    <img src="https://via.placeholder.com/320x200" />

                </form>
            </div>
            <Typography >RCENT POSTS</Typography>
            <RecentPosts/>
        </div>
    )
}


export default Sidebar