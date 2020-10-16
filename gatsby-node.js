// const {slugify}=require('./src/utils/utilityFunctions')

exports.onCreateNode=({node,actions})=>{
    const {createNodeField}=actions
    console.log("node",node)
    if(node.internal.type==='MarkdownRemark'){
        const slugFromTitle=node.frontmatter.title
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}