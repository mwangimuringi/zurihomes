<template>
    <div class="mt-4">
        <h5 class="position-relative mb-4">
            <a  href="javascript: void(0);" class="text-dark d-block">
                {{tableUserTitle}}
                <span class="text-muted">({{totalRows}})</span>
                <!-- <i class="mdi mdi-chevron-down accordion-arrow"></i> -->
            </a>
        </h5>
        <!-- <b-collapse visible id="taskcollapse1"> -->
            <!-- <div class="table-responsive mt-3"> -->
                <div class="row mb-2">
                    <div class="col-sm-12 col-md-6">
                        <div id="tickets-table_length" class="dataTables_length width-full">
                            <label class="d-inline-flex align-items-center width-full">
                                Display&nbsp;
                                <b-form-select class="width-30" v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;{{tableUserTitle}}
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                            <label class="d-inline-flex align-items-center">
                                Search:
                                <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- <div class="table-responsive mb-0"> -->
                    <b-table :key="tableDataKey" ref="dtTableUsers" table-class="table table-centered w-100" thead-tr-class="bg-light" :items="asyncData" :fields="fields"  :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(check)="data">
                            <div class="custom-control custom-checkbox text-center">
                                <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.user_login_id}`" />
                                <label class="custom-control-label" :for="`contacusercheck${data.item.user_login_id}`"></label>
                            </div>
                        </template>

                        <template v-slot:cell(company_registeration_no)="data">
                            <nuxt-link :to="`/approvals/detail?q=${data.item.company_registeration_no}`" class="text-muted ml-1">{{ data.item.company_registeration_no }}</nuxt-link>
                            
                        </template>

                        <template v-slot:cell(company_id)="data">
                            {{ data.item.company_id }}
                        </template>

                        <template v-slot:cell(verified)="data">
                            <span class="badge  p-1" 
                            :class="{
                                'badge-soft-success': data.item.verified == 'yes',
                                'badge-soft-danger': data.item.verified == 'no',
                                }">{{ data.item.verified.toUpperCase() }}</span>
                            
                        </template>
                        <template v-slot:cell(user_login_status)="data">
                            <span class="badge  p-1" 
                            :class="{
                                'badge-soft-success': data.item.user_login_status == 'enabled',
                                'badge-soft-danger': data.item.user_login_status == 'disabled',
                                }">{{ data.item.user_login_status.toUpperCase() }}</span>
                        </template>
                        <template v-slot:cell(approved)="data">
                            <span class="badge  p-1" 
                            :class="{
                                'badge-soft-success': data.item.approved == 1,
                                'badge-soft-danger': data.item.approved == 0,
                                }">{{ _app_onGetApprovalText(data.item.approved) }}</span>
                        </template>
                        <template v-slot:cell(date_created)="data">
                            {{ _app_format_date_time_AP(data.item.date_created) }}
                        </template>
                        <template v-slot:cell(user_login_modified_date)="data">
                            {{ _app_format_date_time(data.item.user_login_modified_date) }}
                        </template>

                        <template v-slot:cell(action)="data">
                            <div v-if="data.item.approved == 1">
                                <textarea name="" id="" cols="4" rows="3" style="{width:'40px'}"></textarea>
                                <button>Denied</button>
                            </div>
                            <div v-if="data.item.approved == 0">
                                <textarea name="" id="" cols="4" rows="3"></textarea>
                                <button>Approved</button>
                            </div>
                        </template>
                    </b-table>
                <!-- </div> -->
                <div class="row">
                    <div class="col">
                        <div class="dataTables_paginate paging_simple_numbers float-right">
                            <ul class="pagination pagination-roundewd">
                                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
                            </ul>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
        <!-- </b-collapse> -->
    </div>
</template>

<script>
export default {
    name: 'ui-table-approvals',
    data() {
        return{
            
            currentPage:1,
            totalRows: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "company_name",
            sortDesc: false,
            fields: [
                // {
                //     key: "check",
                //     label: ""
                // },
                {
                    key: "company_id",
                    label:"ID",
                    sortable: true
                },
                {
                    key: "landlord_name",
                    label:"Landlord",
                    sortable: true
                },
                {
                    key: "company_name",
                    label:"Company",
                    sortable: true
                },
                {
                    key: "company_registeration_no",
                    label:"No. Registration",
                    sortable: true
                },
                {
                    key: "country_name",
                    label:"Country",
                    sortable: true
                },
                {
                    key: "company_phone",
                    label:"Phone",
                    sortable: true
                },
                {
                    key: "date_created",
                    label: "Registration date",
                    sortable: true
                },
                {
                    key: "approved",
                    label: "Status",
                    sortable: true
                },
                {
                    key:'action',
                    label:'Action',
                    sortable:false
                }
                // "action"
            ]
        }
    },
    props : {
        tableUserTitle:{type: String},
        tableUserApproved:{type: String},
        tableDataKey: {type: Number},
        
    },
    methods:{
        async asyncData() {
            let response = await this.$axios.$post("/company/list/dt/", {
                stat_approved: this.tableUserApproved,
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
        
        onGetApprovalText(approvalId){
            if(approvalId ==0){
                return 'No Approval';
            }else if(approvalId ==1){
                return 'Approved';
            }
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    }
}
</script>
