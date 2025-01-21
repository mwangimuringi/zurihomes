<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <legend>YOUR SPOUSE</legend>
                <div class="col-12">
                        <label for="full-name">Full Name:</label><br/>
                            <input type="text" name="SPOUSEfirst-name" class="form-label" placeholder="First Name" />
                            <input type="text" name="SPOUSEmiddle-name" class="form-label" placeholder="Middle Name" />
                            <input type="text" name="SPOUSElast-name" class="form-label" placeholder="Last Name" />
                </div> 
                <br>
                <div class="col-12">
                    <label for="driverlic">Driver's Licence: State/Province</label>
                        <input type="driverlic" name="SPOUSEdrivers-licence" id="number" />
                    <label for="idcard">Or govt. photo ID card</label>
                        <input type="idcard" name="SPOUSEidcard" id="number" />
                    </div>
                <br>
                <div class="col-12">
                    <label for="full-name">Former last names (maiden and married)</label><br/>
                        <input type="text" name="SPOUSEformerfirst-name" class="form-control mb-20" placeholder="Former Last Name"  />
                        <input type="text" name="SPOUSEformermiddle-name" class="form-control mb-20" placeholder="Former Last Name" />
                        <input type="text" name="SPOUSEformerlast-name" class="form-control mb-20" placeholder="Former Last Name" />
                </div> 
                <br>
                <div class="col-12">
                    <label for="dropdown">What Citizenship do you hold:</label>
                        <select name="SPOUSEcitizenship" id="dropdown">
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select>
                </div> 
                <br>
                <div class="col-12">
                    <label for="date">Date of Birth:</label>
                        <input type="date" name="SPOUSEdatebirth" id="date" />
                </div> 
                <br>
                <div class="col-12">
                    <label for="height">Height</label>
                        <input type="number" name="SPOUSEheight" id="height" />
                        <label for="height">Weight</label>
                        <input type="number" name="SPOUSEweight" id="weight" />
                        <label for="height">Eye Color</label>
                        <input type="text" name="SPOUSEeye-color" id="eye-color" />
                        <label for="height">Hair Color</label>
                        <input type="text" name="SPOUSEhair-color" id="hair-color"/>
                </div> 
                <br>
                <div class="col-12">
                    <label for="dropdown">Sex:</label>
                        <select name="SPOUSEsex" id="dropdown">
                            <option value="0"></option>
                            <option value="o1">Male</option>
                            <option value="o2">Female</option>
                        </select>
                </div>
                <br>
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
            </fieldset>
        </div>
    </form>
</template>