<script>
/**
 * Product-detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    async asyncData({
        params
    }) {
        return params.id;
        // const productDetail = products.find(
        //     (user) => String(user.id) === params.id
        // );
        // return {productDetail};
        // let response = await this.$axios.$post("/properties/view/"+params.id);
        // this.propertyDetail=response.data;
        // this.propertyPhotos=response.photos;
        // return {property:response.data,photos:response.photos};
    },
    data() {
        return {
            title: "Property Details",
            items: [{
                    text: "WA",
                },
                {
                    text: "Properties",
                },
                {
                    text: "Property Detail",
                    active: true,
                },
            ],
            isLoaded:false,
            propertyIdRegUI:this.$route.params.id,
            propertyDetail: null,
            propertyPhotos: null,
            propertyAmenities: null,
            propertyCity: null,
            propertyStates: null,
            propertyPhotoURL:process.env.apiBaseUrl.replace('/api','')+"/photos/",
        };
    },
    middleware: "auth",
    methods: {
        /**
         * Change the product
         */
        changeImage(data) {
            // console.log("check Data", data.target.getAttribute('filelarge'));
            // console.log("myImage ",  document.getElementById("myImage_0"));
            // document.getElementById("myImage_0").src = data.target.filelarge
            document.getElementById("myImage_0").src = data.target.getAttribute('imageslide');
            // document.getElementById("myImage_0").src = data.target.getAttribute('filelarge');
        },
        async getPropertyDetailsPhotos() {
            let response = await this.$axios.$post("/tenants/view-info/"+this.propertyIdRegUI);
            this.propertyDetail=response.data;
            // this.propertyAmenities=response.data.amenities; //this.propertyAmenities=this.propertyAmenities.split(',');
            // this.propertyPhotos=response.photos;
            this.isLoaded=true;
        }
    },
    mounted(){
        
        this.getPropertyDetailsPhotos();
    },
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-if="isLoaded" class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <!-- <div class="col-lg-5">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div id="product-carousel" class="carousel slide product-detail-carousel" data-ride="carousel">
                                        <div class="carousel-inner">
                                            
                                            <div class="carousel-item" v-for="item,index in this.propertyPhotos" :key="index" :class="{'active': index == 0}">
                                                <div>
                                                    <img :src="`${propertyPhotoURL}${item.file_name}`" alt="product-img" 
                                                    :id="`myImage_${index}`" 
                                                    class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <ol class="carousel-indicators product-carousel-indicators mt-2">
                                            
                                            <li data-target="#product-carousel" :data-slide-to="index" v-for="item,index in this.propertyPhotos" :key="index" 
                                                :class="{'active': index == 0}">
                                                <img :src="`${propertyPhotoURL}${item.file_thumbnail}`" :filelarge="`${propertyPhotoURL}${item.file_name}`" :imageslide="`${propertyPhotoURL}${item.file_slider}`" @click="changeImage($event)" alt="product-img" class="img-fluid product-nav-img" />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="col-lg-7">
                            <div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div>
                                            <!-- <a href="#" class="text-primary">{{ _app_onGetCategory(propertyDetail.category) }}</a> -->
                                        </div>
                                        <h4 class="mb-1">
                                            {{propertyDetail.inputTenantsfirstname}}
                                            <nuxt-link v-if="propertyDetail.landlord_id == this.$auth.user.user_login_id || this.$auth.user.user_type == 'admin'" :to="`/property-edit/${propertyDetail.id_reg}`" class="text-muted">
                                                <i class="mdi mdi-square-edit-outline"></i>
                                            </nuxt-link>
                                            <!-- <a v-if="propertyDetail.landlord_id == this.$auth.user.user_login_id || this.$auth.user.user_type == 'admin'" href="javascript: void(0);" class="text-muted">
                                                <i class="mdi mdi-square-edit-outline ml-2"></i>
                                            </a> -->
                                        </h4>

                                        <p class="text-muted mr-3 font-16">
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star"></span>
                                        </p>

                                        <div class="mt-3">
                                            <h4>
                                                Price :
                                                <b>$ {{_app_format_float_number(propertyDetail.inputTenantsfirstname)}}</b>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="media mb-2">
                                                    <div class="mr-2 align-self-center">
                                                        <i class="ri-hashtag h2 m-0 text-muted"></i>
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="mb-1">ID No.</p>
                                                        <h5 class="mt-0">
                                                            #{{propertyDetail.id_reg}}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="media mb-2">
                                                    <div class="mr-2 align-self-center">
                                                        <i class="ri-user-2-line h2 m-0 text-muted"></i>
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="mb-1">Landlord Manager</p>
                                                        <h5 class="mt-0">
                                                            {{propertyDetail.inputTenantsfirstname}}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="media mb-2">
                                                    <div class="mr-2 align-self-center">
                                                        <i class="ri-calendar-event-line h2 m-0 text-muted"></i>
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="mb-1">Date Reg.</p>
                                                        <h5 class="mt-0">
                                                            {{ _app_format_custom(propertyDetail.date_created,'MMM DD YYYY') }} <small class="text-muted">{{ _app_format_custom(propertyDetail.date_created,'hh:mm A') }}</small>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="media mb-2">
                                                    <div class="mr-2 align-self-center">
                                                        <i class="ri-map-pin-time-line h2 m-0 text-muted"></i>
                                                    </div>
                                                    <div class="media-body">
                                                        <p class="mb-1">Location</p>
                                                        <h5 class="mt-0">
                                                            {{propertyDetail.inputTenantsfirstname+', '+propertyDetail.inputTenantsfirstname+', '+ propertyDetail.inputTenantsfirstname}}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div>
                                    <h5 class="font-size-14">Description :</h5>
                                    <p>{{propertyDetail.inputTenantsfirstname}}</p>
                                    <hr />
                                    <!-- <div class="mt-3">
                                        <h5 class="font-size-14">Amenities :</h5>
                                        <div class="row">
                                            <div class="col-12">
                                                <ul class="list-unstyled product-desc-list">
                                                    <div class="row">
                                                        <li class="col-4" v-for="item,index in propertyAmenities" :key="index">
                                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>{{_app_onGetAmenities(item)}}
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div> -->
                                </div>
                                <hr />
                                <div>
                                    <!-- <div class="row">
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Sq Meters of Property</p>
                                                <h5 class="mb-sm-0 mt-0">{{ propertyDetail.built_size }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Bedrooms</p>
                                                <h5 class="mb-sm-0 mt-0">{{ propertyDetail.bedrooms_qt }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Bathrooms</p>
                                                <h5 class="mb-sm-0 mt-0">{{ propertyDetail.bathrooms_qt }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Floors</p>
                                                <h5 class="mb-sm-0 mt-0">{{ propertyDetail.floors_qt }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Category</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_onGetCategory(propertyDetail.category) }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div>
                                                <p class="text-truncate mb-0">Price</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_format_float_number(propertyDetail.price) }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row mt-4">
                                        <div class="col-3">
                                            <div>
                                                <p class="text-truncate mb-0">Availability</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_onGetAvailability(propertyDetail.availability) }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div>
                                                <p class="text-truncate mb-0">Status</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_onGetStatus(propertyDetail.status) }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div>
                                                <p class="text-truncate mb-0">Public</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_onGetIsPublic(propertyDetail.is_public) }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div>
                                                <p class="text-truncate mb-0">Contract term</p>
                                                <h5 class="mb-sm-0 mt-0">{{ _app_onGetContractTerm(propertyDetail.contract_term) }}</h5>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
