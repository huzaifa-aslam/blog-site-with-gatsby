import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, CardContent } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function RecentPosts() {
  const classes = useStyles();

  return (

    <StaticQuery query={recentPost} render={({ allMarkdownRemark }) => {
      const getPost = allMarkdownRemark.edges

      return (
        getPost.map(({ node }, index) => {
          const getPostData = node.frontmatter
          const objValues = {
            title: getPostData.title,
            slug: node.fields.slug,
            id: node.id,
            image: getPostData.image.childImageSharp.fixed
          }
          console.log("objValues", objValues)


          return (
            <Card key={index} className={classes.root}>
              <CardActionArea>
               <Link to={objValues.slug} target="_blank"> <Img style={{width: '320px'}} fixed={objValues.image} /></Link>
                <Link to={objValues.slug}>

                  <Typography gutterBottom variant="h6" style={{textAlign:'center'}} color="secondary" component="h2">
                    {objValues.title.toUpperCase()}
                  </Typography>
                </Link>

              </CardActionArea>

            </Card>
          )
        })

      )
    }} />

  );
}

const recentPost = graphql`
query MyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      edges {
        node {
          id
          fields{
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(width: 300){
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
    }
  }
  
`