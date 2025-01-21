<script>
import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";

import {
    emailData
} from "./data-inbox";

/**
 * Email-inbox component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        Toolbar,
        Sidepanel
    },
    data() {
        return {
            emailData: emailData,
            paginatedEmailData: emailData,
            title: "Inbox",
            items: [{
                    text: "Minton"
                },
                {
                    text: "Email",
                    href: "/"
                },
                {
                    text: "Inbox",
                    active: true
                }
            ],
            // page number
            currentPage: 1,
            // default page size
            perPage: 15,
            emailIds: [],
            // start and end index
            startIndex: 1,
            endIndex: 15
        };
    },
    computed: {
        rows() {
            return this.emailData.length;
        }
    },
    created() {
        this.startIndex = 0;
        this.endIndex = this.perPage;

        this.paginatedEmailData = this.emailData.slice(
            this.startIndex,
            this.endIndex
        );
    },
    methods: {
        onPageChange() {
            this.startIndex = (this.currentPage - 1) * this.perPage;
            this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

            this.paginatedEmailData = this.emailData.slice(
                this.startIndex,
                this.endIndex
            );
        }
    },
    middleware: 'auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <!-- Right Sidebar -->
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <Sidepanel />
                    <div class="inbox-rightbar">
                        <Toolbar />

                        <div class="mt-3">
                            <ul class="message-list">
                                <NuxtLink tag="li" v-for="(email, index) in paginatedEmailData" :key="index" :class="{ unread: email.unread === true }" :to="`/email/reademail/${email.id}`">
                                    <div class="col-mail col-mail-1">
                                        <div class="checkbox-wrapper-mail">
                                            <input :id="`chk-${index}`" type="checkbox" />
                                            <label :for="`chk-${index}`"></label>
                                        </div>
                                        <span :class="`star-toggle far fa-star text-${email.text}`"></span>
                                        <a class="title">{{ email.title }}</a>
                                    </div>
                                    <div class="col-mail col-mail-2">
                                        <NuxtLink tag="a" :to="'/email/reademail/' + email.id" class="subject">{{ email.subject }}</NuxtLink>

                                        <div class="date">{{ email.date }}</div>
                                    </div>
                                </NuxtLink>
                            </ul>
                        </div>

                        <div class="row justify-content-md-between align-items-md-center">
                            <div class="col-xl-7">
                                Showing {{ startIndex }} - {{ endIndex }} of {{ rows }}
                            </div>
                            <!-- end col-->
                            <div class="col-xl-5">
                                <div class="text-md-right float-xl-right mt-2 pagination-rounded">
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" @input="onPageChange"></b-pagination>
                                </div>
                            </div>
                            <!-- end col-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
