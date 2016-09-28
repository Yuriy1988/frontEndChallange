import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root/Root';
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('react-view'));