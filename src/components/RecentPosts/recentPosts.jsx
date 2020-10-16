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
            path: getPostData.path,
            id: node.id,
            image: getPostData.image.childImageSharp.fixed
          }
          console.log("objValues", objValues)


          return (
            <Card key={index} className={classes.root}>
              <CardActionArea>
               <Link to={objValues.path} target="_blank"> <Img fixed={objValues.image} /></Link>
                <Link to={objValues.path}>

                  <Typography gutterBottom variant="h5" component="h2">
                    {objValues.title}
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
          frontmatter {
            title
            path
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