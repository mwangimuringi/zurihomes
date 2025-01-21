<template>
    <div>
        <div class="row mb-2">
            <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                    <label class="d-inline-flex align-items-center">
                        Display&nbsp;
                        <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;{{tableUserTitle}}
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
        <div class="table-responsive mb-0">
            <b-table :key="tableDataKey" ref="dtTableUsers" table-class="table table-centered w-100" thead-tr-class="bg-light" :items="asyncData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                    <div class="custom-control custom-checkbox text-center">
                        <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.user_login_id}`" />
                        <label class="custom-control-label" :for="`contacusercheck${data.item.user_login_id}`"></label>
                    </div>
                </template>

                <template v-slot:cell(user_login_username)="data">
                    {{ data.item.user_login_username }}
                </template>

                <template v-slot:cell(user_type)="data">
                    {{ data.item.user_type }}
                </template>
                
                <template v-slot:cell(user_firstname)="data">
                    {{ data.item.user_firstname+' '+data.item.user_lastname }}
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
                <template v-slot:cell(verified_email)="data">
                    <span class="badge  p-1" 
                    :class="{
                        'badge-soft-success': data.item.verified_email == 1,
                        'badge-soft-danger': data.item.verified_email == 0,
                        }">{{ _app_onEmailVerifided(data.item.verified_email) }}</span>
                </template>
                <template v-slot:cell(user_login_created_date)="data">
                    {{ _app_format_date_time(data.item.user_login_created_date) }}
                </template>
                <template v-slot:cell(user_login_modified_date)="data">
                    {{ _app_format_date_time(data.item.user_login_modified_date) }}
                </template>

                <template v-slot:cell(action)="data">
                    <ul class="list-inline table-action m-0">
                        <!-- <li class="list-inline-item">
                            <a href="javascript:void(0);" class="action-icon">
                                <i class="mdi mdi-eye"></i></a>
                        </li> -->
                        <li class="list-inline-item">
                            <a href="javascript:void(0);" @click="onGoShowEditForm(data.item.user_login_id)"  class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0);" class="action-icon">
                                <i class="mdi mdi-delete"></i>
                            </a>
                        </li>
                    </ul>
                </template>
            </b-table>
        </div>
        <div class="row">
            <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                    <ul class="pagination pagination-roundewd">
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-table-basic',
        data() {
            return{
                
                currentPage:1,
                totalRows: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100],
                filter: null,
                filterOn: [],
                sortBy: "user_login_id",
                sortDesc: false,
                fields: [
                    // {
                    //     key: "check",
                    //     label: ""
                    // },
                    {
                        key: "user_login_id",
                        label: "ID",
                        sortable: true
                    },
                    {
                        key: "user_firstname",
                        label:"Name",
                        sortable: true
                    },
                    {
                        key: "user_login_username",
                        label:"User",
                        sortable: true
                    },
                    {
                        key: "verified_email",
                        label:"Email Confirmed",
                        sortable: true
                    },
                    {
                        key: "verified",
                        label:"Approved",
                        sortable: true
                    },
                    {
                        key: "user_login_created_date",
                        label:"Registered",
                        sortable: true
                    },
                    {
                        key: "user_login_modified_date",
                        label: "Last Login",
                        sortable: true
                    },
                    {
                        key: "user_login_status",
                        label: "Status",
                        sortable: true
                    },
                    "action"
                ]
            }
        },
        props : {
            tableUserTitle:{type: String},
            tableUserType:{type: String},
            tableUserPartOf:{type: String},
            tableDataKey: {type: Number},  
        },
        methods:{
            async asyncData() {
                let response = await this.$axios.$post("/users/list/dt/", {
                    user_type: this.tableUserType,
                    user_part_of: this.tableUserPartOf,
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
            onGoShowEditForm(e){
                this.$emit('onEditForm', e);
            }
        }
    }

</script>
