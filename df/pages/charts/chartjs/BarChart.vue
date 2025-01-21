<script>
import {
    Bar
} from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            datasets: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Sales Analytics',
                    backgroundColor: '#1abc9c',
                    borderColor: '#1abc9c',
                    hoverBackgroundColor: '#1abc9c',
                    hoverBorderColor: '#1abc9c',
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                },
                {
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    label: 'Dollar Rate',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
                },
            ],
        }, {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20,
                    },
                }, ],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: 'rgba(0,0,0,0.01)',
                    },
                }, ],
            },
        })
    },
}
</script>
