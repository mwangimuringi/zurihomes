<script>
import {
    chatData,
    chatMessagesData
} from "./data";
import {
    required
} from "vuelidate/lib/validators";

/**
 * Chat comoponent
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            chatData: chatData,
            chatMessagesData: chatMessagesData,
            title: "Chat",
            items: [{
                    text: "Minton",
                },
                {
                    text: "Apps",
                },
                {
                    text: "Chat",
                    active: true,
                },
            ],
            submitted: false,
            form: {
                message: "",
            },
            username: "Designer",
        };
    },
    validations: {
        form: {
            message: {
                required,
            },
        },
    },
    methods: {
        /**
         * Get the name of user
         */
        chatUsername(name, image) {
            this.username = name;
            this.usermessage = "Hello";

            this.chatMessagesData = [];
            const currentDate = new Date();
            this.chatMessagesData.push({
                image: image,
                name: this.username,
                message: this.usermessage,
                time: currentDate.getHours() + ":" + currentDate.getMinutes(),
            });
        },

        /**
         * Char form Submit
         */
        // eslint-disable-next-line no-unused-vars
        formSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                const message = this.form.message;
                const currentDate = new Date();
                this.chatMessagesData.push({
                    align: "right",
                    name: "Marcus",
                    message,
                    time: currentDate.getHours() + ":" + currentDate.getMinutes(),
                    image: require("~/assets/images/users/avatar-1.jpg"),
                });
            }
            this.submitted = false;
            this.form = {};
        },
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <!-- start chat users-->
        <div class="col-xl-3 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="media mb-3">
                        <img src="~/assets/images/users/avatar-1.jpg" class="mr-2 rounded-circle" height="42" alt="Brandon Smith" />
                        <div class="media-body">
                            <h5 class="mt-0 mb-0 font-15">
                                <nuxt-link to="/contacts/profile" class="text-reset">Nik Patel</nuxt-link>
                            </h5>
                            <p class="mt-1 mb-0 text-muted font-14">
                                <small class="mdi mdi-circle text-success"></small> Online
                            </p>
                        </div>
                        <div>
                            <a href="javascript: void(0);" class="text-reset font-20">
                                <i class="mdi mdi-cog-outline"></i>
                            </a>
                        </div>
                    </div>

                    <!-- start search box -->
                    <form class="search-bar mb-3">
                        <div class="position-relative">
                            <input type="text" class="form-control form-control-light" placeholder="People, groups & messages..." />
                            <span class="mdi mdi-magnify"></span>
                        </div>
                    </form>
                    <!-- end search box -->

                    <h6 class="font-13 text-muted text-uppercase mb-2">Contacts</h6>

                    <!-- users -->
                    <div class="row">
                        <div class="col">
                            <simplebar data-simplebar style="max-height: 498px">
                                <a href="javascript:void(0);" class="text-body" v-for="(item, index) in chatData" :key="index" @click="chatUsername(item.name, item.image)">
                                    <div class="media p-2">
                                        <div class="position-relative">
                                            <span class="user-status" :class="{'online': item.status === 'online', 'busy':  item.status === 'away', 'do-not-disturb': item.status === 'do-not-disturb'}"></span>
                                            <img :src="item.image" class="mr-2 rounded-circle" height="42" alt="user" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-0 font-14">
                                                <span class="float-right text-muted font-weight-normal font-12">{{ item.time }}</span>
                                                {{ item.name }}
                                            </h5>
                                            <p class="mt-1 mb-0 text-muted font-14">

                                                <span class="w-75">{{ item.message }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </simplebar>
                            <!-- end slimscroll-->
                        </div>
                        <!-- End col -->
                    </div>
                    <!-- end users -->
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
        </div>
        <!-- end chat users-->

        <!-- chat area -->
        <div class="col-xl-9 col-lg-8">
            <div class="card">
                <div class="card-body py-2 px-3 border-bottom border-light">
                    <div class="media py-1">
                        <img src="~/assets/images/users/avatar-5.jpg" class="mr-2 rounded-circle" height="36" alt="Brandon Smith" />
                        <div class="media-body">
                            <h5 class="mt-0 mb-0 font-15">
                                <nuxt-link to="/contacts/profile" class="text-reset">
                                    {{
                    username
                    }}
                                </nuxt-link>
                            </h5>
                            <p class="mt-1 mb-0 text-muted font-12">
                                <small class="mdi mdi-circle text-success"></small> Online
                            </p>
                        </div>
                        <div>
                            <a href="javascript: void(0);" class="text-reset font-19 py-1 px-2 d-inline-block" v-b-tooltip.hover title="Voice Call">
                                <i class="fe-phone-call"></i>
                            </a>
                            <a href="javascript: void(0);" class="text-reset font-19 py-1 px-2 d-inline-block" v-b-tooltip.hover title="Video Call">
                                <i class="fe-video"></i>
                            </a>
                            <a href="javascript: void(0);" class="text-reset font-19 py-1 px-2 d-inline-block" v-b-tooltip.hover title="Add Users">
                                <i class="fe-user-plus"></i>
                            </a>
                            <a href="javascript: void(0);" class="text-reset font-19 py-1 px-2 d-inline-block" v-b-tooltip.hover title="Delete Chat">
                                <i class="fe-trash-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <simplebar data-simplebar style="max-height: 460px">
                        <ul class="conversation-list chat-app-conversation">
                            <li class="clearfix" v-for="(data, index) in chatMessagesData" :key="index" :class="{ odd: data.align === 'right' }">
                                <div class="chat-avatar">
                                    <img :src="data.image" class="rounded" alt="James Z" />
                                    <i>{{ data.time }}</i>
                                </div>
                                <div class="conversation-text">
                                    <div class="ctext-wrap">
                                        <i>{{ data.name }}</i>
                                        <p>{{ data.message }}</p>
                                    </div>
                                    <div class="card mt-2 mb-1 shadow-none border text-left" v-if="data.file === true">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-primary rounded">PDF</span>
                                                    </div>
                                                </div>
                                                <div class="col pl-0">
                                                    <a href="javascript:void(0);" class="text-muted font-weight-medium">minton-presentation.pdf</a>
                                                    <p class="mb-0">2.3 MB</p>
                                                </div>
                                                <div class="col-auto">
                                                    <!-- Button -->
                                                    <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                        <i class="dripicons-download"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <b-dropdown class="conversation-actions" toggle-class="btn-sm btn-link text-reset p-0" variant="black" right>
                                    <template v-slot:button-content>
                                        <i class="mdi mdi-dots-vertical font-18"></i>
                                    </template>
                                    <a class="dropdown-item" href="#">Copy Message</a>
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                </b-dropdown>
                            </li>
                        </ul>
                    </simplebar>
                    <div class="row">
                        <div class="col">
                            <div class="mt-2 bg-light p-3 rounded">
                                <form class="needs-validation" @submit.prevent="formSubmit" name="chat-form" id="chat-form">
                                    <div class="row">
                                        <div class="col mb-2 mb-sm-0">
                                            <input type="text" v-model="form.message" class="form-control border-0" placeholder="Enter your text" />
                                            <div v-if="submitted && $v.form.message.$error" class="invalid-feedback">
                                                <span v-if="!$v.form.message.required">Please enter your message</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-auto">
                                            <div class="btn-group">
                                                <a href="#" class="btn btn-light">
                                                    <i class="fe-paperclip"></i>
                                                </a>
                                                <button type="submit" class="btn btn-success chat-send btn-block">
                                                    <i class="fe-send"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row-->
                                </form>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end chat area-->
    </div>
    <!-- end row-->
</div>
</template>
