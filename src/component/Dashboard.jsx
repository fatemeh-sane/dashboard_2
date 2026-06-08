import ChartOne from "./ChartOne.jsx";
import ChartTwo from "./ChartTwo.jsx";
import { Select } from 'antd';
import { IoStatsChart } from "react-icons/io5";
import ChartThree from "./ChartThree.jsx";
import ChartFour from "./ChartFour.jsx";
import ChartFive from "./ChartFive.jsx";

const Dashboard = () => {
    const Option = Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    function handleBlur() { console.log('blur'); }
    function handleFocus() { console.log('focus'); }

    return (
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 font-pinar">

            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                <div className="p-5 sm:p-6 md:p-9 flex items-center justify-center gap-6 md:gap-12 bg-primary shadow rounded-xl">
                    <div className="flex bg-mainBlue items-center justify-center text-subBlue w-12 h-12 md:w-14 md:h-14 rounded-md shrink-0">
                        <IoStatsChart className="text-xl" />
                    </div>
                    <div className="flex items-start flex-col">
                        <div className="text-xl md:text-2xl text-number font-bold">۳۰۰,۰۰۰</div>
                        <div className="text-sm md:text-lg text-subNumber">تعداد کل تیم ها</div>
                    </div>
                </div>

                <div className="p-5 sm:p-6 md:p-9 flex items-center justify-center gap-6 md:gap-12 bg-secondary shadow rounded-xl">
                    <div className="flex bg-colorActive items-center justify-center text-subGreen w-12 h-12 md:w-14 md:h-14 rounded-md shrink-0">
                        <IoStatsChart className="text-xl" />
                    </div>
                    <div className="flex items-start flex-col">
                        <div className="text-xl md:text-2xl text-number font-bold">۳۰۰,۰۰۰</div>
                        <div className="text-sm md:text-lg text-subNumber">تعداد کل تیم ها</div>
                    </div>
                </div>

                <div className="p-5 sm:p-6 md:p-9 flex items-center justify-center gap-6 md:gap-12 bg-Third shadow rounded-xl">
                    <div className="flex bg-mainPink items-center justify-center text-subPink w-12 h-12 md:w-14 md:h-14 rounded-md shrink-0">
                        <IoStatsChart className="text-xl" />
                    </div>
                    <div className="flex items-start flex-col">
                        <div className="text-xl md:text-2xl text-number font-bold">۳۰۰,۰۰۰</div>
                        <div className="text-sm md:text-lg text-subNumber">تعداد کل تیم ها</div>
                    </div>
                </div>
            </div>

            {/* Pie Charts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <ChartThree />
                </div>
                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <ChartFour />
                </div>
                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <ChartFive />
                </div>
            </div>

            {/* Bottom Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
                {/* Bar Chart - takes 2/3 width on large screens */}
                <div className="lg:col-span-2 bg-white shadow rounded-xl overflow-hidden">
                    <ChartOne />
                </div>

                {/* Line Chart with Select */}
                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <div className="p-3">
                        <Select
                            showSearch
                            className="w-full"
                            style={{ width: '100%', height: 30 }}
                            placeholder="انتخاب رشته"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">علوم تجربی</Option>
                            <Option value="lucy">کامپیوتر</Option>
                            <Option value="tom">علوم انسانی</Option>
                        </Select>
                    </div>
                    <ChartTwo />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
