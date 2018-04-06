import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ScrollContext from './components/ScrollContext';
import routes from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
import createSagaMiddleware from 'redux-saga';
import skillsSaga from './sagas/skillsSaga';
import aboutSaga from './sagas/aboutSaga';
import contactSaga from './sagas/contactSaga';
import { Provider } from 'react-redux';
import '../node_modules/jquery/dist/jquery.slim.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './scss/App.scss';

const sagaMiddleware = createSagaMiddleware();

const composer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducer,
  initialState,
  composer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(skillsSaga);
sagaMiddleware.run(aboutSaga);
sagaMiddleware.run(contactSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollContext>
        <App>
          {routes}
        </App>
      </ScrollContext>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
