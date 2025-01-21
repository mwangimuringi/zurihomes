<template>
    <!-- <form ref="formProperty" id="form_add_property"> -->
        <div class="row">
            <fieldset>
                <legend>YOUR CREDIT HISTORY</legend>
                
                <div class="col-12">
                <label for="text">Your bank's name, city, state, country:</label>
                    <input type="text" name="Currentbank" id="Currentbank">
                <label for="dropdown">City:</label>
                    <select name="Currentbankcity" id="dropdown">
                        <option value="city"></option>
                        <option value="o1">Option 1</option>
                        <option value="o2">Option 2</option>
                        <option value="o3">Option 3</option>
                        <option value="o4">Option 4</option>
                        <option value="o5">Option 5</option>
                    </select>
                <label for="stateprovince">State/Province:</label>
                    <select name="Currentbankstateprovince" id="dropdown">
                        <option value="State/Province"></option>
                        <option value="o1">Option 1</option>
                        <option value="o2">Option 2</option>
                        <option value="o3">Option 3</option>
                        <option value="o4">Option 4</option>
                        <option value="o5">Option 5</option>
                    </select>
                <label for="country">Country:</label>
                    <select name="Currentbankcountry" id="dropdown">
                        <option value="Country"></option>
                        <option value="o1">Option 1</option>
                        <option value="o2">Option 2</option>
                        <option value="o3">Option 3</option>
                        <option value="o4">Option 4</option>
                        <option value="o5">Option 5</option>
                    </select>    
                </div>
                
                <div class="col-12">
                <label for="text">List major credit cards:</label><br/>
                    <textarea rows="2" cols="30"  name="Currentcredit-cards" id="message"></textarea> 
                </div>
                
                <div class="col-12">
                    <label for="text">Other non-work income you want considered.<br/> Please explain:</label><br/>
                        <textarea rows="2" cols="30"  name="Currentotherincome" id="message"></textarea>
                </div>
            </fieldset>
        </div>
    <!-- </form> -->
</template>