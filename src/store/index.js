import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../saga/rootSaga';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);
sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);

export default store;
