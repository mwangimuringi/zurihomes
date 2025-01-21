<script>
    /**
     * Register-2 component
     */
    export default {
        head() {
            return {
                title: `Register 2 | Minton - Nuxtjs Responsive Admin Dashboard Template`,
            };
        },
        data() {
            return {};
        },
        layout: "auth-2",
    };
</script>

<template>
<div>
    <!-- Logo -->
    <div class="auth-brand text-center text-lg-left">
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

    <!-- title-->
    <h4 class="mt-0">Sign Up</h4>
    <p class="text-muted mb-4">Don't have an account? Create your own account, it takes less than a minute</p>

    <form action="#">
        <div class="form-group">
            <label for="fullname">Full Name</label>
            <input class="form-control" type="text" id="fullname" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
            <label for="emailaddress">Email address</label>
            <input class="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group input-group-merge">
                <input type="password" id="password" class="form-control" placeholder="Enter your password" />
                <div class="input-group-append" data-password="false">
                    <div class="input-group-text">
                        <span class="password-eye"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="checkbox-signup" />
                <label class="custom-control-label" for="checkbox-signup">
                    I accept
                    <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a>
                </label>
            </div>
        </div>
        <div class="form-group mb-0 text-center">
            <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
        </div>

        <div class="text-center mt-4">
            <h5 class="mt-0 text-muted">Sign Up using</h5>
            <ul class="social-list list-inline mt-3 mb-0">
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item border-purple text-purple">
                        <i class="mdi mdi-facebook"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item border-danger text-danger">
                        <i class="mdi mdi-google"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item border-info text-info">
                        <i class="mdi mdi-twitter"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary">
                        <i class="mdi mdi-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    </form>

    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
            Already have account?
            <nuxt-link to="/auth/login-2" class="text-primary font-weight-medium ml-1">Sign In</nuxt-link>
        </p>
    </footer>
</div>
</template>
