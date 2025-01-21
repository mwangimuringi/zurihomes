<script>
/**
 * Sign-in signup-2 component
 */
export default {
    head() {
        return {
            title: `Sign-in signup 2 | Minton - Nuxtjs Responsive Admin Dashboard Template`,
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
    <b-tabs class="nav-bordered">
        <b-tab title="Log In">
            <p class="text-muted mb-3">Enter your email address and password to access admin panel.</p>
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
                    <input class="form-control" type="password" required id="password" placeholder="Enter your password" />
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
                    <h5 class="mt-3 text-muted">Sign in with</h5>
                    <ul class="social-list list-inline mt-3">
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
        </b-tab>
        <b-tab title="Sign Up">
            <p class="text-muted mb-3">Don't have an account? Create your own account, it takes less than a minute</p>
            <!-- form -->
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
                    <input class="form-control" type="password" required id="password" placeholder="Enter your password" />
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
                    <button class="btn btn-primary waves-effect waves-light btn-block" type="submit">Sign Up</button>
                </div>
                <!-- social-->
                <div class="text-center mt-4">
                    <h5 class="mt-3 text-muted">Sign Up using</h5>
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
        </b-tab>
    </b-tabs>
    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
            {{ new Date().getFullYear() }}&copy; Minton theme by
            <a href="javascript: void(0);" class="text-dark">Themesbrand</a>
        </p>
    </footer>
</div>
</template>
