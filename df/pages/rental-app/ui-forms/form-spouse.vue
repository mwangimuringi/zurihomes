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
    <div>
        <div class="row mt-3 row-split-divider"></div>
        <div class="row">
            <h4 class="header-divider">YOUR SPOUSE</h4>
            
            
    <label class="form-label" for="full-name">Full Name:</label>
<div class="row">
<div class="col col-form-item">
                <input type="text" name="SPOUSEfirst_name" class="form-control" placeholder="First Name" />
</div>
<div class="col col-form-item">
                <input type="text" name="SPOUSEmiddle_name" class="form-control" placeholder="Middle Name" />
</div>
      <div class="col col-form-item">
          <input type="text" name="SPOUSElast_name" class="form-control form-input-last" placeholder="Last Name" />
</div>
            </div>
        </div>
        <div class="row">
            <div class="col col-form-item">
                <label for="driverlic">Driver's Licence: State/Province</label>
                <input type="driverlic" class="form-control" name="SPOUSEdrivers_licence" id="number" />
            </div>
            <div class="col col-form-item">
                <label for="idcard">Or govt. photo ID card</label>
                <input type="idcard" class="form-control" name="SPOUSEidcard" id="number" />
            </div>
        </div>
        <div class="row">
            
                <label for="full-name">Former last names (maiden and married)</label><br/>
<div class="row">
<div class="col col-form-item">            
    <input type="text" name="SPOUSEformerfirst_name" class="form-control" placeholder="Former Last Name"  />
</div>
<div class="col col-form-item">
                <input type="text" name="SPOUSEformermiddle_name" class="form-control" placeholder="Former Last Name" />
</div>
<div class="col col-form-item">
                <input type="text" name="SPOUSEformerlast_name" class="form-control form-input-last" placeholder="Former Last Name" />
</div>
            </div> 
        </div> 
        <div class="row">
            <div class="col col-form-item">
                <label for="dropdown">What Citizenship do you hold:</label>
                <select name="SPOUSEcitizenship" class="form-control" id="dropdown" v-model="pro.country">
                     <option value="001">Select </option>
<option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                </select>
            </div> 
            
            <div class="col col-form-item">
                <label for="date">Date of Birth:</label>
                <input type="date" class="form-control" name="SPOUSEdatebirth" id="date" />
            </div> 
        </div>
        <div class="row">
            <div class="col col-form-item">
                <label for="height">Height</label>
                <input type="number" class="form-control" name="SPOUSEheight" id="height" />
            </div>
            <div class="col col-form-item">
                <label for="height">Weight</label>
                <input type="number" class="form-control" name="SPOUSEweight" id="weight" />
            </div>
            <div class="col col-form-item">
                <label for="height">Eye Color</label>
                <input type="text" class="form-control" name="SPOUSEeye_color" id="eye-color" />
            </div>
            <div class="col col-form-item">
                <label for="height">Hair Color</label>
                <input type="text" class="form-control" name="SPOUSEhair_color" id="hair-color"/>
            </div> 
            <div class="col col-form-item">
                <label for="dropdown">Sex:</label>
                <select name="SPOUSEsex" class="form-control" id="dropdown">
                    <option value="0"></option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>
            </div>
        </div>
                
              <!--   
                <div class="col-12">
                    <label for="text">Present Employer</label><br/>
                        <textarea rows="1" cols="50"  name="SPOUSEpresentemployer" id="message"></textarea>
                        <br>
                        <label for="Current home Address">Address</label>
                        <br>
                            <input type="text" name="SPOUSEpresentstreetName" class="form-control mb-20" placeholder="" />
                                <label for="dropdown">City:</label>
                                    <select name="SPOUSEpresentcity" id="dropdown">
                                        <option value="city"></option>
                                        <option value="o1">Option 1</option>
                                        <option value="o2">Option 2</option>
                                        <option value="o3">Option 3</option>
                                        <option value="o4">Option 4</option>
                                        <option value="o5">Option 5</option>
                                    </select>
                                    <label for="state/province">State/Province:</label>
                                    <select name="SPOUSEpresentstateprovince" id="dropdown">
                                        <option value="State/Province"></option>
                                        <option value="o1">Option 1</option>
                                        <option value="o2">Option 2</option>
                                        <option value="o3">Option 3</option>
                                        <option value="o4">Option 4</option>
                                        <option value="o5">Option 5</option>
                                    </select>
                                <label for="country">Country:</label>
                                    <select name="SPOUSEpresentcountry" id="dropdown">
                                        <option value="Country"></option>
                                        <option value="o1">Option 1</option>
                                        <option value="o2">Option 2</option>
                                        <option value="o3">Option 3</option>
                                        <option value="o4">Option 4</option>
                                        <option value="o5">Option 5</option>
                                    </select>
                </div>
                <br>
                <div class="col-12">
                    <label for="number">Work Phone:</label>
                    <input type="tel" name="SPOUSEpresentworkphone" placeholder="Enter a valid number" id="phone_number" />
                </div>
                <br>
                <div class="col-12">
                    <label for="text">Position</label>
                        <input type="text" name="SPOUSEpresentposition" id="position">
                </div> 
                <br>
                <div class="col-12">
                    <label for="date">Date you began job:</label>
                        <input type="date" name="SPOUSEpresentjobdate" id="date" />
                </div> 
                <br>
                <div class="col-12">
                    <label for="text">Supervisor's name and phone:</label>
                        <input type="text" name="SPOUSEsupername" id="name">
                        <input type="number" name="SPOUSEphone-number" id="number">
                </div> 
            -->
    </div> 
</template>
