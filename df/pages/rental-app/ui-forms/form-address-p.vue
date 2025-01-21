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
     <form ref="formProperty" id="form_add_property"> 
        <div class="row">
            <fieldset>
                <div class="row mt-3">
                    <label for="Current home Address">Your previous home address</label><br/>
                    <div class="col col-form-item">
                        <input type="number" name="Previousstreetno" class="form-control" placeholder="Street Number" />
                        
</div>
<div class="col col-form-item">
                        <input type="text" name="Previous_address" class="form-control" placeholder="Street Name" />
</div>
                    </div>
                
                
                
                <div class="row mt-3">
                <div class="col col-form-item">
                    <label for="country">Country:</label>
                        <select class="form-control" name="PreviousCountry" id="dropdown" @change="getStatesCities" v-model="pro.country">
                            <option value=""></option>
                            <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
                        </select><br/>
                </div>
		
		                
                <div class="col col-form-item"> <label for="previousprovince">State/Province:</label>
                        <select class="form-control" name="Previousstateprovince" id="dropdown" v-model="pro.states" @change="getCities">
                            <option value="1">Select</option>
                            <option v-for="(c) in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                        </select>
                </div>
               
                <div class="col col-form-item">
                    <label for="dropdown">City:</label>
                    <select class="form-control" name="Previouscity" id="dropdown" v-model="pro.city">
                        <option value=""></option>
                        <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                    </select> 
                </div>
               </div>
<div class="row mt-3">
                <div class="col col-form-item">
                    <label for="text">Name of above owner or manager's name:</label>
                        <input class="form-control" type="text" name="Currentowner" id="currentowner">
                    <label for="number">Their Phone Number</label>
                        <input class="form-control" type="number" name="Ownerphonenumber" id="number">
                </div>
               
                <div class="col col-form-item">
                    <label for="number">Previous monthly Rent</label>
                        <input class="form-control" type="number" name="Previousrent_monthly" id="rent" placeholder="$"/> 
                </div>
               </div>
<div class="row mt-3">
                <div class="col col-form-item">
                    <label for="date">Date you moved in:</label>
                        <input class="form-control" type="date" name="Previousmove_in" id="date" />
</div>
<div class="col col-form-item">
                    <label for="date">Date you moved out:</label>
                        <input class="form-control" type="date" name="Previousmove_out" id="date" />
</div>                    
</div>
            </fieldset>
        </div>
    </form> 
</template>
