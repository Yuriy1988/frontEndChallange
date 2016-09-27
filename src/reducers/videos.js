import {FETCH_VIDEOS, SUCCESS, START, FAIL} from '../constants';

const initialState = {
    isFetching: false,
    data: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_VIDEOS + START:
            return {...state, isFetching: true};

        case FETCH_VIDEOS + SUCCESS:
            return {...action.response.data, isFetching: false};

        case FETCH_VIDEOS + FAIL:
            return {isFetching: false};

        default:
            return state;
    }
}
