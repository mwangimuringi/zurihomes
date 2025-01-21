<script>
import { required, email,minLength,sameAs } from "vuelidate/lib/validators";
import formAddUser from './../../management/users/ui/AddForm.vue';
import formEditUser from './../../management/users/ui/EditForm.vue';
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
            setAlignment:0
        };
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
        
        async tryToRegisterIn() {
            const form_data=this._handleFormGetData('form_register_company');
            this.submitted = true;
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                let response = await this.$axios.$post('/landlords/create-agreement/',form_data);
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
        formAddUser,
        formEditUser,
        UIAgreementMessage,
        UIAgreementErrorMessage,
        UIContractAgreementView,
        UIContractTimeLineView
    },
    created() {
        this.$root.$refs.userManagers = this;
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
                                <button :disabled="isAgreeNoChecked" class="btn btn-primary btn-block" type="submit">Submit Agreement</button>
                            </div>
                        </form>
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
