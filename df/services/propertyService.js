import axios from 'axios';

const API_URL = "https://apiwatenant.weiseragencies.com";


async function fetchProperties(page = 1) {
    try {
        const response = await axios.get(`${API_URL}/property/get?page=${page}`);
        if (response.status !== 200) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const { data } = response.data; // Extracting the `data` object from the response
        return {
            properties: data.data, // The actual properties data
            currentPage: data.current_page,
            totalPages: data.last_page,
            totalRecords: data.total,
        };
    } catch (error) {
        console.error('Error fetching properties:', error);
        return { properties: [], currentPage: 1, totalPages: 0, totalRecords: 0 };
    }
}

export { fetchProperties };
