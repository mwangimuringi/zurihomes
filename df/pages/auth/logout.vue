<script>
/**
 * Logout 2 component
 */
export default {
    head() {
        return {
            title: `Logout 2 | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {};
    },
    layout: "auth",
};
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
                                <img src="~/assets/images/logo-dark.png" alt height="22" />
                            </span>
                        </nuxt-link>

                        <nuxt-link to="/" class="logo logo-light text-center">
                            <span class="logo-lg">
                                <img src="~/assets/images/logo-light.png" alt height="22" />
                            </span>
                        </nuxt-link>
                    </div>
                </div>

                <div class="text-center">
                    <div class="mt-4">
                        <div class="logout-checkmark">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
                                <path class="logout-path" fill="none" stroke="#d1dee4" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                                                c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                                                c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z" />
                                <circle class="logout-path" fill="none" stroke="#1abc9c" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1" />
                                <polyline class="logout-path" fill="none" stroke="#1abc9c" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8
                                                74.1,108.4 48.2,86.4 " />

                                <circle class="logout-spin" fill="none" stroke="#d1dee4" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175 12.2175" cx="80.6" cy="80.6" r="73.9" />
                            </svg>
                        </div>
                    </div>

                    <h3>See you again !</h3>

                    <p class="text-muted">You are now successfully sign out.</p>
                </div>
            </div>
            <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p class="text-muted">
                    Back to
                    <nuxt-link to="/auth/login" class="text-primary font-weight-medium ml-1">Sign In</nuxt-link>
                </p>
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->
    </div>
    <!-- end col -->
</div>
<!-- end row -->
</template>
