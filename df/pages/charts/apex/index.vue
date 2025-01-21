<script>
import VueApexCharts from "vue-apexcharts";

import {
    sparklineSalesChart,
    sparklineExpensesChart,
    sparklineProfitsChart,
    linewithDataChart,
    gradientLineChart,
    stackedAreaChart,
    basicColumChart,
    basicBarChart,
    nagativeValueBarChart,
    lineColumAreaChart,
    multipleYAxisChart,
    simpleBubbleChart,
    scatterChart,
    simplePieChart,
    gradientDonutChart,
    patternedDonutChart,
    basicRadialBarChart,
    multipleRadialBars,
    strokedCircularGuage,
} from "./data";

/**
 * Apex component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        apexchart: () => import("vue-apexcharts"),
    },
    data() {
        return {
            sparklineSalesChart: sparklineSalesChart,
            sparklineExpensesChart: sparklineExpensesChart,
            sparklineProfitsChart: sparklineProfitsChart,
            linewithDataChart: linewithDataChart,
            gradientLineChart: gradientLineChart,
            stackedAreaChart: stackedAreaChart,
            basicColumChart: basicColumChart,
            basicBarChart: basicBarChart,
            nagativeValueBarChart: nagativeValueBarChart,
            lineColumAreaChart: lineColumAreaChart,
            multipleYAxisChart: multipleYAxisChart,
            simpleBubbleChart: simpleBubbleChart,
            scatterChart: scatterChart,
            simplePieChart: simplePieChart,
            gradientDonutChart: gradientDonutChart,
            patternedDonutChart: patternedDonutChart,
            basicRadialBarChart: basicRadialBarChart,
            multipleRadialBars: multipleRadialBars,
            strokedCircularGuage: strokedCircularGuage,
            title: "Apexcharts",
            items: [{
                    text: "Minton",
                    href: "/",
                },
                {
                    text: "Charts",
                    href: "/",
                },
                {
                    text: "Apexcharts",
                    active: true,
                },
            ],
        };
    },
    middleware: 'auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <Portlet :headertitle="'Sparkline Charts'">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card-body pt-0">
                            <!-- sparkline total sales chart -->
                            <apexchart class="apex-charts" type="area" height="160" :series="sparklineSalesChart.series" :options="sparklineSalesChart.chartOptions"></apexchart>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-body pt-0">
                            <!-- sparkline expenses chart -->
                            <apexchart class="apex-charts" type="area" height="160" :series="sparklineExpensesChart.series" :options="sparklineExpensesChart.chartOptions"></apexchart>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card-body pt-0">
                            <!-- sparkline profits chart -->
                            <apexchart class="apex-charts" type="area" height="160" :series="sparklineProfitsChart.series" :options="sparklineProfitsChart.chartOptions"></apexchart>
                        </div>
                    </div>
                </div>
            </Portlet>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
            <Portlet :headertitle="'Line with Data Labels'">
                <div class="card-body pt-0">
                    <!-- line with data labels chart -->
                    <apexchart class="apex-charts" height="380" type="line" :series="linewithDataChart.series" :options="linewithDataChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>

        <div class="col-xl-6">
            <Portlet :headertitle="'Gradient Line Chart'">
                <div class="card-body pt-0">
                    <!-- Gradient Line Chart -->
                    <apexchart class="apex-charts" height="380" type="line" :series="gradientLineChart.series" :options="gradientLineChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-6">
            <Portlet :headertitle="'Stacked Area'">
                <!-- Stacked Area chart -->
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="380" type="area" :series="stackedAreaChart.series" :options="stackedAreaChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-6">
            <Portlet :headertitle="'Basic Column Chart'">
                <div class="card-body pt-0">
                    <!-- basic column chart -->
                    <apexchart height="380" type="bar" class="apex-charts" :series="basicColumChart.series" :options="basicColumChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
            <Portlet :headertitle="'Basic Bar Chart'">
                <div class="card-body pt-0">
                    <!-- Basic Bar Chart -->
                    <apexchart class="apex-charts" height="380" type="bar" :series="basicBarChart.series" :options="basicBarChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-6">
            <Portlet :headertitle="'Bar with Negative Values'">
                <!-- Bar with Negative Values chart -->
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="380" type="bar" :series="nagativeValueBarChart.series" :options="nagativeValueBarChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-6">
            <Portlet :headertitle="'Line, Column & Area Chart'">
                <div class="card-body pt-0">
                    <!-- Line, Column & Area Chart -->
                    <apexchart class="apex-charts" height="380" type="line" :series="lineColumAreaChart.series" :options="lineColumAreaChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-6">
            <Portlet :headertitle="'Multiple Y-Axis Chart'">
                <div class="card-body pt-0">
                    <!-- Multiple Y-Axis Chart -->
                    <apexchart class="apex-charts" height="380" type="line" :series="multipleYAxisChart.series" :options="multipleYAxisChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
            <!-- Simple Bubble Chart -->
            <Portlet :headertitle="'Simple Bubble Chart'">
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="380" type="bubble" :series="simpleBubbleChart.series" :options="simpleBubbleChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-6">
            <!-- Scatter Chart - Datetime -->
            <Portlet :headertitle="'Scatter Chart - Datetime'">
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="380" type="scatter" :series="scatterChart.series" :options="scatterChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-4">
            <!-- Simple Pie Chart -->
            <Portlet :headertitle="'Simple Pie Chart'">
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="320" type="pie" :series="simplePieChart.series" :options="simplePieChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-4">
            <!-- Gradient Donut Chart -->
            <Portlet :headertitle="'Gradient Donut Chart'">
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="320" type="donut" :series="gradientDonutChart.series" :options="gradientDonutChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-4">
            <!-- Patterned Donut Chart -->
            <Portlet :headertitle="'Patterned Donut Chart'">
                <div class="card-body pt-0">
                    <apexchart class="apex-charts" height="320" type="donut" :series="patternedDonutChart.series" :options="patternedDonutChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-4">
            <Portlet :headertitle="'Basic RadialBar Chart'">
                <div class="card-body pt-0">
                    <!-- Basic RadialBar Chart -->
                    <apexchart class="apex-charts" height="335" type="radialBar" :series="basicRadialBarChart.series" :options="basicRadialBarChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-4">
            <Portlet :headertitle="'Multiple RadialBars'">
                <div class="card-body pt-0">
                    <!-- Multiple RadialBars -->
                    <apexchart class="apex-charts" height="335" type="radialBar" :series="multipleRadialBars.series" :options="multipleRadialBars.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
        <div class="col-xl-4">
            <Portlet :headertitle="'Stroked Circular Guage'">
                <div class="card-body pt-0">
                    <!-- Stroked Circular Guage -->
                    <apexchart class="apex-charts" height="350" type="radialBar" :series="strokedCircularGuage.series" :options="strokedCircularGuage.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>
</div>
</template>
