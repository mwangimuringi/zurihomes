<script>
import Swal from "sweetalert2";
import vue2Dropzone from "vue2-dropzone";
import {country_and_states} from "../../../helpers/app.countries";
/**
 * Useers
 */
export default {
    head() {
        return {
            title: `Tenant's Information | `+process.env.appName,
            
        };
    },
    data() {
        return {
            // customesData: customesData,
            
            title: "Tenant's Information",
            items: [{
                    text: "WA"
                },
                {
                    text: "Landlord"
                },
                {
                    text: "Tenant's Information",
                    active: true
                }
            ],
            optCountries:country_and_states.country,
            optProvinces:[],
            optCities:[],
            optProvincesDriverLicense:[],
            optProvincesDriverGovId:[],
            TENANTcountry:"",
            TENANTprovincestate:0,
            TENANTcity:0,
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
            isAgreeNoChecked: true,
            isAgree: false,
            submitted: false,
            dropzoneOptions: {
                // url: process.env.apiBaseUrl+"/photos/photo-upload/"+this.property.property_id,
                url: process.env.apiBaseUrl+"/photos/photo-upload/",
                thumbnailWidth: 150,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 100,
                maxFilesize:200,//MB
                autoProcessQueue:false,
                // maxFilesize: 0.5,
                headers: {
                    // "Content-Type": "application/json",
                    'Cache-Control': null,
                    'X-Requested-With': null,
                    // 'Access-Control-Allow-Origin': '*',
                    // "Content-Type": "text/html",
                    // Authorization: `Bearer ${this.$auth.user.user_uid}`,
                },
                previewTemplate: this.template(),
            },
        };
    },
    computed: {
        
    },
    mounted() {
        this.isAgreeNoChecked=true;
    },
    methods: {
        template: function () {
            return ` <div class="dropzone-previews mt-3">
                <div class="card mt-1 mb-0 shadow-none border">
                    <div class="p-2">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                            </div>
                            <div class="col pl-0">
                                <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                                <p class="mb-0" data-dz-size></p>
                            </div>
                            <div class="col-auto">
                                <!-- Button -->
                                <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                    <i class="fe-x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        async onTENANTcountry(){
            let response = await this.$axios.$get('/bo/states/'+this.TENANTcountry);
            this.optProvinces=response.data;
        },
        async onTENANTprovincestate(){
            let response = await this.$axios.$get('/bo/cities/'+this.TENANTprovincestate);
            this.optCities=response.data;
        }, 
        
        async onTENANTStateDriverLicense(e){
            let response = await this.$axios.$get('/bo/cities/'+this.TENANTprovincestate);
            this.optCities=response.data;
        }, 
        async onChangeDriverLicenseCountry(e){
            this.optProvincesDriverLicense = await this.onGetProvinceState(e.target.value);
        },
        async onChangeDriverGOVCountry(e){
            this.optProvincesDriverGovId = await this.onGetProvinceState(e.target.value);
        },
        async onGetProvinceState(e){
            let response = await this.$axios.$get('/bo/states/'+e);
            return response.data;
        },
        onFormModeUpdate(setMode){
            this.userFormMode=setMode;
        },
        
        async formPostSubmit(){
            const form_data=this._handleFormGetData('form_tenant_info');
            this.submitted = true;        
            Swal.fire({
                title: "Are you sure?",
                text: "If you want to add an property, press [Yes, continue]!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, continue",
                cancelButtonText: "Cancel!",
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
            }).then((result) => {
                if (result.value) {
                    this.createNewRecordDT(form_data); 
                } 
            });
        },
        onCompletedUpload: function(response){
            if(response.status == 'success'){
                this.$router.push('/properties');
            }
        },
        async createNewRecordDT(form_data) {
            let response = await this.$axios.$post('/tenants/create-info/'+this.$auth.user.user_login_id,form_data);
            if(response.status=='ok'){
                // this.dropzoneOptions.url=this.dropzoneOptions.url+response.property_id;
                const photoQT = this.$refs.photosUploader.dropzone.files.length;
                if( photoQT > 0){
                    this.$refs.photosUploader.setOption("url", process.env.apiBaseUrl+"/photos/photo-upload/"+response.record_id+'/2');
                    this.$refs.photosUploader.processQueue();
                }
                setTimeout(() => {
                    this.$router.push('/landlord/tenant-information')
                }, "3000")
                // this.$toast.success('New Record Added!',{duration:2000,fitToScreen:true});
                // this.closeForm();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
        },
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    watch:{
        
        isAgree:function(v){
            this.isAgreeNoChecked=true;
            if(v==true){
                this.isAgreeNoChecked=false;
            }else{
                this.isAgreeNoChecked=true;
            }
        }
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
                <div class="card-body bg-tenant-info-form">
                    <form class="form-horizontal" @submit.prevent="formPostSubmit" id="form_tenant_info">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <h2>Tenant's Information</h2>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputTenantslastname" class="form-label">1st Tenant's Last Name</label>
                                <input type="text" class="form-control" name="inputTenantslastname" id="inputTenantslastname" autofocus required>
                            </div>
                            <div class="form-group col-md-4"><label for="inputTenantsfirstname" class="form-label">Tenant's First Name</label>
                                <input type="text" class="form-control" name="inputTenantsfirstname" id="inputTenantsfirstname" required>
                            </div>
                            <div class="form-group col-md-4"><label for="inputTenantsmiddlename" class="form-label">Tenant's Middle Name</label>
                                <input type="text" class="form-control" name="inputTenantsmiddlename" id="inputTenantsmiddlename" >
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputTenantslastname" class="form-label">2nd Tenant's Last Name</label>
                                <input type="text" class="form-control" name="inputTenantslastname_2" id="inputTenantslastname">
                            </div>
                            <div class="form-group col-md-4"><label for="inputTenantsmiddlename" class="form-label">Tenant's First Name</label>
                                <input type="text" class="form-control" name="inputTenantsmiddlename_2" id="inputTenantsmiddlename" >
                            </div>
                            <div class="form-group col-md-4"><label for="inputTenantsfirstname" class="form-label">Tenant's Middle Name</label>
                                <input type="text" class="form-control" name="inputTenantsfirstname_2" id="inputTenantsfirstname">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="TENANTformerlastname1" class="form-label">1st Tenant's Former Last Name (maiden or married)</label>
                                <input type="text" class="form-control" name="TENANTformerlastname1" id="TENANTformerlastname1">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="TENANTformerlastname2" class="form-label">2nd Tenant's Former Last Name (maiden or married)</label>
                                <input type="text" class="form-control" name="TENANTformerlastname2" id="TENANTformerlastname2">
                            </div>
                        </div>
                        
                        <br>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputTenantaddress" class="form-label">Current Address</label>
                                <input type="text" class="form-control" name="inputTenantaddress" id="inputTenantaddress" required>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="TENANTcountry" class="form-label">Country:</label>
                                <select name="TENANTcountry" class="form-control" id="dropdown" required
                                    v-model="TENANTcountry" 
                                    @change="onTENANTcountry"
                                    >
                                    <option value=""></option>
                                    <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                </select>
                            </div>
                            
                            <div class="form-group col-md-2">
                                <label for="TENANTprovincestate" class="form-label">Province/State:</label>
                                <select name="TENANTprovincestate" class="form-control" id="dropdown" 
                                    v-model="TENANTprovincestate" 
                                    @change="onTENANTprovincestate" required>
                                    
                                    <option v-for="c in optProvinces" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="dropdown" class="form-label">City:</label>
                                <select name="TENANTcity" class="form-control" id="dropdown" required>
                                    <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="Postalcole" class="form-label">Postal/Zip Code</label>
                                <input type="text" class="form-control" name="Postalcode" id="Postalcode">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="TENANThomephone" class="form-label">Home Phone #</label>
                                <input type="tel" class="form-control" name="TENANThomephone" id="TENANThomephone">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="TENANTcellnumber" class="form-label">Cell Number</label>
                                <input type="tel" class="form-control" name="TENANTcellnumber" id="TENANTcellnumber">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="TENANTemail" class="form-label">Email Address</label>
                                <input type="email" class="form-control" name="TENANTemail" id="TENANTemail">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="tenantSex" class="form-label">Sex</label>
                                <select name="tenantSex" class="form-control" id="tenantSex">
                                    <option value=""></option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="TENANTdob" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" name="TENANTdob" id="TENANTdob" required>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="TENANTCitizenship" class="form-label">Citizenship</label>
                                <select  id="TENANTCitizenship" name="TENANTCitizenship" class="form-control" required>
                                    <option value=""></option>
                                    <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                            <label for="TENANTdriverslic" class="form-label">Driver's License#</label>
                            <input type="text" class="form-control" name="TENANTdriverslic" id="TENANTdriverslic">
                            </div>
                            
                            <div class="form-group col-md-2">
                                <label for="TENANTcountry" class="form-label">Country:</label>
                                <select name="driverlicenseCountry" class="form-control" @change="onChangeDriverLicenseCountry">
                                    <option value=""></option>
                                    <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="driverLicenseProvince" class="form-label">Province/State:</label>
                                <select name="driverLicenseProvince" class="form-control" id="driverLicenseProvince" >
                                    <option value=""></option>
                                    <option v-for="c in optProvincesDriverLicense" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="TENANTgovphotoid" class="form-label">Government Photo ID</label>
                                <input type="text" class="form-control" name="TENANTgovphotoid" id="TENANTgovphotoid">
                            </div>
                            
                            <div class="form-group col-md-2">
                                <label for="GOVcountry" class="form-label">Country:</label>
                                <select name="GOVcountry" class="form-control" @change="onChangeDriverGOVCountry">
                                    <option value=""></option>
                                    <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="GOVProvince" class="form-label">Province/State:</label>
                                <select name="GOVProvince" class="form-control" id="GOVProvince" >
                                    <option value=""></option>
                                    <option v-for="c in optProvincesDriverGovId" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Moveindate" class="form-label">Move-in Date</label>
                                <input type="date" class="form-control" name="Moveindate" id="Moveindate" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="Moveoutdate" class="form-label">Move-out Date</label>
                                <input type="date" class="form-control" name="Moveoutdate" id="Moveoutdate" required>
                            </div>
                        </div>
                        <hr>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="dropdown" class="form-label">Tenant paid rent on time?</label>
                                <select name="Paidontime" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="dropdown" class="form-label">Tenant left property clean?</label>
                                <select name="Propertyclean" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="dropdown" class="form-label">Tenant gave proper move-out notice?</label>
                                <select name="Propernotice" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="dropdown" class="form-label">Recommend Tenant?</label>
                                <select name="Recommenttenant" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="Comments" class="form-label">Comments:</label>
                                <br>
                                <textarea name="inputComments" class="form-control" id="inputComments" cols="50" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="dropdown" class="form-label">Dirty Yard?</label>
                                <select name="Dirtyyard" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="dropdown" class="form-label">Dirty House?</label>
                                <select name="Dirtyhouse" id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3 form-inline-tenant-info">
                                <label for="dropdown" class="form-label">Damages to the Yard?</label>
                                <select name="Yarddamages"  id="dropdown" required>
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <input type="number" class="form-contr2l"  name="inputDamagestoyard" id="inputDamagestoyard" placeholder="$"> 
                            </div>
                        </div> 
                        <div class="form-row">
                            <div class="form-group col-md-3 form-inline-tenant-info">
                                <label for="dropdown" class="form-label">Damages to the House?</label>
                                <select name="Housedamages" id="dropdown">
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <input type="number" class="form-control2"  name="inputDamagestohouse" id="inputDamagestohouse" placeholder="$"> 
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3 form-inline-tenant-info">
                                <label for="dropdown" class="form-label">Back Rent Owed?</label>
                                <select name="Backrent" id="dropdown">
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <input type="number" class="form-control2"  name="inputBackrent" id="inputBackrent" placeholder="$"> 
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3 form-inline-tenant-info">
                                <label for="dropdown" class="form-label">Court Filing?</label>
                                <select name="Courtfiling" id="dropdown">
                                    
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <input type="number" class="form-control2"  name="inputCourtfiling" id="inputCourtfiling" placeholder="$"> 
                            </div>
                        </div> 

                    

                        <div class="form-group mt-2">
                            <hr>
                            <h4 class="header-title">Upload Documents</h4>
                            <p class="sub-header">Upload docs,photos not videos</p>

                            <vue-dropzone id="dropzone" ref="photosUploader" 
                            v-on:vdropzone-complete="onCompletedUpload" 
                            :use-custom-slot="true" 
                            :options="dropzoneOptions">
                                <div class="dz-message needsclick">
                                    <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                    <h3>Drop files here or click to upload.</h3>
                                    <span class="text-muted font-13">
                                        (Upload documents for the register. Selected files are
                                        <strong>not</strong> actually uploaded.)
                                    </span>
                                </div>
                            </vue-dropzone>
                            <hr>
                        </div>

                        <div class="form-group mt-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox-signup" v-model="isAgree"/>
                                <label class="custom-control-label" for="checkbox-signup">
                                    I accept
                                    <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a>
                                    <p>By submitting the document I the above named as Tenant 1, state that the information is true and correct to the best of my knowledge. I understand that this record will be recorded in my file with WA Tenant Bureau. My IP Address is recorded as my electronic signature.</p>
                                </label>
                            </div>
                        </div>
                        <div class="form-group mb-0 text-center">
                            <!-- <p>By submitting the document I the above named as Tenant 1, state that the information is true and correct to the best of my knowledge. I understand that this record will be recorded in my file with WA Tenant Bureau. My IP Address is recorded as my electronic signature.</p> -->
                            <button :disabled="isAgreeNoChecked" class="btn btn-primary btn-block" type="submit" >Submit Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>
