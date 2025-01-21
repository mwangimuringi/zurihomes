<template>
    <form ref="formProperty" id="form_add_property">
        <div>
            <fieldset>
                <div class="col-12">
                    <label for="Currenthomeaddress">Current Home Address (Where you live now) <br/></label>
                        <input type="number" name="Currentstreet" class="form-control mb-20" placeholder="Street Number" required/>
                        <input type="text" name="Currentstreetname" class="form-control mb-20" placeholder="Street Name" required/>
                </div>
                <br>
                <div class="col-12">
                    <label for="dropdown">City:</label>
                        <select name="Currentcity" id="dropdown">
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
                    <label for="Currentprovince">State/Province:</label>
                        <select name="Currentstateprovince" id="dropdown">
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
                        <select name="CurrentCountry" id="dropdown">
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
                    <label for="number">Phone #:</label>
                        <input type="tel" name="Currentphoneno" placeholder="Enter a valid number" id="phone_number" required/>
                </div>
                <br>
                <div class="col-12">       
                    <label for="number">Cell #:</label>
                        <input type="cellnumber" name="Currentcellnumber" id="number" />   
                </div>
            </fieldset>
        </div>
    </form>
</template>