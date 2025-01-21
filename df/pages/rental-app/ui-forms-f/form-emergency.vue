<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <legend>EMERGENCY</legend>
                <p><i>Emergency contact person over 18, who will not be living with you:</i></p>
                <div class="col-12">
                    <label for="text">Name:</label>
                        <input type="text" name="Emergency_name" id="Emergency_name">
                    <label for="Address">Address</label>
                        <input type="text" name="Emergency_address" id="Emergency_address" class="form-control mb-20" placeholder="" />
                        <label for="dropdown">City:</label>
                    <select name="Emergencycity" id="dropdown">
                        <option value="city"></option>
                        <option value="o1">Option 1</option>
                        <option value="o2">Option 2</option>
                        <option value="o3">Option 3</option>
                        <option value="o4">Option 4</option>
                        <option value="o5">Option 5</option>
                    </select>
                    <label for="state/province">State/Province:</label>
                        <select name="Emergency_stateprovince" id="dropdown">
                            <option value="State/Province"></option>
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select>
                    <label for="country">Country:</label>
                        <select name="Emergency_country" id="dropdown">
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
                        <input type="tel" name="Emergency_workphone" placeholder="" id="phone_number" />
                    <label for="number">Home Phone:</label>
                        <input type="number" name="Emergency_homephone" id="number" /> 
                    <label for="number">Cell Phone:</label>
                        <input type="number" name="Emergency_cellphone" id="number" />
                    <label for="text">Relationship</label>
                        <input type="text" name="Emergency_relationship" id="name"> 
                </div>
            </fieldset>
        </div>
    </form>
</template>