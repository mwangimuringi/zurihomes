<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Marketing-reports component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            series: [{
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20]
                },
                {
                    name: "Series 2",
                    data: [20, 30, 40, 80, 20, 80]
                },
                {
                    name: "Series 3",
                    data: [44, 76, 78, 13, 43, 10]
                }
            ],
            chartOptions: {
                chart: {
                    height: 274,
                    type: "radar",
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                },
                legend: {
                    show: false
                },
                colors: ["#3bafda", "#1abc9c", "#f7b84b"],
                labels: ["2011", "2012", "2013", "2014", "2015", "2016"]
            }
        };
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" variant="black" toggle-class="arrow-none card-drop" right>
            <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Download</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Upload</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>
        <h4 class="header-title">Marketing Reports</h4>
        <p class="text-muted mb-0">1 Mar - 31 Mar Showing Data</p>

        <div dir="ltr">
            <apexchart class="apex-charts" type="radar" :options="chartOptions" height="274" :series="series"></apexchart>
        </div>

        <div class="row text-center">
            <div class="col-6">
                <p class="text-muted mb-1">This Month</p>
                <h3 class="mt-0 font-20">
                    $120,254
                    <small class="badge badge-soft-success font-12">+15%</small>
                </h3>
            </div>

            <div class="col-6">
                <p class="text-muted mb-1">Last Month</p>
                <h3 class="mt-0 font-20">
                    $98,741 <small class="badge badge-soft-danger font-12">-5%</small>
                </h3>
            </div>
        </div>
    </div>
</div>
<!-- end card -->
</template>
