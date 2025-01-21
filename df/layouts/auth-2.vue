<script>
/**
 * Auth-2 layout
 */
export default {
    mounted() {
        document.body.classList.add('auth-fluid-pages')
    }
}
</script>

<template>
<div class="auth-fluid">
    <!-- Auth fluid right content -->
    <div class="auth-fluid-right">
        <div class="auth-user-testimonial">
            <h3 class="mb-3 text-white">Very elegant & impressive!</h3>
            <p class="lead font-weight-normal"><i class="mdi mdi-format-quote-open"></i> I've been using this theme for a while and I must say that whenever I am looking for a design - I refer to this theme for specifics & implementation. With wide arrays of components, designs, charts - I would highly recommend this theme for anyone using it for dashboard or project management usage.. <i class="mdi mdi-format-quote-close"></i>
            </p>
            <h5 class="text-white">
                - Admin User
            </h5>
        </div> <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->

    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
            <div class="card-body">
                <Nuxt />
            </div>
        </div>
    </div>
</div>
</template>
