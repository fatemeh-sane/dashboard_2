import Chart from "react-apexcharts";

const ChartOne = () => {
    const state = {
        series: [
            {
                name: 'ارائه نهایی شده',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 78, 55]
            },
            {
                name: 'ارائه نهایی نشده',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 55, 52, 55]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: '100%',
                toolbar: { show: true },
                responsive: true,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: { enabled: false },
            colors: ['#EED3D9', '#B5C0D0'],
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'اذر', 'دی', 'بهمن', 'اسفند'],
                labels: {
                    style: { fontSize: '10px' },
                    rotate: -30,
                    rotateAlways: false,
                }
            },
            yaxis: { title: {} },
            fill: { opacity: 1 },
            tooltip: {
                y: { formatter: (val) => val }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
            },
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        chart: { height: 280 },
                        xaxis: {
                            labels: {
                                rotate: -45,
                                style: { fontSize: '9px' }
                            }
                        },
                        legend: { fontSize: '11px' }
                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: { height: 220 },
                        plotOptions: {
                            bar: { columnWidth: '70%' }
                        },
                        xaxis: {
                            labels: {
                                rotate: -60,
                                style: { fontSize: '8px' }
                            }
                        },
                        legend: {
                            position: 'bottom',
                            fontSize: '10px'
                        }
                    }
                }
            ]
        },
    };

    return (
        <div className="w-full p-2">
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height={350}
                width="100%"
            />
        </div>
    );
};

export default ChartOne;
