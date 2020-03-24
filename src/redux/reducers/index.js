import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { reducer as reduxForm } from 'redux-form';
const rootReducer = combineReducers({
  user: userReducer,
  form: reduxForm
});

export default rootReducer;
