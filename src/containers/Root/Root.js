import React, {Component, PropTypes} from 'react';
import Videos from '../Videos';
import SearchBar from '../SearchBar/SearchBar';
import './Reset.css';
import './Root.css';


const Root = () => {
    return (
        <div>
            <SearchBar />
            <Videos />
        </div>
    )
};

export default Root;

