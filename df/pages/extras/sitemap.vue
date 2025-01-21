<script>
/**
 * Sitemap component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: "Sitemap",
            items: [{
                    text: "Minton",
                    href: "/",
                },
                {
                    text: "Extras",
                    href: "/",
                },
                {
                    text: "Sitemap",
                    active: true,
                },
            ],
        };
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <ul class="sitemap">
                                <li>
                                    <a href="javascript: void(0);" class="text-uppercase font-weight-bold">
                                        <img src="~/assets/images/logo-sm-dark.png" alt height="12" class="mr-1" /> Minton Pages
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <i class="ri-dashboard-line mr-1"></i>Dashboards
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">Sales</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">CRM</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Analytics</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <i class="ri-layout-line mr-1"></i>Layouts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <i class="fe-grid mr-1"></i>Applications
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">Chat</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">eCommerce</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Products List</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Products Grid</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Product Detail</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Create Product</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Orders</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Sellers</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Email</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Inbox</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Email Read</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Compose</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">More Apps</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript: void(0);">
                                                <i class="ri-pages-line mr-1"></i>Sitemap
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- end col-->

                        <div class="col-lg-4">
                            <ul class="sitemap">
                                <li>
                                    <a href="javascript: void(0);" class="text-uppercase font-weight-bold">
                                        <img src="~/assets/images/logo-sm-dark.png" alt height="12" class="mr-1" /> Minton
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <b>About</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">Business</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Philosophy</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Staff</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <b>Works</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">2015</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">2014</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">2013</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <b>Contact</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <b>Sitemap</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);">
                                                <b>Recruit</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);">Web Director</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Web Designer</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">Web Engineer</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-4">
                            <ul class="sitemap">
                                <li>
                                    <a href="javascript: void(0);" class="text-uppercase font-weight-bold">
                                        <img src="~/assets/images/logo-sm-dark.png" alt height="12" class="mr-1" /> Minton
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="javascript: void(0);" class="text-uppercase text-primary">
                                                <b>About</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-primary">Business</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-primary">Philosophy</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-primary">Staff</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" class="text-uppercase text-success">
                                                <b>Works</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-success">2015</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-success">2014</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-success">2013</a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript: void(0);">Company</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript: void(0);">Contest</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" class="text-uppercase text-danger">
                                                <b>Contact</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" class="text-uppercase text-info">
                                                <b>Sitemap</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" class="text-uppercase text-warning">
                                                <b>Recruit</b>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-warning">Web Director</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-warning">Web Designer</a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);" class="text-warning">Web Engineer</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- end col-->
                    </div>
                    <!-- end row-->
                </div>
            </div>
            <!-- end card-box-->
        </div>
        <!-- end col-->
    </div>
    <!-- end row-->
</div>
</template>
