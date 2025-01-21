<script>
export default {};
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
            <b-dropdown-item>Download</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Upload</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>

        <h4 class="header-title mt-0 mb-3">Traffic Sources</h4>
        <div class="table-responsive browser_users mb-0">
            <table class="table mb-0">
                <thead class="thead-light">
                    <tr>
                        <th class="border-top-0">Channel</th>
                        <th class="border-top-0">Sessions</th>
                        <th class="border-top-0">Prev.Period</th>
                        <th class="border-top-0">% Change</th>
                    </tr>
                    <!--end tr-->
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href class="text-primary">Organic search</a>
                        </td>
                        <td>
                            10853
                            <small class="text-muted">(52%)</small>
                        </td>
                        <td>
                            566
                            <small class="text-muted">(92%)</small>
                        </td>
                        <td>
                            52.80%
                            <i class="fas fa-caret-up text-success font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">Direct</a>
                        </td>
                        <td>
                            2545
                            <small class="text-muted">(47%)</small>
                        </td>
                        <td>
                            498
                            <small class="text-muted">(81%)</small>
                        </td>
                        <td>
                            -17.20%
                            <i class="fas fa-caret-down text-danger font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">Referal</a>
                        </td>
                        <td>
                            1836
                            <small class="text-muted">(38%)</small>
                        </td>
                        <td>
                            455
                            <small class="text-muted">(74%)</small>
                        </td>
                        <td>
                            41.12%
                            <i class="fas fa-caret-up text-success font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">Email</a>
                        </td>
                        <td>
                            1958
                            <small class="text-muted">(31%)</small>
                        </td>
                        <td>
                            361
                            <small class="text-muted">(61%)</small>
                        </td>
                        <td>
                            -8.24%
                            <i class="fas fa-caret-down text-danger font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">Social</a>
                        </td>
                        <td>
                            1566
                            <small class="text-muted">(26%)</small>
                        </td>
                        <td>
                            299
                            <small class="text-muted">(49%)</small>
                        </td>
                        <td>
                            29.33%
                            <i class="fas fa-caret-up text-success"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                </tbody>
            </table>
            <!--end table-->
        </div>
        <!--end /div-->
    </div>
    <!--end card-body-->
</div>
<!--end card-->
</template>
