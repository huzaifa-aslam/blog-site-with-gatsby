import React from 'react'
import Layout from './../components/layout'
import Sidebar from './../components/sidebar'

import Posts from './../components/posts'
import { Grid, Typography } from '@material-ui/core';
import Authordetail from './../components/authorDetail/authordetail'
import { authors } from './../utils/author'
import { graphql } from 'gatsby'


const AuthorPosts = ({ data, pageContext }) => {

  const postData = data.allMarkdownRemark.edges
  const authorName = data.allMarkdownRemark.edges[0].node.frontmatter.author
  const postAuthor = authors.find(n => n.name === authorName)
  const totalPost = data.allMarkdownRemark.totalCount
  const ImageURL = data.file.childImageSharp.fixed

  // console.log("findAuthor", findAuthor)
  return (
    <Layout>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h6" color="primary" component="h2">
            {`${totalPost} POST${totalPost === 1 ? '' : 's'} by ${authorName}`}
          </Typography>
          {
            postData.map(({ node }, index) => {
              const excerpt = node.excerpt
              const objValues = {
                author: node.frontmatter.author,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                tags: node.frontmatter.tags,
                path: node.fields.slug,
                image: node.frontmatter.image.childImageSharp.fixed,
                // ImageURL: data.file.childImageSharp.fixed



              }

              return (
                <Posts key={index} objValues={objValues} excerpt={excerpt} />
              )
            })
          }
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Authordetail ImageURL={ImageURL} postAuthor={postAuthor} />
          <Sidebar />
        </Grid>
      </Grid>

    </Layout>
  )
}

export const authorPostQuery = graphql`
    query AuthorPostQuery($authorName: String!,$authorImgUrl: String!) {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {author: {eq: $authorName}}}) {
    totalCount
    edges {
      node {
        excerpt
        fields {
          slug
        }
        
        frontmatter {
          author
          date
          tags
          title
            image{
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
      }
    }
  
  }
     file(relativePath: {eq: $authorImgUrl}){
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

`

export default AuthorPosts
