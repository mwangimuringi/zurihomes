<template>
    <div>
        <div class="row mt-3">
            <h4 class="header-divider">AUTHORIZATION</h4>
            <div class="col col-form-item">
                <label for="text">Landlord with ID: <input type="text" v-model="landlord_id" disabled> and WA Tenant Bureau authorize<i>(owner's name)</i></label>
                <input type="text" class="form-control" name="Ownerauthorize" id="name" required hidden>
		
                <p class="text-justify">to obtain reports from World Association Tenant Bureau before, during, and after tenancy on matters relating to a lease by the above owner to me and to verify, by all available means, the information in this application, including criminal background information, income history and other information reported by employer(s) to any Province/State employment security agency. Work history information may be used only for this Rental Application. I also permit cross-borded use of this database and my rental history should I rent or try to rent any place Globally.</p>
            </div>
        </div>
       
        <div class="row mt-3">
            <h4 class="header-divider">DISCLOSURE</h4>
            <div class="col col-form-item">
                
                <p class="text-justify">

Either by signature or by clicking submit, I acknowledge that I have read and understand the above information. I have been given the opportunity to ask questions about the information, which will be used to determine my eligibility for tenancy and verify the details provided.
.</p>
            </div>
        </div>
    </div>
</template>
