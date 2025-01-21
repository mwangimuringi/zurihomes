<template>
    <div>
        <div class="row  mt-3">
            <h4 class="header-divider">OTHER OCCUPANTS</h4>
            <div class="col col-form-item">
                <label for="text">Name:</label>
                <input type="text" class="form-control" name="OTHERoccupantname" id="name">
            </div>
            <div class="col col-form-item">
                <label for="text">Relationship</label>
                <input type="text" class="form-control" name="OTHERoccupantrelstionship" id="name"> 
            </div>
            <div class="col col-form-item">
                <label for="dropdown">Sex:</label>
                <select name="OTHERoccupantsex" class="form-control" id="dropdown">
                    <option value="0"></option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>       
            </div>
            
            <div class="col col-form-item">
                <label for="driverlic">Driver's Licence: State/Province</label>
                <input type="driverlic"  class="form-control" name="OTHERoccupantdrivers_licence" id="number" />
            </div>
            <div class="col col-form-item">
                    <label for="idcard">Or govt. photo ID card</label>
                    <input type="idcard" class="form-control" name="OTHERoccupantidcard" id="number" />
            </div>
            <div class="col col-form-item">
                <label for="date">Date of Birth:</label>
                <input type="date"  class="form-control" name="OTHERoccupantbirthdate" id="date" required/>
            </div>
        </div>

      
    </div>
</template>
