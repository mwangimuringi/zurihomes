<template>
  <b-card class="shadow my-3" style="border-radius: 20px;">
    <div class="container-fluid">
      <div class="my-3"><h2>Upload logo here!</h2></div>
      <div class="row mt-2">
        <div class="col-12 col-lg-6">
          <label for="FormControlFileId">Upload Logo</label>
            <vue-dropzone id="dropzone11" ref="photosUploader"
            @vdropzone-file-added="handleFileAdded"
                :use-custom-slot="true"
                :options="dropzoneOptions">
                    <div class="dz-message needsclick">
                        <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                        <h3>Drop files here or click to upload.</h3>
                        <span class="text-muted font-13">
                            (Upload Company Logo)
                        </span>
                    </div>
            </vue-dropzone>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12">
          <b-overlay
            :show="loading"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
            >
            <b-button variant="primary px-5" :disabled="!file" @click="uploadLogo">Submit</b-button>
          </b-overlay>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  head() {
        return {
            title: this.$auth.user.user_type=='company'?'HM Company Portal':'Agent Portal',
        };
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    middleware: 'auth',
  data(){
    return{
      dropzoneOptions: {
        url: `https://api.watenantbureau.com/api/photos/photo-upload/`,
  thumbnailWidth: 150,
        maxFiles: 100,
        maxFilesize:200,//MB
        acceptedFiles: 'image/*',
        autoProcessQueue: false, // Disable automatic upload
        // maxFilesize: 0.5,
        // headers: {
        //     "Content-Type": "application/json",
        //     'Cache-Control': null,
        //     'X-Requested-With': null,
        //     'Access-Control-Allow-Origin': '*',
        //     "Content-Type": "text/html",
        //     Authorization: `Bearer ${this.$auth.user.token}`,
        // },
        previewTemplate: this.template(),
    },
    file:null,
    loading:false
    }
  },
  methods:{
    template: function () {
      return ` <div class="dropzone-previews mt-3">
              <div class="card mt-1 mb-0 shadow-none border">
                  <div class="p-2">
                      <div class="row align-items-center">
                          <div class="col-auto">
                              <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                          </div>
                          <div class="col pl-0">
                              <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                              <p class="mb-0" data-dz-size></p>
                          </div>
                          <div class="col-auto">
                              <!-- Button -->
                              <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                  <i class="fe-x"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
    },
    handleFileAdded(file){
      file.url = null;
      file.headers = null;
      this.file=file

    },
    async uploadLogo(){
      const formData=new FormData()
      formData.append('file',this.file)
   try{
        this.loading=true
        let response = await this.$axios.$post('/photos/photo-upload/2/2',formData,{headers:{'Content-Type': 'multipart/form-data'}});
        if(response.status=='success') {
            this.loading=false
            this.$toast.success(response.message,{duration:2000,fitToScreen:true});
            this.$auth.setUser({...this.$auth.user,logo:response.file_url});
            this.$refs.photosUploader.removeFile(this.file)
            this.file=null
        }
      }catch(error){
        this.loading=false
        this.$toast.error(error.response.data,{duration:5000,fitToScreen:true});
      }
    }

  },

}
</script>

<style>

</style>
