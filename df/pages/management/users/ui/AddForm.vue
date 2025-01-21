<template>
    <div class="col-12" v-if="show == 2">
        <div class="card">
            <div class="card-body">
                <div class="form-content-config" :class="{' active': show == 2}">
                    <form class="form-input-control" id="form_user_add">
                        <input type="hidden" name="user_created" id="user_created" :value="this.$auth.user.user_login_id" />
                        <input type="hidden" name="user_type" id="user_type" v-model="user_type"  />
                        <input type="hidden" name="user_part_of" id="user_part_of" v-model="user_part_of"  />
                        <input type="hidden" name="user_landlord" id="user_landlord" v-model="userLandLordId"  />
                        <h4>Add New</h4>
                        <hr/>
                        <div class="row">
                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">First Name</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" id="user_firstname" name="user_firstname" >
                                    </div>
                                </div>

                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Email / Username</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" name="user_login_username" id="user_login_username">
                                    </div>
                                </div>
                                
                                
                            </div>

                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Last Name</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" id="user_lastname" name="user_lastname" >
                                    </div>
                                </div>

                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Status</label>
                                    <div class="bv-no-focus-ring col">
                                        <select name="user_login_status" id="user_login_status" class="form-control">
                                            <option value="enabled">Enabled</option>
                                            <option value="disabled">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Set Password</h4>
                        <hr/>
                        <div class="row">
                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Password</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="password" class="form-control" for="text" id="user_login_password" name="user_login_password" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Confirm Password </label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="password" class="form-control" for="text" id="user_login_password_confirm" name="user_login_password_confirm" >
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-sm-12 text-center mb-2 mt-2"></div>
                            <div class="col-sm-12 text-right mb-3">
                                <button type="button" class="btn btn-soft-info" @click="submit_formSetNewPassword">Actualizar Contraseña</button>
                            </div> -->
                        </div>
                    </form>
                        
                    <footer id="create-alert-modal___BV_modal_footer_" class="modal-footer">
                        <button type="button" class="btn btn-soft-secondary" @click="closeForm">Cancelar</button>
                        <button type="button" class="btn btn-outline-primary width-xl" @click="formPostSubmit">Add</button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
    data() {
        return{
            user_type:'company',
            user_part_of:'admin'
        }
    },
    props : {
        show: {type: Number},
        userLandLordId: {type: String},
        userAdmin: {type: String},
        user:{type: Object},
        user_id:0,
        userUpdated:0,
    },
    methods: {
        closeForm() {
            if(this.userAdmin ==1){
                this.$root.$refs.userAdmins.onFormModeUpdate(1);
                this.$root.$refs.userAdmins.OnRefreshDTTable();
            }else if(this.userAdmin ==2){
                this.$root.$refs.userManagers.onFormModeUpdate(1);
                this.$root.$refs.userManagers.OnRefreshDTTable();
            }else if(this.userAdmin ==3){
                this.$root.$refs.userAgents.onFormModeUpdate(1);
                this.$root.$refs.userAgents.OnRefreshDTTable();
            }else if(this.userAdmin ==4){
                this.$root.$refs.userLandLords.onFormModeUpdate(1);
                this.$root.$refs.userLandLords.OnRefreshDTTable();
            // }else if(this.userAdmin ==3){
            //     this.$root.$refs.userAgents.onFormModeUpdate(1);
            //     this.$root.$refs.userAgents.OnRefreshDTTable();
            }
        },
        
        formPostSubmit(){
            let formData = this._handleFormGetData('form_user_add');
                
            Swal.fire({
                title: "Are you sure?",
                text: "If you want to create a new record, press [Yes, continue]!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, continue",
                cancelButtonText: "Cancel!",
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
            }).then((result) => {
                if (result.value) {
                    this.createNewRecordDT(formData); 
                } 
            });
        },

        submit_formSetNewPassword(){
            let formData = this._handleFormGetData('form_user_add');
                formData.user_id=this.user_id;
                // console.log('formData',formData);
                if(formData.user_new_password == formData.user_confirm_new_password){
                    this.updateUserPassword(formData);
                }else{
                    this.$toast.error('Las contraseña no coinciden!',{duration:2000,fitToScreen:true});
                }
                
        },
        async createNewRecordDT(form_data) {
            let response = await this.$axios.$post('/users/add/',form_data);
            // console.log('response',response)
            if(response.status=='ok'){
                this.$toast.success('New Record Added!',{duration:2000,fitToScreen:true});
                this.closeForm();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
            //this.company = response.data;
        },
        async updateUserPassword(form_data) {
            
            let response = await this.$axios.$post('/api/cli/user/updatepassword/',form_data);
            if(response.status=='ok'){
                this.$toast.success('Se ha actualizado satisfactoriamente!',{duration:2000,fitToScreen:true});
                this.closeForm();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
            //this.company = response.data;
        },
        onSelectGroupIDToString(){
            let groupIDSelected=[];
            this.group_id_selected.forEach(thisElem => {
                groupIDSelected.push(thisElem.value);
            });
            return groupIDSelected.join(',');
        },
        
    },
    watch: {
        show:function(v){
            
            if(v == 2){
                if(this.userAdmin == 1){
                    this.user_type='company';
                    this.user_part_of='admin';
                }else if(this.userAdmin ==2){
                    this.user_type='user';
                    this.user_part_of='manager';
                }else if(this.userAdmin ==3){
                    this.user_type='user';
                    this.user_part_of='user';
                }else if(this.userAdmin ==4){
                    this.user_type='user';
                    this.user_part_of='landlord';
                }else if(this.userAdmin ==5){
                    this.user_type='user';
                    this.user_part_of='tenant';
                }    
            }
            
        },
        
    },
    created() {
        this.$root.$refs.formAddUser = this;
    },
    
}
</script>
<style lang="">
    
</style>