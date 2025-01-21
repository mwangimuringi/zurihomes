<script>
/**
 * Right-sidebar component
 */
export default {
    data() {
        return {
            config: {
                handler: this.handleRightBarClick,
                middleware: this.middleware,
                events: ["click"]
            },
            checked: false,
            layout: this.$store ?
                this.$store.state.layout.layoutType : {} || {},
            width: this.$store ?
                this.$store.state.layout.layoutWidth : {} || {},
            topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
            sidebarType: this.$store ?
                this.$store.state.layout.leftSidebarType : {} || {},
            sidebarSize: this.$store ?
                this.$store.state.layout.leftSidebarSize : {} || {},
            menu: this.$store ?
                this.$store.state.layout.menuPosition : {} || {},
        };
    },
    methods: {
        handleRightBarClick(e, el) {
            this.$parent.hideRightSidebar();
        },
        middleware(event, el) {
            return !event.target.classList.contains("toggle-right");
        },
        changeLayout(layout) {
            this.$store.dispatch('layout/changeLayoutType', {
                layoutType: layout
            })
        },
        changeWidth(width) {
            this.$store.dispatch('layout/changeLayoutWidth', {
                layoutWidth: width
            });
        },
        changeTopbartype(value) {
            this.$store.dispatch('layout/changeTopbar', {
                topbar: value
            });
        },
        changeType(type) {
            this.$store.dispatch('layout/changeLeftSidebarType', {
                leftSidebarType: type
            });
        },
        changeSize(size) {
            this.$store.dispatch('layout/changeLeftSidebarSize', {
                leftSidebarSize: size
            });
        },
        changemenuPosition(position) {
            this.$store.dispatch('layout/changeMenuPosition', {
                menuPosition: position
            });
        },
        enableInfo() {
            if (this.checked)
                document.body.setAttribute('data-sidebar-showuser', 'true')
            else
                document.body.removeAttribute('data-sidebar-showuser')
        },
        reset() {
            this.width = "fluid";
            this.menu = "fixed";
            this.sidebarType = "light";
            this.sidebarSize = "default";
            this.topbar = "dark";
            this.checked = false;
        }
    },
};
</script>

<template>
<div>
    <!-- Right Sidebar -->
    <div class="right-bar" v-click-outside="config">
        <simplebar class="h-100">
            <b-tabs content-class="pt-0" justified class="nav-bordered">
                <b-tab>
                    <template v-slot:title>
                        <i class="mdi mdi-message-text-outline d-block font-22 my-1"></i>
                    </template>

                    <!-- <form class="search-bar p-3">
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Search..." />
                            <span class="mdi mdi-magnify"></span>
                        </div>
                    </form> -->

                    <h6 class="font-weight-medium px-3 mt-2 text-uppercase">
                        Group Chats
                    </h6>

                    <div class="p-2">
                        <a href="javascript: void(0);" class="text-reset notification-item pl-3 mb-2 d-block">
                            <i class="mdi mdi-checkbox-blank-circle-outline mr-1 text-success"></i>
                            <span class="mb-0 mt-1">App Development</span>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item pl-3 mb-2 d-block">
                            <i class="mdi mdi-checkbox-blank-circle-outline mr-1 text-warning"></i>
                            <span class="mb-0 mt-1">Office Work</span>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item pl-3 mb-2 d-block">
                            <i class="mdi mdi-checkbox-blank-circle-outline mr-1 text-danger"></i>
                            <span class="mb-0 mt-1">Personal Group</span>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item pl-3 d-block">
                            <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>
                            <span class="mb-0 mt-1">Freelance</span>
                        </a>
                    </div>

                    <h6 class="font-weight-medium px-3 mt-3 text-uppercase">
                        Favourites
                        <a href="javascript: void(0);" class="font-18 text-danger"><i class="float-right mdi mdi-plus-circle"></i></a>
                    </h6>

                    <div class="p-2">
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status"></span>
                                    <img src="~/assets/images/users/avatar-10.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Andrew Mackie</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            It will seem like simplified English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status"></span>
                                    <img src="~/assets/images/users/avatar-1.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Rory Dalyell</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            To an English person, it will seem like simplified
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status busy"></span>
                                    <img src="~/assets/images/users/avatar-9.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Jaxon Dunhill</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            To achieve this, it would be necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <h6 class="font-weight-medium px-3 mt-3 text-uppercase">
                        Other Chats
                        <a href="javascript: void(0);" class="font-18 text-danger"><i class="float-right mdi mdi-plus-circle"></i></a>
                    </h6>

                    <div class="p-2 pb-4">
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status online"></span>
                                    <img src="~/assets/images/users/avatar-2.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Jackson Therry</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            Everyone realizes why a new common language.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status away"></span>
                                    <img src="~/assets/images/users/avatar-4.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Charles Deakin</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            The languages only differ in their grammar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status online"></span>
                                    <img src="~/assets/images/users/avatar-5.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Ryan Salting</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            If several languages coalesce the grammar of the
                                            resulting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status online"></span>
                                    <img src="~/assets/images/users/avatar-6.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Sean Howse</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            It will seem like simplified English.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status busy"></span>
                                    <img src="~/assets/images/users/avatar-7.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Dean Coward</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            The new common language will be more simple.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="media">
                                <div class="position-relative mr-2">
                                    <span class="user-status away"></span>
                                    <img src="~/assets/images/users/avatar-8.jpg" class="rounded-circle avatar-sm" alt="user-pic" />
                                </div>
                                <div class="media-body overflow-hidden">
                                    <h6 class="mt-0 mb-1 font-14">Hayley East</h6>
                                    <div class="font-13 text-muted">
                                        <p class="mb-0 text-truncate">
                                            One could refuse to pay expensive translators.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div class="text-center mt-3">
                            <a href="javascript:void(0);" class="btn btn-sm btn-white">
                                <i class="mdi mdi-spin mdi-loading mr-2"></i>
                                Load more
                            </a>
                        </div>
                    </div>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        <i class="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                    </template>
                    <h6 class="font-weight-medium p-3 m-0 text-uppercase">
                        Working Tasks
                    </h6>
                    <div class="px-2">
                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                App Development<span class="float-right">75%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                Database Repair<span class="float-right">37%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                Backup Create<span class="float-right">52%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 52%" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>
                    </div>

                    <h6 class="font-weight-medium px-3 mb-0 mt-4 text-uppercase">
                        Upcoming Tasks
                    </h6>

                    <div class="p-2">
                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                Sales Reporting<span class="float-right">12%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 12%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                Redesign Website<span class="float-right">67%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>

                        <a href="javascript: void(0);" class="text-reset item-hovered d-block p-2">
                            <p class="text-muted mb-0">
                                New Admin Design<span class="float-right">84%</span>
                            </p>
                            <div class="progress mt-2" style="height: 4px;">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 84%" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </a>
                    </div>

                    <div class="p-3 mt-2">
                        <a href="javascript: void(0);" class="btn btn-success btn-block waves-effect waves-light">Create Task</a>
                    </div>
                </b-tab>
                <b-tab active>
                    <template v-slot:title>
                        <i class="mdi mdi-cog-outline d-block font-22 my-1"></i>
                    </template>

                    <h6 class="font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
                        <span class="d-block py-1">Theme Settings</span>
                    </h6>

                    <div class="p-3">
                        <div class="alert alert-warning" role="alert">
                            <strong>Customize </strong> the overall color scheme, sidebar
                            menu, etc.
                        </div>

                        <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">
                            Layout
                        </h6>
                        <b-form-radio-group v-model="layout" stacked @input="changeLayout($event)">
                            <b-form-radio value="vertical" class="mb-1">Vertical</b-form-radio>
                            <b-form-radio value="horizontal" class="mb-1">Horizontal</b-form-radio>
                            <b-form-radio value="detached" class="mb-1">Detached</b-form-radio>
                            <b-form-radio value="two-column" class="mb-1">Two Column</b-form-radio>
                        </b-form-radio-group>

                        <!-- Width -->
                        <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">Width</h6>
                        <b-form-radio-group v-model="width" stacked @input="changeWidth($event)">
                            <b-form-radio value="fluid" class="mb-1">Fluid</b-form-radio>
                            <b-form-radio value="boxed">Boxed</b-form-radio>
                        </b-form-radio-group>

                        <!-- Topbar -->
                        <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>
                        <b-form-radio-group v-model="topbar" stacked @input="changeTopbartype($event)">
                            <b-form-radio value="dark" class="mb-1">Dark</b-form-radio>
                            <b-form-radio value="light" class="mb-1">Light</b-form-radio>
                        </b-form-radio-group>

                        <!-- Menu positions -->
                        <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">
                            Menus Positon <small>(Leftsidebar and Topbar)</small>
                        </h6>
                        <b-form-radio-group v-model="menu" stacked @input="changemenuPosition($event)">
                            <b-form-radio value="fixed" class="mb-1">Fixed</b-form-radio>
                            <b-form-radio value="scrollable" class="mb-1">Scrollable</b-form-radio>
                        </b-form-radio-group>
                        <div v-if="layout !== 'horizontal'">
                            <!-- Left Sidebar-->
                            <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">
                                Left Sidebar Color
                            </h6>
                            <b-form-radio-group v-model="sidebarType" stacked @input="changeType($event)">
                                <b-form-radio value="dark" class="mb-1">Dark</b-form-radio>
                                <b-form-radio value="light" class="mb-1">Light</b-form-radio>
                                <b-form-radio value="brand" class="mb-1">Brand</b-form-radio>
                                <b-form-radio value="gradient" class="mb-1">Gradient</b-form-radio>
                            </b-form-radio-group>

                            <!-- size -->
                            <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">
                                Left Sidebar Size
                            </h6>
                            <b-form-radio-group v-model="sidebarSize" stacked @input="changeSize($event)">
                                <b-form-radio value="default" class="mb-1">Default</b-form-radio>
                                <b-form-radio value="condensed" class="mb-1">Condensed <small>(Extra Small size)</small></b-form-radio>
                                <b-form-radio value="compact" class="mb-1">Compact <small>(Small size)</small></b-form-radio>
                            </b-form-radio-group>
                        </div>
                        <!-- User info -->
                        <h6 class="font-weight-medium font-14 mt-4 mb-2 pb-1">
                            Sidebar User Info
                        </h6>
                        <b-form-checkbox v-model="checked" name="check-button" switch @input="enableInfo()">
                            Enable
                        </b-form-checkbox>

                        <button class="btn btn-primary btn-block mt-4" id="resetBtn" @click="reset()">
                            Reset to Default
                        </button>

                        <a href="https://wrapbootstrap.com/theme/minton-admin-dashboard-landing-template-WB0858DB6?ref=themesbrand" class="btn btn-danger btn-block mt-2" target="_blank"><i class="mdi mdi-basket mr-1"></i> Purchase Now</a>
                    </div>
                </b-tab>
            </b-tabs>
            <!-- Nav tabs -->
        </simplebar>
        <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
</div>
</template>
