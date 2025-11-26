
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state = {

        series: [44, 55,],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },colors: ['#B5C0D0','#CCD3CA'],
            labels: ['کاربر هایی که رزومه دارند', 'کاربر هایی که رزومه ندارند'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom',
                        right:'23'
                    }
                }
            }]

    }}
        return <div>

        <Chart
            options={state.options}
            series={state.series}
            type="pie"
            width="380"

        />

        </div>
}


export default ChartOne