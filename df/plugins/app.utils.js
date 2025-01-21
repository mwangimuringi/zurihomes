import Vue from 'vue';

// export default function () {
    Vue.mixin({
        data() {
            return {
                unit_outdated:[],
                app_company_info:null,
                app_propertyPhotoURL:process.env.photoBaseUrl,
                app_amenities_list:[
                    {id:1,name:"Bathrooms Ensuite"},
                    // {id:2,name:"Bathrooms Full"},
                    // {id:3,name:"Bathrooms 1/2"},
                    {id:4,name:"Fridge"},
                    {id:5,name:"Stove"},
                    {id:6,name:"Microwave"},
                    {id:7,name:"Freezer"},
                    {id:8,name:"Washer"},
                    {id:9,name:"Drier"},
                    {id:10,name:"Furnished"},
                    {id:11,name:"Car park"},
                    {id:12,name:"Patio/Deck"},
                    {id:13,name:"Pool"},
                    {id:14,name:"Sauna"},
                    {id:15,name:"Maids Quarters"},
                    {id:16,name:"Air conditioning"}
                    
                ],
                app_availability_list:[
                    {id:1,name:"Available"},
                    {id:2,name:"Occupied"},
                ],
                app_categories_list:[
                    {id:1,name:"Apartments"},
                    {id:2,name:"House"},
                    {id:3,name:"Studio"},
                    {id:4,name:"Penthouse"},
                    {id:5,name:"Villa"},
                ],
                app_status_list:[
                    {id:1,name:"Enabled"},
                    {id:0,name:"Disabled"},
                ],
                app_yesnot_list:[
                    {id:1,name:"Yes"},
                    {id:0,name:"No"},
                ],
                app_heights:[
                    {id:'feet',name:"Feet"},
                    {id:'inches',name:"Inches"},
                    {id:'cm',name:"Cm"},
                    {id:'mt',name:"Mt"},
                ],
                app_weights:[
                    {id:'kg',name:"Kg"},
                    {id:'lbs',name:"Lbs"},
                ],
                app_contractterm_list:[
                    {id:1,name:"Short-term"},
                    {id:2,name:"Long-term"},
                ],
                app_vnumber_format:{
                    money: {
                        decimal: '.',
                        separator: ',',
                        prefix: '$ ',
                        suffix:'',
                        precision: 10,
                        masked: true,
                        min:1,
                        max:10000000
                    },
                    number: {
                        decimal: '.',
                        separator: ',',
                        prefix: ' ',
                        suffix:'',
                        precision: 10,
                        masked: false,
                        min:1,
                        max:10000000
                    },
                    sqm_number: {
                        decimal: '.',
                        separator: ',',
                        prefix: ' ',
                        suffix:' sqm',
                        precision: 2,
                        masked: false,
                        min:1,
                        max:10000000
                    },
                    number_int: {
                        decimal: '.',
                        separator: ',',
                        prefix: ' ',
                        suffix:'',
                        minimumFractionDigits:0,
                        precision: 3,
                        masked: true,
                        min:1,
                        max:40
                    },
                }
            }
        },
        methods:{
            _handleFormGetData(formIDs){
                let myForm = document.getElementById(formIDs); 
                let formData = new FormData(myForm);
                const data = {}; 
                // need to convert it before using not with XMLHttpRequest
                for (let [key, val] of formData.entries()) {
                    Object.assign(data, {[key]: val})
                }
                return data;
            },
            _app_onGetCategory(categID){
                const searchIndex = this.app_categories_list.findIndex((x) => x.id==categID);
                return this.app_categories_list[searchIndex].name;
            },
            _app_onGetAmenities(categID){
                if(categID == null || categID == undefined || categID == ''){
                    return "";
                }else{
                    const searchIndex = this.app_amenities_list.findIndex((x) => x.id==categID);
                    return this.app_amenities_list[searchIndex].name;
                }
            },
            _app_format_float_number(x){
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            _app_onGetStatus(statusID){
                const searchIndex = this.app_status_list.findIndex((x) => x.id==statusID);
                return this.app_status_list[searchIndex].name;
            },
            _app_onGetAvailability(statusID){
                const searchIndex = this.app_availability_list.findIndex((x) => x.id==statusID);
                return this.app_availability_list[searchIndex].name;
            },
            _app_onGetIsPublic(statusID){
                const searchIndex = this.app_yesnot_list.findIndex((x) => x.id==statusID);
                return this.app_yesnot_list[searchIndex].name;
            },
            _app_onGetContractTerm(statusID){
                const searchIndex = this.app_contractterm_list.findIndex((x) => x.id==statusID);
                return this.app_contractterm_list[searchIndex].name;
            },
            _app_onGetYesNoTR(setOptions){
                if( setOptions == 1){ return 'Yes'; }else{ return 'No'; }
            },
            _app_format_date_time(set_format_date_time){
                return this.$moment(set_format_date_time).format('YYYY-MM-DD HH:mm').toString();
            },
            _app_format_date_time_AP(set_format_date_time){
                return this.$moment(set_format_date_time).format('YYYY-MM-DD hh:mm A').toString();
            },
            _app_onGetApprovalText(approvalId){
                if(approvalId ==0){
                    return 'No Approval';
                }else if(approvalId ==1){
                    return 'Approved';
                }
            },
            _app_onEmailVerifided(emailStat){
                if(emailStat ==1){
                    return 'YES';
                }else{
                    return 'NO';
                }
            },
            
            _app_onGetSexName(approvalId){
                if(approvalId ==1){
                    return 'Male';
                }else if(approvalId ==2){
                    return 'Female';
                }
                // else if(approvalId ==3){
                //     return 'Approved';
                // }
            },
            _app_onGetStatusTenantInfo(approvalId){
                if(approvalId ==1){
                    return 'Submitted';
                }else if(approvalId ==2){
                    return 'On review';
                }else if(approvalId ==3){
                    return 'Approved';
                }
            },
            _app_onGetStatusRA(approvalId){
                if(approvalId ==0){
                    return 'Not Verified';
                }else if(approvalId ==1){
                    return 'On review';
                }else if(approvalId ==2){
                    return 'Verified';
                }else if(approvalId ==3){
                    return 'Declined';
                }
            },
            _app_onGetMaritalStatus(setOptions){
                if(setOptions =='single'){
                    return 'Single';
                }else if(setOptions =='married'){
                    return 'Married';
                }else if(setOptions == 'divorced'){
                    return 'Divorced';
                }else if(setOptions == 'widowed'){
                    return 'Widowed';
                }else if(setOptions == 'separated'){
                    return 'Separated';
                }else if(setOptions == 'commonlaw'){
                    return 'Common law';
                }
            },
            _app_get_read_search_found(setFound){
                const searchQT = setFound.split(','); 
                console.log(setFound,' ** ',searchQT);
                return searchQT.length;
            },
            _app_format_datetime_AP(set_format_date_time){
                return this.$moment(set_format_date_time).format('MMM DD, YYYY hh:mm A').toString();
            },
            _app_format_datetime_dob(set_format_date_time){
                return this.$moment(set_format_date_time).format('MMM DD, YYYY').toString();
            },
            _app_format_time_AP(set_format_date_time){
                return this.$moment(set_format_date_time).format('hh:mm A').toString();
            },
            _app_format_custom(set_format_date_time,format_datetime){
                return this.$moment(set_format_date_time).format(format_datetime).toString();
            },
             async _app_get_country(regId){
                 let response = await this.$axios.$get("/bo/get-country/"+regId);
                if(response.status=='ok'){
                     console.log('country',response.data)
                     return response.data.name;
                 }else{
                     return "";
                 }
             },
             async _app_get_city(regId){
                 let response = await this.$axios.$get("/bo/get-city/"+regId);
                ///if(response.status=='ok'){
                     return response.name;
                 //}else{
                   //  return "";
                //}
             },
            // async _app_get_province(regId){
            //     let response = await this.$axios.$get("/bo/get-state/"+regId);
            //     if(response.status=='ok'){
            //         return response.data.name;
            //     }else{
            //         return "";
            //     }
            // },
            _app_format_date_time_duration(set_format_date_time){
                let dateTimeNow = this.$moment();
                let dateTimeStatusTime=this.$moment(set_format_date_time);
                let formatDuration = "d[d] h[h] m[m] s[s]";
                let statusTimeDiffTimeMM=dateTimeNow.diff(dateTimeStatusTime, 'minutes');
                let statusTimeDiffTimeHH=dateTimeNow.diff(dateTimeStatusTime, 'hours');
                let statusTimeDiffTimeDD=dateTimeNow.diff(dateTimeStatusTime, 'days');
                let statusTimeDiffTimeYY=dateTimeNow.diff(dateTimeStatusTime, 'years');
                if( statusTimeDiffTimeDD > 1){  formatDuration = "d[d] h[h] ";}
                if( statusTimeDiffTimeYY > 1){  formatDuration = "y[a] d[d] h[h]";}
                // var duration = this.$moment.duration(dateTimeNow.diff(dateTimeStatusTime)).format("h [hrs], m [min]");
                var duration = this.$moment.duration(dateTimeNow.diff(dateTimeStatusTime)).format(formatDuration);
                return duration;
            },
            _app_user_check_permissions(){
                
            }
        },

        
        
    })
