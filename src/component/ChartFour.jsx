import Chart from "react-apexcharts";

const ChartFour = () => {
    const state = {
        series: [44, 55],
        options: {
            chart: {
                type: 'pie',
            },
            colors: ['#B5C0D0', '#CCD3CA'],
            labels: ['کاربر هایی که رزومه دارند', 'کاربر هایی که رزومه ندارند'],
            legend: {
                position: 'bottom',
                fontSize: '12px',
                itemMargin: { horizontal: 8, vertical: 4 }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                        chart: { width: '100%' },
                        legend: { position: 'bottom', fontSize: '11px' }
                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: { width: '100%' },
                        legend: { position: 'bottom', fontSize: '10px' }
                    }
                }
            ]
        }
    };

    return (
        <div className="w-full flex justify-center p-2">
            <Chart
                options={state.options}
                series={state.series}
                type="pie"
                width="100%"
            />
        </div>
    );
};

export default ChartFour;
