<script>
/**
 * Recent-leads component
 */
export default {
    data() {
        return {
            leadsData: [{
                    profile: require("~/assets/images/users/avatar-2.jpg"),
                    name: "Risa Pearson",
                    email: "richard.john@mail.com",
                    type: "Cold lead"
                },
                {
                    profile: require("~/assets/images/users/avatar-3.jpg"),
                    name: "Margaret D. Evans",
                    email: "margaret.evans@rhyta.com",
                    type: "Lost lead"
                },
                {
                    profile: require("~/assets/images/users/avatar-4.jpg"),
                    name: "Bryan J. Luellen",
                    email: "bryuellen@dayrep.com",
                    type: "Won lead"
                },
                {
                    profile: require("~/assets/images/users/avatar-5.jpg"),
                    name: "Kathryn S. Collier",
                    email: "collier@jourrapide.com",
                    type: "Cold lead"
                },
                {
                    profile: require("~/assets/images/users/avatar-1.jpg"),
                    name: "Timothy Kauper",
                    email: "thykauper@rhyta.com",
                    type: "Cold lead"
                },
                {
                    profile: require("~/assets/images/users/avatar-6.jpg"),
                    name: "Zara Raws",
                    email: "austin@dayrep.com",
                    type: "Won lead"
                }
            ]
        };
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" toggle-class="card-drop p-0" variant="black" right>
            <template v-slot:button-content>
                <i class="mdi mdi-dots-vertical"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>
        <h4 class="header-title mb-4">Recent Leads</h4>

        <div class="media mt-3" v-for="(item, index) in leadsData" :key="index">
            <img class="mr-3 rounded-circle" :src="item.profile" width="40" alt="Generic placeholder image" />
            <div class="media-body">
                <span class="badge float-right" :class="{
              'badge-soft-warning': item.type === 'Cold lead',
              'badge-soft-danger': item.type === 'Lost lead',
              'badge-soft-success': item.type === 'Won lead'
            }">{{ item.type }}</span>
                <h5 class="mt-0 mb-1">{{ item.name }}</h5>
                <span class="font-13">{{ item.email }}</span>
            </div>
        </div>
    </div>
    <!-- end card-body -->
</div>
<!-- end card-->
</template>
