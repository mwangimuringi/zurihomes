<script>
import {
    icons
} from "./data-remix";

/**
 * Remix icons component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            icons: icons,
            title: 'Remix Icons',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Icons',
                    href: '/',
                },
                {
                    text: 'Remix',
                    active: true,
                },
            ],
            iconData: "",
            iconList: JSON.parse(icons)
        }
    },
    mounted() {
        // eslint-disable-next-line no-unused-vars
        Object.entries(this.iconList).map((key, value) => {
            if (key[0] === "Editor") {
                this.iconData =
                    this.iconData +
                    '<div class="card"><div class="card-body"><h4 class="card-title">' +
                    key[0] +
                    ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-bold"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icons-list-demo">';
                for (let k in key[1]) {
                    this.iconData +=
                        '<div class="col-sm-6 col-md-4 col-lg-3">\
                    <i class="ri-' +
                        k +
                        '"></i> ri-' +
                        k +
                        "</div>";
                }
            } else {
                this.iconData =
                    this.iconData +
                    '<div class="card"><div class="card-body"><h4 class="card-title">' +
                    key[0] +
                    ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icons-list-demo">';
                for (let k in key[1]) {
                    this.iconData +=
                        '<div class="col-sm-6 col-md-4 col-lg-3">\
                    <i class="ri-' +
                        k +
                        '-line"></i> ri-' +
                        k +
                        '-line\
                </div><div class="col-sm-6 col-md-4 col-lg-3">\
                    <i class="ri-' +
                        k +
                        '-fill"></i> ri-' +
                        k +
                        "-fill\
                </div>";
                }
            }
            this.iconData += "</div></div></div>";
        });
        document.getElementById("icons").innerHTML = this.iconData;
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12" id="icons"></div>
        <!-- end col-->
    </div>
    <!-- end row-->
</div>
</template>
