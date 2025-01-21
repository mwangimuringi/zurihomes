<script>
import formAddUser from './../../management/users/ui/AddForm.vue';
import formEditUser from './../../management/users/ui/EditForm.vue';
//import sendLink from './../../../landlord/rental-link/sendLink.vue';
/**
 * Useers
 */
export default {
    head() {
        return {
            title: `Tenants | `+process.env.appName,
            
        };
    },
    data() {
        return {
            // customesData: customesData,
            invitationCode:null,
            title: "Tenants",
            items: [{
                    text: "WA"
                },
                {
                    text: "Management"
                },
                {
                    text: "Tenants",
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
            sortBy: "user_login_username",
            sortDesc: false,
            userFormMode:1,
            fields: [{
                    key: "check",
                    label: ""
                },
                {
                    key: "user_login_username",
                    label:"Tenant",
                    sortable: true
                },
                {
                    key: "user_type",
                    label:"Email",
                    sortable: true
                },
                {
                    key: "verified",
                    label:"Phone",
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
                    key: "user_login_modified_date",
                    label: "Last Order",
                    sortable: true
                },
                {
                    key: "user_login_status",
                    label: "Status",
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

   sendLink(){

},

async getInvitationCode(setRSId){
 try {
        // Check if the user already has an invitation code
        const existingResponse = await this.$axios.$get(`/users/getInvitationCode/`+setRSId);

        if (existingResponse.status === 'success') {
            // User already has an invitation code
	
                this.invitationCode = response.user.invitation_code;
            console.log("Existing Invitation Code:", existingResponse.user.invitation_code);
            // Handle the existing invitation code as needed
        } else {

                console.error("Error fetching invitation code", response);
}
}catch (error) {
            console.error("Error fetching invitation code", error);
        }
},
	async generateCode(setRSId){
try {
            const response = await this.$axios.$post("/api/landlords/generateInvitationCode/"+setRSId);
            if (response.status === "success") {
                this.invitationCode = response.user.invitation_code;
            } else {
                console.error("Error generating invitation code", response);
            }
        } catch (error) {
            console.error("Error generating invitation code", error);
        }
    },


 // const generateResponse = await this.$axios.$get(`/users/generateInvitationCode/`+setRSId);
//
  //          if (generateResponse.status === 'success') {
                // Invitation code generated successfully
    //            const newInvitationCode = generateResponse.user.invitation_code;
      //          console.log("Generated Invitation Code:", newInvitationCode);
                // Handle the new invitation code as needed
        //    } else {
                // Handle the case where the invitation code couldn't be generated
          //      console.error("Error generating invitation code:", generateResponse.error);
            //}
       // }
    //} catch (error) {
        // Handle any errors that occurred during the request
    //    console.error("Error:", error);
    //}




//},

        onFormModeUpdate(setMode){
            this.userFormMode=setMode;
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async asyncData() {
            let response = await this.$axios.$post("/landlords/list/dt/", {
                user_type: "user",
                user_part_of: "tenant",
                user_landlord: this.$auth.user.user_login_id,
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
this.getInvitationCode();
    },
    middleware: 'auth',

};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-if="userFormMode == 1" class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <button type="button" class="btn btn-success mb-2 mb-sm-0">
                <a href="javascript:void(0);" @click="onShowAddForm()"  class="action-icon">Add Tenant</a>

</button>
<div class="col-sm-12 col-md-6">
<button type="button" class="btn btn-success">
<a href="/tenant/sendlink"  class="action-icon">Send Link</a>
</button>
</div>

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
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Tenants
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

                            <template v-slot:cell(verified)="data">
                                {{ data.item.verified }}
                            </template>
                            <template v-slot:cell(user_login_status)="data">
                                {{ data.item.user_login_status }}
                            </template>
                            <template v-slot:cell(user_login_created_date)="data">
                                {{ data.item.user_login_created_date }}
                            </template>
                            <template v-slot:cell(user_login_modified_date)="data">
                                {{ data.item.user_login_modified_date }}
                            </template>

                            <!-- <template v-slot:cell(status)="data">
                                <span class="badge" :class="{'badge-soft-success': data.item.status === 'Active', 'badge-soft-danger': data.item.status === 'Blocked'}"> {{ data.item.status }}</span>
                            </template> -->

                            <!-- <template v-slot:cell()="data">
                                <div class="media">
                                    <img v-if="data.item.profile" :src="data.item.profile" alt="table-user" class="mr-3 rounded-circle avatar-sm" />
                                    <div v-if="!data.item.profile" class="avatar-sm mr-3">
                                        <div class="avatar-title rounded-circle bg-soft-primary font-weight-medium text-primary">
                                            {{ data.item.name.charAt(0) }}
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1">
                                            <a href="javascript:void(0);" class="text-dark">{{
                          data.item.name
                        }}</a>
                                        </h5>
                                        <p class="mb-0 font-13">ID : {{ data.item.id }}</p>
                                    </div>
                                </div>
                            </template> -->

                            <template v-slot:cell(action)="data">
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-eye"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" @click="onShowEditForm(data.item.user_login_id)"  class="action-icon"><i class="mdi mdi-square-edit-outline"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-delete"></i>
                                        </a>
                                    </li>
<li class="list-inline-item">
<a v-if="invitationCode" href="javascript:void(0);" @click="">Send Link</a>
<a v-else @click="generateCode">Generate Code</a>
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
    <div class="row">
        <formAddUser :show="userFormMode" userAdmin="5" :userLandLordId="this.$auth.user.user_login_id.toString()"/>
        <formEditUser :show="userFormMode" :user="user_form_edit_data" userAdmin="2" :user_id="user_login_edit_id"/>

    </div>
</div>
</template>
