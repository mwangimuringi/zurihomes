<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <legend>YOUR VEHICLES</legend>
                <p><i>List all vehicles owned or operated by you, your spouse, or any occupants
                    (including cars, trucks, motorcycles, trailers, etc.)</i></p>

                <div class="col-12">
                    <label for="text">Make of vehicle:</label>
                        <input type="text" name="Allvehicles_make" id="make">
                    <label for="text">Color of vehicle:</label>
                        <input type="text" name="Allvehicles_color" id="color">   
                    <label for="number">Year:</label>
                        <input type="number" name="Allvehicles_year" id="year"> 
                    <label for="text">Licence#:</label>
                        <input type="text" name="Allvehicles_lic" id="lic#">
                </div>
                <br>
                <div class="col-12"> 
                    <label for="state/province">State/Province:</label>
                                <select name="Allvehicles_stateprovince" id="dropdown">
                                    <option value="StateProvince"></option>
                                    <option value="o1">Option 1</option>
                                    <option value="o2">Option 2</option>
                                    <option value="o3">Option 3</option>
                                    <option value="o4">Option 4</option>
                                    <option value="o5">Option 5</option>
                                </select>
                    
                </div>
            </fieldset>
        </div>
    </form>
</template>