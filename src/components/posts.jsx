import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Badge } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { slugify } from './../utils/utilityFunctions'


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },

  media: {
    height: 140,
  },
});



const Posts = ({ objKeys, excerpt, objValues }) => {
  const classes = useStyles();
  // console.log("objValues.tags", objValues.tags)
  return (


    <Card className={classes.root}>
      <CardActionArea>

        <Img fixed={objValues.image} />
        <CardContent>
          <Link to={objValues.path}>
            <Typography gutterBottom variant="h5" component="h2">
              {objValues.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="h2">
            {excerpt}
          </Typography>
          <Typography variant="h6" gutterBottom component="p">
            {`${objValues.date} by ${objValues.author}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {objValues.tags.map((tag, k) =>
          <Badge key={k}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Button variant="contained" size="small" color="primary">

                {tag.toUpperCase()}
              </Button>
            </Link>
          </Badge>
        )}

        <div>

          <Link to={objValues.path} >
            <Button variant="contained" size="small" color="primary">

              Ream More..
            </Button>
          </Link>
        </div>
      </CardActions>
    </Card>



  )
}
export default Posts
