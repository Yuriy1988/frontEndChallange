import { createStore, applyMiddleware } from 'redux';
import callAPI from '../middlewares/callAPI'
import reducer from '../reducers';

export const store = applyMiddleware(callAPI)(createStore)(reducer);

