<script>
import {mapState} from "vuex";
import {menuItems} from "./menu";

/**
 * Sidebar component
 */
export default {
    data() {
        return {
            menuItems: menuItems,
            user_permission:[
                {user_type: 'company', user_part_of:'admin',permission:[1001,1002,1003,1004,1005,1015,10,11,6,7,8,9,2,1,2001,2002,2003,2000,3000,3001,3002,3003,29,77,12000,12001,12002]},
                {user_type: 'user', user_part_of:'manager',permission:[6,1001,1003,1004,1005,1015,8,9,10,11,3000,3001,3002,3003,29]},
                {user_type: 'user', user_part_of:'landlord',permission:[7,10,11,1102,1103,1104,1105,5001,5002,5003,5004,12,5000]},
                {user_type: 'user', user_part_of:'user',permission:[12000,12001,12002,14000]},
                {user_type: 'user', user_part_of:'tenant',permission:[6,1001,1005,8,9,3000,3001,3002,3003,29]},
            ],
            user_logged_permission:[]
        };
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        menu: {
            type: String,
            required: true,
        },
        topbar: {
            type: String,
            required: true,
        }
    },
    computed: mapState(["layout"]),
    watch: {
        type: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "dark":
                            document.body.setAttribute("data-sidebar-color", "dark");
                            break;
                        case "light":
                            document.body.setAttribute("data-sidebar-color", "light");
                            break;
                        case "brand":
                            document.body.setAttribute("data-sidebar-color", "brand");
                            break;
                        case "gradient":
                            document.body.setAttribute("data-sidebar-color", "gradient");
                            break;
                        default:
                            document.body.setAttribute("data-sidebar-color", "light");
                            break;
                    }
                }
            },
        },
        width: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "boxed":
                            document.body.setAttribute("data-layout-width", "boxed");
                            document.body.setAttribute("data-sidebar-size", "condensed");
                            break;
                        case "fluid":
                            document.body.setAttribute("data-layout-width", "fluid");
                            document.body.removeAttribute("data-sidebar-size");
                            document.body.removeAttribute("data-layout-width");
                            break;
                        default:
                            document.body.setAttribute("data-layout-mode", "fluid");
                            break;
                    }
                }
            },
        },
        size: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "default":
                            document.body.setAttribute("data-sidebar-size", "default");
                            break;
                        case "condensed":
                            document.body.setAttribute("data-sidebar-size", "condensed");
                            break;
                        case "compact":
                            document.body.setAttribute("data-sidebar-size", "compact");
                            break;
                        default:
                            document.body.setAttribute("data-sidebar-size", "default");
                            break;
                    }
                }
            },
        },
        menu: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "fixed":
                            document.body.setAttribute("data-layout-menu-position", "fixed");
                            break;
                        case "scrollable":
                            document.body.setAttribute(
                                "data-layout-menu-position",
                                "scrollable"
                            );
                            break;
                        default:
                            document.body.setAttribute("data-layout-menu-position", "fixed");
                            break;
                    }
                }
            },
        },
        topbar: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "dark":
                            document.body.setAttribute("data-topbar-color", "dark");
                            break;
                        case "light":
                            document.body.setAttribute("data-topbar-color", "light");
                            break;
                        default:
                            document.body.setAttribute("data-topbar-color", "dark");
                            break;
                    }
                }
            },
        },
        // user_logged_permission:function(){
        //     this.user_logged_permission = this.user_permission.filter(x => 
        //     x.user_type == this.$auth.user.user_type && x.user_part_of == this.$auth.user.user_part_of).map(x => x);
        // }
    },
    mounted: function () {
        this._activateMenuDropdown();
        this.$router.afterEach((routeTo, routeFrom) => {
            this._activateMenuDropdown();
        });
        // document.body.setAttribute("data-sidebar-color", "dark");
        // document.body.setAttribute("data-topbar-color", "dark");
        document.body.setAttribute("data-topbar-color", "dark");
        document.body.setAttribute("data-sidebar-color", "dark");
        this.getUserPermissions();
    },
    methods: {
        /**
         * Returns true or false if given menu item has child or not
         * @param item menuItem
         */
        hasItems(item) {
            return item.subItems !== undefined ? item.subItems.length > 0 : false;
        },
        getUserPermissions(){
            console.log('my_user:',this.$auth.user.user_type)
            this.user_logged_permission = this.user_permission.filter(x => 
            x.user_type == this.$auth.user.user_type && x.user_part_of == this.$auth.user.user_part_of).map(x => x);
        },
        isAllowedMenu(item){
            let isAllowed=false;
            
            if(this.user_logged_permission.length ==0){
                this.getUserPermissions();
            }
            // console.log('dd',this.user_logged_permission)
            const userPermission= this.user_logged_permission[0].permission;
            if( userPermission.includes(item.id)){
                isAllowed=true;
                return isAllowed;
            }else{
                return isAllowed;
            }
            
        },
        isAllowedSubMenu(subMenItem){
            let isAllowed=false;
            const userPermission= this.user_logged_permission[0].permission;
            for (const key in subMenItem.subItems) {
                if (subMenItem.subItems.hasOwnProperty.call(subMenItem.subItems, key)) {
                    const element = subMenItem.subItems[key];
                    if( userPermission.includes(element.id)){
                        isAllowed=true;
                    }
                    
                }
            }
            return isAllowed;
        },
        _activateMenuDropdown() {
            const resetParent = (el) => {
                el.classList.remove("active");
                var parent = el.parentElement;
                if (parent) {
                    parent.classList.remove("menuitem-active");
                    const parent2 = parent.parentElement;
                    if (parent2) {
                        const parent3 = parent2.parentElement;
                        if (parent3) {
                            parent3.classList.remove("show");
                            const parent4 = parent3.parentElement;
                            if (parent4) {
                                parent4.classList.remove("menuitem-active");
                            }
                        }
                    }
                }
            };
            var links = document.getElementsByClassName("side-nav-link-ref");
            var matchingMenuItem = null;
            const paths = [];
            for (let i = 0; i < links.length; i++) {
                // reset menu
                resetParent(links[i]);
            }
            for (var i = 0; i < links.length; i++) {
                paths.push(links[i]["pathname"]);
            }
            var itemIndex = paths.indexOf(window.location.pathname);
            if (itemIndex === -1) {
                const strIndex = window.location.pathname.lastIndexOf("/");
                const item = window.location.pathname.substr(0, strIndex).toString();
                matchingMenuItem = links[paths.indexOf(item)];
            } else {
                matchingMenuItem = links[itemIndex];
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add("active");
                var parent = matchingMenuItem.parentElement;

                /**
                 * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
                 * We should come up with non hard coded approach
                 */
                if (parent) {
                    parent.classList.add("menuitem-active");
                    const parent2 = parent.parentElement;
                    if (parent2) {
                        const parent3 = parent2.parentElement;
                        if (parent3) {
                            // console.log(parent3)
                            parent3.classList.add("show");
                            const parent4 = parent3.parentElement;
                            if (parent4) {
                                parent4.classList.add("menuitem-active");
                            }
                        }
                    }
                }
            }
        },
    },
};
</script>

<template>
<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
    <!-- LOGO -->
    <div class="logo-box" v-if="$auth.user.user_type=='company'">
        <nuxt-link to="/" class="logo logo-dark text-center">
            <span class="logo-sm">
                <img src="~/assets/images/wa_logo.png" alt height="24" />
                <!-- <span class="logo-lg-text-light">Minton</span> -->
            </span>
            <span class="logo-lg">
                <img src="~/assets/images/wa_logo.png" alt height="20" />
                <!-- <span class="logo-lg-text-light">M</span> -->
            </span>
        </nuxt-link>

        <nuxt-link to="/" class="logo logo-light text-center logo-text">
            <span class="logo-sm">
                <!-- <img src="~/assets/images/wa_logo_white.png" alt height="40" /> -->
                <p>WA</p>
            </span>
            <span class="logo-lg text-center">
                <img src="~/assets/images/logo_wa.png" alt height="110" />
                <!-- <p class="logo-text-sm">WA Tenant Bureau</p> -->
            </span>
        </nuxt-link>
    </div>
    <div class="logo-box" v-else>
        <div class="logo logo-dark text-center">
            <span class="logo-sm">
                {{ $auth.user.user_type }}
                <img src="~/assets/images/wa_logo.png" alt height="24" />
                <!-- <span class="logo-lg-text-light">Minton</span> -->
            </span>
            <span class="logo-lg">
                <img src="~/assets/images/wa_logo.png" alt height="20" />
                <!-- <span class="logo-lg-text-light">M</span> -->
            </span>
        </div>

        <div class="logo logo-light text-center logo-text">
            <span class="logo-sm">
                <!-- <img src="~/assets/images/wa_logo_white.png" alt height="40" /> -->
                <p>WA</p>
            </span>
            <span class="logo-lg text-center">
                <img src="~/assets/images/logo_wa.png" alt height="110" />
                <!-- <p class="logo-text-sm">WA Tenant Bureau</p> -->
            </span>
        </div>
    </div>
    <simplebar class="h-100 mt-40" data-simplebar>
        <!-- User box -->
        <div class="user-box text-center">
            <img src="~/assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle avatar-md" />
            <div class="dropdown">
                <a href="javascript: void(0);" class="text-reset dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown">Nik Patel</a>
                <div class="dropdown-menu user-pro-dropdown">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user mr-1"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-settings mr-1"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-lock mr-1"></i>
                        <span>Lock Screen</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
            <p class="text-reset">Admin Head</p>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="list-unstyled" id="side-menu">
                <template v-for="item in menuItems">
                    <li class="menu-title" v-if="item.isTitle && isAllowedMenu(item)== true" :key="item.id">{{ $t(item.label) }}</li>
                    <li v-if="!item.isTitle && isAllowedMenu(item)== true && !item.isLayout" :key="item.id">
                        <a v-if="hasItems(item)" href="javascript:void(0);" @click="item.isMenuCollapsed = !item.isMenuCollapsed" :class="{
                                    'has-arrow': !item.badge,
                                    'has-dropdown': item.badge
                                    }">
                            <i :class="`${item.icon}`" v-if="item.icon"></i>
                            <span>{{ $t(item.label) }}</span>
                            <span class="menu-arrow" v-if="!item.badge"></span>
                            <span :class="`badge badge-pill badge-${item.badge.variant} float-right`" v-if="item.badge">{{ $t(item.badge.text) }}</span>
                        </a>

                        <nuxt-link :to="item.link" v-if="!hasItems(item)" class="side-nav-link-ref">
                            <i :class="`${item.icon}`" v-if="item.icon"></i>
                            <span>{{ $t(item.label) }}</span>
                            <span :class=" `badge badge-pill badge-${item.badge.variant} float-right`" v-if="item.badge">{{ $t(item.badge.text) }}</span>
                        </nuxt-link>
                        <div class="collapse" :class="{'show': item.isMenuCollapsed}" id="sidebarTasks">
                            <ul v-if="hasItems(item) && isAllowedSubMenu(item) == true" class="sub-menu nav-second-level" aria-expanded="false">
                                <!-- v-if="isAllowedSubMenu(item)==true" -->
                                <li v-for="(subitem, index) of item.subItems" :key="index">
                                    <nuxt-link :to="subitem.link" v-if="!hasItems(subitem) && isAllowedMenu(subitem)==true" class="side-nav-link-ref">{{ $t(subitem.label) }}</nuxt-link>
                                    <a v-if="hasItems(subitem)" class="side-nav-link-a-ref has-arrow" @click="subitem.isMenuCollapsed = !subitem.isMenuCollapsed" href="javascript:void(0);">{{ $t(subitem.label) }}
                                        <span class="menu-arrow"></span>
                                    </a>

                                    <div class="collapse" :class="{'show': subitem.isMenuCollapsed}">
                                        <ul v-if="hasItems(subitem)" class="sub-menu" aria-expanded="false">
                                            <li v-for="(subSubitem, index) of subitem.subItems" :key="index" >
                                                <nuxt-link :to="subSubitem.link" class="side-nav-link-ref">{{ $t(subSubitem.label) }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>
    </simplebar>
    <!-- Sidebar -left -->
</div>
<!-- Left Sidebar End -->
</template>
