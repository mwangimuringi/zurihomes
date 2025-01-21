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


//        OnChangeCountry(e){
  //          this.$emit('onGetStates',e.target.value);
    //    },
      //  onChangeStates(e){
        //    this.$emit('onGetCities',e.target.value);
        //}

    },
}
</script>
<template>
<div class="row">
 <div class="row mt-3">
                <label for="Currenthomeaddress">Current Home Address (Where you live now) <br/></label>
<div class="col col-form-item">                
<input type="number" name="Currentstreet" class="form-control mb-20" placeholder="Street Number" required/>
</div>
<div class="col col-form-item">
                <input type="text" name="Currentstreetname" class="form-control mb-20" placeholder="Street Name"/>


</div>
</div>
<div class="row mt-3">
<div class="col col-form-item">
 <label for="country">Country:</label>
                <select class="form-control" name="CurrentCountry" id="dropdown" @change="getStatesCities" v-model="pro.country">
                <option value=""></option>
                <option v-for="(c,i) in optCountries" v-bind:key="i" v-bind:value="i">{{c}}</option>
            </select>

</div>
<div class="col col-form-item">
 <label for="Currentprovince">State/Province:</label>
        <select class="form-control" name="Currentstateprovince" id="dropdown"  @change="getCities" v-model="pro.states">
        <option value="001">Select</option>
        <option v-for="(c) in optStates" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
    </select>

</div>
<div class="col col-form-item">
 <label for="dropdown">City:</label>
    <select class="form-control" name="Currentcity" id="dropdown" v-model="pro.city">
                        <option value=""></option>
                        <option v-for="c in optCities" v-bind:key="c.id" v-bind:value="c.id">{{c.name}}</option>
                    </select>

</div>
</div>
<div class="row mt-3">
<div class="col col-form-item">
<label for="number">Phone #:</label>
                        <input class="form-control" type="tel" name="Currentphoneno" placeholder="Enter a valid number" id="phone_number"/>
               

</div>
<div class="col col-form-item">
     <label for="number">Cell #:</label>
                        <input class="form-control" type="cellnumber" name="Currentcellnumber" id="number" />
</div>

</div>
</div>

</template>
