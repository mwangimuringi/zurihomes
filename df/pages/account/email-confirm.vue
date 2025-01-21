<script>
import {country_and_states} from "../../helpers/app.countries";
import { required, email,minLength,sameAs } from "vuelidate/lib/validators";

import UIEmailConfirmationMessage from "../../components/ui-basic/email-confirm.vue";
/**
 * Register component
 */
export default {
    head() {
        return {
            title: `Email Confirmation | `+process.env.appName,
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
                let response = await this.$axios.$get('/bo/email-confirm/'+this.urlGetData);
                if(response.status =='empty'){
                    this.isRegisterSuccess=true; 
                    this.showAgreementErrorMsg=true; 
                    
                }else{
                    this.LandLordName=response.data.user_login_username;
                    this.LandLordID=response.data.user_login_id;
                    this.showAgreementMsg=true; 
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
        UIEmailConfirmationMessage
    }
};
</script>

<template>
    <div class="row justify-content-center">
        <!-- <UIAgreementErrorMessage :isConfirmedShow="showAgreementErrorMsg" :companyInformation="company"></UIAgreementErrorMessage> -->
        <UIEmailConfirmationMessage :isConfirmedShow="showAgreementMsg" :emailConfirmation="LandLordName"></UIEmailConfirmationMessage>
        
    </div>
    
</template>
