import React from 'react'
import SEO from './../components/seo'
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Badge, Button, Grid } from '@material-ui/core';
import { slugify } from './../utils/utilityFunctions'
import { Link } from 'gatsby'
import Layout from './../components/layout'
import Sidebar from './../components/sidebar'
import { authors } from './../utils/author'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { DiscussionEmbed } from 'disqus-react';
import { graphql } from 'gatsby'



const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 140,
    },
});

const SinglePosts = ({ data, pageContext }) => {

    const classes = useStyles();

   

    const postData = data.markdownRemark.frontmatter
    const postDataObj = {
        author: postData.author,
        date: postData.date,
        title: postData.title,
        tags: postData.tags,
        image: postData.image.childImageSharp.fixed,
        excerpt: data.markdownRemark.excerpt,
        ImageURL: data.file.childImageSharp.fixed


    }

    const baseUrl='https://gatsbytutorial.co.uk/'

    // disqus plugin start here
    const disqusShortName='https-gatsbytutorial-co-uk'
    const disqusConfig={
        indentifier:data.markdownRemark.id,
        title:postData.title,
        url:baseUrl+pageContext.slug
    }

    // disqus plugin end here

    const postAuthor = authors.find(x => x.name === postData.author)
    // const baseUrl = 'https://gatsbttutorial.co.uk/'
    // console.log("disqusConfig", disqusConfig)
    return (
        <Layout>
            <SEO title={postDataObj.title} />
            <div className={classes.root}></div>
            <Grid container >

                <Grid item xs={12} lg={4} md={4} sm={6} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h6" style={{textAlign:'center'}} component="h2">
                                {postDataObj.title.toUpperCase()}
                            </Typography>
                            <Img fixed={postDataObj.image} />

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


                        <div style={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Share Post
                            </Typography>
                            <a href={'https://www.facebook.com/sharer/sharer.php/?u='+baseUrl+pageContext.slug} target="_blank" rel="noreferrer">

                                <FacebookIcon color="primary" style={{ padding: '5px' }} />
                            </a>
                            <a href={'https://plus.goole.com/share?url='+baseUrl+pageContext.slug} target="_blank" rel="noreferrer">

                            <YouTubeIcon style={{ color: "#e73e30", padding: '5px' }} />
                            </a>
                            <a href={'https://twitter.com/share?url='+baseUrl+pageContext.slug+'&text='+slugify(postDataObj.title)+'&viatwitterHandle'} target="_blank" rel="noreferrer">

                            <TwitterIcon style={{ color: "#5ea9dd", padding: '5px' }} />

                            </a>
                            <a href={'https://www.linkedin.com/shareArticle?url='+baseUrl+pageContext.slug} target="_blank" rel="noreferrer">

                            <LinkedInIcon style={{ color: "#0077b5", padding: '5px' }} />

                            </a>
                            
                        </div>
                    </Card>
                        <DiscussionEmbed style={{width:'94%'}} shortname={disqusShortName} config={disqusConfig}/>
                </Grid>
                <Grid item xs={12} lg={4} md={4} sm={6} >
                    <Sidebar postAuthor={postAuthor} ImageURL={postDataObj.ImageURL} />
                </Grid>
            </Grid>


        </Layout>
    )
}
// <div dangerouslySetInnerHTML={{__html:data.markDownRemark.html}} /> 
export const singlePost = graphql`
query singlePostQuery ($slug: String!,$imgUrl: String!) {
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
    file(relativePath: {eq: $imgUrl}){
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
  `
// console.log("singlePost",singlePost)

export default SinglePosts
