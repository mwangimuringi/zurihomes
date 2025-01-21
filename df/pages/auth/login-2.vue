<script>
/**
 * Login-2 component
 */
export default {
    head() {
        return {
            title: `Login 2 | Minton - Nuxtjs Responsive Admin Dashboard Template`,
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
    <h4 class="mt-0">Sign In</h4>
    <p class="text-muted mb-4">Enter your email address and password to access admin panel.</p>

    <!-- form -->
    <form action="#">
        <div class="form-group">
            <label for="emailaddress">Email address</label>
            <input class="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
        </div>
        <div class="form-group">
            <nuxt-link to="/auth/recoverpwd-2" class="text-muted float-right">
                <small>Forgot your password?</small>
            </nuxt-link>
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

        <div class="form-group mb-3">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="checkbox-signin" />
                <label class="custom-control-label" for="checkbox-signin">Remember me</label>
            </div>
        </div>
        <div class="form-group mb-0 text-center">
            <button class="btn btn-primary btn-block" type="submit">Log In</button>
        </div>
        <!-- social-->
        <div class="text-center mt-4">
            <h5 class="mt-0 text-muted">Sign in with</h5>
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
    <!-- end form-->
    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
            Don't have an account?
            <nuxt-link to="/auth/register-2" class="text-primary ml-1">
                <b>Sign Up</b>
            </nuxt-link>
        </p>
    </footer>
</div>
</template>
