import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import link from './links'
import MenuIcon from '@material-ui/icons/Menu';
import './header.css'

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
  console.log(link.About)
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              News
          </Typography>
            <Link className="link" to="/about/" >
              About
        </Link>
            <Link className="link" to="/tags/" >
              Tags
        </Link>
            <Link className="link" to="/team/" >
              Team
        </Link>
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
