import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import App from './app';
import Reducer from './stores/rootReducer';
import rootSaga from './stores/rootSaga';

import './index.scss';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);

if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept('./app', () => {
      ReactDOM.render(
          <Provider store={store}>
              <App />
          </Provider>,
          document.getElementById('root'),
      );
  });
}
