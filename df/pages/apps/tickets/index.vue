<script>
import {
    widgetData,
    tableData
} from "./data";

export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            widgetData: widgetData,
            tableData: tableData,
            title: "Tickets",
            items: [{
                    text: "Minton",
                    href: "/"
                },
                {
                    text: "Apps",
                    href: "/"
                },
                {
                    text: "Tickets",
                    active: true
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [{
                    key: "id",
                    label: 'ID',
                    sortable: true
                },
                {
                    label: 'Requested By',
                    key: "name",
                    sortable: true
                },
                {
                    key: "subject",
                    sortable: true
                },
                {
                    key: "assignuser",
                    label: 'Assignee',
                    sortable: true
                },
                {
                    key: "priority",
                    sortable: true
                },
                {
                    key: "status",
                    sortable: true
                },
                {
                    key: "createddate",
                    label: 'Created Date',
                    sortable: true
                },
                {
                    label: 'Due Date',
                    key: "duedate",
                    sortable: true
                },
                "action"
            ]
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length;
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        }
    },
    middleware: 'auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-tag font-24"></i>
                                    <h3>25563</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Total tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-archive font-24"></i>
                                    <h3 class="text-warning">6952</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Pending Tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-shield font-24"></i>
                                    <h3 class="text-success">18361</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Closed Tickets
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                    <i class="fe-delete font-24"></i>
                                    <h3 class="text-danger">250</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Deleted Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Tickets
                                </label>
                            </div>
                        </div>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                                <label class="d-inline-flex align-items-center">
                                    Search:
                                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                                </label>
                            </div>
                        </div>
                        <!-- End search -->
                    </div>
                    <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(id)="data">
                            <b> {{data.item.id}}</b>
                        </template>
                        <template v-slot:cell(subject)="data">
                            {{ data.item.subject }}
                        </template>
                        <template v-slot:cell(assignuser)="data">
                            <img :src="data.item.assignuser" alt="contact-img" title="contact-img" class="avatar-sm rounded-circle img-thumbnail">
                        </template>

                        <template v-slot:cell(priority)="data">
                            <span class="badge" :class="{'badge-danger': data.item.priority === 'High',
                            'badge-secondary': data.item.priority === 'Low',
                            'badge-warning': data.item.priority === 'Medium'}">{{ data.item.priority }}</span>
                        </template>

                        <template v-slot:cell(createddate)="data">
                            {{ data.item.createddate }}
                        </template>
                        <template v-slot:cell(duedate)="data">
                            {{ data.item.duedate }}
                        </template>
                        <template v-slot:cell(status)="data">
                            <span class="badge" :class="{'badge-secondary': data.item.status === 'Closed','badge-success': data.item.status === 'Open'}"> {{ data.item.status }}</span>
                        </template>
                        <template v-slot:cell()="data">
                            <a href="javascript: void(0);" class="text-dark">
                                <img :src="data.item.requestuser" alt="contact-img" title="contact-img" class="avatar-sm rounded-circle img-thumbnail">
                                <span class="ml-2">{{data.item.name}}</span>
                            </a>
                        </template>
                        <template v-slot:cell(action)>
                            <b-dropdown class="btn-group" right toggle-class="arrow-none btn-light btn-sm">
                                <template v-slot:button-content>
                                    <i class="mdi mdi-dots-horizontal"></i>
                                </template>
                                <b-dropdown-item><i class="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle"></i>Edit Ticket</b-dropdown-item>
                                <b-dropdown-item><i class="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle"></i>Close</b-dropdown-item>
                                <b-dropdown-item><i class="mdi mdi-delete mr-2 text-muted font-18 vertical-middle"></i>Remove</b-dropdown-item>
                                <b-dropdown-item><i class="mdi mdi-star mr-2 font-18 text-muted vertical-middle"></i>Mark as Unread</b-dropdown-item>
                            </b-dropdown>
                        </template>
                    </b-table>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination pagination-rounded">
                                    <!-- pagination -->
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
