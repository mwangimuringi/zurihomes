<script>
    import {
        required,
        email
    } from "vuelidate/lib/validators";

    /**
     * Login component
     */
    export default {
        head() {
            return {
                title: `Login | `+process.env.appName,
            };
        },
        data() {
            return {
                email: '',
                password: '',
                alert: null,
                loading: false,
                submitted: false,
                authError: null,
                tryingToLogIn: false,
                isAuthError: false,
                google_loading: false,
                google_ready: false,
                input_password_type:"password",
                ShowPassword:"password"
            };
        },
        computed: {
            notification() {
                return this.$store ? this.$store.state.notification : null;
            },
            notificationAutoCloseDuration() {
                return this.$store && this.$store.state.notification ? 5 : 0;
            },
        },
        created() {},
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            },
        },
        methods: {
            // Try to log the user in with the username
            // and password they provided.
            handleViewPassword(){
                if(this.ShowPassword =='password'){
                    this.ShowPassword='text';
                }else{
                    this.ShowPassword='password';
                }
            },
            async login(evt) {
                
                evt.preventDefault()
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                } else {
                    console.log(evt);
                    this.alert = null;
                    this.loading = true;
                    this.tryingToLogIn = true;
                    
                    this.$auth.loginWith('local', {
                        data: {
                            user_email: this.email,
                            user_password: this.password
                        }
                    })
                    .then(async (res) => {
                        this.loading = false; //console.log('res',res)
                        if(res.data.status =='ok'){  this.$router.push('/'); }else{ 
                            this.$toast.error(res.data.message,{duration:2000,fitToScreen:true});
                        }
                        
                    })
                    .catch((e) => {
                        //.catch (e) {
                        //this.error = e.response.data.message
                    });
                }
            }
        },
        layout: 'auth',
    }
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
        <b-overlay :show="loading" rounded="sm">
            <div class="card" :aria-hidden="loading ? 'true' : null">
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
                        <p class="text-muted mb-4 mt-3">Enter your email address and password to access.</p>
                    </div>

                    <form action="#" @submit.prevent="login">
                        <b-alert :variant="notification.type" class="mt-3" v-if="notification.message" :show="notificationAutoCloseDuration" dismissible>{{notification.message}}</b-alert>

                        <b-alert variant="danger" class="mt-3" v-model="isAuthError" :show="notificationAutoCloseDuration" dismissible>{{authError}}</b-alert>
                        <div class="form-group mb-3">
                            <label for="emailaddress">Email address</label>
                            <input class="form-control" v-model="email" type="email" id="emailaddress" placeholder="Enter your email" :class="{ 'is-invalid': submitted && $v.email.$error }">
                            <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                <span v-if="!$v.email.required">Email is required.</span>
                                <span v-if="!$v.email.email">Please enter valid email.</span>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="password">Password</label>
                            <div class="input-group input-group-merge">
                                <input v-model="password" :type="ShowPassword" id="password" class="form-control" placeholder="Enter your password" :class="{ 'is-invalid': submitted && $v.password.$error }">

                                <div class="input-group-append" data-password="false" @click="handleViewPassword">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                                <div v-if="submitted && !$v.password.required" class="invalid-feedback">Password is required.</div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
                                <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                            </div>
                        </div>

                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary btn-block" type="submit"> Log In </button>
                        </div>

                    </form>

                    <!-- <div class="text-center">
                        <h5 class="mt-3 text-muted">Sign in with</h5>
                        <ul class="social-list list-inline mt-3 mb-0">
                            <li class="list-inline-item">
                                <a href="javascript: void(0);" class="social-list-item border-purple text-purple"><i class="mdi mdi-facebook"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github"></i></a>
                            </li>
                        </ul>
                    </div> -->

                </div> <!-- end card-body -->
            </div>
        </b-overlay>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p>
                    <nuxt-link to="/account/forgot-password" class="text-muted ml-1">Forgot your password?</nuxt-link>
                </p>
                <p class="text-muted">Don't have an account? <nuxt-link to="/account/register" class="text-primary font-weight-medium ml-1">Sign Up</nuxt-link>
                </p>
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> <!-- end col -->
</div>
<!-- end row -->
</template>
