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
    <!-- <form ref="formProperty" id="form_add_property"> -->
        <div class="row">
            <!-- <fieldset> -->
                <div class="row mt-3">
<div class="col col-form-item">
                    <label for="text">Present Employer</label><br/>
                        <input  class="form-control" type="text"  name="Presentemployer" id="message"/>
                </div>
                
                <div class="col col-form-item">
                    <label for="Work Address">Address</label>
                            <input type="text" name="Presentworkaddress" class="form-control mb-20" placeholder="" />
                </div>
                </div>
<div class="row mt-3">
                <div class="col col-form-item">
                    <label for="dropdown">Country:</label>
                        <select class="form-control" name="Presentworkcountry" id="dropdown" v-model="pro.country" @change="getStatesCities">
                            <option value="city"></option>
                  <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>

                        </select> 
                </div>
                
                <div class="col col-form-item">
                    <label for="stateprovince">State/Province:</label>
                        <select class="form-control" name="Presentworkstateprovince" id="dropdown"  v-model="pro.states" @change="getCities">
                            <option value="State/Province"></option>
                           <option v-for="(c) in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>

                        </select>
                </div>
                
                <div class="col col-form-item">
                    <label for="country">City:</label>
                        <select class="form-control" name="Presentworkcity" id="dropdown" v-model="pro.city">
                            <option value="Country"></option>
                                <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>

                        </select><br/>
                </div>
                </div>

             <div class="row mt-3">
   <div class="col col-form-item">
                    <label for="number">Work Phone:</label>
                        <input class="form-control" type="tel" name="Presentworkphone" placeholder="Enter a valid number" id="phone_number" />
                </div>
                
                <div class="col col-form-item">
                    <label for="text">Position</label>
                    <input class="form-control" type="text" name="Presentworkposition" id="position"> 
                </div>
                
                <div class="col col-form-item">
                    <label for="number">Gross monthly income was over:</label>
                    <input class="form-control" type="number" name="Presentmonthly_income" id="income" placeholder="$"/>  
                </div>
                </div>
<div class="row mt-3">
                
                    <label for="date">Dates you began and ended this job:</label>
                
<div class="col col-form-item">
    <input class="form-control" type="date" name="Presentdatestart" id="date" /> </div>
<div class="col col-form-item">
                    <input class="form-control" type="date" name="Presentdateend" id="date" /> 
</div>
                </div>
                
                <div class="row mt-3">
                    <label for="text">Supervisor's name and phone:</label>
<div class="col col-form-item">                    
<input class="form-control" type="text" name="Presentsupername" id="name">
</div>
<div class="col col-form-item">
                    <input  class="form-control" type="number" name="Presentsuperphone_number" id="number"> 
                </div>
               </div> 
            <!-- </fieldset> -->
        </div>
    <!-- </form> -->
</template>
