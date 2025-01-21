<script>
import {
    mapState
} from "vuex";

/**
 * Two-column layout
 */
export default {
    name: "Two-column",
    data() {
        return {
            isMenuCondensed: false,
        };
    },
    computed: mapState(["layout"]),
    methods: {
        toggleRightSidebar() {
            document.body.classList.toggle("right-bar-enabled");
        },
        hideRightSidebar() {
            document.body.classList.remove("right-bar-enabled");
        },
        toggleMenu() {
            this.isMenuCondensed = !this.isMenuCondensed;
            if (this.isMenuCondensed)
                document.body.setAttribute("data-sidebar-size", "condensed");
            else document.body.removeAttribute("data-sidebar-size", "condensed");

            if (window.screen.width >= 992) {
                this.$router.afterEach((routeTo, routeFrom) => {
                    document.body.classList.remove("sidebar-enable");
                });
            } else {
                document.body.setAttribute("data-sidebar-size", "default");
                document.body.classList.toggle("sidebar-enable");
                this.$router.afterEach((routeTo, routeFrom) => {
                    document.body.classList.remove("sidebar-enable");
                });
            }
        },
    },
    mounted() {
        document.body.setAttribute("data-layout-mode", "two-column");
        document.body.setAttribute("data-topbar-color", "light");
        document.body.removeAttribute("data-sidebar-showuser");
    },
};
</script>

<template>
<!-- Begin page -->
<div id="wrapper">
    <Topbar />
    <TwoColumnSidebar />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">
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
