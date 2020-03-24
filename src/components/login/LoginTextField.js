import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '../field/TextField';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  btn: { color: theme.palette.text.primary }
}));

const LoginTextField = ({ handleSubmit, onLoginSubmit }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Field label="Email" type="email" name="email" component={TextField} />
      <Field
        label="Password"
        name="password"
        type="password"
        component={TextField}
      />
      <Button type="submit" variant="outlined" className={classes.btn}>
        Next
      </Button>
    </form>
  );
};

// const validate = values => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = "You don't have the email address";
//   }
//   if (!values.password) {
//     errors.password = 'You must enter your password';
//   }
//   return errors;
// };

export default reduxForm({ form: 'loginForm' })(LoginTextField);
