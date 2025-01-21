<script>
import {country_and_states} from "../../helpers/app.countries";
import { required, email,minLength,sameAs } from "vuelidate/lib/validators";
import UIAgreementMessage from "../../components/ui-basic/agreement-confirm.vue";
import UIAgreementErrorMessage from "../../components/ui-basic/agreement-error.vue";
/**
 * Register component
 */
export default {
    head() {
        return {
            title: `Agreement Contract | `+process.env.appName,
        };
    },
    name: "account-agreement",
    data() {
        return {
            optCountries:country_and_states.country,
            optCities:[],
            optStates:[],
            company: {
                company_name: "",
                company_address: "",
                company_mail_address: "",
                company_phone: "",
                company_email: "",
                company_contact: "",
                country: "",
                states: "",
                cities: "",
                
            },
            submitted: false,
            regError: null,
            tryingToRegister: false,
            isRegisterError: false,
            registerSuccess: false,
            isAgreeNoChecked: true,
            isAgree: false,
            isRegisterSuccess: false,
            showAgreementMsg: false,
            showAgreementErrorMsg: false,
            LandLordName:"",
            LandLordID:0,
            urlGetData:this.$route.query.q
        };
    },
    layout: "auth",
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
        this.getUserLandLord();
    },
    validations: {
        company: {
            company_name: { required },
            company_address: { required },
            company_mail_address: { required },
            company_phone: { required },
            company_email: { required,email },
            company_contact: { required },
            country: { required },
            cities: { required },
            states: { required },
            
        },
    },
    created() {},
    methods: {
        // Try to register the user in with the email, username
        // and password they provided.
        async tryToRegisterIn() {
            const form_data=this._handleFormGetData('form_register_company');
            this.submitted = true;
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                let response = await this.$axios.$post('/bo/create-agreement/',form_data);
                if(response.status=='ok') {
                    this.isRegisterSuccess=true;
                    this.showAgreementMsg=true;
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, "3000")
                }
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
            if( this.urlGetData != undefined && this.urlGetData != null){
                let response = await this.$axios.$get('/bo/user-agreement/'+this.urlGetData);
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
        }
    },
    watch:{
        company:function(v){
            console.log(v);
        },
        isAgree:function(v){
            this.isAgreeNoChecked=true;
            if(v==true){
                this.isAgreeNoChecked=false;
            }else{
                this.isAgreeNoChecked=true;
            }
        }
    },
    components:{
        UIAgreementMessage,
        UIAgreementErrorMessage
    }
};
</script>

<template>
    <div class="row justify-content-center">
        <UIAgreementErrorMessage :isConfirmedShow="showAgreementErrorMsg" :companyInformation="company"></UIAgreementErrorMessage>
        <UIAgreementMessage :isConfirmedShow="showAgreementMsg" :companyInformation="company"></UIAgreementMessage>
        <div v-if="isRegisterSuccess == false" class="col-md-10 col-lg-10 col-xl-11">
            <div class="card">
                <div class="card-body p-4">
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
                        <h1>CONTRACT AGREEMENT</h1>
                        <p class="text-muted mb-4 mt-3">Please, you must fill in all the fields about the company.</p>
                    </div>

                    <form action="#" @submit.prevent="tryToRegisterIn" id="form_register_company">
                        <input type="hidden" name="company_landlord_id" v-model="LandLordID"/>
                        <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration successfull.</b-alert>

                        <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible :show="notificationAutoCloseDuration">{{regError}}</b-alert>

                        <b-alert :variant="notification.type" class="mt-3" v-if="notification.message" :show="notificationAutoCloseDuration" dismissible>{{notification.message}}</b-alert>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="company_name">Company Name</label>
                                    <input class="form-control" v-model="company.company_name" type="text" id="company_name" name="company_name" placeholder="Enter company name" :class="{ 'is-invalid': submitted && $v.company.company_name.$error }" />
                                    <div v-if="submitted && !$v.company.company_name.required" class="invalid-feedback">Company Name is required.</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="user_lastname">Landlord</label>
                                    <input class="form-control" v-model="LandLordName" readonly type="text"   disabled="true" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="company_address">Address</label>
                                    <input class="form-control" v-model="company.company_address" type="text" id="company_address" name="company_address" placeholder="Enter company address" :class="{ 'is-invalid': submitted && $v.company.company_address.$error }" />
                                    <div v-if="submitted && !$v.company.company_address.required" class="invalid-feedback">Addres is required.</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="company_mail_address">Mailing Address</label>
                                    <input class="form-control" v-model="company.company_mail_address" type="text" id="company_mail_address" name="company_mail_address" placeholder="Enter Mailing Address" :class="{ 'is-invalid': submitted && $v.company.company_mail_address.$error }" />
                                    <div v-if="submitted && !$v.company.company_mail_address.required" class="invalid-feedback">Mail Address is required.</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="user_firstname">Country</label>
                                    
                                    <select class="form-control" v-model="company.country" 
                                        name="company_country"         
                                        @change="getStatesCities"
                                        :class="{ 'is-invalid': submitted && $v.company.country.$error }" 
                                        >
                                        <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                    </select>
                                    <div v-if="submitted && !$v.company.country.required" class="invalid-feedback">Country is required.</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="user_lastname">State</label>
                                    <select name="company_state" class="form-control" v-model="company.states" 
                                        @change="getCities"
                                        :class="{ 'is-invalid': submitted && $v.company.states.$error }" 
                                        >
                                        <option v-for="c in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                    </select>
                                    <div v-if="submitted && !$v.company.states.required" class="invalid-feedback">State is required.</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="user_lastname">City</label>
                                    <select name="company_city" class="form-control" 
                                        v-model="company.cities"
                                        :class="{ 'is-invalid': submitted && $v.company.cities.$error }" 
                                        >
                                        <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                    </select>
                                    <div v-if="submitted && !$v.company.cities.required" class="invalid-feedback">City is required.</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="company_phone">Telephone Number</label>
                                    <input class="form-control" v-model="company.company_phone" type="text" id="company_phone" name="company_phone" placeholder="Enter Telephone" :class="{ 'is-invalid': submitted && $v.company.company_phone.$error }" />
                                    <div v-if="submitted && !$v.company.company_phone.required" class="invalid-feedback">Phone is required.</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="company_email">Company Email Address</label>
                                    <input class="form-control" v-model="company.company_email" type="text" id="company_email" name="company_email" placeholder="Enter Email Address" :class="{ 'is-invalid': submitted && $v.company.company_email.$error }" />
                                    <div v-if="submitted && !$v.company.company_email.required" class="invalid-feedback">Email is required.</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="company_contact">Contact Person</label>
                                    <input class="form-control" v-model="company.company_contact" type="text" id="company_contact" name="company_contact" placeholder="Enter Contact Person" :class="{ 'is-invalid': submitted && $v.company.company_contact.$error }" />
                                    <div v-if="submitted && !$v.company.company_contact.required" class="invalid-feedback">Contact Person is required.</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox-signup" v-model="isAgree"/>
                                <label class="custom-control-label" for="checkbox-signup">
                                    I accept
                                    <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div class="form-group mb-0 text-center">
                            <button :disabled="isAgreeNoChecked" class="btn btn-primary btn-block" type="submit">Submit Agreement</button>
                        </div>
                    </form>

                    
                </div>
                <!-- end card-body -->
            </div>
            
        </div>
    </div>
    
</template>
