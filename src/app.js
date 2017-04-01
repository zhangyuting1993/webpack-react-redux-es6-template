// application's entry

import React, { Component } from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';     
import thunk from 'redux-thunk';  
import createLogger from 'redux-logger';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducers from 'reducers/index';



import './css/common.scss';       


    




const middlerware=[ thunk ];

if(process.env.NODE_ENV !=='production'){
  middlerware.push(createLogger());  
}


const store = createStore(reducers,applyMiddleware(...middlerware ));





const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('containers/conPage1/index').default)
      }, 'HomePage')
    },


  },
  component:require('components/Application').default,
  childRoutes: [
    require('./routes/page2'),
    require('./routes/page3'),
  ],
}


render((
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute}/>
  </Provider>  
  ), document.getElementById('app'));


