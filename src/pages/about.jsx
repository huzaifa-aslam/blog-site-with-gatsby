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
            <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="h2">
              Our Team
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
