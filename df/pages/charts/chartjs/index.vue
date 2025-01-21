<script>
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DonutChart from './DonutChart'
import PolarChart from './PolarChart'
import RadarChart from './RadarChart'

/**
 * Chartjs component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        BarChart,
        LineChart,
        PieChart,
        DonutChart,
        PolarChart,
        RadarChart,
    },
    data() {
        return {
            title: 'Chartjs',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Charts',
                    href: '/',
                },
                {
                    text: 'Chartjs',
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
                <div class="card-body">
                    <h4 class="header-title mb-4">Line Chart</h4>
                    <!-- Line Chart -->
                    <LineChart :height="350" />
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-4">Bar Chart</h4>
                    <!-- Bar Chart -->
                    <BarChart :height="350" />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-4">Pie Chart</h4>
                    <!-- Pie Chart -->
                    <PieChart :height="170" />
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-4">Donut Chart</h4>
                    <!-- Donut Chart -->
                    <DonutChart :height="170" />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-4">Polar area Chart</h4>
                    <!-- Polar area Chart -->
                    <PolarChart :height="170" />
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title mb-4">Radar Chart</h4>
                    <!-- Radar Chart -->
                    <RadarChart :height="170" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
