import axios from 'axios';

const API_KEY = '48980584-3e4c841e1693c4db1e58a6993';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });

        return response.data.hits;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
