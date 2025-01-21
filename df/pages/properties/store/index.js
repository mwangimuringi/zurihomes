// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state() {
        return {
            formData: {
                // Basic and Location Details
                title: '',
                status: '',
                address: '',
                addressUnit: '',
                city: '',
                province: '',
                zip: '',
                community: '',
                // Contact Information
                phone: '',
                email: '',
                // Property and Additional Details
                description: '',
                parking: '',
                petsDogs: '',
                petsCats: '',
                kidsPolicy: '',
                smoking: '',
                lease: '',
                features: '',
                utilities: [],
                building: [],
                communityFeatures: [],
                price: '',
                type: '',
                bedrooms: '',
                bathrooms: '',
                squareFeet: '',
                furnishing: '',
                unit_availability: '',
                activated: '',
                expiration: '',
                // Photos
                photos: [],
            },
        };
    },
    mutations: {
        updateFormData(state, payload) {
            // Efficient way to merge payload into formData
            state.formData = { ...state.formData, ...payload };
        },
        clearFormData(state) {
            // Resets formData to initial state (empty values)
            state.formData = {
                title: '',
                status: '',
                address: '',
                addressUnit: '',
                city: '',
                province: '',
                zip: '',
                community: '',
                phone: '',
                email: '',
                description: '',
                parking: '',
                petsDogs: '',
                petsCats: '',
                kidsPolicy: '',
                smoking: '',
                lease: '',
                features: '',
                utilities: [],
                building: [],
                communityFeatures: [],
                price: '',
                type: '',
                bedrooms: '',
                bathrooms: '',
                squareFeet: '',
                furnishing: '',
                unit_availability: '',
                activated: '',
                expiration: '',
                photos: [],
            };
        },
    },
    actions: {
        async submitProperty({ commit, state }) {
            try {
                // Submit property data excluding photos
                const formData = new FormData();
                for (const key in state.formData) {
                    // console.log(`Appending before ${key}:`, state.formData[key]);
                    if (key !== 'photos') {
                        formData.append(key, state.formData[key]);
                    } else if (state.formData.photos.length > 0) {
                        // Assuming the first photo is used for both thumbnail and mobile URL
                        // Adjust according to your actual requirements
                        formData.append('photo_thumb', state.formData.photos[0]);
                        formData.append('photo_mobile_url', state.formData.photos[1]);
                    }
                }

                const response = await axios.post('https://apiwatenant.weiseragencies.com/api/property/store', formData);
                // console.log('Property submitted:', response.data);
                const propertyId = response.data.property_id; // Make sure to use the correct property based on your API response structure

                // console.log('state.formData.photos:', state.formData.photos);
                // console.log('state.formData.photos.len:', state.formData.photos.length);

                // Assuming 'photos' contains File objects
                if (state.formData.photos && state.formData.photos.length > 0) {
                    const photoData = new FormData();
                    console.log('this:', this);
                    // Assuming selectedPhotos[0] is the thumb and selectedPhotos[1] is the slide image
                    // Make sure these files are being correctly set in your StepThree component and passed here
                    photoData.append('thumb', state.formData.photos[0]);
                    photoData.append('slide', state.formData.photos[1]);
                    photoData.append('property_id', propertyId); // Make sure this is set correctly from your property submission response
                    photoData.append('url', ''); // If you have a URL field, set it accordingly
                    photoData.append('caption', ''); // Set if applicable
                    photoData.append('description', ''); // Set if applicable

                    axios.post('https://apiwatenant.weiseragencies.com/api/images', photoData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    })
                        .then(response => console.log('Photo upload successful', response.data))
                        .catch(error => console.error('Photo upload failed', error.response.data));

                }

                // console.log('Property and photos submitted successfully');
                commit('clearFormData'); // Optionally clear form data after successful submission
            } catch (error) {
                console.error('Error during submission:', error);
                throw error; // Re-throw or handle as needed for further catching in components
            }
        },
    }




});

