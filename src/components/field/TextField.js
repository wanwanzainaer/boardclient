import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: '75%'
  }
}));
const CssTextField = withStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.primary.dark
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'orange'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.dark
      }
    }
  }
}))(TextField);
const CustomTextField = ({ input, type, label, meta: { error, touched } }) => {
  const classes = useStyles();
  return (
    <>
      <CssTextField
        className={classes.margin}
        label={label}
        variant="outlined"
        type={type}
        {...input}
        color="secondary"
      />
      <div>{touched && error}</div>
    </>
  );
};
// const TextField = ({ input, label, meta: { error, touched } }) => {
//   return (
//     <>
//       <label>{label}</label>
//       <input {...input} style={{ marginBottom: '5px' }} />
//       <div>{touched && error}</div>
//     </>
//   );
// };

export default CustomTextField;
// const CssTextField = withStyles(theme => ({
//   root: {
//     '& label.Mui-focused': {
//       color: 'green'
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green'
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'blue'
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow'
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green'
//       }
//     }
//   }
// }))(TextField);
