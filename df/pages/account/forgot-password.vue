<script>

import {required,email} from "vuelidate/lib/validators";

/**
 * Forgot-password component
 */
export default {
    head() {
        return {
            title: `Forgot Password | `+process.env.appName,
        };
    },
    data() {
        return {
            email: "",
            submitted: false,
            error: null,
            tryingToReset: false,
            isResetError: false
        }
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        // Try to register the user in with the email, fullname
        // and password they provided.
        async tryToReset() {
            this.submitted = true;
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                let response = await this.$axios.$post('/user/reset-password/',{user_email:email});
                if(response.status=='ok') {
                    this.isRegisterSuccess=true;
                    this.showAgreementMsg=true;
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, "3000")
                }
            }
        }
    },
    layout: 'auth'
}
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
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
                    <p class="text-muted mb-4 mt-3">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                </div>

                <form action="#" @submit.prevent="tryToReset" id="form_reset_password">
                    <b-alert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{error}}</b-alert>
                    <div class="form-group mb-3">
                        <label for="emailaddress">Email address</label>
                        <input v-model="email" class="form-control" type="email" id="emailaddress" :class="{ 'is-invalid': submitted && $v.email.$error }" placeholder="Enter your email">
                        <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                            <span v-if="!$v.email.required">Email is required.</span>
                            <span v-if="!$v.email.email">Please enter valid email.</span>
                        </div>
                    </div>

                    <div class="form-group mb-0 text-center">
                        <button class="btn btn-primary btn-block" type="submit"> Reset Password </button>
                    </div>

                </form>

            </div> <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p class="text-muted">Back to <nuxt-link to="/account/login" class="text-primary font-weight-medium ml-1">Log in</nuxt-link>
                </p>
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> <!-- end col -->
</div>
<!-- end row -->
</template>
