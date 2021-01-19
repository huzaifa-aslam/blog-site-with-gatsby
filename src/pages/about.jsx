import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


import Sidebar from './../components/sidebar'
const useStyles = makeStyles((theme) => ({


  grid: {
    flexGrow: 1,
  },


}));


const About = () => {

  const classes = useStyles()
  return (

    <Layout>
      <SEO title="About" keyword={['gatsby', 'application', 'react']} />
      <div className={classes.grid}>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={8} md={8} sm={6}>
            <Typography  gutterBottom variant="h6" component="h2">
             
             
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Typography>
           
          </Grid>

          <Grid item xs={12} lg={4} md={4} sm={6}>
            <Sidebar/>
          </Grid>

        </Grid>
      </div>




    </Layout>
  )
}



export default About
