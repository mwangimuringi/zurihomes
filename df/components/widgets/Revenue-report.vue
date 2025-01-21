<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Revenue-report component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: "bar",
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "25%"
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"]
                },
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                colors: ["#3bafda", "#e3eaef"],
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    axisBorder: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        },
                        offsetX: -15
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$" + val + "k";
                        }
                    }
                }
            },
            series: [{
                    name: "Actual",
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
                },
                {
                    name: "Projection",
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                }
            ]
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

        <h4 class="header-title">Revenue Report</h4>

        <div class="mt-3 text-center">
            <div class="row pt-2">
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>$12,365</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4><i class="fe-arrow-down text-danger"></i> $365</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4><i class="fe-arrow-up text-success"></i> $8,501</h4>
                </div>
            </div>

            <div dir="ltr">
                <apexchart class="apex-charts" type="bar" :options="chartOptions" height="265" :series="series"></apexchart>
            </div>
        </div>
    </div>
</div>
<!-- end card-box -->
</template>
