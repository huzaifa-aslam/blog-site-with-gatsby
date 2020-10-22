import React from 'react'
import Layout from './../components/layout'
import Sidebar from './../components/sidebar'
import moduleName from './../utils/author'
import Img from "gatsby-image"
import Posts from './../components/posts'

const AuthorPosts = ({ data, pageContext }) => {

    const postData = data.allMarkdownRemark.edges
    // const postDataObj = {
    //     author: postData.author,
    //     date: postData.date,
    //     title: postData.title,
    //     tags: postData.tags,
    //     image: postData.image.childImageSharp.fixed,
    //     excerpt: data.markdownRemark.excerpt,
    //     ImageURL: data.file.childImageSharp.fixed



    // }
    console.log(data)
    return (
        <Layout>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={8} lg={8}>
            
                    {/* <Posts /> */}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
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
