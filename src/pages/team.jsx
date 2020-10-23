import React from "react"
import { authors } from './../utils/author'
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  grid: {
    flexGrow: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const Team = () => {
  // const postDataObj = {

  //   ImageURL: data.file.childImageSharp.fixed


  // }
  // console.log("pageContext", pageContext)
  // const {imgsUrl}=pageContext
  const classes = useStyles()
  return (

    <Layout>
      <SEO title="Team" keyword={['gatsby', 'application', 'react']} />
      <div className={classes.grid}>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={8} md={8} sm={6}>
            <Typography gutterBottom variant="h5" component="h2">
              Our Team
      </Typography>
            {
              authors.map((item, index) => {
             
                // console.log(imgUrl)
                return (
                  <Card key={index} className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {item.name[0].toUpperCase()}
                        </Avatar>
                      }

                      title={item.name.toUpperCase()}
                    // subheader="September 14, 2016"
                    />
                    {/* <img src={item.img} /> */}
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.disc}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FacebookIcon color="primary" />
                      </IconButton>
                      <IconButton aria-label="share">
                        <YouTubeIcon style={{ color: "#e73e30" }} />

                      </IconButton>
                      <IconButton aria-label="share">
                        <TwitterIcon style={{ color: "#5ea9dd" }} />


                      </IconButton> <IconButton aria-label="share">
                        <LinkedInIcon style={{ color: "#0077b5" }} />


                      </IconButton>



                    </CardActions>

                  </Card>
                )
              })
            }
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={6}>
          </Grid>

        </Grid>
      </div>




    </Layout>
  )
}

 

export default Team
