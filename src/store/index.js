import callAPI from '../middlewares/callAPI'
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';

const configureStore = (initialState = {}) => {

    const enhancers = [
        applyMiddleware(callAPI),
    ];

    return createStore(reducer, initialState, compose(...enhancers));
};

export default configureStore;