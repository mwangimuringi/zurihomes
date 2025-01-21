<script>
/**
 * Email-templates component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            title: "Email Templates",
            items: [{
                    text: "Minton"
                },
                {
                    text: "Email"
                },
                {
                    text: "Email Templates",
                    active: true
                }
            ]
        };
    },
    middleware: 'auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <h4 class="header-title mb-3">Basic action email</h4>
                            <a target="_blank">
                                <img src="~/assets/images/email/1.png" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="col-md-4">
                            <h4 class="header-title my-3 mt-md-0">Email alert</h4>
                            <a target="_blank">
                                <img src="~/assets/images/email/2.png" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="col-md-4">
                            <h4 class="header-title my-3 mt-md-0">Billing email</h4>
                            <a target="_blank">
                                <img src="~/assets/images/email/3.png" class="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
            </div>
            <!-- end card -->
        </div>
        <!-- end col-->
    </div>
    <!-- end row-->
</div>
</template>
