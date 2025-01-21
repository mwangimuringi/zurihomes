<script>
/**
 * Lock-screen component
 */
export default {
    head() {
        return {
            title: `Lock-screen | Minton - Nuxtjs Responsive Admin Dashboard Template`,
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
                <div class="text-center mb-4">
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

                <div class="text-center w-75 m-auto">
                    <img src="~/assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle avatar-lg img-thumbnail" />
                    <h4 class="text-dark-50 text-center mt-3">Hi ! Nik Patel</h4>
                    <p class="text-muted mb-4">Enter your password to access the admin.</p>
                </div>

                <form action="#">
                    <div class="form-group mb-3">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" required id="password" placeholder="Enter your password" />
                    </div>

                    <div class="form-group mb-0 text-center">
                        <button class="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>
                </form>
            </div>
            <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p class="text-muted">
                    Not you? return
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
