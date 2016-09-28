import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root/Root';
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(<Root store={store}/>, document.getElementById('react-view'));