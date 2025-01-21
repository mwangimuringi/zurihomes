<script>
import vue2Dropzone from "vue2-dropzone";
import UIContractAgreementView from "./../../components/ui-basic/agreement-contract-view.vue";
import UIContractTimeLineView from "./../../components/ui-basic/contract-timeline-view.vue";
// import {country_and_states} from "../../helpers/app.countries";
/**
 * Task-detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    components: {
        vueDropzone: vue2Dropzone,
        UIContractAgreementView,
        UIContractTimeLineView
    },
    props : {
        // showContract:{type: Number},
        // companyDetails:{type: Object},
    },
    data() {
        return {
            title: "Contract Agreement",
            items: [{
                    text: "WA",
                    href: "/",
                },
                {
                    text: "Approvals",
                    href: "/",
                },
                {
                    text: "Contract Agreement",
                    active: true,
                },
            ],
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value",
                },
                previewTemplate: this.template(),
            },
            detailsIsLoaded: false,
            companyDetails:null,
            LandLordFirstName:null,
            urlGetData:this.$route.query.q,
            timelineLogs:null,
            timeLineAlignment:0,
            setAlignment:0
        };
    },
    methods: {
        template: function () {
            return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        },
        onSetAlignment(setIndex,setCount){
            let res=0;
            if(setCount ==0){this.setAlignment=setIndex;}
            if(this.setAlignment ==setIndex){
                res =1;
            }else{
                res =0;
            }
            return res;
        },
        async updateApproval(approvedValue) {
            let response = await this.$axios.$post("/company/update-approval/"+this.urlGetData, {
                user_updated: this.$auth.user.user_login_id,   
		approved_value: approvedValue,          
  });
            this.getContractCompany();
        },
        onUpdateSetAliment(setIndex){
            this.setAlignment=setIndex;
        },
        async getContractCompany(){
            let landlordSplit=[];
            if( this.urlGetData != undefined && this.urlGetData != null){
                let response = await this.$axios.$post('/company/view/'+this.urlGetData);
                if(response.status =='empty'){
                    this.companyDetails=response.data;
                }else{
                    landlordSplit=response.data.landlord_name;
                    landlordSplit=landlordSplit.split(' ');
                    this.LandLordFirstName=landlordSplit[0].charAt(0)+landlordSplit[1].charAt(0);
                    this.companyDetails=response.data; 
                    this.setAlignment=response.data[0]; 
                    this.timelineLogs=response.time_logs; 
                    this.detailsIsLoaded=true;
                }
            }else{
                this.companyDetails=null; 
            }
        }
    },
    mounted(){
        this.getContractCompany();
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div v-if="detailsIsLoaded" class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <UIContractAgreementView :companyDetails="companyDetails" :LandLordFirstName="LandLordFirstName" @markApproved="updateApproval"></UIContractAgreementView>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    
                    <!-- end dropdown-->
                    <h5 class="header-title mb-3">Attachments</h5>

                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
                                    <div class="dz-message needsclick">
                                        <i class="h2 text-muted ri-upload-2-line d-inline-block"></i>
                                        <h4>Drop files here or click to upload.</h4>
                                    </div>
                                </vue-dropzone>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="mt-4 mt-md-0">
                                <!-- <div class="card mb-2">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title badge-soft-primary text-primary rounded">ZIP</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Minton-sketch-design.zip</a>
                                                <p class="mb-0 font-12">2.3 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                
                                                <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-0">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-secondary rounded">.MP4</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Admin-bug-report.mp4</a>
                                                <p class="mb-0 font-12">7.05 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                
                                                <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                                <!-- Preview -->
                                <div class="dropzone-previews mt-2" id="file-previews"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <UIContractTimeLineView :timelineLogs="timelineLogs"></UIContractTimeLineView>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <!-- file preview template -->
    <div class="d-none" id="uploadPreviewTemplate">
        <div class="card mb-2 shadow-none border">
            <div class="p-2">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt />
                    </div>
                    <div class="col pl-0">
                        <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                        <p class="mb-0" data-dz-size></p>
                    </div>
                    <div class="col-auto">
                        <!-- Button -->
                        <a href class="btn btn-link btn-lg text-muted" data-dz-remove>
                            <i class="fe-x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
