<script>
/**
 * Top-performing component
 */
export default {
    data() {
        return {
            performanceData: [{
                    name: 'Jeremy Young',
                    leads: 187,
                    deals: 154,
                    tasks: 49
                },
                {
                    name: 'Thomas Krueger',
                    leads: 235,
                    deals: 127,
                    tasks: 83
                },
                {
                    name: 'Pete Burdine',
                    leads: 365,
                    deals: 148,
                    tasks: 62
                },
                {
                    name: 'Mary Nelson',
                    leads: 753,
                    deals: 159,
                    tasks: 258
                },
                {
                    name: 'Kevin Grove',
                    leads: 458,
                    deals: 126,
                    tasks: 73
                },
            ]
        };
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" toggle-class="card-drop p-0" variant="black" right>
            <template v-slot:button-content>
                <i class="mdi mdi-dots-vertical"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>
        <h4 class="header-title mb-3">Top Performing</h4>

        <div class="table-responsive mb-0">
            <table class="table table-striped table-sm table-nowrap table-centered">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Leads</th>
                        <th>Deals</th>
                        <th>Tasks</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in performanceData" :key="index">
                        <td>
                            <h5 class="font-15 mb-1 font-weight-normal">{{item.name}}</h5>
                            <span class="text-muted font-13">Senior Sales Executive</span>
                        </td>
                        <td>{{item.leads}}</td>
                        <td>{{item.deals}}</td>
                        <td>{{item.tasks}}</td>
                        <td class="table-action">
                            <a href="javascript: void(0);" class="action-icon">
                                <i class="mdi mdi-eye"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- end table-responsive-->
    </div>
    <!-- end card-body-->
</div>
<!-- end card-->
</template>
