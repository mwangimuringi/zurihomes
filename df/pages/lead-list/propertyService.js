import axios from 'axios';


async function fetchProperties(page = 1, search = '') {
    try {
        const response = await axios.get(`https://apiwatenant.weiseragencies.com/api/property/getall?page=${page}&search=${search}`);
        if (response.status !== 200) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const { properties } = response.data; // Extracting the `data` object from the response
        return {
            properties: properties.data, // The actual properties data
            currentPage: properties.current_page,
            totalPages: properties.last_page,
            totalRecords: properties.total,
        };
    } catch (error) {
        console.error('Error fetching properties:', error);
        return { properties: [], currentPage: 1, totalPages: 0, totalRecords: 0 };
    }
}

export { fetchProperties };
