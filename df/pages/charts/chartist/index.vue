<script>
import {
    smilAnimationChart,
    simpleLineChart,
    polarBarChart,
    areaLineChart,
    lineSmoothingChart,
    overlappingBarChart,
    stackBarChart,
    horizontalBarChart,
    donutAnimateChart,
    simplePieChart,
    distributedSeries,
    labelPlacementChart,
    extremeConfiguration,
    lineAreaChart,
} from './data'

/**
 * Chartist component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            smilAnimationChart: smilAnimationChart,
            simpleLineChart: simpleLineChart,
            polarBarChart: polarBarChart,
            areaLineChart: areaLineChart,
            lineSmoothingChart: lineSmoothingChart,
            overlappingBarChart: overlappingBarChart,
            stackBarChart: stackBarChart,
            horizontalBarChart: horizontalBarChart,
            donutAnimateChart: donutAnimateChart,
            simplePieChart: simplePieChart,
            distributedSeries: distributedSeries,
            labelPlacementChart: labelPlacementChart,
            extremeConfiguration: extremeConfiguration,
            lineAreaChart: lineAreaChart,
            title: 'Chartist Charts',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Charts',
                    href: '/',
                },
                {
                    text: 'Chartist',
                    active: true,
                },
            ],
        }
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Advanced Smil Animations</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>

                    <!-- Advanced Smil Animations -->
                    <chartist ratio="ct-chart" :data="smilAnimationChart.data" :options="smilAnimationChart.options" type="Line"></chartist>
                </div>
            </div>

        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Simple line chart</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Simple line chart -->

                    <chartist ratio="ct-chart" :data="simpleLineChart.data" :options="simpleLineChart.options" type="Line"></chartist>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Line chart with area</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Line chart with area -->
                    <chartist ratio="ct-chart" :data="areaLineChart.data" :options="areaLineChart.options" type="Line"></chartist>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Bi-polar Line chart with area only</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Bi-polar Line chart -->
                    <chartist ratio="ct-chart" :data="lineAreaChart.data" :options="lineAreaChart.options" type="Line"></chartist>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Line Interpolation / Smoothing</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Line Interpolation / Smoothing chart -->

                    <chartist ratio="ct-chart" type="Line" :data="lineSmoothingChart.data" :options="lineSmoothingChart.options"></chartist>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Overlapping bars on mobile</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Overlapping bars on mobile -->

                    <chartist ratio="ct-chart" :data="overlappingBarChart.data" :options="overlappingBarChart.options" type="Bar"></chartist>
                </div>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Stacked bar chart</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Stacked bar chart -->

                    <chartist ratio="ct-chart" :data="stackBarChart.data" :options="stackBarChart.options" type="Bar"></chartist>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Horizontal bar chart</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Horizontal bar chart -->

                    <chartist ratio="ct-chart" :data="horizontalBarChart.data" :options="horizontalBarChart.options" type="Bar"></chartist>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Distributed series</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Distributed series -->

                    <chartist ratio="ct-chart" :data="distributedSeries.data" :options="distributedSeries.options" type="Bar"></chartist>
                </div>
                <!-- end card-box -->
            </div>
        </div>

        <!-- end col -->

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Label placement</h4>
                    <p class="sub-header">Example of Label placement chart.</p>
                    <!-- Label placement chart -->

                    <chartist ratio="ct-chart" :data="labelPlacementChart.data" :options="labelPlacementChart.options" type="Bar"></chartist>
                </div>
                <!-- end card-box -->
            </div>
        </div>

        <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Extreme responsive configuration</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>

                    <chartist ratio="ct-chart" :data="extremeConfiguration.data" :options="extremeConfiguration.options" type="Bar"></chartist>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body" dir="ltr">
                    <h4 class="header-title">Bi-polar bar chart</h4>
                    <p class="sub-header">Example of Horizontal bar chart.</p>
                    <!-- Bi-polar bar -->

                    <chartist ratio="ct-chart" :data="polarBarChart.data" :options="polarBarChart.options" type="Bar"></chartist>
                </div>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Animating a Donut with Svg.animate</h4>
                    <p class="sub-header">Example of pie chart.</p>
                    <!-- Animating a Donut with Svg.animate -->

                    <chartist ratio="ct-chart" :data="donutAnimateChart.data" :options="donutAnimateChart.options" type="Pie"></chartist>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Simple pie chart</h4>
                    <p class="sub-header">Example of Label placement chart.</p>
                    <!-- Simple pie chart -->

                    <chartist ratio="ct-chart" :data="simplePieChart.data" :options="simplePieChart.options" type="Pie"></chartist>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
