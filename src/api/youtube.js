
import axios from 'axios';

const KEY = 'AIzaSyBLEJzv28PG2oUGVfexz7oRenlT0OD9OnQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY,
        type: 'video'

    }
});
