<script>
import UITableApprovals from '../../components/ui-table/ui-approvals-table.vue';
/**
 * Task-list component
 */
export default {
    head() {
        return {
            title: `${this.title} | `+process.env.appName,
        };
    },
    data() {
        return {
            title: "Approvals",
            items: [{
                    text: "WA",
                    href: "/",
                },
                
                {
                    text: "Approvals",
                    active: true,
                },
            ],
            tableDataKey:0,
            tableDataKeyNo:0
        };
    },
    methods:{
        OnRefreshDTTable(){
            this.tableDataKey++;
            this.tableDataKeyNo++;
        },
    },
    components:{
        UITableApprovals
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <!-- cta -->
                            <!-- <div class="row">
                                <div class="col-sm-3">
                                    <a href="#" class="btn btn-primary waves-effect waves-light">
                                        <i class="fe-plus mr-1"></i>Add New
                                    </a>
                                </div>
                                <div class="col-sm-9">
                                    <div class="float-sm-right mt-3 mt-sm-0">
                                        <div class="form-inline">
                                            <div class="mb-3 mb-sm-0 mr-sm-2">
                                                <form>
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control" placeholder="Search..." />
                                                    </div>
                                                </form>
                                            </div>
                                            <b-dropdown variant="light" right>
                                                <template v-slot:button-content>
                                                    <i class="mdi mdi-filter-variant"></i>
                                                </template>
                                                <b-dropdown-item>Due Date</b-dropdown-item>
                                                <b-dropdown-item>Added Date</b-dropdown-item>
                                                <b-dropdown-item>Assignee</b-dropdown-item>
                                            </b-dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="custom-accordion">
                                
                                <UITableApprovals :tableDataKey="tableDataKeyNo" tableUserApproved="0" tableUserTitle="No Approved"></UITableApprovals>
                                <hr>
                                <UITableApprovals :tableDataKey="tableDataKey" tableUserApproved="1" tableUserTitle="Approved"></UITableApprovals>
                                <!-- <div class="mt-4">
                                    <h5 class="position-relative mb-0">
                                        <a v-b-toggle.taskcollapse2 href="javascript: void(0);" class="text-dark d-block">
                                            Upcoming Tasks
                                            <span class="text-muted">(05)</span>
                                            <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                        </a>
                                    </h5>
                                    <b-collapse visible id="taskcollapse2">
                                        <div class="table-responsive mt-3">
                                            <table class="table table-centered table-nowrap table-borderless table-sm">
                                                <thead class="thead-light">
                                                    <tr class>
                                                        <th scope="col">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="upcomingCheck" />
                                                                <label class="custom-control-label" for="upcomingCheck">Task ID</label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">Tasks</th>
                                                        <th scope="col">Assign to</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Task priority</th>
                                                        <th scope="col" style="width: 85px;">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="upcomingCheck01" />
                                                                <label class="custom-control-label" for="upcomingCheck01">#MN2050</label>
                                                            </div>
                                                        </td>
                                                        <td>Enable analytics tracking</td>
                                                        <td>
                                                            <div>
                                                                <img src="~/assets/images/users/avatar-5.jpg" lt="image" class="avatar-sm img-thumbnail rounded-circle" v-b-tooltip.hover title="Donald Mealy" />
                                                            </div>
                                                        </td>
                                                        <td>May 27, 2020</td>
                                                        <td>
                                                            <span class="badge badge-soft-danger p-1">High</span>
                                                        </td>
                                                        <td>
                                                            <ul class="list-inline table-action m-0">
                                                                <li class="list-inline-item">
                                                                    <a href="javascript:void(0);" class="action-icon px-1">
                                                                        <i class="mdi mdi-square-edit-outline"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <b-dropdown right toggle-class="action-icon px-1" variant="black">
                                                                        <template v-slot:button-content>
                                                                            <i class="mdi mdi-dots-vertical"></i>
                                                                        </template>
                                                                        <b-dropdown-item>Action</b-dropdown-item>
                                                                        <b-dropdown-item>Another action</b-dropdown-item>
                                                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                                                    </b-dropdown>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="upcomingCheck02" />
                                                                <label class="custom-control-label" for="upcomingCheck02">#MN2049</label>
                                                            </div>
                                                        </td>
                                                        <td>Kanban board design</td>
                                                        <td>
                                                            <div>
                                                                <img src="~/assets/images/users/avatar-6.jpg" lt="image" class="avatar-sm img-thumbnail rounded-circle" v-b-tooltip.hover title="Shelton Garza" />
                                                            </div>
                                                        </td>
                                                        <td>No Due Date</td>
                                                        <td>
                                                            <span class="badge badge-soft-info p-1">Medium</span>
                                                        </td>
                                                        <td>
                                                            <ul class="list-inline table-action m-0">
                                                                <li class="list-inline-item">
                                                                    <a href="javascript:void(0);" class="action-icon px-1">
                                                                        <i class="mdi mdi-square-edit-outline"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <b-dropdown right toggle-class="action-icon px-1" variant="black">
                                                                        <template v-slot:button-content>
                                                                            <i class="mdi mdi-dots-vertical"></i>
                                                                        </template>
                                                                        <b-dropdown-item>Action</b-dropdown-item>
                                                                        <b-dropdown-item>Another action</b-dropdown-item>
                                                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                                                    </b-dropdown>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="upcomingCheck03" />
                                                                <label class="custom-control-label" for="upcomingCheck03">#MN2048</label>
                                                            </div>
                                                        </td>
                                                        <td>Code HTML email template</td>
                                                        <td>
                                                            <div>
                                                                <img src="~/assets/images/users/avatar-7.jpg" lt="image" class="avatar-sm img-thumbnail rounded-circle" v-b-tooltip.hover title="Adrian Key" />
                                                            </div>
                                                        </td>
                                                        <td>June 08, 2020</td>
                                                        <td>
                                                            <span class="badge badge-soft-danger p-1">High</span>
                                                        </td>
                                                        <td>
                                                            <ul class="list-inline table-action m-0">
                                                                <li class="list-inline-item">
                                                                    <a href="javascript:void(0);" class="action-icon px-1">
                                                                        <i class="mdi mdi-square-edit-outline"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <b-dropdown right toggle-class="action-icon px-1" variant="black">
                                                                        <template v-slot:button-content>
                                                                            <i class="mdi mdi-dots-vertical"></i>
                                                                        </template>
                                                                        <b-dropdown-item>Action</b-dropdown-item>
                                                                        <b-dropdown-item>Another action</b-dropdown-item>
                                                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                                                    </b-dropdown>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-collapse>
                                </div> -->

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
