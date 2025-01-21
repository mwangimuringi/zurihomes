<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <legend>OTHER OCCUPANTS</legend>
                    <p><i>Names of all persons under 18 and other adults who will occupy the unit without signing the lease. Continue on separate page if more than three.</i></p><br/>
                    <br>
                <div class="col-12">
                    <label for="text">Name:</label>
                        <input type="text" name="OTHERoccupantname" id="name">
                    <label for="text">Relationship</label>
                        <input type="text" name="OTHERoccupantrelstionship" id="name"> 
                    <label for="dropdown">Sex:</label>
                        <select name="OTHERoccupantsex" id="dropdown">
                            <option value="0"></option>
                            <option value="o1">Male</option>
                            <option value="o2">Female</option>
                        </select>       
                </div>
                <br>
                <div class="col-12">
                    <label for="driverlic">Driver's Licence: State/Province</label>
                        <input type="driverlic" name="OTHERoccupantdrivers-licence" id="number" />
                        <label for="idcard">Or govt. photo ID card</label>
                        <input type="idcard" name="OTHERoccupantidcard" id="number" />
                    <label for="date">Date of Birth:</label>
                        <input type="date" name="OTHERoccupantbirthdate" id="date" required/>
                </div>
                    
            </fieldset>
        </div>
    </form>
</template>