
import React from 'react'

export default function PaginationList({contextPage}) {
    console.log("pagination",contextPage)
    return (
        <div>
            
        </div>
    )
}


export const paginationQuery = graphql`
   query pageQuery($limit: Int!,$skip: Int!) {
  allMarkdownRemark(limit: $limit, skip: $skip, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          author
          date
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
        fields {
          slug
        }
        excerpt
      }
    }
  }
}


`