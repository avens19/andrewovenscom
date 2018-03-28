import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
import createSagaMiddleware from 'redux-saga';
import skillsSaga from './sagas/skillsSaga';
import {Provider} from 'react-redux';
import '../node_modules/jquery/dist/jquery.slim.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './scss/App.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(skillsSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
