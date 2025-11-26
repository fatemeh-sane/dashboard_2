import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state = {

        series: [
            {
                name: "بالا - 2013",
                data: [28, 153, 13, 66, 32, 123, 55]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#6F7A87'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },

            grid: {
                row: {
                    colors: ['#f8f8f8', 'transparent'],
                    opacity: 0.5
                },
                column: {
                    colors: ['rgba(206,204,204,0.73)','transparent'],
                },
                // xaxis: {
                //     lines: {
                //         show: true
                //     }
                // }
            },
            xaxis: {
                categories: ['۲۰۲۰', '۲۰۲۱', '۲۰۲۲', '۲۰۲۳', '۲۰۲۱', '۲۰۲۱', '۲۰۲۱'],
                title: {
                }
            },
            yaxis: {
                title: {
                },
                min: 1,
                max: 158
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },

    }
        return <div>

        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height="350"


        />
    </div>
}


export default ChartOne