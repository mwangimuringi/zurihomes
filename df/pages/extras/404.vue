<script>
export default {
    data() {
        return {

        }
    },
    layout: 'auth'
}
</script>

<template>
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card">

            <div class="card-body p-4">

                <div class="error-ghost text-center">
                    <img src="~/assets/images/error.svg" width="200" alt="error-image" />
                </div>

                <div class="text-center">
                    <h3 class="mt-4 text-uppercase font-weight-bold">Page not found </h3>
                    <p class="text-muted mb-0 mt-3" style="line-height: 20px;">It's looking like you may have taken a wrong turn. Don't worry...
                        it happens to the best of us. You might want to check your internet connection.
                        Here's a little tip that might help you get back on track.</p>

                    <nuxt-link to="/index" class="btn btn-primary mt-3"><i class="mdi mdi-reply mr-1"></i> Return Home</nuxt-link>
                </div>

            </div> 
        </div>
        

    </div> <!-- end col -->
</div>

</template>
