
<template>
  <div class="container-fluid containerfluidstyl">
    <div class="container col-sm-7  mt-5">
      <h3>Lead Details</h3><br>
      <form method="post">
  <input type="text" :placeholder="userLoginUsername" name="login_username1"  v-model="leadform.login_username1" id="login_username1" hidden>      
<input type="text" :placeholder="firstnameuser" id="login_username2" name="login_username1" v-model="leadform.login_username2" hidden>
<input type="text" :placeholder="firstnameext" id="login_userext" name="login_userext" v-model="leadform.login_userext" hidden> 
        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label for="reference_number">Property ID </label>
            <input type="number" class="form-control col-sm-6" v-model="leadform.propertyId" id="reference_number"
                   name="prid" placeholder=" Enter ID">
          </div>

        </div>

        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="reference_number">*Reference Number</label>
            <input type="text" class="form-control" v-model="leadform.referenceNumber" id="reference_number"
                   name="reference_number" placeholder="Please Enter Ref No">
          </div>
          <div class="form-group col-sm-6">
            <label htmlFor="lead_status">Lead Status:</label>
            <select class="form-control" v-model="leadform.leadStatus" id="lead_status" name="lead_status">
              <option value=""><label> Select </label></option>
              <option value="Interested">Interested</option>
              <option value="NotInterested">Not Interested</option>
              <option value="Unreachable">Unreachable</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="first_name_1">First Name</label>
            <input type="text" class="form-control" v-model="leadform.firstName1" id="first_name_1"
                   name="first_name_1" placeholder="Please Enter First Name">
          </div>
          <div class="form-group col-sm-6">
            <label htmlFor="first_name_2">First Name</label>
            <input type="text" class="form-control" id="first_name_2" v-model="leadform.firstName2"
                   name="first_name_2" placeholder="Please Enter Second First Name">
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="company">Company</label>
            <input type="text" class="form-control" id="company" v-model="leadform.company" name="company"
                   placeholder="Please Enter Company Name">
          </div>
          <div class="form-group col-sm-6">
            <label htmlFor="email">Email</label>
            <div class="input-group">
              <input type="email" class="form-control" id="email" v-model="leadform.email" name="email"
                     placeholder="Please Enter Email">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="website">Website</label>
            <input type="text" class="form-control" id="website" v-model="leadform.website" name="website"
                   placeholder="Please Enter Website URL">
          </div>
          <div class="form-group col-sm-6">
            <label htmlFor="phone_no">Phone No.</label>
            <input type="number" class="form-control" id="phone" name="phone"
                   v-model="leadform.phone" placeholder="Please Enter Phone Number">
          </div>
        </div>


        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="notes">Notes</label>
            <input type="text" class="form-control" id="notes" v-model="leadform.notes" name="notes"
                   placeholder="Please Enter Notes">
          </div>
          <div class="form-group col-sm-6">
            <label for="dateField">Date of First Contact:</label>
            <!-- <input type="date" class="form-control" id="dateField"  name="first_contact"> -->
            <input type="date" v-model="leadform.firstContact" class="form-control form-control-sm" :class="form-control">

          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-sm-6">
            <label htmlFor="lead_status">Contact By</label>
            <select class="form-control" v-model="leadform.contactby" id="lead_status" name="contactby">
              <option value=""><label> Select </label></option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>

        </div>


        <button type="submit" name="save" @click.prevent="submitForm" class="btn btn-primary">
          <i class="fas fa-save"></i> Save
        </button>

        <!-- Save and Exit Button with Icon -->
<!--        <button style="width:150px" type="submit" name="saveAndExit"
                class="btn btn-success ">
          <i class="fas fa-save"></i> Save and Exit
        </button> -->
<!--    <button @click="sendEmail">Submit Form</button>-->
      </form>
      <br><br>


    </div>
  </div>
</template>


<script>

import axios from 'axios';
import {SendMailClient} from 'zeptomail';
export default {
 

 components: {
  axios
},
   // data: () => ({
  // 	date: new Date(),
  // }),
  computed: {
    userLoginUsername() {
      return this.$auth.user.user_firstname;
    },
	firstnameuser(){
	return this.$auth.user.user_lastname;
},
firstnameext(){
	return this.$auth.user.agent_ext;
},
  },

  data() {
    return {
 


      leadform: {
agent_id:'',
agent_name:'',
        propertyId: '',
        referenceNumber: '',
        leadStatus: '',
        firstName1: '',
        firstName2: '',
        company: '',
        email: '',
        website: '',
        phone: '',
        notes: '',
	login_username1:'',
login_username2:'',
login_userext:'',
        firstcontact: new Date(),
        contactby: '',
	        user_landlord: 1,
        user_login_username: this.$auth.user.user_login_id,

      }
    }
  },
  mounted() {


    const res = axios.get('https://apiwatenant.weiseragencies.com/api/property/random-data')
        .then((response) => {
          this.leadform.propertyId = response.data.id,
              this.leadform.verified_email = response.data.email,
              this.leadform.phone = response.data.phone
          this.leadform.referenceNumber = response.data.user_id
          // console.log('listing id',this.leadform.user_login_username)
        })


  },


  methods: {



  async sendEmail() {

	const url = 'https://api.zeptomail.com/v1.1/email';
const token = 'Zoho-enczapikey wSsVR613/RekWKwszTGoL7trnQtUA1r3FRkr2FKhvXSqHPrFocczkkPOBALxHfUfEjFqQjZBpu58zhtW0WAG2ot+yVgCDiiF9mqRe1U4J3x17qnvhDzMVm9flRaKJI4Pww5okmJjG4U=';

const requestData = {
  from: { address: 'info@watenantbureau.com' },
  to: [{ email_address: { address: 'noreply@watenantbureau.com', name: 'noreply' } }],
  subject: 'Test Email',
  htmlbody: '<div><b> Test email sent successfully. </b></div>'
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));   

},

 submitForm() {

      this.leadform.user_login_username = this.leadform.verified_email;
     
   this.leadform.agent_name = this.$auth.user.user_first_name;
    this.leadform.agent_id = this.$auth.user.user_login_id;
      //form data post

    const requests = [];
// requests.push(this.sendEmail());
requests.push(axios.post('https://apiwatenant.weiseragencies.com/api/leads/store',this.leadform, {
//	agent_name:this.$auth.user.user_first_name,
//	agent_id:this.$auth.user.user_login_id,

        // user_login_username,

        headers: {
          'Content-type': 'application/json',
        }
      }).then((message) => {
            // console.log(message)
          }));
       


      //update api
      requests.push(axios.put(`https://apiwatenant.weiseragencies.com/api/property/${this.leadform.propertyId}/update-status`, {

        leadStatus: this.leadform.leadStatus,

        headers: {
          'Content-type': 'application/json',
        }
      }).then((message) => {
            // console.log(message)
          }));

      //status based api
      if (this.leadform.leadStatus == 'Interested') {
        console.log('hit this app', this.leadform.leadStatus)
        requests.push(axios.post('https://api.watenantbureau.com/api/bo/create',{
		user_login_id: this.leadform.propertyId,
		user_login_username:this.leadform.email,
		user_firstname:this.leadform.firstName1,
		user_lastname: this.leadform.firstName2,
		user_phone_number:this.leadform.phone,	

          headers: {
            'Content-type': 'application/json',
          }
        }).then((message) => {
               console.log(message)
            }));

	axios.post('https://api.watenantbureau.com/api/bo/mail',{

		firstName1:this.leadform.firstName1,
		firstName2:this.leadform.firstName2,		
		email:this.leadform.email,
		login_username1:this.$auth.user.user_firstname,
		login_username2: this.$auth.user.user_lastname,
		login_userext:this.$auth.user.agent_ext,
	headers:{
	'Content-type':'application/json',	
} 
}).then((message)=>{console.log(message)});



}



 Promise.all(requests)
      .then(() => {
        // All requests are completed, reload the page
        window.location.reload();

setTimeout(() => {
      window.location.reload();
    }, 3000);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });


    }
  },
middleware: "auth",

}


</script>

<style>
.inputpropertyid {
  width: 250px;
}

.inputwidth {
  width: 350px;
}

.btnprimary {
  width: 130px;
}

.btnsuccess {
  width: 160px;
}

.containerfluidstyl {
  background-color: #f7f7f9;
}

.same {
  display: flex;
  justify-content: space-between;
  margin-left: 70%;
}

.btn {
  margin: auto;
  width: 120px;
  height: 40px;
}

</style>
