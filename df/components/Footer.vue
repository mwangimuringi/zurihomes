<script>
/**
 * Footer Component
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
<!-- Footer Start -->
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                {{ new Date().getFullYear()}} &copy; World Association Tenant Bureau. Build version {{this.app_version}}
            </div>
            <!-- <div class="col-md-6">
                <div class="text-md-right footer-links d-none d-sm-block">
                    <a href="javascript:void(0);">About Us</a>
                    <a href="javascript:void(0);">Help</a>
                    <a href="javascript:void(0);">Contact Us</a>
                </div>
            </div> -->
        </div>
    </div>
</footer>
<!-- end Footer -->
</template>
