import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
