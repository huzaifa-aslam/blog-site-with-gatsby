import React from "react"
import {graphql,StaticQuery} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from './../components/posts'
import { object } from "prop-types"
const IndexPage = () => {

  console.log("postQuery",JSON.stringify(postQuery))
  
  return (

  <Layout>
    <SEO title="Code Blog" keyword={['gatsby','application','react']} />
    <h3>Home Page</h3>
    <StaticQuery query={postQuery} 
    render={({allMarkdownRemark})=>{
      const getPosts=allMarkdownRemark.edges;
      return (
        getPosts.map(({node},index)=>{
          console.log(node)
          const getPostData=node.frontmatter
          // console.log("getPostData",getPostData)

          return (
            <Posts key={index} excerpt={node.excerpt} title={getPostData.title} author={getPostData.author} date={getPostData.date} path={getPostData.path} objKeys={Object.keys(getPostData)}/>
          )
        })
      )
      }} />
    
  </Layout>
  )
}

// const k= Object.keys(getPostData)

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
