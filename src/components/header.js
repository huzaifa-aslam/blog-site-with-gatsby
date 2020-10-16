import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
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
  const classes = useStyles();
  return (
    <div position="fixed">
      <Grid container xs={12} item className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              <Link className="link" to="/" >
                News
        </Link>
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
