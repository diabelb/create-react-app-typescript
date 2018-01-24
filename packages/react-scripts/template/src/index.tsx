import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@Components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from '@App/store';
import { Provider } from 'react-redux';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
