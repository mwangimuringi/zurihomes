<script>
import {
    companies
} from "./data";
import {
    required
} from "vuelidate/lib/validators";

/**
 * Companies component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            companies: companies,
            title: "Companies",
            items: [{
                    text: "Minton",
                    href: "/"
                },
                {
                    text: "Apps",
                    href: "/"
                },
                {
                    text: "Companies",
                    active: true
                }
            ],

            showmodal: false,
            submitted: false,
            company: {
                name: "",
                location: ""
            }
        };
    },
    validations: {
        company: {
            name: {
                required
            },
            location: {
                required
            }
        }
    },
    methods: {
        /**
         * Modal form submit
         */
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            } else {
                const name = this.company.name;
                const location = this.company.location;
                this.companies.push({
                    logo: require("~/assets/images/companies/amazon.png"),
                    name,
                    location
                });
                this.showmodal = false;
            }
            this.submitted = false;
            this.company = {};
        },

        /**
         * Modal hide on close
         */
        hideModal(e) {
            this.submitted = false;
            this.showmodal = false;
            this.company = {};
        }
    },
    middleware: 'auth'
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
                        <div class="col-lg-8">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label class="sr-only">Search</label>
                                    <input type="search" class="form-control" placeholder="Search..." />
                                </div>
                                <div class="form-group mx-sm-3">
                                    <label for="status-select" class="mr-2">Sort By</label>
                                    <select id="status-select" class="custom-select">
                                        <option>Select</option>
                                        <option>Date</option>
                                        <option selected>Name</option>
                                        <option>Revenue</option>
                                        <option>Employees</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-lg-right mt-3 mt-lg-0">
                                <button type="button" class="btn btn-success mr-1">
                                    <i class="mdi mdi-cog"></i>
                                </button>
                                <a class="btn text-white btn-danger" href="javascript: void(0);" @click="showmodal = true">
                                    <i class="mdi mdi-plus-circle mr-1"></i> Add New
                                </a>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col-->
    </div>
    <div class="row">
        <div v-for="companiesdata in companies" :key="companiesdata.name" class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <div class="media">
                        <div class="avatar-md mr-3">
                            <div class="avatar-title bg-light rounded-circle">
                                <img :src="`${companiesdata.logo}`" alt="logo" class="avatar-sm rounded-circle" />
                            </div>
                        </div>
                        <div class="media-body">
                            <h4 class="my-1">
                                <a href="javascript:void(0);" class="text-dark">{{
                    companiesdata.name
                  }}</a>
                            </h4>
                            <p class="text-muted text-truncate mb-0">
                                <i class="ri-map-pin-line align-bottom mr-1"></i>
                                {{ companiesdata.location }}
                            </p>
                        </div>

                        <b-dropdown right toggle-class="text-body p-0" variant="black">
                            <template v-slot:button-content>
                                <i class="mdi mdi-dots-vertical font-20"></i>
                            </template>
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <hr v-if="companiesdata.revenue">
                    <div class="text-muted">
                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <p class="text-truncate mb-0">Revenue (USD)</p>
                                    <h5 class="mb-sm-0">{{ companiesdata.revenue }}</h5>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <p class="text-truncate mb-0">Number of employees</p>
                                    <h5 class="mb-sm-0">{{ companiesdata.employees }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <b-modal id="modal-1" v-model="showmodal" title="Add Companies" header-close-variant="light" title-class="font-18" hide-footer>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" v-model="company.name" type="text" class="form-control" placeholder="Enter name" :class="{ 'is-invalid': submitted && $v.company.name.$error }" />
                <div v-if="submitted && !$v.company.name.required" class="invalid-feedback">
                    Name is required.
                </div>
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <input id="location" v-model="company.location" type="text" class="form-control" placeholder="Enter location" :class="{ 'is-invalid': submitted && $v.company.location.$error }" />
                <div v-if="submitted && !$v.company.location.required" class="invalid-feedback">
                    Location is required.
                </div>
            </div>

            <div class="text-right">
                <button type="submit" class="btn btn-success">Save</button>
                <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
            </div>
        </form>
    </b-modal>
    <!-- Modal  -->
</div>
</template>
