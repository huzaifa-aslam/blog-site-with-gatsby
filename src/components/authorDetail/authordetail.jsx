import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'gatsby'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center'
    },
});

const AuthorDetail = ({ ImageURL, postAuthor }) => {
    const classes = useStyles();
    // console.log("AuthorObj", ImageURL, postAuthor)
     // console.log("AuthorObj", ImageURL, postAuthor)
     // console.log("AuthorObj", ImageURL, postAuthor)
     // console.log("AuthorObj", ImageURL, postAuthor)
    return (
        <Link to={`/author/${postAuthor.name}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <Img fixed={ImageURL} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {postAuthor.name[0].toUpperCase() +
                                postAuthor.name.slice(1)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {postAuthor.disc[0].toUpperCase() +
                                postAuthor.disc.slice(1)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ display: "block" }}>
                    <FacebookIcon color="primary" />
                    <YouTubeIcon style={{ color: "#e73e30" }} />
                    <TwitterIcon style={{ color: "#5ea9dd" }} />
                    <LinkedInIcon style={{ color: "#0077b5" }} />
                </CardActions>
            </Card>
        </Link>
    );
}

export default AuthorDetail
