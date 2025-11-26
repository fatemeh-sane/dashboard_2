import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state ={
        series: [{
            name: 'ارائه نهایی شده',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,44,78,55]
        }, {
            name: 'ارائه نهایی نشده',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94,55,52,55]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'

                },
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#EED3D9','#B5C0D0'],
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'اذر','دی', 'بهمن', 'اسفند'],
            },
            yaxis: {
                title: {

                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                    }
                }
            }
        },

    };
    return <div>

        <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height="350"
        />
    </div>
}


export default ChartOne