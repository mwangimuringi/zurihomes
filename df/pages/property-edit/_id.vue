<script>
import {required,email,minLength,sameAs,maxLength,minValue,maxValue,numeric,alphaNum,} from 'vuelidate/lib/validators';
import Swal from "sweetalert2";
import vue2Dropzone from "vue2-dropzone";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {country_and_states} from "../../helpers/app.countries";
// import "vue-form-wizard/dist/vue-form-wizard.min.css";
// import { directive } from '@coders-tm/vue-number-format';
// import { component } from '@coders-tm/vue-number-format'
// import { directive } from '@coders-tm/vue-number-format';
/**
 * Product-detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    async asyncData({
        params
    }) {
        return params.id;
        // const productDetail = products.find(
        //     (user) => String(user.id) === params.id
        // );
        // return {productDetail};
        // let response = await this.$axios.$post("/properties/view/"+params.id);
        // this.propertyDetail=response.data;
        // this.propertyPhotos=response.photos;
        // return {property:response.data,photos:response.photos};
    },
    components: {
        vueDropzone: vue2Dropzone,
        ckeditor: CKEditor.component,
        // component,
    },
    data() {
        return {
            title: "Property Edit",
            items: [{
                    text: "WA",
                },
                {
                    text: "Properties",
                },
                {
                    text: "Property Edit",
                    active: true,
                },
            ],
            optCountries:country_and_states.country,
            optCities:[],
            optStates:[],
            property:null,
            isLoaded:false,
            isLoadedCity:false,
            propertyIdRegUI:this.$route.params.id,
            propertyDetail: null,
            propertyPhotos: [],
            propertyAmenities: [],
            propertyCity: null,
            propertyStates: null,
            formGeneral:false,
            formInfo:false,
            formComplete:false,
            center: { lat: 58.90, lng: -112.3 },
            map_options: {scrollwheel:true},
            map_markers:[{position:{lat: 58.90,lng: -112.3}}],
            map_marker_lo:{position:{lat: 58.90,lng: -112.3}},
            propertyPhotoURL:process.env.photoBaseUrl,
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
            
        }
    },
    validations: {
        property:{
            name: {required,minLength: minLength(5)},
            country: {required},
            city: {required},
            states: {required},
            // description: {required,minLength: minLength(90)},
            built_size: {required},
            bedrooms_qt: {required,minValue:1,maxValue: 40},
            bathrooms_qt: {required,minValue:1,maxValue: 40},
            floors_qt: {required},
            category: {required},
            price: {required},
            year_built: {required},
            // comments
            availability: {required},
            status: {required},
            is_public: {required},
            contract_term: {required},
            geolocation_map: {required},
        }
    },
    // directives: {number: directive,},
    middleware: "auth",
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
        changeImage(data) {
            console.log("check Data", data);
            console.log("myImage ",  document.getElementById("myImage_0"));
            // return false;
            document.getElementById("myImage_0").src = data.target.src
        },
        onCloseEdit(){
            this.$router.push('/properties')
        },
        async getPropertyDetailsPhotos() {
            let response = await this.$axios.$post("/properties/view/"+this.propertyIdRegUI);
            this.property=response.data;
            // this.propertyAmenities=response.data.amenities; this.propertyAmenities=this.propertyAmenities.split(',');
            // this.property.amenities=this.propertyAmenities;
            this.propertyCity=response.data.city;
            this.propertyStates=response.data.states;
            this.propertyPhotos=response.photos;
            const getPosition = this.property.geolocation_map.split(',');
            this.center = {lat: Number(getPosition[0]),lng: Number(getPosition[1])};
            this.map_markers[0]={
                position:{
                    lat: Number(getPosition[0]),
                    lng: Number(getPosition[1])
                }
            };
            this.map_marker_lo.position = { lat: Number(getPosition[0]), lng: Number(getPosition[1]) };
            // console.log('amenities',this.property.amenities)
            // this.getCities();
            // this.getStatesCities();
            this.getCurrentStatesCities();
            // this.isLoaded=true;
            // return {property:response.data,photos:response.photos};
        },
        async reloadPhotos() {
            let response = await this.$axios.$post("/properties/view/"+this.propertyIdRegUI);
            
            this.propertyPhotos=response.photos;
            
        },
        formPostSubmit(){
            let formData = this.property;
            Swal.fire({
                title: "Are you sure?",
                text: "If you want to UPDATE this record, press [Yes, continue]!",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, continue",
                cancelButtonText: "Cancel!",
            }).then((result) => {
                if (result.value) {
                    this.updateRecordDT(formData); 
                } 
            });
        },
        formPostDelete(){
            let formData = this.property;
                
            Swal.fire({
                title: "DELETE, Are you sure?",
                text: "If you want to DELETE this record, press [Yes, delete]!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete",
                cancelButtonText: "Cancel!",
                // confirmButtonClass: "btn btn-success mt-2",
                confirmButtonColor: '#f1556c',
                // cancelButtonClass: "btn btn-danger ml-2 mt-2",
            }).then((result) => {
                if (result.value) {
                    this.deleteRecordDT(formData); 
                } 
            });
        },
        async updateRecordDT(form_data) {
            let response = await this.$axios.$post('/properties/update/'+form_data.id,form_data);
            if(response.status=='ok'){     
                this.$toast.success('It has been successfully updated!',{duration:2000,fitToScreen:true});
                this.onCloseEdit();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
            //this.company = response.data;
        },
        async deleteRecordDT(form_data) {
            let response = await this.$axios.$post('/properties/delete/'+form_data.id,form_data);
            if(response.status=='ok'){     
                this.$toast.success('It has been successfully updated!',{duration:2000,fitToScreen:true});
                this.onCloseEdit();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
            //this.company = response.data;
        },
        async getCurrentStatesCities(){
            
            let response = await this.$axios.$get('/bo/states/'+this.property.country);
            this.optStates=response.data;

            let res = await this.$axios.$get('/bo/cities/'+this.property.states);
            this.optCities=res.data;
            this.isLoadedCity=true;
            this.isLoaded=true;
            
            setTimeout(() => {
                document.getElementById("rental_property_description").value=this.property.description;
                // document.getElementById("property_comments").value=this.property.comments;
            }, "2000")
            // document.getElementById("rental_property_description").value=this.property.description;
            // document.getElementById("property_comments").value=this.property.comments;
        },
        async getStatesCities(){
            // console.log(this.property.country);
            if(this.isLoaded ==true){
                let response = await this.$axios.$get('/bo/states/'+this.property.country);
                this.optStates=response.data;
            }
        },
        async getCities(){
            if(this.isLoaded ==true){
                let response = await this.$axios.$get('/bo/cities/'+this.property.states);
                this.optCities=response.data;
            }
            // this.isLoadedCity=true;
        },
        async removePhoto(idReg,setIndex,key){
            let response = await this.$axios.$get('/photos/photo-remove/'+idReg);
           this.reloadPhotos();
        },
        typingDescription(event) {
            this.property.description = event.target.value
        },
        typingComments(event) {
            this.property.comments = event.target.value
        },
        onCheckAmenities(event) {

        },
        onModalAccept(){
            this.property.geolocation_map=`${parseFloat(this.map_marker_lo.position.lat).toFixed(4)},${parseFloat(this.map_marker_lo.position.lng).toFixed(4)}`;
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
        onCompletedUpload: function(response){
            if(response.status == 'success'){
                this.$router.push('/properties');
            }
        },
    },
    mounted(){
        this.getPropertyDetailsPhotos();
    },
    
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-if="isLoaded" class="row">
        <div class="col-lg-12">
            <div class="card">
                <b-modal id="modal-1" @ok="onModalAccept" title="Find Location" title-class="font-18" modal-class="md-modal-sel-map">
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
                </b-modal>
                <div class="card-body">
                    <form ref="formProperty" id="form_edit_property">
                        <div class="row">
                            <div class="col-lg-12">
                                <h4 class="header-title">General Information</h4>
                                <p class="sub-header">Fill all information below</p>
                                <div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="form-group mb-3">
                                                <label for="product-name">Name<span class="text-danger">*</span></label>
                                                <input type="text" id="product-name" v-model="property.name"  class="form-control" :class="{ 'is-invalid': formGeneral && ($v.property.name.$error || $v.property.name.$invalid) }" placeholder="Name o Title" />
                                                <div v-if="formGeneral && $v.property.name.$error" class="invalid-feedback">
                                                    <span v-if="!$v.property.name.required">This value is required.</span>
                                                    <span v-if="!$v.property.name.minLength">Password must be at least 6 characters.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2">
                                            <div class="form-group mb-3">
                                                <label for="product-name" class="text-primary" v-b-modal.modal-1 @click="geolocate"  >Coordenates(click)<span class="text-danger">*</span></label>
                                                <input type="text" id="product-name" v-model="property.geolocation_map"  class="form-control" 
                                                    :class="{ 'is-invalid': formGeneral && ($v.property.geolocation_map.$error || $v.property.geolocation_map.$invalid) }" 
                                                    placeholder="Get Coordenates " />
                                                <div v-if="formGeneral && $v.property.name.$error" class="invalid-feedback">
                                                    <span v-if="!$v.property.geolocation_map.required">This value is required.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="user_firstname">Country</label>
                                                        <select class="form-control" v-model="property.country" name="rental_property_country" @change="getStatesCities"
                                                            :class="{ 'is-invalid': formGeneral && ($v.property.country.$error || $v.property.country.$invalid) }" 
                                                        >
                                                            <option>Select</option>
                                                            <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                                        </select>
                                                        <div v-if="formGeneral && $v.property.country.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.country.required">This value is required.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="user_lastname">State</label>
                                                        <select name="rental_property_state" class="form-control" v-model="property.states"  @change="getCities"
                                                            :class="{ 'is-invalid': formGeneral && ($v.property.states.$error || $v.property.states.$invalid) }" 
                                                        >
                                                            <option>Select</option>
                                                            <option v-for="c in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                                        </select>
                                                        <div v-if="formGeneral && $v.property.states.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.states.required">This value is required.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="rental_property_city">City</label>
                                                        <select v-if="isLoadedCity" name="rental_property_city" class="form-control" v-model="property.city"
                                                            :class="{ 'is-invalid': formGeneral && ($v.property.city.$error || $v.property.city.$invalid) }" 
                                                        >
                                                            <option>Select</option>
                                                            <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                                        </select>
                                                        <div v-if="formGeneral && $v.property.city.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.city.required">This value is required.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="rental_property_description">Description<span class="text-danger">*</span>
                                        </label>
                                        <!-- <ckeditor id="rental_property_description" name="rental_property_description" v-model="property.description" :editor="editor"></ckeditor> -->
                                        <textarea @input="typingDescription" type="text" :maxlength="400" class="form-control" rows="5" id="rental_property_description" placeholder="Please enter description"></textarea>
                                        <!-- <div v-if="formGeneral && $v.property.description.$error" class="invalid-feedback">
                                            <span v-if="!$v.property.description.required">This value is required.</span>
                                            <span v-if="!$v.property.description.minLength">This value is too short. It should have 6 characters or more.</span>
                                        </div> -->
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div class="form-group mb-3">
                                                        <label for="built_size">SQM of Property<span class="text-danger">*</span></label>
                                                        <!-- <input type="text" class="form-control" v-number="app_vnumber_format.sqm_number" id="built_size" placeholder="Enter amount"  v-model.lazy="property.built_size" :class="{ 'is-invalid': formGeneral && ($v.property.built_size.$error || $v.property.built_size.$invalid) }"/> -->
                                                        <input type="text" class="form-control"  id="built_size" placeholder="Enter amount"  v-model.lazy="property.built_size" :class="{ 'is-invalid': formGeneral && ($v.property.built_size.$error || $v.property.built_size.$invalid) }"/>
                                                        <!-- <vue-number v-model="property.built_size" v-bind="app_vnumber_format.sqm_number"></vue-number> {{property.built_size}} -->
                                                        <div v-if="formGeneral && $v.property.built_size.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.built_size.required">This value is required.</span>
                                                            <span v-if="!$v.property.built_size.minValue">This value should be between 10 and 99,999,999.</span>
                                                            <span v-if="!$v.property.built_size.maxValue">This value should be between 10 and 99,999,999.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-group mb-3">
                                                        <label for="bedrooms_qt">Bedrooms<span class="text-danger">*</span></label>
                                                        <!-- <input type="text"  v-number="app_vnumber_format.number_int" class="form-control" id="bedrooms_qt" name="bedrooms_qt" placeholder="Enter amount" v-model.lazy="property.bedrooms_qt" :class="{ 'is-invalid': formGeneral && ($v.property.bedrooms_qt.$error || $v.property.bedrooms_qt.$invalid) }"/> -->
                                                        <input type="text"  class="form-control" id="bedrooms_qt" name="bedrooms_qt" placeholder="Enter amount" v-model.lazy="property.bedrooms_qt" :class="{ 'is-invalid': formGeneral && ($v.property.bedrooms_qt.$error || $v.property.bedrooms_qt.$invalid) }"/>
                                                        <div v-if="formGeneral && $v.property.bedrooms_qt.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.bedrooms_qt.required">This value is required.</span>
                                                            <span v-if="!$v.property.bedrooms_qt.minValue">This value should be between 10 and 99,999,999.</span>
                                                            <span v-if="!$v.property.bedrooms_qt.maxValue">This value should be between 10 and 99,999,999.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-group mb-3">
                                                        <label for="bathrooms_qt">Bathrooms<span class="text-danger">*</span></label>
                                                        <!-- <input type="text" min="1" max="100" class="form-control" v-number="app_vnumber_format.number_int" id="bathrooms_qt" name="bathrooms_qt" placeholder="Enter amount" v-model.lazy="property.bathrooms_qt" :class="{ 'is-invalid': formGeneral && ($v.property.bathrooms_qt.$error || $v.property.bathrooms_qt.$invalid) }"/> -->
                                                        <input type="text" min="1" max="100" class="form-control"  id="bathrooms_qt" name="bathrooms_qt" placeholder="Enter amount" v-model.lazy="property.bathrooms_qt" :class="{ 'is-invalid': formGeneral && ($v.property.bathrooms_qt.$error || $v.property.bathrooms_qt.$invalid) }"/>
                                                        <div v-if="formGeneral && $v.property.bathrooms_qt.$error" class="invalid-feedback">
                                                            <span v-if="!$v.property.bathrooms_qt.required">This value is required.</span>
                                                            <span v-if="!$v.property.bathrooms_qt.minValue">This value should be between 10 and 99,999,999.</span>
                                                            <span v-if="!$v.property.bathrooms_qt.maxValue">This value should be between 10 and 99,999,999.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-group mb-3">
                                                        <label for="floors_qt">Floors<span class="text-danger">*</span></label>
                                                        <!-- <input type="text" min="1" max="100" class="form-control" v-number="app_vnumber_format.number_int" id="floors_qt" name="floors_qt" placeholder="Enter amount" v-model.lazy="property.floors_qt"/> -->
                                                        <input type="text" min="1" max="100" class="form-control" id="floors_qt" name="floors_qt" placeholder="Enter amount" v-model.lazy="property.floors_qt"/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group mb-3">
                                                        <label for="year_built">Year built<span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control"  id="year_built" name="year_built" placeholder="Year built" v-model.lazy="property.year_built"/>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group mb-3">
                                                        <label for="product-category">Category<span class="text-danger">*</span></label>
                                                        <select class="form-control select2" id="product-category" v-model="property.category">
                                                            <option>Select</option>
                                                            <option v-for="c in app_categories_list" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group mb-3">
                                                        <label for="product-price">Price<span class="text-danger">*</span></label>
                                                        <!-- <input type="text" v-number="app_vnumber_format.money"  class="form-control" id="product-price" placeholder="Enter price amount" v-model.lazy="property.price" /> -->
                                                        <input type="text"  class="form-control" id="product-price" placeholder="Enter price amount" v-model.lazy="property.price" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-lg-12"><h4>Amenities</h4></div>
                                        <div class="col-lg-4" v-for="item,index in app_amenities_list" :key="index">
                                            <b-form-checkbox 
                                            :id="`amenities_list-${item.id}`"
                                            :value="item.id"  
                                            :true-value="[]" 
                                            v-model="property.amenities"
                                            unchecked-value="0">{{item.name}}</b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <hr/>
                        <div class="row">
                            <div class="col-lg-12">
                                <h4 class="header-title">Other Information</h4>
                                <p class="sub-header">Fill all information below</p>
                                <div class="row">
                                    <div class="col-3">
                                        <div class="form-group mb-3">
                                            <label for="user_lastname">Availability</label>
                                            <select name="property_availability" class="form-control" v-model="property.availability" 
                                                :class="{ 'is-invalid': formInfo && ($v.property.availability.$error || $v.property.availability.$invalid) }"     
                                            >   
                                                <option>Select</option>
                                                <option v-for="c in app_availability_list" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                            </select>
                                            <div v-if="formInfo && $v.property.availability.$error" class="invalid-feedback">
                                                <span v-if="!$v.property.availability.required">This value is required.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group mb-3">
                                            <label for="product-meta-title">Status</label>
                                            <select name="property_status" class="form-control" v-model="property.status" 
                                                :class="{ 'is-invalid': formInfo && ($v.property.status.$error || $v.property.status.$invalid) }"         
                                            >
                                                <option>Select</option>
                                                <option v-for="c in app_status_list" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                            </select>
                                            <div v-if="formInfo && $v.property.status.$error" class="invalid-feedback">
                                                <span v-if="!$v.property.status.required">This value is required.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group mb-3">
                                            <label for="product-meta-keywords">Public(online)</label>
                                            <select name="property_is_public" class="form-control" v-model="property.is_public" 
                                                :class="{ 'is-invalid': formInfo && ($v.property.is_public.$error || $v.property.is_public.$invalid) }"  
                                            >
                                                <option>Select</option>
                                                <option v-for="c in app_yesnot_list" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                            </select>  
                                            <div v-if="formInfo && $v.property.is_public.$error" class="invalid-feedback">
                                                <span v-if="!$v.property.is_public.required">This value is required.</span>
                                            </div>      
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group mb-0">
                                            <label for="product-meta-description">Contract term</label>
                                            <select name="property_contract_term" class="form-control" v-model="property.contract_term" 
                                                :class="{ 'is-invalid': formInfo && ($v.property.contract_term.$error || $v.property.contract_term.$invalid) }" >
                                                <option>Select</option>
                                                <option v-for="c in app_contractterm_list" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                            </select>
                                            <div v-if="formInfo && $v.property.contract_term.$error" class="invalid-feedback">
                                                <span v-if="!$v.property.contract_term.required">This value is required.</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <!-- <div class="row">
                                    <div class="col-12">
                                        <div class="form-group mb-0">
                                            <label for="product-meta-description">Comments</label>
                                            <textarea @input="typingComments" type="text" :maxlength="400" class="form-control" rows="5" id="property_comments" placeholder="Please enter comment"></textarea>
                                        </div>
                                    </div>
                                </div>  -->
                            </div>
                        </div>
                    </form>
                    <footer id="create-alert-modal___BV_modal_footer_" class="modal-footer">
                        <button type="button" class="btn btn-soft-danger" @click="formPostDelete">Delete</button>
                        <button type="button" class="btn btn-soft-secondary" @click="onCloseEdit">Cancelar</button>
                        <button type="button" class="btn btn-outline-primary width-xl" @click="formPostSubmit">Update</button>
                    </footer>
                    <!-- <h5 class="mt-5 mb-3">Comments</h5>
                    <p>{{ propertyDetail.comments }}</p> -->
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4 class="header-title">Photos</h4>
                            <p class="sub-header">Add or Remove photos</p>
                        </div>
                        <div class="col-lg-6">
                            <table class="table table-centered mb-0">
                                <thead class="font-13 bg-light text-muted">
                                    <tr>
                                        <th class="font-weight-medium">ID</th>
                                        <th class="font-weight-medium"></th>
                                        <th class="font-weight-medium">File Name</th>
                                        <th class="font-weight-medium">Size</th>
                                        <th class="font-weight-medium text-center" style="width: 125px;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tableData, key, index) in propertyPhotos" :key="tableData.id">
                                        <td class="text-muted font-13">{{tableData.id}}</td>
                                        <td>
                                            <img v-if="tableData.file_thumbnail" :src="`${propertyPhotoURL}${tableData.file_thumbnail}`" height="30" alt="icon" class="mr-2" />
                                            
                                        </td>
                                        <td class="text-muted font-13">{{tableData.file_name}}</td>
                                        <td>{{tableData.file_size}}</td>
                                        
                                        <td>
                                            <ul class="list-inline table-action m-0">
                                                <li class="list-inline-item">
                                                    <a href="javascript:void(0);" @click="removePhoto(tableData.id,key,index)" class="action-icon px-1"> <i class="mdi mdi-delete"></i></a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-lg-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
