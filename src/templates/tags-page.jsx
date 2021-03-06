import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'
import {slugify} from './../utils/utilityFunctions'
import SEO from './../components/seo'
import Layout from './../components/layout'
import Sidebar from './../components/sidebar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tags: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '50px'
    }
}));

const TagsPage = ({ pageContext }) => {
    const {  tagsCount } = pageContext
    // console.log(pageContext)
    const classes = useStyles();

    return (
        <Layout className={classes.root}>
            <SEO title="Tags-Page" />
            <Grid container >
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <div className={classes.tags}>

                        {Object.keys(tagsCount).map((tag, index) => {
                            return (
                                <Link to={`/tags/${slugify(tag)}/`} key={index}>
                                    <Badge  color="primary" badgeContent={tagsCount[tag]} max={999}>
                                        <Button variant="contained" size="small" color="primary">{tag}</Button>
                                    </Badge>
                                </Link>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Sidebar/>
                </Grid>

            </Grid>


        </Layout>
    );
}

export default TagsPage
