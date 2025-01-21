<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Products-sales component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            series: [{
                    name: "Desktops",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                },
                {
                    name: "Laptops",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }
            ],
            chartOptions: {
                chart: {
                    type: "line",
                    padding: {
                        right: 0,
                        left: 0
                    },
                    stacked: false,
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: [1, 2],
                    curve: "smooth"
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                colors: ["#3bafda", "#1abc9c", "#f7b84b"],
                fill: {
                    opacity: [0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: [
                    "01/01/2020",
                    "02/01/2020",
                    "03/01/2020",
                    "04/01/2020",
                    "05/01/2020",
                    "06/01/2020",
                    "07/01/2020",
                    "08/01/2020",
                    "09/01/2020",
                    "10/01/2020",
                    "11/01/2020"
                ],
                markers: {
                    size: 0
                },
                legend: {
                    offsetY: 5
                },
                xaxis: {
                    type: "datetime"
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        },
                        offsetX: -10
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " Dollars";
                            }
                            return y;
                        }
                    }
                },
                grid: {
                    borderColor: "#f1f3fa",
                    padding: {
                        bottom: 10
                    }
                }
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

        <h4 class="header-title">Products Sales</h4>

        <div class="mt-3 text-center">
            <div class="row pt-2">
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>$56,214</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4><i class="fe-arrow-up text-success"></i> $840</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4><i class="fe-arrow-down text-danger"></i> $7,845</h4>
                </div>
            </div>
            <div dir="ltr">
                <apexchart class="apex-charts" type="line" :options="chartOptions" height="265" :series="series"></apexchart>
            </div>
        </div>
    </div>
</div>
<!-- end card -->
</template>
