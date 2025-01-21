<template>
    <div>
        <div class="row mt-3">
            <h4 class="header-divider">YOUR VEHICLES</h4>
            <div class="col col-form-item">
                <label for="text">Make of vehicle:</label>
                <input type="text"  class="form-control" name="Allvehicles_make" id="make">
            </div>
            <div class="col col-form-item">
                <label for="text">Color of vehicle:</label>
                <input type="text"  class="form-control" name="Allvehicles_color" id="color">   
            </div>
            <div class="col col-form-item">
                <label for="number">Year:</label>
                <input type="number"  class="form-control" name="Allvehicles_year" id="year"> 
            </div>
            <div class="col col-form-item">
                <label for="text">Licence#:</label>
                <input type="text"  class="form-control" name="Allvehicles_lic" id="lic#">
            </div>
            <div class="col col-form-item"> 
                <label for="state/province">State/Province:</label>
                <select name="Allvehicles_stateprovince"  class="form-control" id="dropdown">
                    <option value="StateProvince"></option>
                    <option value="o1">Option 1</option>
                    <option value="o2">Option 2</option>
                    <option value="o3">Option 3</option>
                    <option value="o4">Option 4</option>
                    <option value="o5">Option 5</option>
                </select>  
            </div>
        </div>
        <div class="row">
            
        </div>
    </div>
</template>