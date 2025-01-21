<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Crm - Campaigns component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            series: [44, 55, 41],
            chartOptions: {
                legend: {
                    show: false,
                    position: "bottom",
                    horizontalAlign: "center",
                    verticalAlign: "middle",
                    floating: false,
                    fontSize: "14px",
                    offsetX: 0,
                    offsetY: 7
                },
                labels: ["Total Sent", "Reached", "Opened"],
                colors: ["#f7b84b", "#1abc9c", "#3bafda"],
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 210
                        },
                        legend: {
                            show: false
                        }
                    }
                }]
            }
        };
    }
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h4 class="header-title">Campaigns</h4>
            <div class="btn-group mb-2">
                <button type="button" class="btn btn-xs btn-light active">
                    Today
                </button>
                <button type="button" class="btn btn-xs btn-light">Weekly</button>
                <button type="button" class="btn btn-xs btn-light">Monthly</button>
            </div>
        </div>
        <div class="mt-3" dir="ltr">
            <apexchart class="apex-charts" type="donut" :options="chartOptions" height="260" :series="series"></apexchart>
        </div>
        <div class="row text-center mt-2">
            <div class="col-md-4">
                <h4 class="font-weight-normal mt-3">
                    <span>6,510</span>
                </h4>
                <p class="text-muted mb-0 mb-2">
                    <i class="mdi mdi-checkbox-blank-circle text-warning"></i> Total
                    Sent
                </p>
            </div>
            <div class="col-md-4">
                <h4 class="font-weight-normal mt-3">
                    <span>3,487</span>
                </h4>
                <p class="text-muted mb-0 mb-2">
                    <i class="mdi mdi-checkbox-blank-circle text-success"></i> Reached
                </p>
            </div>
            <div class="col-md-4">
                <h4 class="font-weight-normal mt-3">
                    <span>1,568</span>
                </h4>
                <p class="text-muted mb-0 mb-2">
                    <i class="mdi mdi-checkbox-blank-circle text-primary"></i> Opened
                </p>
            </div>
        </div>
    </div>
</div>
<!-- end card-->
</template>
