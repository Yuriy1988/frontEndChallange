import {FETCH_VIDEOS} from '../constants'
import axios from 'axios';

const TOKEN = 'fe948072bce7119dd30809a4d39ce2ff';
const ROOT_URL = `https://api.vimeo.com/videos`;

export function fetchVideos(query) {
    const url = `${ROOT_URL}?query=${query}&access_token=${TOKEN}`;
    const request = axios.get(url);

    return {
        type: FETCH_VIDEOS,
        payload: request
    };
}