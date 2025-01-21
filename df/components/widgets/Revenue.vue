<script>
import VueApexCharts from 'vue-apexcharts'
/**
 * Revenue component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.3,
                        opacityTo: 0.9
                    }
                },
                legend: {
                    offsetY: 5
                },
                xaxis: {
                    type: "datetime"
                },
                grid: {
                    padding: {
                        bottom: 10
                    }
                },
                yaxis: {
                    title: {
                        text: "Revenue",
                        style: {
                            color: undefined,
                            fontSize: "13px",
                            cssClass: "apexcharts-yaxis-title"
                        }
                    }
                },
                colors: ["#3bafda", "#ced4dc"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [2],
                    curve: "smooth"
                }
            },
            series: [{
                    name: "Total Revenue",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20, {
                            min: 100,
                            max: 1500
                        }
                    )
                },

                {
                    name: "Total Pipeline",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20, {
                            min: 100,
                            max: 1000
                        }
                    )
                }
            ]
        };
    },
    methods: {
        generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y =
                    Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
                    yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h4 class="header-title">Revenue</h4>
            <div class="btn-group mb-2">
                <button type="button" class="btn btn-xs btn-light active">
                    Today
                </button>
                <button type="button" class="btn btn-xs btn-light">Weekly</button>
                <button type="button" class="btn btn-xs btn-light">Monthly</button>
            </div>
        </div>

        <div class="row mt-4 text-center">
            <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Current Month</p>
                <h4><i class="fe-arrow-up text-success mr-1"></i>$1.4k</h4>
            </div>
            <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Previous Month</p>
                <h4><i class="fe-arrow-down text-danger mr-1"></i>$15k</h4>
            </div>
            <div class="col-4">
                <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4><i class="fe-arrow-down text-danger mr-1"></i>$7.8k</h4>
            </div>
        </div>

        <div class="mt-3" dir="ltr">
            <apexchart class="apex-charts" type="area" :options="chartOptions" height="260" :series="series"></apexchart>
        </div>
    </div>
    <!-- end card-body-->
</div>
<!-- end card-->
</template>
