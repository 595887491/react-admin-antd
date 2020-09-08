import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './admin'
import Life from './pages/demo/Life'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import Router from './router'
// import RouterDemo from './pages/router_demo/route1/Home'
// import RouterDemo2 from './pages/router_demo/route2/Home'

import configureStore from './redux/store'
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
