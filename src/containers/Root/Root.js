import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import Videos from '../Videos';
import SearchBar from '../SearchBar/SearchBar';
import TestPage from '../TestPage'
import './Reset.css';
import './Root.css';


const Root = (props) => {
    return props.store?  (
        <Provider store={props.store}>
            <div>
                <SearchBar />
                <Videos />
                <TestPage />
            </div>
        </Provider>
    ): null;
};

export default Root;

