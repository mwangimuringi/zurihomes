<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: ['Direct', 'Affilliate', 'Sponsored'],
        datasets: [
          {
            data: [128, 78, 48],
            backgroundColor: ['#3bafda', '#1abc9c', '#ebeff2'],
            borderColor: 'transparent',
            borderWidth: '3',
          },
        ],
      },
      {
        maintainAspectRatio: true,
        cutoutPercentage: 60,
        legend: {
          display: false,
        },
        height: 200,
      }
    )
  },
}
</script>