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
import huzaifa from './../images/huzaifa.jpg'
import ali from './../images/ali.jpg'
import Sidebar from './../components/sidebar'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '39px auto',
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
  // console.log("team", pageContext)
  // console.log("data", teamQeury)
  // const {imgsUrl}=pageContext
  const classes = useStyles()
  return (

    <Layout>
      <SEO title="Team" keyword={['gatsby', 'application', 'react']} />
      <div className={classes.grid}>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={8} md={8} sm={6}>
            <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="h2">
            Team
            </Typography>

            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {authors[0].name[0].toUpperCase()}
                  </Avatar>
                }

                title={authors[0].name.toUpperCase()}
              // subheader="September 14, 2016"
              />
              <img src={huzaifa} alt="huzaifa"/>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {authors[0].disc}
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
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {authors[1].name[0].toUpperCase()}
                  </Avatar>
                }

                title={authors[1].name.toUpperCase()}
              // subheader="September 14, 2016"
              />
              <img src={ali} alt="ali"/>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {authors[1].disc}
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

          </Grid>

          <Grid item xs={12} lg={4} md={4} sm={6}>
            <Sidebar/>
          </Grid>

        </Grid>
      </div>




    </Layout>
  )
}

//  export const teamQeury=graphql`
//   query TeamQeury($imgsUrl: String!) {
//   file(relativePath: {eq: $imgsUrl}){
//        childImageSharp {
//         fixed( width: 600, height: 300){
//              base64
//             width
//             height
//             src
//             srcSet
//         }
//       }
//   }
// }

//  `

export default Team
