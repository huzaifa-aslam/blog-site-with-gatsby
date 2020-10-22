import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import './header.css'
import gatsbyIcon from './../images/gatsby-icon.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <div position="fixed">
      <Grid container xs={12} item className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <Typography  >
              <Link className="link" to="/" >
                {/* CODE BLOG */}
                <img className="logo" src={gatsbyIcon}/>
        </Link>
            </Typography>
            <div className="head">
            <Link className="link" to="/about/" >
              About
        </Link>
            <Link className="link" to="/tags" >
              Tags
        </Link>
            <Link className="link" to="/team/" >
              Team
        </Link>
            </div>
           
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
