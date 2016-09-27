import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Videos from '../Videos';
import SearchBar from '../SearchBar/SearchBar';
import {store} from '../../store';
import './Reset.css';
import './Root.css';

class Root extends Component {

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <SearchBar />
                    <Videos />
                </div>
            </Provider>
        )
    }
}

export default Root;