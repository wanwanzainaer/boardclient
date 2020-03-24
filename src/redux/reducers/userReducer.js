import Types from '../actions/types';
const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_CUREENT_USER:
      return { ...state, currentUser: action.payload, error: null };
    case Types.CHECK_AUTH_FAILURE:
    case Types.SIGN_IN_FAILURE:
    case Types.SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
