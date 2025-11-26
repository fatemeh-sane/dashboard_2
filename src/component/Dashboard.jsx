// import {AiFillProject} from "react-icons/ai";
// import {GrProjects} from "react-icons/gr";
// import {CiUser} from "react-icons/ci";
import ChartOne from "./ChartOne.jsx";
import ChartTwo from "./ChartTwo.jsx";
import {Select} from 'antd';
// import { FcComboChart } from "react-icons/fc";
import {IoStatsChart} from "react-icons/io5";

import ChartThree from "./ChartThree.jsx";
import ChartFour from "./ChartFour.jsx";
import ChartFive from "./ChartFive.jsx";

// import { FaPenToSquare } from "react-icons/fa6";


const Dashboard = () => {
    // const itemList= [{
    //     id:1,
    //     title:'کاربران',
    //     number:2500,
    //     icon:"*",
    //     bgColor:'#FFDEDE',
    //     color:'#F65464'
    // },
    //     {
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //         icon:"*"
    //     },{
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //
    //         icon:"*"
    //     },{
    //         id:1,
    //         title:'کاربران',
    //         number:2500,
    //         icon:"*"
    //     }
    //
    // ]
    const Option = Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function handleBlur() {
        console.log('blur');
    }

    function handleFocus() {
        console.log('focus');
    }

    return (<>

        <div className='container mx-auto px-4'>
            <div className="grid grid-cols-3 gap-4 relative -bottom-5  font-pinar border-amber-950 ">
                <div className="grid col-span-3 grid-cols-3  gap-4">



                    <div className='p-9 flex items-center justify-center gap-12 bg-primary shadow rounded-xl'>
                        <div className=' flex  bg-mainBlue items-center justify-center text-subBlue w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-number font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-subNumber'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                    <div className='p-9 flex items-center justify-center gap-12 bg-secondary shadow rounded-xl'>
                        <div className=' flex  bg-colorActive items-center justify-center text-subGreen w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-number font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-subNumber'>تعداد کل تیم ها</div>
                        </div>
                    </div>
                    <div className='p-9 flex items-center justify-center gap-12 bg-Third shadow rounded-xl'>
                        <div className=' flex  bg-mainPink items-center justify-center text-subPink w-14 h-14 rounded-md	'>
                            <IoStatsChart className='flex m-auto  text-xl '/>
                        </div>
                        <div className='flex items-start flex-col '>
                            <div className='text-2xl flex  items-center text-number font-bold '>۳۰۰,۰۰۰</div>
                            <div className='text-lg text-subNumber'>تعداد کل تیم ها</div>
                        </div>
                    </div>


                </div>

                <div className="grid grid-cols-1 bg-white shadow rounded-xl"><ChartThree/></div>
                <div className="grid grid-cols-1 bg-white shadow rounded-xl"><ChartFour/></div>
                <div className="grid grid-cols-1 bg-white shadow rounded-xl"><ChartFive/></div>
                

                <div className="col-span-2 shadow rounded-xl"><ChartOne/></div>
                <div className="bg-white shadow rounded-xl">
                    <div className=''>
                        <Select
                            showSearch
                            style={{ width: 395 , height:30 }}
                            placeholder="انتخاب رشته"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">علوم تجربی</Option>
                            <Option value="lucy">کامپیوتر</Option>
                            <Option value="tom">علوم انسانی</Option>
                        </Select>
                    </div>
                    <ChartTwo/></div>
            </div>


        </div>

    </>)
}
export default Dashboard

