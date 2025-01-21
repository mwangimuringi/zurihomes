function generateDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = baseval;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

function generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const sparklineSalesChart = {
    series: [{
        name: 'Ubold Sales ',
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    chartOptions: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        colors: ['#4fc6e1'],
        title: {
            text: '$424,652',
            offsetX: 10,
            style: {
                fontSize: '22px'
            }
        },
        subtitle: {
            text: 'Total Sales',
            offsetX: 10,
            offsetY: 35,
            style: {
                fontSize: '13px'
            }
        }
    },
};

const sparklineExpensesChart = {
    series: [{
        name: 'Ubold Expenses ',
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    chartOptions: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        colors: ['#adb5bd'],
        title: {
            text: '$235,312',
            offsetX: 10,
            style: {
                fontSize: '22px'
            }
        },
        subtitle: {
            text: 'Expenses',
            offsetX: 10,
            offsetY: 35,
            style: {
                fontSize: '13px'
            }
        }
    }
};

const sparklineProfitsChart = {
    series: [{
        name: 'Net Profits ',
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    chartOptions: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        colors: ['#f1556c'],
        title: {
            text: '$135,965',
            offsetX: 10,
            style: {
                fontSize: '22px'
            }
        },
        subtitle: {
            text: 'Profits',
            offsetX: 10,
            offsetY: 35,
            style: {
                fontSize: '13px'
            }
        }
    }
};

const linewithDataChart = {
    chartOptions: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#4fc6e1', '#1abc9c'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: [3, 3],
            curve: 'smooth'
        },
        title: {
            text: 'Average High & Low Temperature',
            align: 'left',
            style: {
                fontSize: '14px',
                color: '#666'
            }
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f3fa'
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    },
    series: [{
        name: 'High - 2018',
        data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
        name: 'Low - 2018',
        data: [12, 11, 14, 18, 17, 13, 13]
    }],
};

const gradientLineChart = {
    chartOptions: {
        chart: {
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        },
        title: {
            text: 'Social Media',
            align: 'left',
            style: {
                fontSize: '14px',
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#f1556c'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ['#56c2d6'],
            strokeColor: '#fff',
            strokeWidth: 2,
            style: 'inverted', // full, hollow, inverted
            hover: {
                size: 7,
            }
        },
        yaxis: {
            min: -10,
            max: 40,
            title: {
                text: 'Engagement',
            },
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    },
    series: [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
};

const stackedAreaChart = {
    chartOptions: {
        chart: {
            stacked: true,
            events: {
                selection(chart, e) {
                    console.log(new Date(e.xaxis.min));
                }
            },
        },
        colors: ['#4fc6e1', '#1abc9c', '#dee2e6'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2],
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
    },
    series: [{
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
        })
    },
    {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 15
        })
    }],
};

const basicColumChart = {
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#4fc6e1', '#1abc9c', '#dee2e6'],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        legend: {
            offsetY: -10,
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f3fa'
        },
        tooltip: {
            y: {
                formatter(val) {
                    return '$ ' + val + ' thousands';
                }
            }
        }
    },
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],

};

const basicBarChart = {
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1abc9c'],
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        grid: {
            borderColor: '#f1f3fa'
        }
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
};

const nagativeValueBarChart = {
    chartOptions: {
        chart: {
            stacked: true,
            toolbar: {
                show: false
            }
        },
        colors: ['#4fc6e1', '#1abc9c'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%',

            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        grid: {
            xaxis: {
                showLines: false
            },
            borderColor: '#f1f3fa'
        },
        yaxis: {
            min: -5,
            max: 5,
            title: {
                // text: 'Age',
            },
        },
        tooltip: {
            shared: false,
            x: {
                formatter(val) {
                    return val;
                }
            },
            y: {
                formatter(val) {
                    return Math.abs(val) + '%';
                }
            }
        },
        xaxis: {
            categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
            title: {
                text: 'Percent'
            },
            labels: {
                formatter(val) {
                    return Math.abs(Math.round(val)) + '%';
                }
            }
        },
        legend: {
            offsetY: -10,
        }
    },
    series: [{
        name: 'Males',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
    },
    {
        name: 'Females',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
    }],
};

const lineColumAreaChart = {
    chartOptions: {
        chart: {
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
            width: [0, 2, 4],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        colors: ['#4fc6e1', '#1abc9c', '#f1556c'],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
            size: 0
        },
        legend: {
            offsetY: -10,
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter(y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;

                }
            }
        },
        grid: {
            borderColor: '#f1f3fa'
        }
    },
    series: [{
        name: 'Team A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Team B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Team C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
};

const multipleYAxisChart = {
    chartOptions: {
        chart: {
            stacked: false,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [0, 0, 3]
        },
        colors: ['#4fc6e1', '#ebf2f6', '#f1556c'],
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [{
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#675db7'
            },
            labels: {
                style: {
                    color: '#675db7',
                }
            },
            title: {
                text: 'Income (thousand crores)'
            },
        },

        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#23b397'
            },
            labels: {
                style: {
                    color: '#23b397',
                },
                offsetX: 10
            },
            title: {
                text: 'Operating Cashflow (thousand crores)',
            },
        },
        {
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#e36498'
            },
            labels: {
                style: {
                    color: '#e36498',
                }
            },
            title: {
                text: 'Revenue (thousand crores)'
            }
        },

        ],
        tooltip: {
            followCursor: true,
            y: {
                formatter(y) {
                    if (typeof y !== 'undefined') {
                        return y + ' thousand crores';
                    }
                    return y;
                }
            }
        },
        grid: {
            borderColor: '#f1f3fa'
        },
        legend: {
            offsetY: -10,
        },
        responsive: [{
            breakpoint: 600,
            options: {
                yaxis: {
                    show: false
                },
                legend: {
                    show: false
                }
            }
        }]
    },
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
};

const simpleBubbleChart = {
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 0.8,
            gradient: {
                enabled: false
            }
        },
        colors: ['#4fc6e1', '#1abc9c', '#f1556c'],
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70
        },
        grid: {
            borderColor: '#f1f3fa'
        },
        legend: {
            offsetY: -10,
        }
    },
    series: [{
        name: 'Bubble 1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
};

const scatterChart = {
    chartOptions: {
        chart: {
            zoom: {
                type: 'xy'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1abc9c', '#f1556c', '#6c757d', '#4fc6e1', '#6559cc'],
        grid: {
            borderColor: '#f1f3fa',
            xaxis: {
                showLines: true
            },
            yaxis: {
                showLines: true
            },
        },
        legend: {
            offsetY: -10,
        },
        xaxis: {
            type: 'datetime',

        },
        yaxis: {
            max: 70
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    },
    series: [{
        name: 'Team 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
        })
    }],
};

const simplePieChart = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#4fc6e1', '#26c6da', '#80deea', '#00b19d', '#dee2e6'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
    }
};

const gradientDonutChart = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#3bafda', '#26c6da', '#80deea', '#00b19d', '#d1dee4'],
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }],
        fill: {
            type: 'gradient'
        }
    },
};

const patternedDonutChart = {
    chartOptions: {
        chart: {
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
            }
        },
        stroke: {
            show: true,
            width: 2,
        },
        colors: ['#3bafda', '#26c6da', '#80deea', '#00b19d', '#d1dee4'],
        labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 0.8
            },
            enabled: false
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                enabled: false
            }
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
    },
    series: [44, 55, 41, 17, 15],
};

const basicRadialBarChart = {
    chartOptions: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        colors: ['#6c757d'],
        labels: ['CRICKET'],
    },
    series: [70],
};

const multipleRadialBars = {
    chartOptions: {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter(w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        }
                    }
                }
            }
        },
        colors: ['#56c2d6', '#f672a7', '#23b397', '#6658dd'],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
    series: [44, 55, 67, 83],
};

const strokedCircularGuage = {
    chartOptions: {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter(val) {
                            return val + '%';
                        }
                    }
                }
            }
        },
        fill: {
            gradient: {
                enabled: true,
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        colors: ['#f672a7'],
        labels: ['Median Ratio'],
        responsive: [{
            breakpoint: 380,
            options: {
                chart: {
                    height: 280
                }
            }
        }]
    },
    series: [67],
};
export {
    sparklineSalesChart, sparklineExpensesChart, sparklineProfitsChart, linewithDataChart, gradientLineChart, stackedAreaChart, basicColumChart, basicBarChart, nagativeValueBarChart, lineColumAreaChart, multipleYAxisChart, simpleBubbleChart, scatterChart, simplePieChart, gradientDonutChart, patternedDonutChart,
    basicRadialBarChart, multipleRadialBars, strokedCircularGuage
};
