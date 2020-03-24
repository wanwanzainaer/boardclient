import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '70px',
    backgroundColor: theme.palette.primary,
    color: '#ebebe3'
  },
  logo: { flexGrow: 1 },
  title: {
    textDecoration: 'none'
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <div className={classes.logo}>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            Exchange Board
          </Typography>
        </div>
        <Button component={Link} to="/test" color="inherit">
          test On Post
        </Button>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
