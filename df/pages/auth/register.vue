<script>
/**
 * Register component
 */
export default {
    head() {
        return {
            title: `Register | Minton - Nuxtjs Responsive Admin Dashboard Template`,
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
                    <p class="text-muted mb-4 mt-3">Don't have an account? Create your own account, it takes less than a minute</p>
                </div>

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
                </form>

                <div class="text-center">
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
            </div>
            <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
            <div class="col-12 text-center">
                <p class="text-muted">
                    Already have account?
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
