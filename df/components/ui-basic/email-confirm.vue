<script>
export default {
    name: 'ui-agreement-confirm',
    data() {
        return{
        
        }
    },
    props : {

        isConfirmedShow:false,
        emailConfirmation:{type: String},
    }
}
</script>

<template>
    
    <div v-if="isConfirmedShow" class="col-md-8 col-lg-6 col-xl-5">
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
                </div>

                <div class="mt-3 text-center">
                    <div class="avatar-lg rounded-circle bg-icon-primary p-center-text">
                        <i class="mdi mdi-email-check-outline font-28 avatar-title text-white"></i>
                    </div>

                    <h3>Email Confirmation !</h3>
                    <p class="text-muted mt-2">
                        Your account <span class="font-weight-bolder text-primary">{{ emailConfirmation }}</span>,
                        has been successfully confirmed..
                    </p>

                    <nuxt-link to="/" class="btn btn-block btn-primary waves-effect waves-light mt-3">Back to Home</nuxt-link>
                </div>
            </div>
            <!-- end card-body -->
        </div>
        <!-- end card -->
    </div>
    
</template>