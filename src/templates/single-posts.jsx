import React from 'react'
import SEO from './../components/seo'
import {graphql} from 'gatsby'
 const SinglePosts=()=> {
    return (
        <div>
            <SEO title="single-posts"/>

            <h1>single posts</h1>
        </div>
    )
}
// <div dangerouslySetInnerHTML={{__html:data.markDownRemark.html}} /> 
const singlePost=graphql`
    query singlePostBySlug($slug: String!){
        markDownRemark(fields: {path: {eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date
                tags
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
`

export default SinglePosts
