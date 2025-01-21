<script>
import formAddUser from './../../management/users/ui/AddForm.vue';
import formEditUser from './../../management/users/ui/EditForm.vue';

/**
 * Useers
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
            
        };
    },
    data() {
        return {
            // customesData: customesData,
            
            title: "Search History",
            items: [{
                    text: "WA"
                },
                {
                    text: "Management"
                },
                {
                    text: "Test Search History",
                    active: true
                }
            ],
            user_login_edit_id:0,
            user_form_edit_data:null,
            tableDataKey:0,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "date_created",
            sortDesc: false,
            userFormMode:1,
            fields: [
                // {
                //     key: "check",
                //     label: ""
                // },
                //{
                  //  key: "id",
                    //label:"ID",
                    //sortable: true
                //},
                {
                   key: "id_reg",
                    label:"ID REG",
                    sortable: true
 },
                {
                    key: "search_found",
                    label:"Record Found",
                    sortable: true
                },
                {
                    key: "date_created",
                    label:"Searched Date",
                    sortable: true
                },
                // {
                //     key: "verified",
                //     sortable: true
                // },
                // {
                //     key: "user_login_created_date",
                //     sortable: true
                // },
                {
                    key: "search_filter",
                    label: "Search filter",
                    sortable: true
                },
                
                "action"
            ]
        };
    },
    computed: {
        
    },
    
    methods: {
        
        onShowAddForm(){
            this.userFormMode=2;
        },
        OnRefreshDTTable(){
            this.tableDataKey++;
        },
        async onShowEditForm(setRSId){
            // console.log('setRSId -->',setRSId); return false;
            let response = await this.$axios.$get("/users/edit/"+setRSId);
            // console.log(response); return 
            if(response.status=='ok'){
                this.user_form_edit_data=response.data;
                this.user_login_edit_id=setRSId;
                this.userFormMode=3;
            }
            
        },
        onFormModeUpdate(setMode){
            this.userFormMode=setMode;
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async asyncData() {
            let response = await this.$axios.$post("/tenants/search-list/"+this.$auth.user.user_login_id, {
                
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

    },
    components: {
        formAddUser,
        formEditUser
    },
    created() {
        this.$root.$refs.userManagers = this;
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
                        
                        <!-- <div class="col-sm-6">
                            <div class="float-sm-right">
                                <button type="button" class="btn btn-success mb-2 mb-sm-0">
                                    <i class="mdi mdi-cog"></i>
                                </button>
                            </div>
                        </div> -->
                        <!-- end col-->
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Records
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
                        <b-table :key="tableDataKey" ref="dtTableUsers" table-class="table table-centered w-100" thead-tr-class="bg-light" :items="asyncData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                  <!--          <template v-slot:cell(check)="data">
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.user_login_id}`" />
                                    <label class="custom-control-label" :for="`contacusercheck${data.item.user_login_id}`"></label>
                                </div>
                            </template> --> 

                            <template v-slot:cell(id_reg)="data">
                                <nuxt-link :to="`/landlord/tenant-report/${data.item.id_reg}`" target="_blank" class="text-muted ml-1">{{ data.item.id_reg }}</nuxt-link>
                            </template>
                            <template v-slot:cell(date_created)="data">
                                {{ _app_format_datetime_AP(data.item.date_created) }}
                            </template>
                            
                            <template v-slot:cell(search_found)="data">
                                {{ _app_get_read_search_found(data.item.search_found) }}
                            </template>

                
                            <template v-slot:cell(action)="data">
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                        <a :href="'tenant-report/'+data.item.id_reg" class="action-icon">
                                            <i class="mdi mdi-eye"></i></a>
                                    </li>
                                    
                                    
                                </ul>
                            </template>
                        </b-table>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination ">
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
