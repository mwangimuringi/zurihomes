<script>
    import {
        mapState
    } from 'vuex'

    /**
     * Horizontal layout
     */
    export default {
        name: 'horizontal',
        data() {
            return {}
        },
        computed: mapState([
            'layout'
        ]),
        mounted() {
            document.body.setAttribute("data-layout-mode", "horizontal");
        },
        methods: {
            toggleRightSidebar() {
                document.body.classList.toggle("right-bar-enabled");
            },
            hideRightSidebar() {
                document.body.classList.remove("right-bar-enabled");
            }
        },
    }
</script>

<template>
<!-- Begin page -->
<div id="wrapper">
    <Topbar />
    <HorizontalNavbar :type="layout.topbar" :width="layout.layoutWidth" :menu="layout.menuPosition" />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->
    <div class="content-page">
        <div class="content">
            <div class="container-fluid">
                <Nuxt />
            </div>
        </div> <!-- content -->
        <Footer />
    </div>
    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->
    <!-- <Rightbar /> -->
</div>
</template>
