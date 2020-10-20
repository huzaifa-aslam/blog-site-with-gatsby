import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import AuthorDetail from './authorDetail/authordetail'
import './sidebar.css'
import RecentPosts from './RecentPosts/recentPosts'
import NewsLetter from './NewsLetter/newsLetter'


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
        height:' 175px',
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: '16px'
    }

}));


const Sidebar = ({ ImageURL, postAuthor }) => {

    const classes = useStyles();
    return (
        <div>
            {postAuthor && (
                <AuthorDetail postAuthor={postAuthor} ImageURL={ImageURL} />
            )}
            <NewsLetter />
            <div className={classes.bgWhite} >

                <Typography gutterBottom variant="h6" style={{ textAlign: 'center' }}  component="h2">
                ADVERTISEMENT
                  </Typography>
                    <img style={{width: '320px',height: '139px'}} src="https://via.placeholder.com/150" alt="Image" />

            </div>
            <Typography gutterBottom variant="h6" style={{ textAlign: 'center' }}  component="h2">
                RCENT POSTS
                  </Typography>
            <RecentPosts />
        </div>
    )
}


export default Sidebar