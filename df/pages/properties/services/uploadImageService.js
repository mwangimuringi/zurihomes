import axios from 'axios';

//const API_URL = import.meta.env.VITE_APP_API_URL;
const API_URL = "https://apiwatenant.weiseragencies.com/api";
async function uploadImages(propertyId, images) {
    const formData = new FormData();
    images.forEach(image => {
        formData.append('photos', image); // 'photos' is the field expected by the backend
    });
    formData.append('property_id', propertyId);

    try {
        const response = await axios.post(`${API_URL}/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // Include any necessary headers, such as authorization tokens
            },
        });
        if (response.status === 200) {
            console.log('Images uploaded:', response.data);
            return response.data; // Handle or return the response as needed
        } else {
            throw new Error(`Failed to upload images: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error uploading images:', error);
        throw error; // Rethrow or handle as needed
    }
}

export { uploadImages };
