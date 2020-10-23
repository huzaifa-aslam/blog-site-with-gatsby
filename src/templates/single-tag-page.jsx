import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SEO from './../components/seo'
import Layout from './../components/layout'
import { slugify } from './../utils/utilityFunctions'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'gatsby'
import Sidebar from './../components/sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 600
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondauseStylesry,
  },
}));

const SingleTagPage = ({ data, pageContext }) => {
  const classes = useStyles();
  const { tag } = pageContext
  const postData = data.allMarkdownRemark.edges
  const totalPost = data.allMarkdownRemark.totalCount
  // console.log('totalPost', totalPost)


  return (
    <Layout className={classes.root}>
      <SEO title="Single-Tag-Page" />
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Typography gutterBottom variant="h6" style={{ textAlign: 'center' }} component="h2">
            {`${totalPost} Post${totalPost === 1 ? '' : 's'} With "${tag}"`}
          </Typography>
          {postData.map(({ node }, index) => {
            const postDataObj = {
              author: node.frontmatter.author,
              date: node.frontmatter.date,
              title: node.frontmatter.title,
              tags: node.frontmatter.tags,
              image: node.frontmatter.image.childImageSharp.fixed,
              excerpt: node.excerpt,
              slug:node.fields.slug


            }
            // console.log("postDataObj.author", postDataObj.author)

            return (
              <Card key={index} className={classes.card}>
                <CardActionArea>

                  <Img fixed={postDataObj.image} />

                  <Link to={slugify(postDataObj.slug)} >
                    <Typography gutterBottom variant="h6" color="secondary" component="h2">
                    {postDataObj.title.toUpperCase()}
                    </Typography>
                  </Link>

                  <Typography gutterBottom variant="h6" component="h2">
                    {`${postDataObj.date} by ${postDataObj.author.toUpperCase()}`}
                  </Typography>
                  <CardContent>

                    <Typography variant="body2" color="textSecondary" component="p">
                      {postDataObj.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {postDataObj.tags.map((tag, k) =>
                    <Badge key={k}>
                      <Link to={`/tags/${slugify(tag)}/`}>
                        <Button variant="contained" size="small" color="primary">

                          {tag.toUpperCase()}
                        </Button>
                      </Link>
                    </Badge>
                  )}
                  <br />
                </CardActions>


              </Card>

            )

          })}


        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Sidebar />
        </Grid>

      </Grid>
    </Layout>
  )
}



export const singleTagQuery = graphql`
query TagQuery($tag: String!) {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            date
            author
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
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
  
`

export default SingleTagPage;