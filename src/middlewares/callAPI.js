import axios from 'axios';
import {START, SUCCESS, FAIL} from '../constants';

export default store => next => action => {
    const {callAPI, type, ...rest} = action;

    if (!callAPI) return next(action);

    next({...rest, type: type + START});

    axios.get(callAPI)
        .then(response => next({...rest, type: type + SUCCESS, response}))
        .catch(error => next({...rest, type: type + FAIL, error}))
}