<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Projections component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            series: [44, 55, 41, 15],
            chartOptions: {
                legend: {
                    show: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    verticalAlign: "middle",
                    floating: false,
                    fontSize: "14px",
                    offsetX: 0,
                    offsetY: 7
                },
                labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
                colors: ["#3bafda", "#1abc9c", "#f7b84b", "#f672a7"],
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
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

        <h4 class="header-title">Projections Vs Actuals</h4>

        <div class="mt-3 text-center" dir="ltr">
            <apexchart class="apex-charts" type="donut" :options="chartOptions" height="312" :series="series"></apexchart>

            <div class="row mt-3">
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>$8712</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4><i class="fe-arrow-up text-success"></i> $523</h4>
                </div>
                <div class="col-4">
                    <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4><i class="fe-arrow-down text-danger"></i> $965</h4>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end card-box -->
</template>
