<script>
import { required, email,minLength,sameAs } from "vuelidate/lib/validators";
import UIConfirmMessage from "../../components/ui-basic/register-confirm.vue";
/**
 * Register component
 */
export default {
    head() {
        return {
            title: `Register | `+process.env.appName,
        };
    },
    name: "account-register",
    data() {
        return {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                user_login_password: "",
                confirmPassword: ""
            },
            submitted: false,
            regError: null,
            tryingToRegister: false,
            isRegisterError: false,
            registerSuccess: false,
            isAgreeNoChecked: true,
            isAgree: false,
            isRegisterSuccess: false,
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
    },
    validations: {
        user: {
            first_name: { required },
            last_name: { required },
            email: {
                required,
                email
            },
            
            user_login_password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('user_login_password')
            },
        },
    },
    created() {},
    methods: {
        // Try to register the user in with the email, username
        // and password they provided.
        async tryToRegisterIn() {
            const form_data=this._handleFormGetData('form_register_login');
            this.submitted = true;
            // stop here if form is invalid
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                let response = await this.$axios.$post('/bo/create/',form_data);
                if(response.status=='ok') {
                    this.isRegisterSuccess=true;
                }
            }
        },
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
    components:{
        UIConfirmMessage
    }
};
</script>

<template>
    <div class="row justify-content-center">
        <UIConfirmMessage :isConfirmedShow="isRegisterSuccess" :emailConfirm="user.email"></UIConfirmMessage>
        <div v-if="isRegisterSuccess == false" class="col-md-8 col-lg-6 col-xl-5">
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
                        <p class="text-muted mb-4 mt-3">Don't have an account? Create your own account, it takes less than a minute</p>
                    </div>

                    <form action="#" @submit.prevent="tryToRegisterIn" id="form_register_login">
                        <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration successfull.</b-alert>

                        <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible :show="notificationAutoCloseDuration">{{regError}}</b-alert>

                        <b-alert :variant="notification.type" class="mt-3" v-if="notification.message" :show="notificationAutoCloseDuration" dismissible>{{notification.message}}</b-alert>

                        <div class="form-group">
                            <label for="user_firstname">First Name</label>
                            <input class="form-control" v-model="user.first_name" type="text" id="user_firstname" name="user_firstname" placeholder="Enter your name" :class="{ 'is-invalid': submitted && $v.user.first_name.$error }" />
                            <div v-if="submitted && !$v.user.first_name.required" class="invalid-feedback">First Name is required.</div>
                        </div>
                        <div class="form-group">
                            <label for="user_lastname">Last Name</label>
                            <input class="form-control" v-model="user.last_name" type="text" id="user_lastname" name="user_lastname" placeholder="Enter your last name" :class="{ 'is-invalid': submitted && $v.user.last_name.$error }" />
                            <div v-if="submitted && !$v.user.last_name.required" class="invalid-feedback">Last Name is required.</div>
                        </div>
                        <div class="form-group">
                            <label for="user_login_username">Email address</label>
                            <input class="form-control" v-model="user.email" type="email" id="user_login_username" name="user_login_username" :class="{ 'is-invalid': submitted && $v.user.email.$error }" placeholder="Enter your email" />
                            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                <span v-if="!$v.user.email.required">Email is required.</span>
                                <span v-if="!$v.user.email.email">Please enter valid email.</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" v-model="user.user_login_password" id="password" name="user_login_password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.user_login_password.$error }" placeholder="Enter your password" />
                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                                <div v-if="submitted && !$v.user.user_login_password.required" class="invalid-feedback">Password is required.</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" v-model="user.confirmPassword" id="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" placeholder="Enter your password" />
                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                                <div v-if="submitted && !$v.user.confirmPassword.required" class="invalid-feedback">Password does not match.</div>
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
                            <button :disabled="isAgreeNoChecked" class="btn btn-primary btn-block" type="submit">Sign Up</button>
                        </div>
                    </form>

                    
                </div>
                <!-- end card-body -->
            </div>
            <!-- end card -->

            <div class="row mt-3">
                <div class="col-12 text-center">
                    <p class="text-muted">
                        Already have account?
                        <nuxt-link to="/account/login" class="text-primary font-weight-medium ml-1">Sign In</nuxt-link>
                    </p>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
    </div>
    
</template>
