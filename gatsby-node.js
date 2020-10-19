// const {slugify}=require('./src/utils/utilityFunctions')
var path = require('path')
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // console.log("node",node.frontmatter)
  if (node.internal.type === 'MarkdownRemark') {
    const text = node.frontmatter.title
    const slugFromTitle = text.replace(/\s/g, '-').toLowerCase()
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

exports.createPages=async ({actions,graphql})=>{
    const {createPage}=actions;
    
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
              fields {
              slug
            }
            frontmatter {
              title
            }
          
          }
        }
      }
    }
      `).then(res=>{
        if(res.errors) return Promise.reject(res.errors)
        const posts=res.data.allMarkdownRemark.edges
        posts.forEach(({node})=>{
          createPage({
            path:node.fields.slug,
            component:path.resolve('./src/templates/single-posts.jsx'),
            context:{
              slug:node.fields.slug,
              check:"abc"
            }
          })
    
        })
      })
    // console.log(JSON.stringify("result",result))


    
  }