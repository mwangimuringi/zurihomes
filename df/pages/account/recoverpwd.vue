<script>
/**
 * Recoverpwd-2 component
 */
export default {
    head() {
        return {
            title: `Recovery Password | `+process.env.appName,
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

                <form action="#">
                    <div class="form-group mb-3">
                        <label for="emailaddress">Email address</label>
                        <input class="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
                    </div>
                    
                    <div class="form-group mb-3">
                        <label for="emailaddress">New Password</label>
                        <input class="form-control" type="password" id="userpassword" required placeholder="Enter your password" />
                    </div>
                    
                    <div class="form-group mb-3">
                        <label for="emailaddress">Confirm Password</label>
                        <input class="form-control" type="password" id="confirmpassword" required placeholder="Confirm your password" />
                    </div>

                    <div class="form-group mb-0 text-center">
                        <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                    </div>
                </form>
            </div>
            <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p class="text-muted">
                    Back to
                    <nuxt-link to="/auth/login" class="text-primary font-weight-medium ml-1">Log in</nuxt-link>
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
