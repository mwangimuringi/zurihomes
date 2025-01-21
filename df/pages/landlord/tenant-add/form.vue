<script>
// import formAddUser from './../../management/users/ui/AddForm.vue';
// import formEditUser from './../../management/users/ui/EditForm.vue';

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
        // formAddUser,
        // formEditUser
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
    <div v-if="userFormMode == 1" class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <h2>Tenant's Information</h2>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputTenantslastname" class="form-label">1st Tenant's Last Name</label>
                            <input type="text" class="form-control" name="tenant_lastname" id="inputTenantslastname" autofocus required>
                        </div>
                        <div class="form-group col-md-4"><label for="inputTenantsmiddlename" class="form-label">Tenant's First Name</label>
                            <input type="text" class="form-control" name="tenant_firstname" id="inputTenantsmiddlename" required>
                        </div>
                        <div class="form-group col-md-4"><label for="inputTenantsfirstname" class="form-label">Tenant's Middle Name</label>
                            <input type="text" class="form-control" name="tenant_middlename" id="inputTenantsfirstname" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputTenantslastname" class="form-label">2nd Tenant's Last Name</label>
                            <input type="text" class="form-control" name="tenant_lastname_2" id="inputTenantslastname">
                        </div>
                        <div class="form-group col-md-4"><label for="inputTenantsmiddlename" class="form-label">Tenant's First Name</label>
                            <input type="text" class="form-control" name="tenant_firstname_2" id="inputTenantsmiddlename" required>
                        </div>
                        <div class="form-group col-md-4"><label for="inputTenantsfirstname" class="form-label">Tenant's Middle Name</label>
                            <input type="text" class="form-control" name="tenant_middlename_2" id="inputTenantsfirstname">
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="form-group col-md-4">
                            <label for="TENANTformerlastname1" class="form-label">1st Tenant's Former Last Name (maiden or married)</label>
                            <input type="text" class="form-control" name="tenant_formerlastname" id="TENANTformerlastname1">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="TENANTformerlastname2" class="form-label">2nd Tenant's Former Last Name (maiden or married)</label>
                            <input type="text" class="form-control" name="tenant_formerlastname_2" id="TENANTformerlastname2">
                        </div>
                    </div>
                    <hr>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputTenantaddress" class="form-label">Current Address</label>
                            <input type="text" class="form-control" name="tenant_address" id="inputTenantaddress">
                        </div>
                       
                       
                        <div class="form-group col-md-2">
                            <label for="TENANTcountry" class="form-label">Country:</label>
                            <select name="tenant_country" class="form-control" id="dropdown">
                                <option value="Country"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="TENANTprovincestate" class="form-label">Province/State:</label>
                            <select name="tenant_states" class="form-control" id="dropdown">
                                <option value="TENANTprovincestate"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="dropdown" class="form-label">City:</label>
                            <select name="tenant_city" class="form-control" id="dropdown">
                                <option value="TENANTcity"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="Postalcole" class="form-label">Postal/Zip Code</label>
                            <input type="text" class="form-control" name="Postalcode" id="Postalcode">
                        </div>
                        <div class="form-group col-md-2">
                            <label for="TENANThomephone" class="form-label">Home Phone #</label>
                            <input type="tel" class="form-control" name="TENANThomephone" id="TENANThomephone">
                        </div>
                        <div class="form-group col-md-2">
                            <label for="TENANTcellnumber" class="form-label">Cell Number</label>
                            <input type="tel" class="form-control" name="TENANTcellnumber" id="TENANTcellnumber">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="TENANTemail" class="form-label">Email Address</label>
                            <input type="email" class="form-control" name="TENANTemail" id="TENANTemail">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="TENANTdob" class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" name="TENANTdob" id="TENANTdob">
                        </div>
                    </div>
                    <div class="form-row mt-3">
                        <div class="form-group col-md-6">
                            <label for="TENANTdriverslic" class="form-label">Driver's License#</label>
                            <input type="text" class="form-control" name="tenant_driverlicense" id="TENANTdriverslic">
                        </div>
                        <div class="form-group col-md-2">
                            <label for="TENANTcountry" class="form-label">Country:</label>
                            <select name="tenant_driverlicense_country" class="form-control" id="dropdown">
                                <option value="Country"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="form-row mb-5">
                        <div class="form-group col-md-6">
                            <label for="TENANTgovphotoid" class="form-label">Government Photo ID</label>
                            <input type="text" class="form-control" name="tenant_goverment_id" id="TENANTgovphotoid">
                        </div>
                        
                        <div class="form-group col-md-2">
                            <label for="GOVcountry" class="form-label">Country:</label>
                            <select name="tenant_govermentid_country" class="form-control" id="dropdown">
                                <option value="GOVcountry"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                        </div>
                        
                    </div>
                    <hr />
                    <div class="form-row mt-1">
                        <div class="form-group col-md-12">
                            <h4>Rental's Information</h4>
                        </div>
                    </div>
                    <div class="form-row">
                        
                        <div class="form-group col-md-2">
                            <label for="Moveindate" class="form-label">Move-in Date</label>
                            <input type="date" class="form-control" name="move_id" id="Moveindate">
                        </div>
                        <div class="form-group col-md-2">
                            <label for="Moveoutdate" class="form-label">Move-out Date</label>
                            <input type="date" class="form-control" name="move_out" id="Moveoutdate">
                        </div>
                    </div>
                    <hr>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Tenant paid rent on time?</label>
                            <select name="Paidontime" class="form-control" id="dropdown">
                                <option value="Paidontime"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Tenant left property clean?</label>
                            <select name="Propertyclean" class="form-control" id="dropdown">
                                <option value="Propertyclean"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Tenant gave proper move-out notice?</label>
                            <select name="Propernotice" class="form-control" id="dropdown">
                                <option value="Propernotice"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Recommend Tenant?</label>
                            <select name="Recommenttenant" class="form-control" id="dropdown">
                                <option value="Recommenttenant"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="form-group col-md-12">
                            <label for="Comments" class="form-label">Comments:</label>
                            <br>
                            <textarea name="tenant_comments" class="form-control" id="inputComments" cols="50" rows="3"></textarea>
                        </div>
                    </div>
                    
                    <div class="form-row mb-2">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Dirty Yard?</label>
                            <select name="tenant_dirtyyard" class="form-control" id="dropdown">
                                <option value="Dirtyyard"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Dirty House?</label>
                            <select name="tenant_dirtyhouse" class="form-control" id="dropdown">
                                <option value="Dirtyhouse"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Damages to the Yard?</label>
                            <select name="tenant_yarddamages" class="form-control" id="dropdown">
                                <option value="Yarddamages"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label text-white"> ? </label>
                            <input type="number" class="form-control"  name="tenant_damagestoyard" id="inputDamagestoyard" placeholder="$"> 
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Damages to the House?</label>
                            <select name="tenant_housedamages" class="form-control" id="dropdown">
                                <option value="Yarddamages"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label text-white"> ?</label>
                            <input type="number" class="form-control"  name="tenant_damagestohouse" id="inputDamagestohouse" placeholder="$"> 
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Back Rent Owed?</label>
                            <select name="tenant_backrent" class="form-control" id="dropdown">
                                <option value="Backrent"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label text-white"> ?</label>
                            <input type="number" class="form-control"  name="tenant_backrent_amount" id="inputBackrent" placeholder="$"> 
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label">Court Filing?</label>
                            <select name="tenant_courtfiling" class="form-control" id="dropdown">
                                <option value="Courtfiling"></option>
                                <option value="o1">Yes</option>
                                <option value="o2">No</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdown" class="form-label text-white"> ?</label>
                            <input type="number" class="form-control"  name="tenant_courtfiling_amount" id="inputCourtfiling" placeholder="$"> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>
