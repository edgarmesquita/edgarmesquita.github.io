import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const doc = window.document;
const baseUrl: string | undefined = doc ? doc.getElementsByTagName('base')[0].getAttribute('href') || undefined : undefined;
const rootElement = doc ? doc.getElementById('root') : null;

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();