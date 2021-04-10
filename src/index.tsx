import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createHashHistory } from 'history';
import { render } from 'react-snapshot';
import './css/main.css';

const doc = window.document;
// const baseUrl: string | undefined = doc ? doc.getElementsByTagName('base')[0].getAttribute('href') || undefined : undefined;
const rootElement = doc ? doc.getElementById('root') : null;
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

render(
  <Router history={hashHistory}>
    <App />
  </Router>,
  rootElement);

registerServiceWorker();