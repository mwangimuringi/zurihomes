<template>
    <div class="col-12" v-if="show == 3">
        <div class="card">
            <div class="card-body">
                <div class="form-content-config" :class="{' active': show == 2}">
                    <form class="form-input-control" id="form_user_edit">
                        <input type="hidden" name="user_updated" id="user_updated" :value="this.$auth.user.user_login_id"/>
                        <input type="hidden" name="user_login_id" id="user_login_id" :value="user.user_login_id" />
                        <!-- <input type="hidden" name="user_type" id="user_type" :value="user.user_type" /> -->
                        <h4>Edit Record</h4>
                        <hr/>
                        <div class="row">
                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">First Name</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" id="user_firstname" name="user_firstname"  v-model="user.user_firstname">
                                    </div>
                                </div>

                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Email / Username</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text" id="user_login_username" disabled="true"  v-model="user.user_login_username">
                                    </div>
                                </div>
                                
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="verified_email" class="col-sm-2 col-lg-2 col-form-label">Email Confirmed</label>
                                    <div class="bv-no-focus-ring col">
                                        <select v-model="user.verified_email" name="verified_email" id="verified_email" class="form-control">
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Last Name</label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="text" class="form-control" for="text"  id="user_lastname" name="user_lastname" v-model="user.user_lastname" >
                                    </div>
                                </div>

                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Status</label>
                                    <div class="bv-no-focus-ring col">
                                        <select v-model="user.user_login_status" name="user_login_status" id="user_login_status" class="form-control">
                                            <option value="enabled">Enabled</option>
                                            <option value="disabled">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Verified</label>
                                    <div class="bv-no-focus-ring col">
                                        <select v-model="user.verified" name="verified" id="verified" class="form-control">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
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
                                        <input type="password" class="form-control" for="text" id="user_new_password" name="user_new_password" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div id="example text" role="group" class="form-row form-group">
                                    <label id="" for="text" class="col-sm-2 col-lg-2 col-form-label">Confirm Password </label>
                                    <div class="bv-no-focus-ring col">
                                        <input type="password" class="form-control" for="text" id="user_confirm_new_password" name="user_confirm_new_password" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center mb-2 mt-2"></div>
                            <div class="col-sm-12 text-right mb-3">
                                <button type="button" class="btn btn-soft-info" @click="submit_formSetNewPassword">Update Password</button>
                            </div>
                        </div>
                    </form>
                        
                    <footer id="create-alert-modal___BV_modal_footer_" class="modal-footer">
                        <button type="button" class="btn btn-soft-secondary" @click="closeForm">Cancelar</button>
                        <button type="button" class="btn btn-outline-primary width-xl" @click="formPostSubmit">Save</button>
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
            user_type:'company'
        }
    },
    props : {
        show: {type: Number},
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
            }
        },
        
        formPostSubmit(){
            let formData = this._handleFormGetData('form_user_edit');
                
            Swal.fire({
                title: "Are you sure?",
                text: "If you want to update this record, press [Yes, continue]!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, continue",
                cancelButtonText: "Cancel!",
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
            }).then((result) => {
                if (result.value) {
                    this.updateRecordDT(this.user_id,formData);
                    
                } 
            });
        },

        submit_formSetNewPassword(){
            let formData = this._handleFormGetData('form_user_edit');
                formData.user_login_id=this.user_id;
                // console.log('formData',formData);
                if(formData.user_new_password == formData.user_confirm_new_password){
                    this.updateUserPassword(formData);
                }else{
                    this.$toast.error('Password does not match!',{duration:2000,fitToScreen:true});
                }
                
        },
        async updateRecordDT(record_id,form_data) {
            let response = await this.$axios.$post('/users/update/'+record_id,form_data);
            // console.log('response',response)
            if(response.status=='ok'){
                this.$toast.success('It has been successfully updated!',{duration:2000,fitToScreen:true});
                this.closeForm();
            }else{
                this.$toast.error(response.message,{duration:2000,fitToScreen:true});
            }
            //this.company = response.data;
        },
        async updateUserPassword(form_data) {
            
            let response = await this.$axios.$post('/users/updatepassword',form_data);
            if(response.status=='ok'){
                this.$toast.success('It has been successfully updated',{duration:2000,fitToScreen:true});
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
            this.user_type='';
            // if(v == 2){
            //     if(this.userAdmins == 1){
            //         this.user_type='company';
            //     }else if(this.userAdmins ==2){
            //         this.user_type='manager';
            //     }else if(this.userAdmins ==3){
            //         this.user_type='agent';
            //     }
            // }
            
        },
        user:function(v){
            console.log(v);
        }
    },
    created() {
        this.$root.$refs.formEditUser = this;
    },
    
}
</script>