<script>
/**
 * Products-list component
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    data() {
        return {
            
            title: "Rental Application",
            items: [{
                    text: "WA"
                },
                
                {
                    text: "Rental Application",
                    active: true
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "id",
            sortDesc: false,
            fields: [
                {
                    key: "id",
                    label: "ID",
                    sortable: true
                },
                // {
                //     key: "check",
                //     label: ""
                // },
                {
                    key: "idReg",
                    label: "ID Reg.",
                    sortable: true
                },
                {
                    key: "tenant_name",
                    label: "Tenant",
                    sortable: true
                },
                {
                    key: "country_citizenship",
                    label: "Location",
                    sortable: true
                },
                {
                    key: "Sex",
                    label: "Sex",
                    sortable: true
                },
                {
                    key: "Applicantdatebirth",
                    label: "DOB",
                    sortable: true
                },
                {
                    key: "landlord_name",
                    label: "Landlord",
                    sortable: true
                },
                {
                    key: "date_created",
                    label: "Date Regi.",
                    sortable: true
                },
                {
                    key: "status_verified",
                    label: "Verified",
                    sortable: true
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true
                },
                "action"
            ],
            categories_list:[
                {id:1,name:"Apartments"},
                {id:2,name:"House"},
                {id:3,name:"Studio"},
                {id:4,name:"Penthouse"},
            ],
            status_list:[
                {id:1,name:"Enabled"},
                {id:0,name:"Disabled"},
            ],
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        // rows() {
        //     return this.productData.length;
        // }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
        // onGetCategory(categID){
        //     const searchIndex = this.categories_list.findIndex((x) => x.id==categID);
        //     return this.categories_list[searchIndex].name;
        // },
        onGetStatus(statusID){
            const searchIndex = this.status_list.findIndex((x) => x.id==statusID);
            // console.log(searchIndex)
	if(searchIndex !== -1 && this.status_list[searchIndex])
{ 
           return this.status_list[searchIndex].name;
}else{return 'Status not found';}
        },
        async asyncData() {
            let response = await this.$axios.$post("/tenants/rentalapp-list/dt/", {
                landlord_id: 0,
                opt_page: this.currentPage,
                opt_limit: this.perPage,
                opt_sortby: this.sortBy,
                opt_sort_order: this.sortDesc,
                opt_filter: this.filter,
                opt_filter_fields: this.filterFields,
            });
            const { items, count } = await response;
            // this.dtITableItems = items;
            this.loading = false;
            this.totalRows = count[0].countItems;
            return items;
        },
        
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
    middleware: 'auth',
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-sm-6">

                            <!-- <nuxt-link to="/properties/property-create" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle mr-1"></i> Add Property</nuxt-link> -->
                        </div>
                        <div class="col-sm-6">
                            <div class="float-sm-right">
                                <button type="button" class="btn btn-success mb-2 mb-sm-0"><i class="mdi mdi-cog"></i></button>
                            </div>
                        </div><!-- end col-->
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;properties
                                </label>
                            </div>
                        </div>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                                <label class="d-inline-flex align-items-center">
                                    Search:
                                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                                </label>
                            </div>
                        </div>
                        <!-- End search -->
                    </div>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="asyncData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <template v-slot:cell(check)="data">
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                                </div>
                            </template>

                            
                            <template v-slot:cell(date_created)="data">
                                 {{ _app_format_datetime_AP(data.item.date_created) }}
                            </template>
                            <template v-slot:cell(Applicantdatebirth)="data">
                                 {{ _app_format_datetime_dob(data.item.Applicantdatebirth) }}
                            </template>
                            <template v-slot:cell(idReg)="data">
                                <nuxt-link :to="`/landlord/rentalapplication/${data.item.idReg}`" class="text-muted ml-1">{{ data.item.idReg }}</nuxt-link>
                            </template>
                            <template v-slot:cell(status)="data">
                                <span class="badge p-1 badge-soft-success" :class="{'badge-soft-danger': data.item.status === 0}">{{ onGetStatus(data.item.status) }}</span>
                            </template>
                            
                            <template v-slot:cell(status_verified)="data">
                                <span class="badge p-1 badge-soft-success" :class="{'badge-soft-danger': data.item.status_verified === 0}">{{ _app_onGetApprovalText(data.item.status_verified) }}</span>
                            </template>
                            
                            <template v-slot:cell(action)="data">
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                        <nuxt-link to="javascript:void(0)" :data-id="data.item.id_reg" class="action-icon">
                                            <i class="mdi mdi-eye"></i>
                                        </nuxt-link>
                                    </li>
                                    <li class="list-inline-item">
                                        <nuxt-link to="javascript:void(0)" class="action-icon">
                                        <!-- <nuxt-link to="`/property-edit/${data.item.id_reg}`" class="action-icon"> -->
                                            <i class="mdi mdi-square-edit-outline"></i>
                                        </nuxt-link>
                                        <!-- <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-square-edit-outline"></i></a> -->
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-delete"></i></a>
                                    </li>
                                </ul>
                            </template>
                        </b-table>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination pagination-roundd">
                                    <!-- pagination -->
                                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
