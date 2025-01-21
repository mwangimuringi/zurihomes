<template>
  <div>
    <vue-dropzone
      id="dropzone"
      ref="photosUploader"
      v-on:vdropzone-success="onSuccess"
      v-on:vdropzone-error="onError"
      :options="dropzoneOptions"
    >
      <div class="dz-message needsclick">
        <i class="h1 text-muted ri-upload-cloud-2-line"></i>
        <h3>Drop files here or click to upload.</h3>
        <span class="text-muted font-13">
          (Upload photos for the property. Selected files are <strong>not</strong> actually uploaded.)
        </span>
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import VueDropzone from 'vue2-dropzone';
import axios from 'axios';

export default {
  components: {
    VueDropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://api.watenantbureau.com/api/photos/photo-upload/2/2', // Update with the actual property and category IDs
        thumbnailWidth: 150,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        maxFilesize: 200, // MB
        autoProcessQueue: true,
	method:'post',
	withCredentials: true,
	headers: {
  //'Access-Control-Allow-Origin': '*',
//	 Authorization: `Bearer ${this.$auth.user.user_uid}`,
},     
 },
    };
  },
  methods: {
    onSuccess(file, response) {
      console.log('File uploaded successfully:', file, response);
      // Handle the response as needed
    },
    onError(file, errorMessage, xhr) {
      console.error('Error uploading file:', file, errorMessage, xhr);
      // Handle the error as needed
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
