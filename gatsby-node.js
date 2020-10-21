// const {slugify}=require('./src/utils/utilityFunctions')
var path = require('path')
var { authors } = require('./src/utils/author')
var _ = require('lodash')
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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    tagsPage: path.resolve('./src/templates/tags-page.jsx'),
    singleTagPage: path.resolve('./src/templates/single-tag-page.jsx'),
    PaginationList: path.resolve('./src/templates/pagination-list.jsx'),


  }

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
              author
              tags
            }
          
          }
        }
      }
    }
      `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {

      // create single post page

      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/single-posts.jsx'),
        context: {
          slug: node.fields.slug,
          imgUrl: authors.find(x => x.name == node.frontmatter.author).imgUrl
        }
      })

    })
    let tags = []
    let tagsCount = {}
    // _.each(posts,edge=>{
    //   if(_.get(edge,'node.frontmatter.tags'))
    //   tags=tags.concat(edge.node.frontmatter.tags)
    // })
    posts.map(({ node }) => {
      if (node.frontmatter.tags !== '') {

        tags = tags.concat(node.frontmatter.tags)
      }
    })
    tags.forEach(tag => {
      tagsCount[tag] = (tagsCount[tag] || 0) + 1
    })
    console.log('tagsCount', tagsCount)

    // create allTags page
    createPage({
      path: '/tags',
      component: templates.tagsPage,
      context: {
        tags,
        tagsCount
      }
    })

    // create single tag page
    tags.map((tag) => {
      createPage({
        path: `/tags/${tag.replace(/\s/g, '-').toLowerCase()}/`,
        component: templates.singleTagPage,
        context:{
          tag
        }
      })
    })

    // create pagination

    const postPerPage=2
    const numberOfPosts=Math.ceil(postPerPage/2)
    Array.from({length:numberOfPosts}).forEach((_,index)=>{
      const currentPage=index+1
      createPage({
        path:`/page/${currentPage}`,
        component:templates.PaginationList,
        context:{
          limit:postPerPage,
          skip:postPerPage*index,
          currentPage
        }
      })
    })





  })



}