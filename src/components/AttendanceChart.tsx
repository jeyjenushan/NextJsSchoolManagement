"use client"

import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,

  },
  {
    name: 'Tue',
    present: 3000,
    absent: 1398,

  },
  {
    name: 'Wed',
    present: 2000,
    absent: 9800,
  },
  {
    name: 'Thu',
    present: 2780,
    absent: 3908,
  },
  {
    name: 'Fri',
    present: 1890,
    absent: 4800,
  },
];

const AttendanceChart = () => {
    return (
    <div className="bg-white rounded-lg p-4 h-full">

        <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">Attendance</h1>
            <Image src="/moreDark.png" width={20} height={20} alt=""/>
        </div>
          <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}

        >
          <CartesianGrid strokeDasharray="3 3" 
          stroke="#ddd"
          vertical={false}
          />
          <XAxis dataKey="name" axisLine={false}
          tick={{fill:"#d1d5ab"}}
          tickLine={false}
          />
          <YAxis axisLine={false} 
            tick={{fill:"#d1d5ab"}}
          tickLine={false}
          />
          <Tooltip 
          contentStyle={{borderStyle:"10px",borderColor:"lightgray"}}
          />
          <Legend verticalAlign="top" align="left"
          wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}
          />
          <Bar dataKey="present" fill="#FAE27C"  
          legendType="circle"
          radius={[10,10,0,0]}
          />
          <Bar dataKey="absent" fill="#C3EBFA" legendType="circle"
              radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
}

export default AttendanceChart
