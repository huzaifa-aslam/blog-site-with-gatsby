import React from 'react'
import SEO from './../components/seo'
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Badge, Button, CardMedia, Grid } from '@material-ui/core';
import { slugify } from './../utils/utilityFunctions'
import { Link } from 'gatsby'
import Layout from './../components/layout'
import Sidebar from './../components/sidebar'

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 140,
    },
});

const SinglePosts = ({ data }) => {

    const classes = useStyles();

    const postData = data.markdownRemark.frontmatter
    const postDataObj = {
        author: postData.author,
        date: postData.date,
        title: postData.title,
        tags: postData.tags,
        image: postData.image.childImageSharp.fixed,
        excerpt: data.markdownRemark.excerpt
    }
    console.log("postDataObj", postDataObj)
    return (
        <Layout>
            <SEO title={postDataObj.title} />
            <div className={classes.root}></div>
            <Grid container >

                <Grid item xs={8} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="h2">
                                {postDataObj.title.toUpperCase()}
                            </Typography>
                            <Img fixed={postDataObj.image} />
                            {/* <CardMedia
                        className={classes.media}
                        title="Contemplative Reptile"
                    ></CardMedia> */}
                            <Typography gutterBottom variant="h5" component="h2">
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
                                    <Link to={`/tag/${slugify(tag)}`}>
                                        <Button variant="contained" size="small" color="primary">

                                            {tag.toUpperCase()}
                                        </Button>
                                    </Link>
                                </Badge>
                            )}

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} >
                    <Sidebar />
                </Grid>
            </Grid>


        </Layout>
    )
}
// <div dangerouslySetInnerHTML={{__html:data.markDownRemark.html}} /> 
export const singlePost = graphql`
query singlePostQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      id
      frontmatter {
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
      html
      excerpt
    }
  }
  `
// console.log("singlePost",singlePost)

export default SinglePosts
