<template>
     <div class="row">
        <div class="col-12">
            <form class="form-horizontal" id="form_add_property">
                <!-- <div> -->
                
                    <!-- <legend>ABOUT YOU</legend> -->
                        <div class="form-row">
                            <div class="col-6">
                                <b-form-group id="example text" label-cols-sm="12" label-cols-lg="12" label="Full Name:(Exactly as on driver's licence or govt. ID)" label-for="text">
                                    <div class="row">
                                        <b-form-input class="col-md-4" for="text" value="Some text value..."></b-form-input>
                                        <b-form-input class="col-md-4" for="text" value="Some text value..."></b-form-input>
                                        <b-form-input class="col-md-4" for="text" value="Some text value..."></b-form-input>
                                    </div>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-6">
                                <b-form-group id="example text" label-cols-sm="12" label-cols-lg="12" label="Your street address <br/>(as shown on your driver's license or government ID card)" label-for="text">
                                    <div class="row">
                                        
                                        <b-form-input class="col-md-5" for="text" placeholder="Street Number"></b-form-input>
                                        <b-form-input class="col-md-5" for="text" placeholder="Street Name"></b-form-input>
                                    </div>
                                </b-form-group>
                            </div>
                            <div class="col-2">
                                <b-form-group id="example text" label-cols-sm="12" label-cols-lg="12" label="Country" label-for="text">
                                    <select name="TENANTprovincestate" class="form-control" id="dropdown" required>
                                            
                                            
                                        </select>
                                </b-form-group>
                            </div>
                            <div class="col-2">
                                <b-form-group id="example text" label-cols-sm="12" label-cols-lg="12" label="Province" label-for="text">
                                    <select name="TENANTprovincestate" class="form-control" id="dropdown" required>
                                            
                                            
                                        </select>
                                </b-form-group>
                            </div>
                            <div class="col-2">
                                <b-form-group id="example text" label-cols-sm="12" label-cols-lg="12" label="Country" label-for="text">
                                    <select name="TENANTprovincestate" class="form-control" id="dropdown" required>
                                            
                                            
                                        </select>
                                </b-form-group>
                            </div>

                        </div>
                        
                        <!-- <div class="col-12">
                            <label for="full-name">Full Name:(Exactly as on driver's licence or govt. ID</label><br/>
                                <input type="text" name="ABOUTfirst-name" class="form-label" placeholder="First Name" autofocus required/>
                                <input type="text" name="ABOUTmiddle-name" class="form-label" placeholder="Middle Name" required/>
                                <input type="text" name="ABOUTlast-name" class="form-label" placeholder="Last Name" required/>
                        </div>
                        <br/>
                        <div class="col-12">
                            <label for="Your Street Address">Your street address <br/>(as shown on your driver's license or government ID card)</label>
                            <br/>
                            <input type="number" name="ABOUTstreet" class="form-label" placeholder="Street Number" required/>
                            <input type="text" name="ABOUTstreet_Name" class="form-label" placeholder="Street Name" required/>
                            <label for="dropdown">City:</label>
                            <select name="ABOUTcity" id="dropdown">
                                <option value="city"></option>
                                <option value="o1">Option 1</option>
                                <option value="o2">Option 2</option>
                                <option value="o3">Option 3</option>
                                <option value="o4">Option 4</option>
                                <option value="o5">Option 5</option>
                            </select>
                            <label for="stateprovince">State/Province:</label>
                                <select name="ABOUTstateprovince" id="dropdown">
                                    <option value="ABOUTState"></option>
                                    <option value="o1">Option 1</option>
                                    <option value="o2">Option 2</option>
                                    <option value="o3">Option 3</option>
                                    <option value="o4">Option 4</option>
                                    <option value="o5">Option 5</option>
                                </select>
                                <label for="country">Country:</label>
                                <select name="ABOUTCountry" id="dropdown">
                                    <option value="Country"></option>
                                    <option value="o1">Option 1</option>
                                    <option value="o2">Option 2</option>
                                    <option value="o3">Option 3</option>
                                    <option value="o4">Option 4</option>
                                    <option value="o5">Option 5</option>
                                </select>
                        </div>
                            <br/>
                            <div class="col-12">
                                <label for="driverlic">Driver's Licence: State/Province</label>
                                    <input type="driverlic" name="ABOUTdrivers-licence" id="number" />
                                <label for="idcard">Or govt. photo ID card</label>
                                    <input type="idcard" name="ABOUTidcard" id="number" />
                            </div>
                            <br/>
                            <div class="col-12">
                                <label for="full-name">Former last names (maiden and married)</label><br/>
                                    <input type="text" name="Formerlast_name" class="form-control mb-20" placeholder="Former Last Name"  />
                                    <input type="text" name="Formerlast2_name" class="form-control mb-20" placeholder="Former Last Name" />
                                    <input type="text" name="Formerlast3_name" class="form-control mb-20" placeholder="Former Last Name" />
                            </div>
                            <br/>
                            <div class="div col-12">
                                <label for="dropdown">What Citizenship do you hold:</label>
                                    <select name="Applicantcitizenship" id="dropdown">
                                        <option value="o1">Option 1</option>
                                        <option value="o2">Option 2</option>
                                        <option value="o3">Option 3</option>
                                        <option value="o4">Option 4</option>
                                        <option value="o5">Option 5</option>
                                    </select>
                            </div>
                            <br/>
                            <div class="div col-12">
                                <label for="date">Date of Birth:</label>
                                    <input type="date" name="Applicantdatebirth" id="date" required/>
                            </div>
                            <br/>
                            <div class="div col-12">
                                <label for="height">Height</label>
                                    <input type="number" name="Applicantheight" id="Applicantheight" />
                                <label for="height">Weight</label>
                                    <input type="number" name="Applicantweight" id="Applicantweight" />
                                <label for="height">Eye Color</label>
                                    <input type="text" name="Applicanteyecolor" id="Applicanteyecolor" />
                                <label for="height">Hair Color</label>
                                    <input type="text" name="Applicanthair-color" id="Applicanthaircolor"/>
                                <label for="dropdown">Sex:</label>
                                    <select name="Sex" id="dropdown">
                                        <option value="0"></option>
                                        <option value="o1">Male</option>
                                        <option value="o2">Female</option>
                                    </select>
                            </div>
                            <br>
                            <div class="div col-12">
                                <label for="radio">Marital Status:</label>
                                    <input class="radio" type="radio" name="Applicantsingle" value="single" id="radio"/>Single
                                    <input class="radio" type="radio" name="Applicantmarried" value="married" id="radio"/>Married
                                    <input class="radio" type="radio" name="Applicantdivorced" value="divorced" id="radio"/>Divorced
                                    <input class="radio" type="radio" name="Applicantwidowed" value="widowed" id="radio"/>Widowed
                                    <input class="radio" type="radio" name="Applicantseparated" value="separated" id="radio"/>Separated
                                    <input class="radio" type="radio" name="Applicantcommonlaw" value="commonlaw" id="radio"/>Common law
                                
                            </div>
                            <br>
                            <div class="col-12">
                                <label for="radio">Do you or any occupant smoke?</label>
                                    <input class="radio" type="radio" name="Smokeyes" value="yes" id="radio"/>Yes
                                    <input class="radio" type="radio" name="Smokeno" value="no" id="radio"/>No
                            </div>
                            <br>
                            <div class="col-12">
                                <label for="radio">Will you or any occupant have an animal?</label>
                                    <input class="radio" type="radio" name="Animalyes" value="yes" id="radio"/>Yes
                                    <input class="radio" type="radio" name="Animalno" value="no" id="radio"/>No
                            </div>
                            <br>
                            <div class="col-12">
                                <label for="message">If yes, type, weight, breed, age:</label><br/>
                                    <textarea rows="4" cols="50" name="Animalscomment" id="message"></textarea>
                            </div> -->
                            
                <!-- </div> -->
            </form> 
        </div>
    </div>  
</template>