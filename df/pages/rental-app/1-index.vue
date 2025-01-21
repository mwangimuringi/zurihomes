<script>

    import {required,email,minLength,sameAs,maxLength,minValue,maxValue,numeric,alphaNum,} from 'vuelidate/lib/validators';
    import {FormWizard,TabContent,WizardButton } from "vue-form-wizard";
    import Swal from "sweetalert2";
    import vue2Dropzone from "vue2-dropzone";
    import CKEditor from "@ckeditor/ckeditor5-vue";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import {country_and_states} from "../../helpers/app.countries";
    import "vue-form-wizard/dist/vue-form-wizard.min.css";

    import UIFormAU from "./ui-forms/form-about-you.vue";
    import UIFormAddreses from "./ui-forms/form-address.vue";
    import UIFormAddresesPrev from "./ui-forms/form-address-p.vue";
    import UIFormEmployeer from "./ui-forms/form-employeer.vue";
    import UIFormCredit from "./ui-forms/form-credit.vue";
    import UIFormCriminal from "./ui-forms/form-criminal.vue";
    import UIFormSpouse from "./ui-forms/form-spouse.vue";
    import UIFormOccupants from "./ui-forms/form-occupants.vue";
    import UIFormVehicle from "./ui-forms/form-vehicle.vue";
    import UIFormEmergency from "./ui-forms/form-emergency.vue";
    import UIFormAuthorization from "./ui-forms/form-authorization.vue";
    import UIFormDisclosure from "./ui-forms/form-disclosure.vue";
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
            FormWizard,
            TabContent,
            WizardButton,
            vueDropzone: vue2Dropzone,
            ckeditor: CKEditor.component,
            UIFormAU,
            UIFormAddreses,
            UIFormAddresesPrev,
            UIFormEmployeer,
            UIFormCredit,
            UIFormCriminal,
            UIFormSpouse,
            UIFormOccupants,
            UIFormVehicle,
            UIFormEmergency,
            UIFormAuthorization,
            UIFormDisclosure
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
                
                
                loadingWizard:false,
                editor: ClassicEditor,
                editorData: "<p>Content of the editor.</p>",
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
                        // 'Access-Control-Allow-Origin': '*',
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
            isLastStep() {
                if (this.$refs.wizard) {
                    return this.$refs.wizard.isLastStep;n
                }
                return false;
            },
            geolocate: function() {
                
                if(this.property.geolocation_map == undefined || this.property.geolocation_map == null){
                    navigator.geolocation.getCurrentPosition(position => {
                        this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        };
                        this.map_markers[0]={
                            position:{
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            }
                        };
                        this.map_marker_lo.position = { lat: position.coords.latitude, lng: position.coords.longitude };
                    });
                }else{
                    const getPosition = this.property.geolocation_map.split(',');
                    this.center = {lat: Number(getPosition[0]),lng: Number(getPosition[1])};
                    this.map_markers[0]={
                        position:{
                            lat: Number(getPosition[0]),
                            lng: Number(getPosition[1])
                        }
                    };
                }
            },
            handleMarkerDrag(e) {
                this.map_marker_lo.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
            },
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
            setLoading: function(value) {
                this.loadingWizard = value
            },
            handleValidation: function(isValid, tabIndex){
                console.log('Tab: '+tabIndex+ ' valid: '+isValid)
            },
            validateAsync:function() {
                return new Promise((resolve, reject) => {
                    // setTimeout(() => {
                    //     const checkFields =['name', 'description', 'country','states','city','built_size','bedrooms_qt','bathrooms_qt','floors_qt','category','price'];
                    //     this.$v.$touch();
                    //     let isValid =true;
                    //     this.formGeneral = true
                    //     for (const key in checkFields) {
                    //         if (checkFields.hasOwnProperty.call(checkFields, key)) {
                    //             const element = checkFields[key];
                    //             if (this.$v.property[element].$invalid === true){ 
                    //                 isValid =false;
                    //                 reject('This is a custom validation error message. Click next again to get rid of the validation');
                    //             }
                    //         }
                    //     }
                    //     if(isValid == true) {
                    //         resolve(true);
                    //     }
                    // }, 2000)
                })
            },
            validateInfoAsync:function() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const checkFields =['availability', 'status', 'is_public','contract_term'];
                        this.$v.$touch();
                        let isValid =true;
                        this.formInfo = true
                        for (const key in checkFields) {
                            if (checkFields.hasOwnProperty.call(checkFields, key)) {
                                const element = checkFields[key];
                                if (this.$v.property[element].$invalid === true){ 
                                    isValid =false;
                                    reject('This is a custom validation error message. Click next again to get rid of the validation');
                                }
                            }
                        }
                        if(isValid == true) {
                            resolve(true);
                        }
                    }, 2000)
                })
            },
            validatePhotoAsync:function() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const checkFields =['availability', 'status', 'is_public','contract_term'];
                        this.$v.$touch();
                        let isValid =true;
                        const photoQT = this.$refs.photosUploader.dropzone.files.length;
                        if( photoQT < 3){
                            isValid =false;
                            reject('This is a custom validation error message. Click next again to get rid of the validation');
                        }
                        if(isValid == true) {
                            resolve(true);
                        }
                    }, 2000)
                })
            },
            onCompleteForm(){
                //this.property.landlord_id=this.$auth.user.user_login_id;
                this.formPostSubmit();
            },
            async getStatesCities(){
                // console.log(this.company);
                let response = await this.$axios.$get('/bo/states/'+this.property.country);
                // this.optStates=response.data;
            },
            // async getCities(){
            //     let response = await this.$axios.$get('/bo/cities/'+this.property.states);
            //     this.optCities=response.data;
            // },
            async getStatesList(e){
                this.optStates=await this.appGetStatesList(e);
            },
            async getCitiesList(e){
                this.optCities=await this.appGetCitiesList(e);
            },
            async getStatesList2(e){
                this.optStates2=await this.appGetStatesList(e);
            },
            async getCitiesList2(e){
                this.optCities2=await this.appGetCitiesList(e);
            },
            async appGetStatesList(e){
                let response = await this.$axios.$get('/bo/states/'+e);
                return response.data;
            },
            async appGetCitiesList(e){
                let response = await this.$axios.$get('/bo/cities/'+e);
                return response.data;
            },
            formPostSubmit(){
                //let formData = this.property;
                    // formData.built_size=formData.built_size.replace('sqm','');
                    // formData.price=formData.price.replace('$','');
               let  formData = this._handleFormGetData('form_user_add');
                    
                Swal.fire({
                    title: "Are you sure?",
                    text: "If you want to add an property, press [Yes, continue]!",
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
                let response = await this.$axios.$post('/user/rental-application',form_data);
                if(response.status=='ok'){
                    // this.dropzoneOptions.url=this.dropzoneOptions.url+response.property_id;
                    //this.$refs.photosUploader.setOption("url", process.env.apiBaseUrl+"/photos/photo-upload/"+response.property_id);
                    //this.$refs.photosUploader.processQueue();
                    
                     this.$toast.success('New Record Added!',{duration:2000,fitToScreen:true});
                    // this.closeForm();
                }else{
                    this.$toast.error(response.message,{duration:2000,fitToScreen:true});
                }
                //this.company = response.data;
            },
            onCompletedUpload: function(response){
                if(response.status == 'success'){
                    this.$router.push('/properties');
                }
            },
            onModalAccept(){
                // this.property.geolocation_map=`${this.map_marker_lo.position.lat},${this.map_marker_lo.position.lng}`;
                this.property.geolocation_map=`${parseFloat(this.map_marker_lo.position.lat).toFixed(4)},${parseFloat(this.map_marker_lo.position.lng).toFixed(4)}`;
            }
        },
        middleware: "auth",
    }
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <!-- <b-modal id="modal-1" @ok="onModalAccept" title="Find Location" title-class="font-18" modal-class="md-modal-sel-map">
                    <h5>Coordenates</h5>
                    <p>Latitude: {{ map_marker_lo.position.lat }}, longitude: {{ map_marker_lo.position.lng }}</p>
                    <hr>
                    <h5>Moves the pointer where the property is located</h5>
                    <div>
                        <GmapMap :center="center" :options="map_options" :zoom="10" style="height: 300px">
                             <GmapMarker
                                :key="index"
                                v-for="(m, index) in map_markers"
                                :position="m.position"
                                @click="center=m.position"
                                :clickable="true"
                                :draggable="true"
                                @drag="handleMarkerDrag"
                            />
                        </GmapMap>
                    </div>
                </b-modal> -->
                <div class="card-body">
                    <form-wizard color="#3bafda" ref="wizard" id="form_user_add" @on-complete="onCompleteForm" 
                        @on-loading="setLoading"
                        @on-validate="handleValidation"
                        >
                        <tab-content title="Step 1" >
                            <!-- <h4 class="header-title">ABOUT YOU</h4>
                            <p class="sub-header">Fill all information below</p> -->
                            <UIFormAU :opt_country="optCountries" :opt_states="optStates" :opt_city="optCities"
                            @onGetStates="getStatesList" @onGetCities="getCitiesList"
                            ></UIFormAU>
                            <ul class="pager wizard mb-0 list-inline text-right mt-3">
                                <li class="next list-inline-item"></li>
                            </ul>
                        </tab-content>

                        <!-- <tab-content title="Property Photos" >
                            <h4 class="header-title">Property Photos</h4>
                            <p class="sub-header">Upload Photos</p>

                            <vue-dropzone id="dropzone" ref="photosUploader" 
                            v-on:vdropzone-complete="onCompletedUpload" 
                            :use-custom-slot="true" 
                            :options="dropzoneOptions">
                                <div class="dz-message needsclick">
                                    <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                    <h3>Drop files here or click to upload.</h3>
                                    <span class="text-muted font-13">
                                        (Upload photos for the property. Selected files are
                                        <strong>not</strong> actually uploaded.)
                                    </span>
                                </div>
                            </vue-dropzone>
                        </tab-content> -->

                        <tab-content title="Step 2"
                            
                            >
                            <!-- <h4 class="header-title">Other Information</h4>
                            <p class="sub-header">Fill all information below</p> -->

                            <UIFormAddreses :opt_country="optCountries" :opt_states="optStates2" :opt_city="optCities2"
                            @onGetStates="getStatesList2" @onGetCities="getCitiesList2"></UIFormAddreses>
                        </tab-content>
                        <tab-content title="Step 3">
                            <UIFormAddresesPrev></UIFormAddresesPrev>
                        </tab-content>
                        <tab-content title="Step 4">
                            <UIFormEmployeer></UIFormEmployeer>
                        </tab-content>
                        
                        <tab-content title="Step 5">
                            <UIFormCredit></UIFormCredit>
                        </tab-content>
                        
                        <tab-content title="Step 6">
                            <UIFormCriminal></UIFormCriminal>
                        </tab-content>

                        <tab-content title="Step 7">
                            <UIFormSpouse></UIFormSpouse>
                        </tab-content>
                        
                        <tab-content title="Step 8">
                            <UIFormOccupants></UIFormOccupants>
                        </tab-content>
                        
                        <tab-content title="Step 9">
                            <UIFormVehicle></UIFormVehicle>
                        </tab-content>
                        
                        <tab-content title="Step 10">
                            <UIFormEmergency></UIFormEmergency>
                        </tab-content>
                        
                        <tab-content title="Step 11">
                            <UIFormAuthorization></UIFormAuthorization>
                        </tab-content>
                        
                        <tab-content title="Step 12">
                            <UIFormDisclosure></UIFormDisclosure>
                        </tab-content>


                        <div class="loader" v-if="loadingWizard"></div>
                    </form-wizard>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
