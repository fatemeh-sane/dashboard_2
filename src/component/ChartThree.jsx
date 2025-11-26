
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state = {

        series: [44, 55,],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },   colors: ['#EED3D9','#B5C0D0'],
            labels: ['کاربر هایی که پروژه  دارند', 'کاربر هایی که پروژه  ندارند'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom',
                        right:"12",
                        bottom:"13"
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
            <div id="html-dist"></div>

        </div>
}


export default ChartOne