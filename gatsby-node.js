// const {slugify}=require('./src/utils/utilityFunctions')
var path=require('path')
exports.onCreateNode=({node,actions})=>{
    const {createNodeField}=actions
    console.log("node",node.frontmatter)
    if(node.internal.type=='MarkdownRemark'){
        const text=node.frontmatter.title
        const slugFromTitle=text.replace(/\s/g, '-').toLowerCase()
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages=async ({actions,graphql})=>{
    const {createPage}=actions;
    const result=await graphql(`
     {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                author
              }
              fields {
                slug
              }
            }
          }
        }
      }
      `)
    console.log(JSON.stringify("result",result))
  
    result.data.allMarkdownRemark.edges.forEach(({node})=>{
      createPage({
        path:node.fields.slug,
        component:path.resolve('./src/templates/single-posts.jsx'),
        context:{
          itemDetails:node.fields.slug
        }
      })
  
    })
  }