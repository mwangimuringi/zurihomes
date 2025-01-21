<script>
import RevenueReport from '~/components/widgets/Revenue-report';
import ProductsSales from '~/components/widgets/Products-sales';
import MarketingReports from '~/components/widgets/Marketing-reports';
import RevenueHistory from '~/components/widgets/Revenue-history';
import Projections from '~/components/widgets/Projections';
import WidgetChart from '~/components/widgets/Widget-chart';
/**
 * Sales-Dashboard component
 */
export default {
    head() {
        return {
            title: `${this.title} | ${process.env.appName}`,
        };
    },
   middleware: 'auth',

  components: {
WidgetChart,
        RevenueReport,
ProductsSales,
MarketingReports,
RevenueHistory,
Projections
    },

    data() {
        return {
            title: "Welcome !",
            items: [{
                    text: "WA"
                },
                {
                    text: "Dashboards"
                },
                {
                    text: "Sales",
                    active: true
                }
            ],
            tableTitle: "Top Selling Products",
            productData: [{
                    name: "ASOS Ridley High Waist",
                    price: "$79.49",
                    quantity: 82,
                    amount: "$6,518.18",
                    date: "Sep 1, 2018",
                    sales: 54,
                    productid: 200125
                },
                {
                    name: "Marco Lightweight Shirt",
                    price: "$128.50",
                    quantity: 37,
                    amount: "$4,754.50",
                    date: "Sep 15, 2018",
                    sales: 28,
                    productid: 200130
                },
                {
                    name: "Half Sleeve Shirt",
                    price: "$39.99",
                    quantity: 64,
                    amount: "$2,559.36",
                    date: "Nov 1, 2018",
                    sales: 55,
                    productid: 200140
                },
                {
                    name: "Lightweight Jacket",
                    price: "$20.00",
                    quantity: 184,
                    amount: "$3,680.00",
                    date: "Nov 15, 2018",
                    sales: 85,
                    productid: 200250
                },
                {
                    name: "Marco Shoes",
                    price: "$28.49",
                    quantity: 69,
                    amount: "$1,965.81",
                    date: "Jan 1, 2019",
                    sales: 49,
                    productid: 200256
                },
                {
                    name: "ASOS Ridley High Waist",
                    price: "$79.49",
                    quantity: 82,
                    amount: "$6,518.18",
                    date: "Sep 1, 2018",
                    sales: 54,
                    productid: 200125
                },
                {
                    name: "Half Sleeve Shirt",
                    price: "$39.99",
                    quantity: 64,
                    amount: "$2,559.36",
                    date: "Nov 1, 2018",
                    sales: 55,
                    productid: 200140
                },
                {
                    name: "Lightweight Jacket",
                    price: "$20.00",
                    quantity: 184,
                    amount: "$3,680.00",
                    date: "Nov 15, 2018",
                    sales: 85,
                    productid: 200250
                }
            ],
            widgetData: [{
                    number: "268",
                    text: "Total Visitors",
                    chartColor: "#1abc9c"
                },
                {
                    number: "8574",
                    text: "Online Orders",
                    chartColor: "#3bafda"
                },
                {
                    number: "$958.25",
                    text: "Revenue",
                    chartColor: "#f672a7"
                },
                {
                    number: "$89.25",
                    text: "Daily Average",
                    chartColor: "#6c757d"
                }
            ]
        };
    },
    methods:{
        async getStatsHitCounter() {
            let response = await this.$axios.$post("/statscounter/view-stats/");
            // console.log(this.widgetData[0].number);
            console.log(response.data.countItems);
            this.widgetData[0].number=String(response.data.countItems);
        }
    },
    mounted(){
        
        this.getStatsHitCounter();
    },
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

</div>
</template>
