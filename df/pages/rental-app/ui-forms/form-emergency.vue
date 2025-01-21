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
        <div class="row mt-3">
            <h4 class="header-divider">EMERGENCY</h4>
            <div class="col col-form-item">
                <label for="text">Name:</label>
                <input type="text" class="form-control" name="Emergency_name" id="Emergency_name">
            </div>
            <div class="col col-form-item">
                <label for="Address">Address</label>
                <input type="text" name="Emergency_address" id="Emergency_address" class="form-control mb-20" placeholder="" />
            </div>
            <div class="col col-form-item">
                <label for="text">Relationship</label>
                <input type="text" class="form-control"  name="Emergency_relationship" id="name">
            </div>
        </div>
        <div class="row">
            
<div class="col col-form-item">
<label for="">Country:</label>
<select>
< class="form-control" name="ABOUTCountry" id="dropdown"  v-model="pro.country" @change="getStatesCities">
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
<select class="form-control" name="ABOUTcity" id="dropdown" v-model="pro.city">
    <option value="001">Select</option>
    <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
</select>
</div>

        </div>
        <div class="row">
            <div class="col col-form-item">
                <label for="number">Work Phone:</label>
                <input type="tel" class="form-control"  name="Emergency_workphone" placeholder="" id="phone_number" />
            </div>
            <div class="col col-form-item">
                <label for="number">Home Phone:</label>
                <input type="number" class="form-control"  name="Emergency_homephone" id="number" /> 
            </div>
            <div class="col col-form-item">
                <label for="number">Cell Phone:</label>
                <input type="number" class="form-control"  name="Emergency_cellphone" id="number" />
            </div>
            
        </div>
    </div>
</template>
