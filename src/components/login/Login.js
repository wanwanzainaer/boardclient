import React from 'react';
import LoginTextField from './LoginTextField';
import { connect } from 'react-redux';
import { signInStart } from '../../redux/actions/userAction';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login_pic from '../../assets/market.jpeg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: { color: theme.palette.primary.dark },
  imgWidth: {
    width: '100%',
    borderRadius: '6px',
    filter: 'blur(1px)',
    WebkitFilter: 'blur(1px)'
  },
  loginField: { textAlign: 'center' }
}));
const Login = ({ signInStart }) => {
  const classes = useStyles();
  const onLoginSubmit = input => {
    signInStart(input);
  };
  return (
    <Grid spacing={1} container alignItems="center" className={classes.root}>
      <Grid xs={6} item>
        <img src={Login_pic} alt="login" className={classes.imgWidth} />{' '}
      </Grid>
      <Grid xs={6} item className={classes.loginField}>
        <Typography variant="h3" gutterBottom>
          Log In
        </Typography>
        <LoginTextField onLoginSubmit={onLoginSubmit} />
      </Grid>
    </Grid>
  );
};

export default connect(null, { signInStart })(Login);
