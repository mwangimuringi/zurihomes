<script>
import {
    icons
} from "./data-fontawesome";
/**
 * Font Awesome Icons Component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: 'Font Awesome Icons',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Icons',
                    href: '/',
                },
                {
                    text: 'Font Awesome',
                    active: true,
                },
            ],
            icons: icons,
            solid: "",
            regular: "",
            brand: ""
        }
    },
    mounted() {
        for (let entry of icons) {
            if (entry.attributes.membership.free.length) {
                for (let value of entry.attributes.membership.free) {
                    switch (value) {
                        case "brands":
                            this.brand +=
                                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="fab fa-' +
                                entry.id +
                                '"></i> fab fa-' +
                                entry.id +
                                "\
                      </div>";
                            break;
                        case "solid":
                            this.solid +=
                                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="fas fa-' +
                                entry.id +
                                '"></i> fas fa-' +
                                entry.id +
                                "\
                </div>";
                            break;
                        default:
                            this.regular +=
                                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="far fa-' +
                                entry.id +
                                '"></i> far fa-' +
                                entry.id +
                                "\
                      </div>";
                    }
                }
            }
        }

        document.getElementById("solid").innerHTML = this.solid;
        document.getElementById("brand").innerHTML = this.brand;
        document.getElementById("regular").innerHTML = this.regular;
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Solid</h4>
                    <p class="sub-header">Use <code>&lt;i class="fas fa-ad"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 5.13.0</span>.</p>

                    <div class="row icons-list-demo" id="solid">
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- end card -->

            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Regular</h4>
                    <p class="sub-header">Use <code>&lt;i class="far fa-address-book"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 5.13.0</span>.</p>

                    <div class="row icons-list-demo" id="regular">
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- end card -->

            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Brands</h4>
                    <p class="sub-header">Use <code>&lt;i class="fab fa-500px"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 5.13.0</span>.</p>

                    <div class="row icons-list-demo" id="brand">
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- end card -->
        </div> <!-- end col -->
    </div> <!-- end row -->
</div>
</template>
