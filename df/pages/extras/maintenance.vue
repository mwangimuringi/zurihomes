<script>
/**
 * Maintenance component
 */
export default {
    head() {
        return {
            title: `Maintenance | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    layout: 'auth',
    middleware: 'auth'
}
</script>

<template>
<div class="mt-5 mb-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">

                <div class="text-center">
                    <img src="~/assets/images/animat-diamond-color.gif" alt="" height="160">
                    <h3 class="mt-1">We are currently performing maintenance</h3>
                    <p class="text-muted">We're making the system more awesome. We'll be back shortly.</p>

                    <div class="row mt-5">
                        <div class="col-md-4">
                            <div class="text-center mt-3 pl-1 pr-1">
                                <div class="avatar-md rounded-circle bg-soft-primary mx-auto">
                                    <i class="fe-target font-22 avatar-title text-primary"></i>
                                </div>
                                <h5 class="font-16 mt-3">Why is the site down?</h5>
                                <p class="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div> <!-- end col-->
                        <div class="col-md-4">
                            <div class="text-center mt-3 pl-1 pr-1">
                                <div class="avatar-md rounded-circle bg-soft-primary mx-auto">
                                    <i class="fe-clock font-22 avatar-title text-primary"></i>
                                </div>
                                <h5 class="font-16 mt-3">What is the downtime?</h5>
                                <p class="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.</p>
                            </div>
                        </div> <!-- end col-->
                        <div class="col-md-4">
                            <div class="text-center mt-3 pl-1 pr-1">
                                <div class="avatar-md rounded-circle bg-soft-primary mx-auto">
                                    <i class="fe-help-circle font-22 avatar-title text-primary"></i>
                                </div>
                                <h5 class="font-16 mt-3">Do you need support?</h5>
                                <p class="text-muted">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. <a href="mailto:#" class="text-muted font-weight-medium">no-reply@domain.com</a></p>
                            </div>
                        </div> <!-- end col-->
                    </div> <!-- end row-->
                </div> <!-- end /.text-center-->

            </div> <!-- end col -->
        </div>
        <!-- end row -->
    </div>
    <!-- end container -->
</div>
<!-- end page -->
</template>
