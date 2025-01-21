<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <div class="col-12">
                    <label for="Current home Address">Your previous home address</label><br/>
                    <div class="row">
                        <input type="number" name="Previousstreetno" class="form-control col-md-6 mb-20" placeholder="Street Number" />
                        <input type="text" name="Previous-address" class="form-control col-md-6 mb-20" placeholder="Street Name" />
                    </div>
                </div>
                <br>
                <div class="col-12">
                    <label for="dropdown">City:</label>
                    <select name="Previouscity" id="dropdown">
                        <option value="city"></option>
                        <option value="o1">Option 1</option>
                        <option value="o2">Option 2</option>
                        <option value="o3">Option 3</option>
                        <option value="o4">Option 4</option>
                        <option value="o5">Option 5</option>
                    </select> 
                </div>
                <br/>
                <div class="col-12">
                    <label for="previousprovince">State/Province:</label>
                        <select name="Previousstateprovince" id="dropdown">
                            <option value="StateProvince"></option>
                            <option value="o1">Option 1</option>
                            <option value="o2">Option 2</option>
                            <option value="o3">Option 3</option>
                            <option value="o4">Option 4</option>
                            <option value="o5">Option 5</option>
                        </select>
                </div>
                <br/>
                <div class="col-12">
                    <label for="country">Country:</label>
                        <select name="PreviousCountry" id="dropdown">
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
                    <label for="text">Name of above owner or manager's name:</label>
                        <input type="text" name="Currentowner" id="currentowner">
                    <label for="number">Their Phone Number</label>
                        <input type="number" name="Ownerphonenumber" id="number">
                </div>
                <br>
                <div class="col-12">
                    <label for="number">Previous monthly Rent</label>
                        <input type="number" name="Previousrent-monthly" id="rent" placeholder="$"/> 
                </div>
                <br>
                <div class="col-12">
                    <label for="date">Date you moved in:</label>
                        <input type="date" name="Previousmove-in" id="date" />
                    <label for="date">Date you moved out:</label>
                        <input type="date" name="Previousmove-out" id="date" />
                    </div>
            </fieldset>
        </div>
    </form>
</template>