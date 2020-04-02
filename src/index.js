import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga/rootSaga';
import rootReducer from './store/reducers/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthGuard from './components/AuthGuard/AuthGuard';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    )
);
sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);

ReactDOM.render(<Provider store={store}> <AuthGuard><App /></AuthGuard> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
