// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
          if (key !== 'photos') {
            formData.append(key, state.formData[key]);
          } else if (state.formData.photos.length > 0) {
            formData.append('photo_thumb', state.formData.photos[0]);
            formData.append('photo_mobile_url', state.formData.photos[1]);
          }
        }

        const response = await axios.post('https://apiwatenant.weiseragencies.com/api/property/store', formData);
        const propertyId = response.data.property_id;

        if (state.formData.photos && state.formData.photos.length > 0) {
          const photoData = new FormData();
          photoData.append('thumb', state.formData.photos[0]);
          photoData.append('slide', state.formData.photos[1]);
          photoData.append('property_id', propertyId);
          photoData.append('url', '');
          photoData.append('caption', '');
          photoData.append('description', '');

          axios.post('https://apiwatenant.weiseragencies.com/api/images', photoData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then(response => console.log('Photo upload successful', response.data))
          .catch(error => console.error('Photo upload failed', error.response.data));
        }

        commit('clearFormData');
      } catch (error) {
        console.error('Error during submission:', error);
        throw error;
      }
    },
  },
});
