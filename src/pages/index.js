import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from './../components/posts'
import {Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './../components/sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const IndexPage = () => {
  const classes = useStyles();


  return (

    <Layout>
      <SEO title="Code Blog" keyword={['gatsby', 'application', 'react']} />
      {/* <h3>Home Page</h3> */}
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={8} >
            <StaticQuery query={postQuery}
              render={({ allMarkdownRemark }) => {
                const getPosts = allMarkdownRemark.edges;
                return (

                  getPosts.map(({ node }, index) => {
                    // console.log("node", node)
                    const getPostData = node.frontmatter
                    const objValues = {
                      author: getPostData.author,
                      title: getPostData.title,
                      path: getPostData.path,
                      date: getPostData.date,
                      tags: getPostData.tags,
                      image: getPostData.image.childImageSharp.fixed
                    }
                    // console.log("getPostData",getPostData)

                    return (

                      <Posts key={index} excerpt={node.excerpt} objValues={objValues} objKeys={Object.keys(getPostData)} />


                    )
                  })

                )
              }} />
          </Grid>
          <Grid item xs={4}>
            
            <Sidebar/>
          </Grid>
        </Grid>
      </div>

    </Layout>

  )
}

// const k= Object.keys(getPostData)

const postQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
          path
          tags
          image {
            childImageSharp {
              fixed( width: 600, height: 300){
          			  base64
  							  width
    							height
    							src
    							srcSet
        }
            }
          }
        }
        excerpt
      }
    }
  }
}

`

export default IndexPage
