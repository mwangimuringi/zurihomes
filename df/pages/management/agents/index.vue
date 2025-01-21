<script>
import formAddUser from '../users/ui/AddForm.vue';
import formEditUser from '../users/ui/EditForm.vue';
import UITableBasic from '../../../components/ui-table/ui-table-basic.vue';
/**
 * Useers
 */
export default {
    head() {
        return {
            title: `Agents | `+process.env.appName,
            
        };
    },
    data() {
        return {
            // customesData: customesData,
            
            title: "Agents",
            items: [{
                    text: "WA"
                },
                {
                    text: "Management"
                },
                {
                    text: "Agents",
                    active: true
                }
            ],
            user_login_edit_id:0,
            user_form_edit_data:null,
            tableDataKey:0,
            userFormMode:1,
           
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
        // onFiltered(filteredItems) {
        //     // Trigger pagination to update the number of buttons/pages due to filtering
        //     this.totalRows = filteredItems.length;
        //     this.currentPage = 1;
        // },
        // async asyncData() {
        //     let response = await this.$axios.$post("/users/list/dt/", {
        //         user_type: "user",
        //         user_part_of: "user",
        //         opt_page: this.currentPage,
        //         opt_limit: this.perPage,
        //         opt_sortby: this.sortBy,
        //         opt_sort_order: this.sortDesc,
        //         opt_filter: this.filter,
        //         opt_filter_fields: this.filterFields,
        //     });
        //     const { items, count } = await response;
        //     // this.dtITableItems = items;
        //     this.loading = false;
        //     this.totalRows = count[0].countItems;
        //     return items;
        // },

    },
    components: {
        formAddUser,
        formEditUser,
        UITableBasic
    },
    created() {
        this.$root.$refs.userAgents = this;
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
                        <div class="col-sm-6">
                            <button class="btn btn-info mb-2" @click="onShowAddForm"><i class="mdi mdi-plus-circle mr-1"></i> Add Agent</button>
                        </div>
                        <div class="col-sm-6">
                            <div class="float-sm-right">
                                <button type="button" class="btn btn-success mb-2 mb-sm-0">
                                    <i class="mdi mdi-cog"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                    <UITableBasic :tableDataKey="tableDataKey" tableUserTitle="Agent" tableUserType="user" tableUserPartOf="user" @onEditForm="onShowEditForm"/>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <formAddUser :show="userFormMode" userAdmin="3" userLandLordId="0"/>
        <formEditUser :show="userFormMode" :user="user_form_edit_data" userAdmin="3" :user_id="user_login_edit_id"/>
    </div>
</div>
</template>
