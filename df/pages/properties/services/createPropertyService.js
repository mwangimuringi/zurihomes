import axios from 'axios';

//const API_URL = import.meta.env.VITE_APP_API_URL;
const API_URL = "https://apiwatenant.weiseragencies.com/api";
async function createProperty(propertyDetails) {
    try {
        const response = await axios.post(`${API_URL}/property/store`, propertyDetails, {
            headers: {
                'Content-Type': 'application/json',
                // Include any necessary headers, such as authorization tokens
            },
        });
        if (response.status === 200) {
            console.log('Property created:', response.data);
            return response.data; // Assuming this includes the property_id
        } else {
            throw new Error(`Failed to create property: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error creating property:', error);
        throw error; // Rethrow or handle as needed
    }
}

export { createProperty };
