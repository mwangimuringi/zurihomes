<script>
    import {country_and_states} from "../../../helpers/app.countries";
    import Swal from "sweetalert2";
    /**
     * Search-results component
     */
    export default {
        head() {
            return {
                title: `${this.title} | `+process.env.appName
            }
        },
        data() {
            return {
                title: 'Search Tenants',
                items: [{
                        text: 'WA',
                        href: '/',
                    },
                    {
                        text: 'Tenants',
                        href: '/',
                    },
                    {
                        text: 'Search Tenants',
                        active: true,
                    },
                ],
                optCountries:country_and_states.country,
                searchResults:false,
                searchError:false,
                searchText:"",
                searchItems:[],
                searchItemQT:0,
                printOutLink:"",
                loading: false,
                form_field_required:{
                    first_name:0,
                    last_name:0,
                    middle_name:0,
                    sex:0,
                    country:0,
                    dob:0,
		    email:0
		   
                }
            }
        },
        methods: {
            async asyncData() {
                const form_data = this._handleFormGetData('form_tenant_search');
                const formCheck = this.onCheckFormRequired(form_data);
                this.loading = true;
                this.searchResults = false;
                this.searchError = false;
                
                if(formCheck == false){
                    this.searchError = true; 
                    return;
                }
console.log('Form Data:',form_data);
                let response = await this.$axios.$post("/tenants/search/"+this.$auth.user.user_login_id, form_data);
console.log ("search response:" , response); 
   //             const searchItems = await response.data;
      //           this.searchItems = searchItems;
        //         this.searchItemQT = searchItems.length;
                
                if( response.status == 'ok' ){
                    // if( this.searchItemQT > 0 ){
                    // this.printOutLink='/landlord/tenant-report/'+response.search_result_id;
                    this.searchResults = true;
                    // console.log('open search results')
                    //let routeData = this.$router.resolve({path: '/landlord/tenant-report/'+response.search_result_id});
                    //window.open(routeData.href, '_blank');
                    window.open('/landlord/tenant-report/'+response.search_result_id, '_blank');
                }else{
                    Swal.fire({
                    // position: 'top-end',
                        icon: 'error',
                        title: response.message,
                        showConfirmButton: true,
                        // timer: 3500
                        confirmButtonText: "Ok",
                    });
                }
                
                this.loading = false;
                
            },
            onCheckFormRequired: function(formData){
                let resp=true,textJoin="";
                this.searchText ='';
                if(formData['tenant_firstname'].length > 0){ 
                    this.form_field_required.first_name=0;
                    this.searchText +=` First Name: ${formData['tenant_firstname']}`;
                    textJoin=' | ';
                }else{
                    this.form_field_required.first_name=1; resp = false; 
                 }
                
                if(formData['tenant_lastname'].length > 0){ 
                    this.form_field_required.last_name=0;
                    this.searchText +=` ${textJoin} Last Name: ${formData['tenant_lastname']}`; textJoin=' | ';
                }else{
                    this.form_field_required.last_name=1; resp = false; 
                }
                if(formData['tenant_bob'].length > 0){ 
                    this.form_field_required.dob=0;
                    this.searchText +=` ${textJoin} DOB: ${formData['tenant_bob']}`; textJoin=' | ';
                }else{
                    this.form_field_required.dob=1; resp = false; 
                }
                if(formData['tenant_idnumber'].length > 0){ 
                    this.searchText +=` ${textJoin} ID Number: ${formData['tenant_idnumber']}`; textJoin=' | ';
                }
                if(formData['tenant_email'].length > 0){ 
                    this.searchText +=` ${textJoin} Email: ${formData['tenant_email']}`; textJoin=' | ';
                }

                if(formData['tenantSex'] != 0){ 
                    this.form_field_required.sex=0;
                    this.searchText +=` ${textJoin} Sex: ${formData['tenantSex']}`; textJoin=' | ';
                }else{
                    this.form_field_required.sex=1; resp = false; 
                }
                if(formData['tenantCountryDOB'] != 0){ 
                    this.form_field_required.country=0;
                    this.searchText +=` ${textJoin} Country: ${formData['tenantCountryDOB']}`;
                    textJoin=' | ';
                }else{
                    this.form_field_required.country=1; resp = false; 
                }
                return resp;
            }
        },
        middleware: 'auth'
    }
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-12">
            <div class="search-result-box card" :aria-hidden="loading ? 'true' : null">
                <div class="card-body bg-secondary text-white p-3">
                    <div class="container " >
                        <form class="form-horizontal" id="form_tenant_search">
                            <div class="form-row">
                                <div class="form-group col-md-10 ">
                                    <h1 class="text-sm-center text-white">Tenant Search</h1>
                                </div>
                            </div>
                            <div class="form-row ">
                                <div class="form-group col-md-4 ">
                                <label for="TenantsFirstName" class="form-label">Tenant's First Name</label>
                                    <input type="text" class="form-control form-control-sm" :class="{'is-required' : form_field_required.first_name == 1}" name="tenant_firstname" id="tenant_firstname" autofocus required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="tenant_lastname" class="form-label" >Tenant's Last Name</label>
                                    <input type="text" class="form-control form-control-sm" :class="{'is-required' : form_field_required.last_name == 1}"  name="tenant_lastname" id="tenant_lastname" >
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="tenant_middlename" class="form-label">Tenant's Middle Name</label>
                                    <input type="text" class="form-control form-control-sm"   name="tenant_middlename" id="tenant_middlename" >
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="TenantsDateofBirth" class="form-label">Tenant's Date of Birth</label>
                                    <input type="date" class="form-control form-control-sm" :class="{'is-required' : form_field_required.dob == 1}"  name="tenant_bob" id="tenant_bob" required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="TenantType" class="form-label">Tenant's Id</label>
                                    <br>
                                    <select class="form-control form-control-sm" id="TenantType" name="TenantType">
                                        <option value="">Select One</option>
                                        <option value="1">Government Id</option>
                                        <option value="2">Passport</option>
                                        <option value="3">Driver's Licence</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="tenant_idnumber" class="form-label">Tenant's ID Number</label>
                                    <input type="number" class="form-control form-control-sm"  name="tenant_idnumber" id="tenant_idnumber" placeholder="Id Number"> 
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <label for="tenantSex" class="form-label">Sex</label>
                                    <br>
                                    <select class="form-control form-control-sm" name="tenantSex" id="tenantSex" :class="{'is-required' : form_field_required.sex == 1}"  required>
                                        <option value="">Select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="tenantCountryDOB" class="form-label">Country of Birth:</label>
                                    <select name="tenantCountryDOB" class="form-control form-control-sm" :class="{'is-required' : form_field_required.country == 1}"  id="tenantCountryDOB" required>
                                        <option value="">Select One</option>
                                        <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                    </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="tenant_email" class="form-label">Tenant's Email Address</label>
                                <input type="email" class="form-control form-control-sm" name="tenant_email" id="tenant_email" :class="{'is-required' : form_field_required.email == 1}" required>
                            </div>
                            </div>
                            <div class="form-row ">
                                <div class="form-group m-center ">
                                    <button type="button" @click="asyncData" class="btn btn-primary btn-block">Submit</button>
                                      <router-link v-if="searchResults"
                                        class="btn btn-primary btn-block"
                                        :to="{ name: printOutLink}"
                                        target="_blank"> Link Text
                                    </router-link>  
                                </div>
                            </div>
                            
                        </form>
                        
                        <div v-if="searchError" class="mt-4 text-danger text-center">Please select or enter data in the fields, there is no data selected or filtered.</div>
                        <div v-if="searchResults" class="mt-3 text-center">
                            <h4>Search Results For <span class="text-primary ">"{{searchText}}"</span></h4>
                        </div>
                    </div>
                    <!-- <div v-if="searchResults" class="bg-white">
                        <b-tabs nav-class="nav-bordered bg-white">
                            <b-tab active >
                                <template v-slot:title>
                                    All results <span class="badge badge-success ml-1">{{searchItemQT}}</span>
                                </template>
                                <div v-for="item,index in searchItems" :key="index" class="search-item">
                                <div class="media">
                                    
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <h5 class="mt-0">
                                                    <a href="#" class="text-dark">{{ item.inputTenantsfirstname+' '+item.inputTenantslastname}}</a>
                                                </h5>
                                                <p class="font-13">
                                                    <b>DOB:</b>
                                                    <span><a href="#" class="text-muted">{{_app_format_datetime_dob(item.TENANTdob)}}</a></span>
                                                    <br><b>Sex:</b>
                                                    <span><a href="#" class="text-muted">{{_app_onGetSexName(item.tenantSex)}}</a></span>
                                                    <br><b>Cellphone / Phone:</b>
                                                    <span><a href="#" class="text-muted">{{item.TENANTcellnumber+' / '+item.TENANThomephone}}</a></span>
                                                    <br><b>Email:</b>
                                                    <span><a href="#" class="text-muted">{{item.TENANTemail}}</a></span>
                                                </p>
                                            </div>
                                            <div class="col-8">
                                                
                                                <p class=" font-13">
                                                    <b>Address:</b>
                                                    <br />
                                                    <span class="text-muted">{{ item.inputTenantaddress }}.</span>
                                                </p>
                                                <p class="font-13">
                                                    <b>Location:</b>
                                                    <span><a href="#" class="text-muted">{{item.city_name+', '+item.states_name+', '+item.country_name}}</a></span>
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                          
                        </b-tabs>
                    </div> -->
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
