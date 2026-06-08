import Chart from "react-apexcharts";

const ChartTwo = () => {
    const state = {
        series: [
            {
                name: "بالا - 2013",
                data: [28, 153, 13, 66, 32, 123, 55]
            }
        ],
        options: {
            chart: {
                height: '100%',
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                zoom: { enabled: false },
                toolbar: { show: false }
            },
            colors: ['#6F7A87'],
            dataLabels: { enabled: true },
            stroke: { curve: 'smooth' },
            grid: {
                row: {
                    colors: ['#f8f8f8', 'transparent'],
                    opacity: 0.5
                },
                column: {
                    colors: ['rgba(206,204,204,0.73)', 'transparent'],
                },
            },
            xaxis: {
                categories: ['۲۰۲۰', '۲۰۲۱', '۲۰۲۲', '۲۰۲۳', '۲۰۲۴', '۲۰۲۵', '۲۰۲۶'],
                labels: { style: { fontSize: '11px' } }
            },
            yaxis: {
                title: {},
                min: 1,
                max: 158,
                labels: { style: { fontSize: '11px' } }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        chart: { height: 260 },
                        dataLabels: { style: { fontSize: '10px' } },
                        xaxis: { labels: { style: { fontSize: '10px' } } }
                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: { height: 220 },
                        dataLabels: { enabled: false },
                        xaxis: { labels: { style: { fontSize: '9px' }, rotate: -30 } },
                        legend: {
                            floating: false,
                            offsetY: 0,
                            offsetX: 0
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
                type="line"
                height={300}
                width="100%"
            />
        </div>
    );
};

export default ChartTwo;
