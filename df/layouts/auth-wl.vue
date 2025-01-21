<script>
/**
 * Auth-layout
 */
export default {
    data() {
        return {
            app_name:process.env.appName,
            app_version:process.env.appVersion,
        }
    },
}
</script>

<template>
<div>
    <div class="account-pages mt-5 mb-5">
        <div class="container-ra">
            <Nuxt />
        </div>
        <!-- end container -->
    </div>
    <!-- end page -->
    <footer class="footer footer-alt">
        {{new Date().getFullYear()}} &copy; World Association Tenant Bureau. Build version {{this.app_version}}.
    </footer>
</div>
</template>
