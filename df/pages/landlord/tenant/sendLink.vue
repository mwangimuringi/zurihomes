<template>
<div class="col-12">
<div class="card">
<div class="card-body">
                    <form class="form-input-control" id="send_link">
<input type="hidden" name="landlordId" id="landlordId" :value="this.$auth.user.user_login_id"/>
<input type="hidden" name="landlordfirstname" id="landlordfirstname" :value="this.$auth.user.user_firstname"/>
<input type="hidden" name="landlordlastname" id="landlordlastname" :value="this.$auth.user.user_lastname"/>
<div class="row">
<div class="col-md-8">
  <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Email / Username</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" name="send_link_user" id="send_link_user">
                                    </div>
                                </div>
</div>
</div>
</form>

      <footer id="create-alert-modal___BV_modal_footer_" class="modal-footer">
                        <button type="button" class="btn btn-soft-secondary" @click="closeForm">Cancelar</button>
                        <button type="button" class="btn btn-outline-primary width-xl" @click="formPostSubmit">Add</button>
                    </footer>
</div>
</div>
</div>
</template>
<script>

export default{
methods:{
formPostSubmit(){
            let formData = this._handleFormGetData('send_link');

		this.sendLinkDT(formData);
},

	async sendLinkDT(form_data){

	let response=await this.$axios.$post("/users/sendLink",form_data);
	if(response.status=='ok')
{
	this.$toast.success('Application Sent',{duration:2000,fitToScreen:true});
	//this.closeForm();
}else{
	this.$toast.error(response.message,{duration:2000,fitToScreen:true});
}
},
},
}
</script>
