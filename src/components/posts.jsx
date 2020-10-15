import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

 const Posts = ({objKeys,title,excerpt}) => {
     console.log("excerpt",excerpt)
    const classes = useStyles();
    return (
        <Grid container >
            {objKeys.map((k,i)=>{
         return (
            <Grid  key={i} item xs={6}>
                  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
                <li >{k}{title}</li>
          </Grid>
         )
     })}
        </Grid>
    )
}
export default Posts
