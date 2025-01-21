<script>
import {
    mapState
} from 'vuex'

/**
 * Vertical layout
 */
export default {
    name: 'vertical',
    data() {
        return {
            isMenuCondensed: false,
        }
    },
    computed: mapState([
        'layout'
    ]),
    methods: {
        toggleRightSidebar() {
            document.body.classList.toggle("right-bar-enabled");
        },
        hideRightSidebar() {
            document.body.classList.remove("right-bar-enabled");
        },
        toggleMenu() {
            this.isMenuCondensed = !this.isMenuCondensed
            if (this.isMenuCondensed)
                document.body.setAttribute('data-sidebar-size', 'condensed');
            else
                document.body.removeAttribute('data-sidebar-size', 'condensed');

            if (window.screen.width >= 992) {
                this.$router.afterEach((routeTo, routeFrom) => {
                    document.body.classList.remove("sidebar-enable");
                });
            } else {
                document.body.setAttribute('data-sidebar-size', 'default');
                document.body.classList.toggle("sidebar-enable");
                this.$router.afterEach((routeTo, routeFrom) => {
                    document.body.classList.remove("sidebar-enable");
                });
            }
        },
    },
    mounted() {
        document.body.removeAttribute("data-layout-mode");
        document.body.removeAttribute("data-sidebar-showuser");
    },
}
</script>

<template>
<!-- Begin page -->
<div id="wrapper">
    <Sidebar :type="layout.leftSidebarType" :width="layout.layoutWidth" :size="layout.leftSidebarSize" :menu="layout.menuPosition" :topbar="layout.topbar" />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">
            <Topbar />
            <!-- Start Content-->
            <div class="container-fluid">
                <Nuxt />
            </div>
        </div>
        <Footer />
    </div>
    <!-- <Rightbar /> -->
</div>
</template>
