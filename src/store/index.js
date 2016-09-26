import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducer from '../reducers';

export const store = applyMiddleware(ReduxPromise)(createStore)(reducer);

