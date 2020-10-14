import React from "react"
import {graphql,StaticQuery} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  console.log("postQuery",JSON.stringify(postQuery))
  return (

  <Layout>
    <SEO title="Code Blog" keyword={['gatsby','application','react']} />
    <h3>Home Page</h3>
    <StaticQuery query={postQuery} />
    
  </Layout>
  )
}


const postQuery=graphql`
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
        }
        excerpt
      }
    }
  }
}

`

export default IndexPage
