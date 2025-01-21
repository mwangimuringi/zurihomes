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
        <h4 class="header-title mt-0 mb-3">Browser Used By Users</h4>
        <div class="table-responsive browser_users mb-0">
            <table class="table mb-0">
                <thead class="thead-light">
                    <tr>
                        <th class="border-top-0">Browser</th>
                        <th class="border-top-0">Sessions</th>
                        <th class="border-top-0">Bounce Rate</th>
                        <th class="border-top-0">Transactions</th>
                    </tr>
                    <!--end tr-->
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i class="fab fa-chrome mr-2 text-success font-16"></i>Chrome
                        </td>
                        <td>10853 <small class="text-muted">(52%)</small></td>
                        <td>52.80%</td>
                        <td>566 <small class="text-muted">(92%)</small></td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <i class="fab fa-safari mr-2 text-info font-16"></i>Safari
                        </td>
                        <td>2545 <small class="text-muted">(47%)</small></td>
                        <td>47.54%</td>
                        <td>498 <small class="text-muted">(81%)</small></td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <i class="fab fa-internet-explorer mr-2 text-warning font-16"></i>Internet-Explorer
                        </td>
                        <td>1836 <small class="text-muted">(38%)</small></td>
                        <td>41.12%</td>
                        <td>455 <small class="text-muted">(74%)</small></td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <i class="fab fa-opera mr-2 text-danger font-16"></i>Opera
                        </td>
                        <td>1958 <small class="text-muted">(31%)</small></td>
                        <td>36.82%</td>
                        <td>361 <small class="text-muted">(61%)</small></td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <i class="fab fa-firefox mr-2 text-blue font-16"></i>Firefox
                        </td>
                        <td>1566 <small class="text-muted">(26%)</small></td>
                        <td>29.33%</td>
                        <td>299 <small class="text-muted">(49%)</small></td>
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
