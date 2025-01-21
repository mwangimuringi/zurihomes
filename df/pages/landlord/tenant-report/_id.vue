<script>
export default {
	head() {
		return {
			title:'Tenant Report | ' +process.env.appName,
			};
		},
	async asyncData({
		params
		}) {
			return params.id;
		     },
		data() {
			return {
title: "Tenant Report",
items:[{
text : "WA"
},
{
text : "Tenants"
},
{
	text: "Tenant report",
active: true
}
],
isLoaded:false,
searchBy:"",
searchDateTime:"",
tenantIdReg:null,
tenantRA:false,
tenantRADT:null,
tenantMainDT:null,
tenantHistory:null,
tenantSearchedLogs:[],
tenantReportIdReg:this.$route.params.id,
};
},
computed: {
     
},
methods:{

async asyncDataTenantReport() {
let response=await this.$axios.$post("/tenants/search-ti/"+this.tenantReportIdReg,{});
if(response.status=='ok')
{
this.tenantMainDT=response.data[0];
this.tenantHistory=response.data;
this.tenantSearchedLogs=response.tenant_search_logs;


if(response.rental_application.status=='ok'){

	this.tenantRA=true;
	this.tenantRADT=response.rental_application.data;
this.searchBy=response.landlord_name;
this.tenantSearchedLogs=response.tenant_search_logs;
this.searchDateTime=response.date_created;
this.tenantIdReg=response.rental_application.data.tenant_idreg;
}
this.isLoaded=true;
}
},
convertPaidontime(value){
return {
text:value === 1 ? 'Yes' : 'No',
class: value === 1 ? 'text-success' : 'text-danger',
};
},
formatDate(dateString)
{
if(dateString)
{
const dateObject=new Date(dateString);
const day=dateObject.getDate();
const month=dateObject.getMonth()+1;
const year=dateObject.getFullYear();

      return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;}
return '';
},



},
mounted(){
this.asyncDataTenantReport();
},
components: {

},
created() {

},
layout: 'auth-wl',
};
</script>




<template>

<div>
    <div v-if="isLoaded" class="row">
  <div class="col-12">
  <div class="card card-tenant-report bg-wa-tenant-report">
<div class="card-body">
<div class="row mb-4">
<div class="col-12 mb-2"><h3 class="text-center title-tenant-report">Tenant Report</h3></div>
<div class="col-12"><h5 class="text-right">Tenant ID# {{ tenantMainDT.id_reg }}</h5>
</div>




  <div v-if="tenantRA===false" class="row">
                        <div class="col-4"><b>Tenant Name</b>: {{ tenantMainDT.inputTenantslastname+' '+tenantMainDT.inputTenantsfirstname+' '+tenantMainDT.inputTenantsmiddlename }}</div>
                        <div class="col-4"><b>DOB:</b> {{ formatDate(tenantMainDT.TENANTdob) }}</div>
                        <div class="col-12"><b>Present Address:</b> {{ tenantMainDT.inputTenantaddress +', '+ tenantMainDT.city_name+', '+ tenantMainDT.states_name+', '+ tenantMainDT.country_name }} </div>
                        <!--  <div class="col-12"><b>Tenants Identification Used: </b> (Type): (Number) If more then one ID has been linked to this tenant then all ID info will be shown</div> -->
                        <div class="col-12"><b>Phone#:</b> {{ tenantMainDT.TENANTcellnumber }} <span v-if="tenantMainDT.TENANTcellnumber.length < 1">(no phone inputed)</span></div>
                        <div class="col-12"><b>Email:</b> {{ tenantMainDT.TENANTemail }} <span v-if="tenantMainDT.TENANTemail.length < 1">(no email inputed)</span></div>
  <div class="col-6 mt-2"><b>Damages to the Yard?</b><span v-if="tenantMainDT.Yarddamages == 1" style="color:red">Yes</span><div v-else>No</div>span> </div>
                     <div v-if="tenantMainDT.inputDamagestoyard == 1" class="col-6 mt-2" ><b>Price?</b>{{tenantMainDT.inputDamagestoyard}}</div>

                      <div class="col-6 mt-2"><b>Damages to the House ?</b><span v-if="tenantMainDT.Housedamages == 1" style="color:red">Yes</span><span v-else>No</span> </div>
                      <div v-if="tenantMainDT.inputDamagestohouse == 1" class="col-6 mt-2" ><b>Price?</b>{{tenantMainDT.inputDamagestohouse}}</div>

                      <div class="col-6 mt-2"><b>Back Rent Owed?</b><span v-if="tenantMainDT.Backrent == 1" style="color:red">Yes</span><span v-else>No</span> </div>
                      <div v-if="tenantMainDT.inputBackrent == 1" class="col-6 mt-2" ><b>Price?</b>{{tenantMainDT.inputBackrent}}</div>

                      <div class="col-6 mt-2"><b>Court Filing?</b><span v-if="tenantMainDT.Courtfiling == 1" style="color:red">Yes</span><span v-else>No</span> </div>
                      <div v-if="tenantMainDT.inputCourtfiling == 1" class="col-6 mt-2" ><b>Price?</b>{{tenantMainDT.inputCourtfiling}}</div>                  


</div>

 <div v-if="tenantRA === true" class="row">
                        <div class="col-12"><b>Tenant Name</b>: {{ tenantRADT.ABOUTlast_name+' '+tenantRADT.ABOUTfirst_name+' '+tenantRADT.ABOUTmiddle_name }}</div>
                        <!-- <div class="col-4"><b>DOB:</b> {{ this._app_format_datetime_dob(tenantRADT.Applicantdatebirth) }}</div> -->
                        <div class="col-12"><b>Present Address:</b> {{ tenantRADT.ABOUTstreet +' '+tenantRADT.ABOUTstreet_Name  +', '+ tenantRADT.city_name+', '+ tenantRADT.states_name+', '+ tenantRADT.country_name }} </div>
                        <div class="col-12"><b class="mr-3">Tenants Identification Used: </b>
                            <span v-if="tenantRADT.ABOUTdrivers_licence !=''" class="text-left mr-3"> Driver's Licence: <b>{{ tenantRADT.ABOUTdrivers_licence }}</b></span>
                            <span v-if="tenantRADT.ABOUTidcard !=''" class="text-left mr-3"> Govt. photo ID card: <b>{{ tenantRADT.ABOUTidcard }}</b></span>
                        </div>
                        <!-- <div v-if="tenantRADT.ABOUTdrivers_licence !=''" class="col-4"> Driver's Licence: <b>{{ tenantRADT.ABOUTdrivers_licence }}</b></div>
                        <div v-if="tenantRADT.ABOUTidcard !=''" class="col-4"> Govt. photo ID card: <b>{{ tenantRADT.ABOUTidcard }}</b></div> -->
                        <!-- <div class="col-12"><b>Phone#:</b> {{ tenantRADT.TENANTcellnumber }} <span v-if="tenantRADT.TENANTcellnumber.length < 1">(no phone inputed)</span></div> -->
<!--                        <div class="col-3 mt-2"><b>Email:</b> {{ tenantRADT.TENANTemail }} <span v-if="tenantRADT.TENANTemail.length < 1">(no email inputed)</span></div> -->
                        <div class="col-3 mt-2"><b>DOB:</b> {{ this._app_format_datetime_dob(tenantRADT.Applicantdatebirth) }}</div>
                        <div class="col-3 mt-2"><b>Citizenship:</b> {{ tenantRADT.country_citizenship }} </div>
                        <div class="col-3 mt-2"><b>Sex:</b> {{ this._app_onGetSexName(tenantRADT.Sex) }} </div>

                        <div class="col-3 mt-0"><b>Height:</b> {{ tenantRADT.Applicantheight+' '+tenantRADT.Applicantheight_ms }} </div>
                        <div class="col-3 mt-0"><b>Weight:</b> {{ tenantRADT.Applicantweight+' '+tenantRADT.Applicantweight_ms }} </div>
                        <div class="col-3 mt-0"><b>Eye Color:</b> {{ tenantRADT.Applicanteyecolor }} </div>
                        <div class="col-3 mt-0"><b>Hair Color:</b> {{ tenantRADT.Applicanthair_color }} </div>

                        <!-- <div class="col-4 mt-1"><b>Marital Status:</b> </div>
                        <div class="col-4 mt-1"><b>Do you or any occupant smoke?</b>  </div>
                        <div class="col-4 mt-1"><b>Will you or any occupant have an animal?</b> {{ tenantRADT.SPOUSEeye_color }} </div> -->

                        <div class="col-12 mt-3"><b>Marital Status:</b> {{ this._app_onGetMaritalStatus(tenantRADT.maritalStatus) }} </div>
                        <div class="col-12"><b>Do you or any occupant smoke?</b> {{ tenantRADT.smoker.toUpperCase() }} </div>
                        <div class="col-12"><b>Will you or any occupant have an animal?</b> {{ tenantRADT.animalStat }} </div>
                        <!-- <div class="col-6"><b>DOB:</b> {{ this._app_format_datetime_dob(tenantRADT.Applicantdatebirth) }} </div> -->

                        <div  v-if="tenantRADT.SPOUSEfirst_name !=''" class="col-6 mt-2"><b>Spouse:</b> {{ tenantRADT.SPOUSElast_name+' '+tenantRADT.SPOUSEfirst_name+' '+tenantRADT.SPOUSEmiddle_name }}</div>
                        <div  v-if="tenantRADT.SPOUSElast_name !=''" class="col-6 mt-2">DOB: (date of birth)</div>
                   </div>

   <div v-if="tenantRA ==true" class="row mt-4">
                        <div class="col-12 mb-3"><h4 class="text-center header-bordered">Rental History</h4></div>

                        <div class="col-6">
                            <h5 class="text-left rental-historial-sub-header">Current Home Address (Where you live now)</h5>
                            <div class="col-12 no-padding-l">{{ tenantRADT.Currentstreet }}, {{ tenantRADT.Currentstreetname }}</div>
                            <div class="col-12 no-padding-l">{{ tenantRADT.city_current }}, {{ tenantRADT.states_current }}, {{ tenantRADT.country_current }}</div>
                            <div class="col-12 no-padding-l"><b>Telephone:</b> {{ tenantRADT.Currentphoneno }}</div>
                            <div class="col-12 no-padding-l"><b>Cellphone:</b> {{ tenantRADT.Currentcellnumber }}</div>
                            <div class="col-12 no-padding-l">
                                <h4 class="text-left" :class="{'text-danger' : tenantRADT.status_verified == 0}">{{ this._app_onGetStatusRA(tenantRADT.status_verified) }}</h4>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <h5 class="text-left rental-historial-sub-header">Your previous home address</h5>
                            <div class="row">
                                <div class="col-12">{{ tenantRADT.Previousstreetno }}, {{ tenantRADT.Previous_address }}</div>
                                <div class="col-12">{{ tenantRADT.city_previous }}, {{ tenantRADT.states_previous }}, {{ tenantRADT.country_previous }}</div>
                                <div class="col-6"><b>Date Moved in:</b> {{ _app_format_datetime_dob(tenantRADT.Previousmove_in) }}</div>
                                <div class="col-6"><b>Date Moved out:</b> {{ _app_format_datetime_dob(tenantRADT.Previousmove_out) }}</div>
                                <div class="col-12"><b>Owner or Manager's name:</b> {{ tenantRADT.Currentowner }}</div>
                                <div class="col-12"><b>Their Phone Number:</b> {{ tenantRADT.Ownerphonenumber }}</div>
                                <div class="col-12"><b>Previous monthly Rent:</b> {{ tenantRADT.Previousrent_monthly }} {{ tenantRADT.Previousrent_monthly_currency }}</div>
                            </div>
                            <!-- <div class="col-12"><b>Previous monthly Rent:</b> {{ tenantRADT.Previousrent_monthly }} {{ tenantRADT.Previousrent_monthly_currency }}</div> -->
                        </div>

                        <div class="row rental-historial-item" v-for="item,index in tenantHistory" :key="index">
                            <div class="rental-historial-landlord">
                                <div class="col-12"><b>Landlord:</b> {{ item.landlord_name }} - ID# {{ item.landlord_idreg }}</div>
                                <div class="col-12"><b>Contact information:</b> {{ item.landlord_phone }} - {{ item.landlord_email }}</div>
                            </div>
                            <div class="col-8"><b>Move-in Date:</b> {{ _app_format_datetime_dob(item.Moveindate) }}</div>
                            <div class="col-4">Reg. Date: <b>{{ _app_format_datetime_AP(item.date_created) }}</b></div>
                            <div class="col-12"><b>Move-out Date:</b> {{ _app_format_datetime_dob(item.Moveoutdate) }}</div>
                            <div class="col-12" :class="{'text-danger' : item.Paidontime == 2}">Tenant paid rent on time? {{ _app_onGetYesNoTR(item.Paidontime) }}</div>
                            <div class="col-12" :class="{'text-danger' : item.Propertyclean == 2}">Tenant left property clean? {{ _app_onGetYesNoTR(item.Propertyclean) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Propernotice == 2}">Tenant gave proper move-out notice? {{ _app_onGetYesNoTR(item.Propernotice) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Recommenttenant == 2}"> Recommend Tenant?  {{ _app_onGetYesNoTR(item.Recommenttenant) }} </div>
                            <div v-if="item.inputComments.length > 3" class="col-12 mt-3"><b>Comments:</b><p>{{ item.inputComments }}</p></div>
                            <div class="col-12 mt-3" :class="{'text-danger' : item.Dirtyyard == 1}">Dirty Yard?  {{ _app_onGetYesNoTR(item.Dirtyyard) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Dirtyhouse == 1}">Dirty House? {{ _app_onGetYesNoTR(item.Dirtyhouse) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Yarddamages == 1}">Damages to the Yard? {{ _app_onGetYesNoTR(item.Yarddamages) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Housedamages == 1}">Damages to the House {{ _app_onGetYesNoTR(item.Housedamages) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Backrent == 1}">Back Rent Owed? {{ _app_onGetYesNoTR(item.Backrent) }} </div>
                            <div class="col-12" :class="{'text-danger' : item.Courtfiling == 1}">Court Filing? {{ _app_onGetYesNoTR(item.Courtfiling) }} </div>


                         <!--   <div class="col-12 mt-3">This Information has been verified by WA Agent (Agent ID#) (Date Verified) or this information has been submitted by Landlord <b>( ID# {{ item.landlord_idreg }})</b> directly. </div> -->
                        </div>

                    </div>



  <div class="row mt-4">
                        <div class="col-12">
                            <h3 class="text-center"> Existing Matches from Tenant Searches </h3>
                            <!-- <h5 class="text-center">Searched By {{ searchBy }} - ID# {{ tenantIdReg }} | {{ this._app_format_datetime_AP(searchDateTime) }}</h5> -->
                        </div>
                        <div class="col-12">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                                                                <th>Reg. Date</th>
                                        <th>Landlord</th>
                                        <th>ID# Landlord</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item,index in tenantSearchedLogs" :key="index">
                                        

                                        <td>{{ _app_format_datetime_AP(item.date_created)}}</td>
                                        <td>{{item.landlord_name}}</td>
                                        <td>{{item.landlord_idreg}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


</div>
</div>
</div>
</div>
<div >
  <div class="row mt-4">
                        <div class="col-12">
                            <h3 class="text-center"> Previous Searches </h3>
                            <!-- <h5 class="text-center">Searched By {{ searchBy }} - ID# {{ tenantIdReg }} | {{ this._app_format_datetime_AP(searchDateTime) }}</h5> -->
                        </div>
                        <div class="col-12">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Reg. Date</th>
                                        <th>Landlord</th>
                                        <th>ID# Landlord</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item,index in tenantSearchedLogs" :key="index">
                                        <th scope="row">{{index}}</th>

                                        <td>{{ _app_format_datetime_AP(item.date_created)}}</td>
                                        <td>{{item.landlord_name}}</td>
                                        <td>{{item.landlord_idreg}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


 <h5 style="text-align:center; color:red;">Here is the good news,
 there is NO match in our database. This could be due to the applicant's
 landlord not being a member or the tenant has not caused any issue, so the landlord has no reason to input their name.</h5>
            
</div>
</div>
</div>
</template>
