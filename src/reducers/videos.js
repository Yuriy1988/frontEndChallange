import {FETCH_VIDEOS} from '../constants';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            return action.payload.data.data;
    }
    return state;
}
