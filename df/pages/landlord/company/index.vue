<script>
import { required, email,minLength,sameAs,url } from "vuelidate/lib/validators";
import vue2Dropzone from "vue2-dropzone";
import Swal from "sweetalert2";
import {country_and_states} from "./../../../helpers/app.countries";
import UIAgreementMessage from "./../../../components/ui-basic/agreement-confirm.vue";
import UIAgreementErrorMessage from "./../../../components/ui-basic/agreement-error.vue";
import UIContractAgreementView from "./../../../components/ui-basic/agreement-contract-view.vue";
import UIContractTimeLineView from "./../../../components/ui-basic/contract-timeline-view.vue";

/**
 * Useers
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    data() {
        return {
            title: "Company",
            items: [{
                    text: "WA"
                },
                {
                    text: "Landlord"
                },
                {
                    text: "Company",
                    active: true
                }
            ],
            optCountries:country_and_states.country,
            optCities:[],
            optStates:[],
            company: {
                company_name: "",
                company_address: "",
                company_mail_address: "",
                company_phone: "",
                company_email: "",
                // company_contact: "",
                country: "",
                states: "",
                cities: "",
                company_website: "",
                company_whatapp: "",
                company_fax: "",
                company_contact_name: "",
                company_contact_middlename: "",
                company_contact_lastname: "",
                company_contact_phone: "",
                company_contact_cellphone: "",
                company_contact_whatapp: "",
                company_contact_email: "",
                company_registration_type: "",
                company_number_search: "",
                company_number_of_employee: "",

            },
            submitted: false,
            regError: null,
            tryingToRegister: false,
            isRegisterError: false,
            registerSuccess: false,
            isAgreeNoChecked: true,
            isAgree: false,
            isRegisterSuccess: true,
            showAgreementMsg: false,
            showAgreementErrorMsg: false,
            LandLordName:"",
            LandLordID:0,
            detailsIsLoaded: false,
            showRegisterForm: false,
            companyDetails:null,
            LandLordFirstName:null,
            urlGetData:this.$route.query.q,
            timelineLogs:null,
            timeLineAlignment:0,
            setAlignment:0,
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
        };
    },
    validations: {
        company: {
            company_name: { required },
            company_address: { required },
            // company_mail_address: { required },
            company_phone: { required },
            company_email: { required },
            // company_contact: { required },
            country: { required },
            cities: { required },
            states: { required },
            // company_website: { required },
            company_whatapp: { required },
            company_fax: { required },
            company_contact_name: { required },
            // company_contact_middlename: { required },
            company_contact_lastname: { required },
            company_contact_phone: { required },
            company_contact_cellphone: { required },
            company_contact_whatapp: { required },
            company_contact_email: { required },
            company_registration_type: { required },
            company_number_of_employee: { required },
            company_number_search: { required },
            
        },
    },
    computed: {
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
        notificationAutoCloseDuration() {
            return this.$store && this.$store.state.notification ? 5 : 0;
        },
    },
    mounted() {
        this.isAgreeNoChecked=true;
        this.getContractCompany();
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
        onCompletedUpload: function(response){
            if(response.status == 'success'){
                this.$router.push('/properties');
            }
        },
        async postCreateCompanyLandlord(form_data){
            let response = await this.$axios.$post('/landlords/create-agreement/',form_data);
            if(response.status=='ok') {
                this.isRegisterSuccess=true;
                this.showAgreementMsg=true;
                const photoQT = this.$refs.photosUploader.dropzone.files.length;
                if( photoQT > 0){
                    this.$refs.photosUploader.setOption("url", process.env.apiBaseUrl+"/photos/photo-upload/"+response.data.insertId+"/3");
                    this.$refs.photosUploader.processQueue();
                }
                setTimeout(() => {
                    // window.location.reload();
                }, "4000")
            }
        },
        async tryToRegisterIn() {
            const form_data=this._handleFormGetData('form_register_company');
            this.submitted = true;
            this.$v.$touch();
            const photoQT = this.$refs.photosUploader.dropzone.files.length;
            
            if( photoQT > 3){
                Swal.fire({
                    icon: 'error',
                    title: 'Please set 3 pictures or documents as maximum!',
                    showConfirmButton: true,
                    confirmButtonText: "Ok",
                });
                return;
            }
            if (this.$v.$invalid) {
                return;
            } else {
                
                Swal.fire({
                    title: "Are you sure?",
                    text: "If you want to complete the process, press [Yes, continue]!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, continue",
                    cancelButtonText: "Cancel!",
                }).then((result) => {
                    if (result.value) {
                        this.postCreateCompanyLandlord(form_data); 
                    } 
                });
               
            }
        },
        async getStatesCities(){
            // console.log(this.company);
            let response = await this.$axios.$get('/bo/states/'+this.company.country);
            this.optStates=response.data;
        },
        async getCities(){
            let response = await this.$axios.$get('/bo/cities/'+this.company.states);
            this.optCities=response.data;
        },
        async getUserLandLord(){
            // console.log('dd',this.urlGetData )
            if( this.$auth.user.user_link_id != undefined && this.$auth.user.user_link_id != null){
                let response = await this.$axios.$get('/landlords/user-agreement/'+this.$auth.user.user_link_id);
                if(response.status =='empty'){
                    this.isRegisterSuccess=true; 
                    this.showAgreementErrorMsg=true; 
                }else{
                    this.LandLordName=response.data.user_login_username;
                    this.LandLordID=response.data.user_login_id;
                }
            }else{
                this.isRegisterSuccess=true; 
                this.showAgreementErrorMsg=true; 
            }
        },
        onSetAlignment(setIndex,setCount){
            let res=0;
            if(setCount ==0){this.setAlignment=setIndex;}
            if(this.setAlignment ==setIndex){
                res =1;
            }else{
                res =0;
            }
            return res;
        },
        async updateApproval() {
            let response = await this.$axios.$post("/company/update-approval/"+this.urlGetData, {
                user_updated: this.$auth.user.user_login_id,
            });
            this.getContractCompany();
        },
        onUpdateSetAliment(setIndex){
            this.setAlignment=setIndex;
        },
        async getContractCompany(){
            let landlordSplit=[];
            if( this.$auth.user.user_login_id != undefined && this.$auth.user.user_login_id != null){
                let response = await this.$axios.$post('/landlords/view-agreement/'+this.$auth.user.user_login_id);
                if(response.status =='ok'){
                    landlordSplit=response.data.landlord_name;
                    landlordSplit=landlordSplit.split(' ');
                    this.LandLordFirstName=landlordSplit[0].charAt(0)+landlordSplit[1].charAt(0);
                    this.companyDetails=response.data; 
                    this.setAlignment=response.data[0]; 
                    this.timelineLogs=response.time_logs; 
                    this.detailsIsLoaded=true;
                }else{
                    this.getUserLandLord();
                    this.isRegisterSuccess=false;
                    this.showRegisterForm=true;
                }
            }else{
                this.companyDetails=null; 
                this.getUserLandLord();
                this.showRegisterForm=true;
            }
        }
    },
    components: {
        // formAddUser,
        // formEditUser,
        vueDropzone: vue2Dropzone,
        UIAgreementMessage,
        UIAgreementErrorMessage,
        UIContractAgreementView,
        UIContractTimeLineView
    },
    created() {
        this.$root.$refs.landlordContractAgreement = this;
    },
    watch:{
        isAgree:function(v){
            this.isAgreeNoChecked=true;
            if(v==true){
                this.isAgreeNoChecked=false;
            }else{
                this.isAgreeNoChecked=true;
            }
        }
    },
    middleware: 'auth',

};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-if="showRegisterForm" class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <UIAgreementErrorMessage :isConfirmedShow="showAgreementErrorMsg" :companyInformation="company"></UIAgreementErrorMessage>
                    <div v-if="showAgreementMsg" class="col-md-12 col-lg-12 col-xl-12">
                        <div class="mt-3 text-center">
                            <div class="avatar-lg rounded-circle bg-icon-primary p-center-text">
                                <i class="mdi mdi-account-group-outline font-28 avatar-title text-white"></i>
                            </div>

                            <h3>We recieved your information !</h3>
                            <p class="text-muted mt-2">
                                <span class="font-weight-bolder text-black-50">{{ company.company_name }}</span>.
                                Thank you for information submitted.<br/><br/>
                                Our agents will verify the information received, once approved you will receive an approval email..
                            </p>

                            <!-- <nuxt-link to="/" class="btn btn-block btn-primary waves-effect waves-light mt-3">Back to Home</nuxt-link> -->
                        </div>
                    </div>
                    <!-- <UIAgreementMessage :isConfirmedShow="showAgreementMsg" :companyInformation="company"></UIAgreementMessage> -->
                    <div v-if="isRegisterSuccess == false" class="col-md-12 col-lg-12 col-xl-12">
                        <div class="text-center w-75 m-auto">
                            <div class="auth-logo">
                                <nuxt-link to="javascript:void(0);" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="~/assets/images/logo_wa.png" alt="" height="140">
                                    </span>
                                </nuxt-link>

                                <nuxt-link to="javascript:void(0);" class="logo logo-light text-center">
                                    <span class="logo-lg">
                                        <img src="~/assets/images/logo_wa.png" alt="" height="140">
                                    </span>
                                </nuxt-link>
                            </div>
                            <h1>CONTRACT AGREEMENT</h1>
                            <p class="text-muted mb-4 mt-3">Please, you must fill in all the fields about the company.</p>
                        </div>

                        <form action="#" id="form_register_company">
                            <input type="hidden" name="company_landlord_id" v-model="LandLordID"/>
                            <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration successfull.</b-alert>

                            <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible :show="notificationAutoCloseDuration">{{regError}}</b-alert>

                            <b-alert :variant="notification.type" class="mt-3" v-if="notification.message" :show="notificationAutoCloseDuration" dismissible>{{notification.message}}</b-alert>
                            <div class="container-re bg-secondary text-white p-3">
                                <div class="form-row ">
                                    <div class="form-group col-md-5">
                                        <label for="CompanyName" class="form-label">Company Name</label>
                                        <input type="text" class="form-control form-control-sm" id="company_name" name="company_name" placeholder="Enter company name" v-model="company.company_name"  :class="{ 'is-invalid': submitted && $v.company.company_name.$error }">
                                        <div v-if="submitted && !$v.company.company_name.required" class="invalid-feedback">Company Name is required.</div>
                                    </div>
                                    <div class="form-group col-md-5">
                                        <label for="user_lastname">Landlord</label>
                                        <input class="form-control form-control-sm" v-model="LandLordName" readonly type="text"   disabled="true" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="CompanyAddress" class="form-label">Address</label>
                                        <input class="form-control form-control-sm"  v-model="company.company_address" type="text" id="company_address" name="company_address" placeholder="Enter company address" :class="{ 'is-invalid': submitted && $v.company.company_address.$error }" >
                                        <div v-if="submitted && !$v.company.company_address.required" class="invalid-feedback">Addres is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="CompanyCountry" class="form-label">Country</label>
                                        <select id="company_country" class="form-control form-control-sm" v-model="company.country" 
                                                name="company_country"         
                                                @change="getStatesCities"
                                                :class="{ 'is-invalid': submitted && $v.company.country.$error }">
                                            <option>select country</option>
                                            <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.country.required" class="invalid-feedback">Country is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="CompanyProvinceState">Province/State</label>
                                        <select class="form-control form-control-sm" name="company_state"  v-model="company.states" 
                                            @change="getCities"
                                            :class="{ 'is-invalid': submitted && $v.company.states.$error }"  >
                                            <option>Select Province/State</option>
                                            <option v-for="c in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.states.required" class="invalid-feedback">State is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="Compacompany_citynyCity" class="form-label">City</label>
                                        <select name="company_city" class="form-control form-control-sm" id="company_city" v-model="company.cities"
                                                :class="{ 'is-invalid': submitted && $v.company.cities.$error }" >
                                            <!-- <option>Select City</option> -->
                                            <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.cities.required" class="invalid-feedback">City is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="CompanyPhone" class="form-label">Phone Number</label>
                                        <input type="text" class="form-control form-control-sm" v-model="company.company_phone"  id="company_phone" name="company_phone" placeholder="Enter Telephone" :class="{ 'is-invalid': submitted && $v.company.company_phone.$error }">
                                        <div v-if="submitted && !$v.company.company_phone.required" class="invalid-feedback">Phone is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_fax">Fax Number</label>
                                        <input type="text" class="form-control form-control-sm" name="company_fax" id="company_fax" v-model="company.company_fax" :class="{ 'is-invalid': submitted && $v.company.company_fax.$error }">
                                        <div v-if="submitted && !$v.company.company_fax.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_whatapp" class="form-label">Company What'sApp Number</label>
                                        <input type="text" class="form-control form-control-sm" name="company_whatapp" id="company_whatapp" v-model="company.company_whatapp" :class="{ 'is-invalid': submitted && $v.company.company_whatapp.$error }">
                                        <div v-if="submitted && !$v.company.company_whatapp.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="CompanyEmail" class="form-label">Company Email</label>
                                        <input type="text" class="form-control form-control-sm" v-model="company.company_email" id="company_email" name="company_email" placeholder="Enter Email Address" :class="{ 'is-invalid': submitted && $v.company.company_email.$error }">
                                        <div v-if="submitted && !$v.company.company_email.required" class="invalid-feedback">Email is required.</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="company_website">Company Website</label>
                                        <input type="text" class="form-control form-control-sm" name="company_website" id="company_website" placeholder="HTTPS://" v-model="company.company_website" >
                                    </div>
                                </div>
                                <hr style="background-color: black;">
                                <div class="form-row ">
                                    <div class="form-group col-md-3 ">
                                    <label for="company_contact_name" class="form-label">Contact's First Name</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_name" id="company_contact_name" v-model="company.company_contact_name" :class="{ 'is-invalid': submitted && $v.company.company_contact_name.$error }">
                                        <div v-if="submitted && !$v.company.company_contact_name.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_middlename" class="form-label" >Middle Name</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_middlename" id="company_contact_middlename" >
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_lastname" class="form-label">Last Name</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_lastname" id="company_contact_lastname" v-model="company.company_contact_lastname" :class="{ 'is-invalid': submitted && $v.company.company_contact_lastname.$error }">
                                        <div v-if="submitted && !$v.company.company_contact_lastname.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_phone" class="form-label">Phone Number</label>
                                        <input type="text" class="form-control form-control-sm" id="company_contact_phone" name="company_contact_phone" v-model="company.company_contact_phone" :class="{ 'is-invalid': submitted && $v.company.company_contact_phone.$error }">
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_cellphone">Cell Number</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_cellphone" id="company_contact_cellphone" v-model="company.company_contact_cellphone" :class="{ 'is-invalid': submitted && $v.company.company_contact_cellphone.$error }">
                                        <div v-if="submitted && !$v.company.company_contact_lastname.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_whatapp" class="form-label">What'sApp Number</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_whatapp" id="company_contact_whatapp" v-model="company.company_contact_whatapp" :class="{ 'is-invalid': submitted && $v.company.company_contact_whatapp.$error }">
                                        <div v-if="submitted && !$v.company.company_contact_lastname.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="company_contact_email" class="form-label">Email Address</label>
                                        <input type="text" class="form-control form-control-sm" name="company_contact_email" id="company_contact_email" v-model="company.company_contact_email" :class="{ 'is-invalid': submitted && $v.company.company_contact_email.$error }">
                                        <div v-if="submitted && !$v.company.company_contact_email.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                                <hr style="background-color: black;">
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="company_registration_type" class="form-label">Company Registration or Tax ID#</label>
                                        <select name="company_registration_type" class="form-control form-control-sm" id="company_registration_type" v-model="company.company_registration_type" :class="{ 'is-invalid': submitted && $v.company.company_registration_type.$error }">
                                            <option>Select One</option>
                                            <option value="1">Registation Number</option>
                                            <option value="2">Tax Number</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.company_registration_type.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label>Registation/Tax #</label>
                                        <input type="text" class="form-control form-control-sm" id="company_registeration_no" name="company_registeration_no">
                                    </div>
                                    
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="company_number_of_employee">Number of employees that will be using the system</label>
                                        <select name="company_number_of_employee" class="form-control form-control-sm" id="company_number_of_employee" v-model="company.company_number_of_employee" :class="{ 'is-invalid': submitted && $v.company.company_number_of_employee.$error }">
                                            <option>Select One</option>
                                            <option value="1">1-5</option>
                                            <option value="2">6-10</option>
                                            <option value="3">10 +</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.company_number_of_employee.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="company_number_search">How many searches per month are expected?</label>
                                        <select name="company_number_search" class="form-control form-control-sm" id="company_number_search"  v-model="company.company_number_search" :class="{ 'is-invalid': submitted && $v.company.company_number_search.$error }">
                                            <option>Select One</option>
                                            <option value="1">1-10</option>
                                            <option value="2">11-50</option>
                                            <option value="3">51-100</option>
                                            <option value="4">101 +</option>
                                        </select>
                                        <div v-if="submitted && !$v.company.company_number_search.required" class="invalid-feedback">It is required.</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="container-e bg-secondary text-white p-3">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="FormControlFileId">Upload Documents</label>
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
                            <div class="form-group mb-5 mt-5">
                                <div class="content-contract-agreement">
                                    <h2 class="text-center contract-title mb-5 mt-3">
                                        Hereinafter called “Member” & World Association Tenant Bureau, also known as WA Tenant Bureau, hereinafter called “WA”.
                                    </h2>
                                    <p>
                                        This contract agreement is for the sole use of data searches for rental applications, that have signed a release, giving permission to use the database.

                                        The information found and shared on WA's platform is for the sole purpose of verifying the rental history of the applicant.
                                    </p>
                                    <!-- <p>I/We, the company, understand that I/We, will be required to input truthful information on and in regards my/our tenants.</p>

                                    <p>I/We, will keep records on file to prove and support any search approvals and or input of derogatory information.</p>

                                    <p>I/We, will supply said records to WA investigation upon request, due to a tenant's dispute of such.</p>

                                    <p>I/We, will not share any information found on WA's database other then for the approval of said applicant.</p>

                                    <p>I/We, understand that due to the cross-border searches, that I/We, MUST have the written permission from the applicant to do such search within the database.</p>

                                    <p>I/We the Member, hereby takes full responsibility for all action done by anyone under my/our membership number.</p>

                                    <p>I/We, hold World Association Tenant Bureau, its founders, developers, shareholders, employees, other members, or anyone associated with World Association Tenant Bureau harmless for all or any legal action whatsoever associated with the use of WA's database and information found within.</p> -->
                                    <ul class="contract-list-item">
                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, the company, understand that I/We, will be required to input truthful information on and in regards my/our tenants.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, will keep records on file to prove and support any search approvals and or input of derogatory information.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, will supply said records to WA investigation upon request, due to a tenant's dispute of such.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, will not share any information found on WA's database other then for the approval of said applicant.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, understand that due to the cross-border searches, that <span class="contract-b-text">I/We</span>, MUST have the written permission from the applicant to do such search within the database.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span> the Member, hereby takes full responsibility for all action done by anyone under my/our membership number.</li>

                                        <li class="contract-item"><span class="contract-b-text">I/We</span>, hold World Association Tenant Bureau, its founders, developers, shareholders, employees, other members, or anyone associated with World Association Tenant Bureau harmless for all or any legal action whatsoever associated with the use of WA's database and information found within.</li>
                                    </ul>
                                    <h3> WA</h3>
                                    <p>We at WA will do our due diligence to make sure all information within our database is true and correct to the best of our ability.However, we at WA, our associates, Employees, our shareholders, and our members, take or accept any liability or responsibility for the use of or data accessed, or stored on any of our server.</p>

                                    <ul class="contract-list-item">
                                        <li class="contract-item">WA will do our best to keep our servers online and up to date with data and security of such server and data.</li>
                                        <li class="contract-item">WA will supply a timely response to emails and phone calls or text messages.</li>
                                        <li class="contract-item">WA will NEVER sell information of its members.</li>
                                        <li class="contract-item">I/WE the member, have the read and agree to this contract and will abide by all rules of WA, that will be posted on their website or other means of communication.</li>
                                        <li class="contract-item">I/We, also agree that cookies may and will be used for tracking and verification purposes.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form-group text-center">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="checkbox-signup" v-model="isAgree"/>
                                    <label class="contract-text-sign custom-control-label" for="checkbox-signup">
                                        I accept
                                        <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group mb-0 text-center">
                                <button :disabled="isAgreeNoChecked" @click="tryToRegisterIn" class="btn btn-primary btn-block" type="button">Submit Agreement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="detailsIsLoaded" class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <UIContractAgreementView :companyDetails="companyDetails" :LandLordFirstName="LandLordFirstName" @markApproved="updateApproval"></UIContractAgreementView>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <UIContractTimeLineView :timelineLogs="timelineLogs"></UIContractTimeLineView>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
