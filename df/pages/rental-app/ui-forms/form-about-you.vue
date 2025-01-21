<script>
import {country_and_states} from "../../../helpers/app.countries";
    
export default {
    data() {
        return{
	            optCountries:country_and_states.country,
  optCities:[],
            optStates:[],            
        
	pro:{
		country:null,
		city:null,
		states:null
		},
};
    },
   // props : {
        
     //   opt_country: {type: Object},
       // opt_city: {type: Array},
        //opt_states: {type: Array},
        
    //},
    methods: {
      
  async getStatesCities(){
            // console.log(this.company);
            let response = await this.$axios.$get('/bo/states/'+this.pro.country);
            this.optStates=response.data;
        },
        async getCities(){
            let response = await this.$axios.$get('/bo/cities/'+this.pro.states);
            this.optCities=response.data;
        },


  OnChangeCountry(e){
            this.$emit('onGetStates',e.target.value);
        },
        onChangeStates(e){
            this.$emit('onGetCities',e.target.value);
        }
        
    },
}
</script>

<template>
     <form ref="formProperty" id="form_add_property"> 
        <div>
             <fieldset> 
                <!-- <legend>ABOUT YOU</legend> -->
                <div class="row">
                    <div class="row mt-3">
                        <div class="col col-form-item"><label for="full-name">Full Name:(Exactly as on driver's licence or govt. ID</label></div><br/>
<div class="col col-form-item">                        
<input type="text" name="user_login_username" class="form-control" placeholder="Email" autofocus required/>
    <input type="text" name="ABOUTfirst_name" class="form-control" placeholder="First Name" required/>
                          </div>
<div class="col col-form-item">
			  <input type="text" name="ABOUTmiddle_name" class="form-control" placeholder="Middle Name" required/>
</div>
<div class="col col-form-item">
                            <input type="text" name="ABOUTlast_name" class="form-control" placeholder="Last Name" required/>
</div>                    
</div>
                    <br/>
                    
	      
                  <label for="Your Street Address">Your street address <br/>(as shown on your driver's license or government ID card)</label>
<div class="row mt-3">
                        <br/>
<div class="col col-form-item">
                        <input type="number" name="ABOUTstreet" class="form-control" placeholder="Street Number" required/>
</div>
<div class="col col-form-item">
                        <input type="text" name="ABOUTstreet_Name" class="form-control" placeholder="Street Name" required/>
</div>
</div>
<br/>
<div class="row mt-3">
<div class="col col-form-item">
                        <label for="country">Country:</label>
                        <select class="form-control" name="ABOUTCountry" id="dropdown"  v-model="pro.country" @change="getStatesCities">
                            <option value="001">Select </option>
                            <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                        </select>
</div>
<div class="col col-form-item">
                        <label for="stateprovince">State/Province:</label>
                        <select class="form-control" name="ABOUTstateprovince" id="dropdown" v-model="pro.states" @change="getCities">
                            <option value="1">Select</option>
                            <option v-for="(c) in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                        </select>
</div>
<div class="col col-form-item">
                        <label for="dropdown">City:</label>
                        <select name="ABOUTcity" class="form-control" id="dropdown" v-model="pro.city">
                            <option value="001">Select</option>
                            <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                        </select>
                        </div>
                            
                    </div>


                        <br/>
                        <div class="row mt-3">
<div class="col col-form-item">
                            <label for="driverlic">Driver's Licence: State/Province</label>
                                <input class="form-control" type="driverlic" name="ABOUTdrivers_licence" id="number" />
</div>
<div class="col col-form-item">
                            <label for="idcard">Or govt. photo ID card</label>
                                <input type="idcard" class="form-control" name="ABOUTidcard" id="number" />
</div>                        </div>
                        <br/>
                        <div class="row mt-3">
<div class="col col-form-item">
                            <label for="full-name">Former last names (maiden and married)</label><br/></div>
<div class="col col-form-item">
                                <input type="text" name="Formerlast_name" class="form-control" placeholder="Former Last Name"  />
</div>
<div class="col col-form-item" hidden>
                                <input type="text" name="Formerlast2_name" class="form-control" placeholder="Former Last Name" />
</div>
<div class="col col-form-item" hidden>
                                <input type="text" name="Formerlast3_name" class="form-control" placeholder="Former Last Name" />
</div>                        
</div>
                        <br/>
                        <div class="row mt-3">
<div class="col col-form-item">                            
<label for="dropdown">What Citizenship do you hold:</label>
                                <select name="Applicantcitizenship" id="dropdown" class="form-control ">
                                    <option value="000">Select</option>
                                    <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                                </select>
                        </div>
                        
                        <div class="col col-form-item">
                            <label for="date">Date of Birth:</label>
                                <input type="date" class="form-control" name="Applicantdatebirth"/>
                        </div>
</div>
                        <br/>
                        <div class="row mt-3">
<div class="col col-form-item">
                            <label for="height">Height</label>
                                <input class="form-control" type="number" name="Applicantheight" id="Applicantheight" />
</div>
<div class="col col-form-item">
<label>Select</label>
<select class="form-control">
<option value="cm">cm</option>
<option value="in">inches</option>
</select>
</div>
<div class="col col-form-item">                            
<label for="height">Weight</label>
                                <input type="number" class="form-control" name="Applicantweight" id="Applicantweight" />
</div>
<div class="col col-form-item">
<label>Select</label>
<select class="form-control">
<option value="kg">Kg</option>
<option value="lbs">Lbs</option>
</select>
</div>
<div class="col col-form-item">                            
<label for="height">Eye Color</label>
                                <input type="text" class="form-control" name="Applicanteyecolor" id="Applicanteyecolor" />
</div>
<div class="col col-form-item">                            
<label for="height">Hair Color</label>
                                <input type="text" class="form-control" name="Applicanthair_color" id="Applicanthaircolor"/>
</div>
<div class="col col-form-item">                            
<label for="dropdown">Sex:</label>
                                <select class="form-control" name="Sex" id="dropdown">
                                    <option value="0"></option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                        </div>
                        
</div><br/>
                        <div class="row mt-3">
<div class="col col-form-item">
				<label>Marital Status</label>
                            <select class="form-control" name="maritalStatus">
	<option value=""></option>			
	<option value="single">Single</option>
				<option value="married">Married</option>
				<option value="divorced">Divorced</option>
				<option value="widowed">Widowed</option>
				<option value="separated">Separated</option>
				<option value="commonlaw">Common Law</option>
</select>
                        </div>
                        
                        <div class="col col-form-item">
<label>Do you or any occupant smoke?</label>
                            <select class="form-control" name="smoker">
	<option value=""></option>			
<option value="yes">Yes</option>
			<option value="no">No</option>                                
</select>
                        </div>
                        
                        <div class="col col-form-item">
                            <label for="radio">Will you or any occupant have an animal?</label>
			<select class="form-control" name="animalStat">                               
	<option value=""></option>			
<option value="yes">Yes</option>
			<option value="no">No</option>
</select>					
</div>
</div>
                        <br/>
                        <div class="row mt-3">
<div class="col col-form-item">
                            <label for="message">If yes, type, weight, breed, age:</label><br/>
                                <textarea rows="4" cols="50" name="Animalscomment" id="message"></textarea>
</div>                        
</div>
                </div>
                 <br/>
            </fieldset> 
        </div>
     </form> 
</template>
