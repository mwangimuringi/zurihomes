<script>
    import {required,email,minLength,sameAs,maxLength,minValue,maxValue,numeric,alphaNum,} from 'vuelidate/lib/validators';
    // import {FormWizard,TabContent,WizardButton } from "vue-form-wizard";
    import Swal from "sweetalert2";
    import vue2Dropzone from "vue2-dropzone";
    // import CKEditor from "@ckeditor/ckeditor5-vue";
    // import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import {country_and_states} from "../../helpers/app.countries";
    // import "vue-form-wizard/dist/vue-form-wizard.min.css";

    // import UIFormAU from "./ui-forms/form-about-you.vue";
    // import UIFormAddreses from "./ui-forms/form-address.vue";
    // import UIFormAddresesPrev from "./ui-forms/form-address-p.vue";
    // import UIFormEmployeer from "./ui-forms/form-employeer.vue";
    // import UIFormCredit from "./ui-forms/form-credit.vue";
    // import UIFormCriminal from "./ui-forms/form-criminal.vue";
    import UIFormSpouse from "./ui-forms/form-spouse.vue";
    import UIFormOccupants from "./ui-forms/form-occupants.vue";
    import UIFormVehicle from "./ui-forms/form-vehicle.vue";
    import UIFormEmergency from "./ui-forms/form-emergency.vue";
    import UIFormAuthorization from "./ui-forms/form-authorization.vue";
    // import UIFormDisclosure from "./ui-forms/form-disclosure.vue";
    // import { directive } from '@coders-tm/vue-number-format'
    /**
     * Product-create component
     */
    export default {
        head() {
            return {
                title: `${this.title} | `+ process.env.appName,
            };
        },
        components: {
            // FormWizard,
            // TabContent,
            // WizardButton,
            vueDropzone: vue2Dropzone,
            // ckeditor: CKEditor.component,
            // UIFormAU,
            // UIFormAddreses,
            // UIFormAddresesPrev,
            // UIFormEmployeer,
            // UIFormCredit,
            // UIFormCriminal,
            UIFormSpouse,
            UIFormOccupants,
            UIFormVehicle,
            UIFormEmergency,
            UIFormAuthorization,
            // UIFormDisclosure
        },
        data() {
            return {
                title: "Rental Application",
                items: [{
                        text: "WA",
                    },
                    {
                        text: "Tenants",
                    },
                    {
                        text: "Rental Application",
                        active: true,
                    },
                ],
                optCountries:country_and_states.country,
                optCities:[],
                optStates:[],
                optCities2:[],
                optStates2:[],
                center: { lat: 58.90, lng: -112.3 },
                map_options: {scrollwheel:true},
                map_markers:[{position:{lat: 58.90,lng: -112.3}}],
                map_marker_lo:{position:{lat: 58.90,lng: -112.3}},
                form_tabs_all:"active",
                form_tabs_stat:[
                    {id:2,label:"About you",status:"active",stat_label:""},
                    {id:3,label:"Address",status:"active",stat_label:""},
                    {id:4,label:"Employeer",status:"active",stat_label:""},
                    {id:5,label:"Credit",status:"active",stat_label:""},
                    {id:6,label:"Rental Criminal",status:"active",stat_label:""},
                    {id:7,label:"Your Spouse",status:"active",stat_label:""},
                    {id:8,label:"Occupants",status:"active",stat_label:""},
                    {id:9,label:"Vehicle",status:"active",stat_label:""},
                    {id:10,label:"Emergency",status:"active",stat_label:""},
                    {id:11,label:"Authorization",status:"active",stat_label:""},
                    // {id:12,label:"DISCLOSURE",status:"active",stat_label:""},
                ],
                loadingWizard:false,
                // editor: ClassicEditor,
                // editorData: "<p>Content of the editor.</p>",
                dropzoneOptions: {
                    // url: process.env.apiBaseUrl+"/photos/photo-upload/"+this.property.property_id,
                    url: process.env.apiBaseUrl+"/photos/photo-upload/",
                    thumbnailWidth: 150,
                    uploadMultiple: true,
                    parallelUploads: 100,
                    maxFiles: 100,
                    maxFilesize:200,//MB
                    autoProcessQueue:false,
                    // maxFilesize: 0.5,
                    headers: {
                        // "Content-Type": "application/json",
                        'Cache-Control': null,
                        'X-Requested-With': null,
                         'Access-Control-Allow-Origin': '*',
                        // "Content-Type": "text/html",
                        // Authorization: `Bearer ${this.$auth.user.user_uid}`,
                    },
                    previewTemplate: this.template(),
                },
                formGeneral:false,
                formInfo:false,
                formComplete:false
            }
        },
        
      layout: 'auth-wl',
        methods: {
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
            onClickTab: function(e){
                
                this.form_tabs_all='';
                this.form_tabs_stat.forEach((thisEle,id) => {
                    this.form_tabs_stat[id].status='';
                    this.form_tabs_stat[id].stat_label='';
                    if(thisEle.id == e){
                        this.form_tabs_stat[id].status='active';
                    this.form_tabs_stat[id].stat_label='active';
                    }
                });
            },
            onClickTabAll: function(){
                
                this.form_tabs_all='active';
                this.form_tabs_stat.forEach((thisEle,id) => {
                    this.form_tabs_stat[id].status='active';
                    this.form_tabs_stat[id].stat_label='';
                    
                });
            },
            
            // isLastStep() {
            //     if (this.$refs.wizard) {
            //         return this.$refs.wizard.isLastStep;n
            //     }
            //     return false;
            // },
            // geolocate: function() {
                
            //     if(this.property.geolocation_map == undefined || this.property.geolocation_map == null){
            //         navigator.geolocation.getCurrentPosition(position => {
            //             this.center = {
            //             lat: position.coords.latitude,
            //             lng: position.coords.longitude,
            //             };
            //             this.map_markers[0]={
            //                 position:{
            //                     lat: position.coords.latitude,
            //                     lng: position.coords.longitude,
            //                 }
            //             };
            //             this.map_marker_lo.position = { lat: position.coords.latitude, lng: position.coords.longitude };
            //         });
            //     }else{
            //         const getPosition = this.property.geolocation_map.split(',');
            //         this.center = {lat: Number(getPosition[0]),lng: Number(getPosition[1])};
            //         this.map_markers[0]={
            //             position:{
            //                 lat: Number(getPosition[0]),
            //                 lng: Number(getPosition[1])
            //             }
            //         };
            //     }
            // },
                   // handleMarkerDrag(e) {
            //     this.map_marker_lo.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
            // },
            // onValidateFormGeneral:function(p,n){
            //     console.log('debug 00',p)
            //     console.log('debug 00',n)
            //     const checkFields =['name', 'description', 'country','states','city','built_size','bedrooms_qt','bathrooms_qt','floors_qt','category','price'];
            //     this.$v.$touch();
            //     console.log('debug 001',this.$v)
            //     this.formGeneral = true
            //     for (const key in checkFields) {
            //         if (checkFields.hasOwnProperty.call(checkFields, key)) {
            //             const element = checkFields[key];
            //             if (this.$v.property[element].$invalid === true){ 
            //                 console.log('err');
            //                 return false;
            //             }
            //         }
            //     }
            // },
            // onValidateFormInfo(e){
            //     console.log('debug 001',e)
            //     const checkFields =['availability', 'status', 'is_public','contract_term'];
            //     this.$v.$touch();
                
            //     this.formGeneral = true
            //     for (const key in checkFields) {
            //         if (checkFields.hasOwnProperty.call(checkFields, key)) {
            //             const element = checkFields[key];
            //             if (this.$v.property[element].$invalid === true){ 
            //                 console.log('err');
            //                 return false;
            //             }
            //         }
            //     }
            // },
            // setLoading: function(value) {
            //     this.loadingWizard = value
            // },
            // handleValidation: function(isValid, tabIndex){
            //     console.log('Tab: '+tabIndex+ ' valid: '+isValid)
            // },
            // validateAsync:function() {
            //     return new Promise((resolve, reject) => {
            //         // setTimeout(() => {
            //         //     const checkFields =['name', 'description', 'country','states','city','built_size','bedrooms_qt','bathrooms_qt','floors_qt','category','price'];
            //         //     this.$v.$touch();
            //         //     let isValid =true;
            //         //     this.formGeneral = true
            //         //     for (const key in checkFields) {
            //         //         if (checkFields.hasOwnProperty.call(checkFields, key)) {
            //         //             const element = checkFields[key];
            //         //             if (this.$v.property[element].$invalid === true){ 
            //         //                 isValid =false;
            //         //                 reject('This is a custom validation error message. Click next again to get rid of the validation');
            //         //             }
            //         //         }
            //         //     }
            //         //     if(isValid == true) {
            //         //         resolve(true);
            //         //     }
            //         // }, 2000)
            //     })
            // },
            // validateInfoAsync:function() {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             const checkFields =['availability', 'status', 'is_public','contract_term'];
            //             this.$v.$touch();
            //             let isValid =true;
            //             this.formInfo = true
            //             for (const key in checkFields) {
            //                 if (checkFields.hasOwnProperty.call(checkFields, key)) {
            //                     const element = checkFields[key];
            //                     if (this.$v.property[element].$invalid === true){ 
            //                         isValid =false;
            //                         reject('This is a custom validation error message. Click next again to get rid of the validation');
            //                     }
            //                 }
            //             }
            //             if(isValid == true) {
            //                 resolve(true);
            //             }
            //         }, 2000)
            //     })
            // },
            // validatePhotoAsync:function() {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             const checkFields =['availability', 'status', 'is_public','contract_term'];
            //             this.$v.$touch();
            //             let isValid =true;
            //             const photoQT = this.$refs.photosUploader.dropzone.files.length;
            //             if( photoQT < 3){
            //                 isValid =false;
            //                 reject('This is a custom validation error message. Click next again to get rid of the validation');
            //             }
            //             if(isValid == true) {
            //                 resolve(true);
            //             }
            //         }, 2000)
            //     })
            // },
            // onCompleteForm(){
            //     this.property.landlord_id=this.$auth.user.user_login_id;
            //     this.formPostSubmit();
            // },
            // async getStatesCities(){
            //     // console.log(this.company);
            //     let response = await this.$axios.$get('/bo/states/'+this.property.country);
            //     // this.optStates=response.data;
            // },
            // // async getCities(){
            // //     let response = await this.$axios.$get('/bo/cities/'+this.property.states);
            // //     this.optCities=response.data;
            // // },
            // async getStatesList(e){
            //     this.optStates=await this.appGetStatesList(e);
            // },
            // async getCitiesList(e){
            //     this.optCities=await this.appGetCitiesList(e);
            // },
            // async getStatesList2(e){
            //     this.optStates2=await this.appGetStatesList(e);
            // },
            // async getCitiesList2(e){
            //     this.optCities2=await this.appGetCitiesList(e);
            // },
            // async appGetStatesList(e){
            //     let response = await this.$axios.$get('/bo/states/'+e);
            //     return response.data;
            // },
            // async appGetCitiesList(e){
            //     let response = await this.$axios.$get('/bo/cities/'+e);
            //     return response.data;
            // },
             formPostSubmit(){
                // let formData = this.property;
                     // formData.built_size=formData.built_size.replace('sqm','');
                     // formData.price=formData.price.replace('$','');
          let formData = this._handleFormGetData('form_user_add');
                    
                 Swal.fire({
                     title: "Are you sure?",
                     text: "Application will be sent to landlord, press [Yes, continue]!",
                     type: "warning",
                     showCancelButton: true,
                     confirmButtonText: "Yes, continue",
                     cancelButtonText: "Cancel!",
                     confirmButtonClass: "btn btn-success mt-2",
                    cancelButtonClass: "btn btn-danger ml-2 mt-2",
                }).then((result) => {
                     if (result.value) {
                         this.createNewRecordDT(formData); 
                     } 
                 });
             },
             async createNewRecordDT(form_data) {
try{
                 let response = await this.$axios.$post('user/rental-application',form_data);
                 if(response.status=='ok'){
            //         // this.dropzoneOptions.url=this.dropzoneOptions.url+response.property_id;
            //         this.$refs.photosUploader.setOption("url", process.env.apiBaseUrl+"/photos/photo-upload/"+response.property_id);
            //         this.$refs.photosUploader.processQueue();
                    
                      this.$toast.success('Rental Application Sent!',{duration:2000,fitToScreen:true});
            //         // this.closeForm();
                 }else{
                     this.$toast.error(response.message,{duration:2000,fitToScreen:true});
                 }
}catch(error){
 console.error('Error submitting rental application:', error);
    this.$toast.error('An error occurred while submitting the application.', { duration: 2000, fitToScreen: true });
}
            //     //this.company = response.data;
             },
            // onCompletedUpload: function(response){
            //     if(response.status == 'success'){
            //         this.$router.push('/properties');
            //     }
            // },
            // onModalAccept(){
            //     // this.property.geolocation_map=`${this.map_marker_lo.position.lat},${this.map_marker_lo.position.lng}`;
            //     this.property.geolocation_map=`${parseFloat(this.map_marker_lo.position.lat).toFixed(4)},${parseFloat(this.map_marker_lo.position.lng).toFixed(4)}`;
            // }
        },
         //middleware: "auth",
    }
</script>

<template>
<div>
    <!-- <PageHeader :title="title" :items="items" /> -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                
                <div class="card-body no-padding">
                    <div class="text-center w-75 m-auto">
                        <div class="auth-logo">
                            <nuxt-link to="/" class="logo logo-dark text-center">
                                <span class="logo-lg">
                                    <img src="~/assets/images/logo_wa.png" alt="" height="140">
                                </span>
                            </nuxt-link>

                            <nuxt-link to="/" class="logo logo-light text-center">
                                <span class="logo-lg">
                                    <img src="~/assets/images/logo_wa.png" alt="" height="140">
                                </span>
                            </nuxt-link>
                        </div>
                        <h1>Rental Application</h1>
                        <p class="text-muted mb-4">Please, you must fill in all the fields about the company.</p>
                    </div>
                    <form class="form-input-control" id="form_user_add">
                        <div class="form-tabs-title">
                            <div class="item-tabs-title" @click="onClickTabAll" :class="{'active': form_tabs_all=='active'}">All</div>
                            <div v-for="item in form_tabs_stat" :key="item.id" @click="onClickTab(item.id)" class="item-tabs-title"
                            :class="{'active': item.stat_label=='active'}"
                            >{{item.label}}</div>
                        </div>
                        <div class="form-tabs-container">
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[0].status=='active'}">                        
                                <div class="row mt-3">
                                    <h4 class="header-divider">ABOUT YOU</h4>
                                    <div class="col col-form-item-3">
                                        <label class="form-label ">Full name (exactly as on driver's license or govt. ID card)</label>
                                        <input class="form-control" type="text" />
                                        <input class="form-control" type="text" />
                                        <input class="form-control form-input-last" type="text" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item"><label class="form-label ">Your street address <em>(as shown on your driver's license or government ID card):</em></label><input class="form-control d-inline-block" type="text" ></div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item"><label class="form-label ">Driver's license # prov/state:</label><input class="form-control d-inline-block" type="text" ></div>
                                    <div class="col col-form-item"><label class="form-label ">Govt. photo ID card #:</label><input class="form-control d-inline-block" type="text" ></div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item"><label class="form-label ">Former last names (maiden and married):</label><input class="form-control d-inline-block" type="text" ></div>
                                    <div class="col col-form-item"><label class="form-label ">What Citizenship do you hold:</label><input class="form-control d-inline-block" type="text" ></div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Birthdate:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Height:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Weight</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Sex</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Eye Color</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Hair Color</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[1].status=='active'}">
                                <!-- <div class="row mt-3 row-split-divider"></div> -->
                                <div class="row mt-3">
                                    <h4 class="header-divider">Address information</h4>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Current home address (where you now live):</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Country:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Province/State:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">City</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Home/cell phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Current rent: $:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Email address</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Name of apartment/house where you now live:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Current owner or manager's name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Their phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date moved in:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Why are you leaving your current residence?:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>


                                <div class="row">
                                    <h4 class="header-divider">Previous address information</h4>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Your previous home address:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Country:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Province/State:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">City</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Apartment/House name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Current owner or manager's name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Previous monthly rent:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Their phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date moved in:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date moved out:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[2].status=='active'}">
                                <div class="row mt-3">
                                    <h4 class="header-divider">Present employer information</h4>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Present employer:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Address:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Country:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Province/State:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">City</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Work phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Position:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Your gross monthly income is over:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date you began this job:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Supervisor's Name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Supervisor's Phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <h4 class="header-divider">Present employer information</h4>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Present employer:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Address:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Country:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Province/State:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">City</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Work phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Position:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Your gross monthly income is over:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date you began this job:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Date you ended this job:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Supervisor's Name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Supervisor's Phone:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[3].status=='active'}">
                                <div class="row mt-3 row-split-divider"></div>
                                <div class="row ">
                                    <h4 class="header-divider">YOUR CREDIT HISTORY</h4>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Your bank's name:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Country:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">Province/State:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                    <div class="col col-form-item">
                                        <label class="form-label ">City</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">List major credit cards:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-form-item">
                                        <label class="form-label ">Other non-work income you want considered. Please explain:</label>
                                        <input class="form-control d-inline-block" type="text" >
                                    </div>
                                </div>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[4].status=='active'}">
                                <div class="row mt-3 row-split-divider"></div>
                                <div class="row ">
                                    <h4 class="header-divider">YOUR RENTAL/CRIMINAL HISTORY</h4>
                                    
                                    <div class="col-12">
                                        <p>Have you, your spouse, or any occupant listed in this Application ever:</p>
                                        <input class="radio" type="checkbox" name="Previousevicted" value="evicted" id="Previousevicted"/>
                                        <label for="Previousevicted">been evicted or asked to move out?</label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-12">
                                        <input class="radio" type="checkbox" name="Previousmoved" value="moved" id="Previousmoved"/>
                                        <label for="Previousmoved">moved out of a dwelling before the end of the lease term without the owner's consent?</label>  
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-12">
                                        <input class="radio" type="checkbox" name="Previousbankruptcy" value="bankruptcy" id="Previousbankruptcy"/>
                                        <label for="Previousbankruptcy">declared bankruptcy?</label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-12">
                                        <input class="radio" type="checkbox" name="Previoussued" value="sued" id="Previoussued"/>
                                        <label for="Previoussued">been sued for rent? </label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-12">
                                        <input class="radio" type="checkbox" name="Previousdamage" value="damage" id="Previousdamage"/>
                                        <label for="Previousdamage">been sued for property damage?</label>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col col-form-checkbox">
                                        <input class="radio" type="checkbox" name="Previouscrime" value="crime" id="Previouscrime"/>
                                        <label for="Previouscrime">been charged, detained, or arrested for a felony, misdemeanor involving a controlled substance, violence to another person or destruction of property, or a sex crime that was resolved by conviction, probation, deferred adjudication, court ordered community supervision, or pretrial diversion?</label>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col col-form-checkbox">
                                        <input class="radio" type="checkbox" name="Previousfelony" value="felony" id="Previousfelony"/>
                                        <label for="Previousfelony">been charged, detained, or arrested for a felony, misdemeanor involving a controlled substance, violence to another person or destruction of property, or a sex crime that has not been resolved by any method? Please indicate below the year, location and type of each felony, misdemeanor involving a controlled substance, violence to another person or destruction of property, or sex crime other than those resolved by dismissal or acquittal.<p>We may need to discuss more facts before making a decision</p> </label>       
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-12">
                                        <input class="radio" type="checkbox" name="Currentanswer" value="answer" id="Currentanswer"/>
                                        <label for="Currentanswer">You represent the answer is "no" to any item not checked above.</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[5].status=='active'}">
                                <UIFormSpouse></UIFormSpouse>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[6].status=='active'}">
                                <UIFormOccupants></UIFormOccupants>
                            </div>
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[7].status=='active'}">
                                <UIFormVehicle></UIFormVehicle>
                            </div>
                            
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[8].status=='active'}">
                                <UIFormEmergency></UIFormEmergency>
                            </div>
                            
                            <div class="form-tabs-content" :class="{'active': form_tabs_stat[9].status=='active'}">
                                <UIFormAuthorization></UIFormAuthorization>
                            </div>
                            
                            <!-- <div class="form-tabs-content" :class="{'active': form_tabs_stat[10].status=='active'}">
                                <UIFormDisclosure></UIFormDisclosure>
                            </div> -->
                        </div>
                    </form>
                    <div class="col-12 mb-3 mt-3 text-center">
                        <!-- <p>By submitting the document I the above named as Tenant 1, state that the information is true and correct to the best of my knowledge. I understand that this record will be recorded in my file with WA Tenant Bureau. My IP Address is recorded as my electronic signature.</p> -->
                        <button class="btn btn-primary btn-block" type="button" @click="formPostSubmit" >Submit Information</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
