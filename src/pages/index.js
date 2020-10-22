import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from './../components/posts'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './../components/sidebar'
import Pagination from './../components/Pagination/pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pagination:{
    textAlign: 'center',
    paddingTop: '53px',
  },
}));
const IndexPage = () => {
  const classes = useStyles();
  let postPerPage
  let numberOfPages;


  return (

    <Layout>
      <SEO title="Code Blog" keyword={['gatsby', 'application', 'react']} />
      {/* <h3>Home Page</h3> */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <StaticQuery query={postQuery}
              render={({ allMarkdownRemark }) => {
                const getPosts = allMarkdownRemark.edges;
                postPerPage=2
                numberOfPages=Math.ceil(allMarkdownRemark.totalCount/postPerPage)
                return (

                  getPosts.map(({ node }, index) => {
                    // console.log("node", node)
                    const getPostData = node.frontmatter
                    const objValues = {
                      author: getPostData.author,
                      title: getPostData.title,
                      path: node.fields.slug,
                      date: getPostData.date,
                      tags: getPostData.tags,
                      image: getPostData.image.childImageSharp.fixed
                    }
                    // console.log("image",objValues.image)

                    return (

                      <Posts key={index} excerpt={node.excerpt} objValues={objValues} objKeys={Object.keys(getPostData)} />


                    )
                  })

                )
              }} />
            <div className={classes.pagination}>

              {/* <Pagination currentPage={1} numberOfPages={numberOfPages}/> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>

            <Sidebar />
          </Grid>
        </Grid>
      </div>

    </Layout>

  )
}

// const k= Object.keys(getPostData)

const postQuery = graphql`
query {
  allMarkdownRemark(limit: 2,sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          author
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
