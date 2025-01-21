<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <div class="col-12">
                    <label for="text">Present Employer</label><br/>
                        <textarea rows="1" cols="50"  name="Presentemployer" id="message"></textarea>
                </div>
                <br>
                <div class="col-12">
                    <label for="Work Address">Address</label>
                            <input type="text" name="Presentworkaddress" class="form-control mb-20" placeholder="" />
                </div>
                <br>
                <div class="col-12">
                    <label for="dropdown">City:</label>
                        <select name="Presentworkcity" id="dropdown">
                            <option value="city"></option>
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select> 
                </div>
                <br>
                <div class="col-12">
                    <label for="stateprovince">State/Province:</label>
                        <select name="Presentworkstateprovince" id="dropdown">
                            <option value="State/Province"></option>
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select>
                </div>
                <br>
                <div class="col-12">
                    <label for="country">Country:</label>
                        <select name="Presentworkcountry" id="dropdown">
                            <option value="Country"></option>
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select><br/>
                </div>
                <br>
                <div class="col-12">
                    <label for="number">Work Phone:</label>
                        <input type="tel" name="Presentworkphone" placeholder="Enter a valid number" id="phone_number" />
                </div>
                <br>
                <div class="col-12">
                    <label for="text">Position</label>
                    <input type="text" name="Presentworkposition" id="position"> 
                </div>
                <br>
                <div class="col-12">
                    <label for="number">Gross monthly income was over:</label>
                    <input type="number" name="Presentmonthly-income" id="income" placeholder="$"/>  
                </div>
                <br>
                <div class="col-12">
                    <label for="date">Dates you began and ended this job:</label>
                    <input type="date" name="Presentdatestart" id="date" />
                    <input type="date" name="Presentdateend" id="date" /> 
                </div>
                <br>
                <div class="col-12">
                    <label for="text">Supervisor's name and phone:</label>
                    <input type="text" name="Presentsupername" id="name">
                    <input type="number" name="Presentsuperphone-number" id="number"> 
                </div>
                
            </fieldset>
        </div>
    </form>
</template>