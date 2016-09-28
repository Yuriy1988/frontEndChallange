import {FETCH_VIDEOS} from '../constants'

const TOKEN = 'fe948072bce7119dd30809a4d39ce2ff';
const ROOT_URL = `https://api.vimeo.com/videos`;

export function fetchVideos(query) {
    const url = `${ROOT_URL}?query=${query}&access_token=${TOKEN}`;

    return {
        type: FETCH_VIDEOS,
        callAPI: url
    };
}