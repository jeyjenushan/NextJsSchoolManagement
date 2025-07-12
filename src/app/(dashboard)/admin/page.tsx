import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCart from "@/components/UserCart"


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
    {/*LEFT */}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">

    {/*USERCARD */}
    <div className="flex gap-4 justify-between flex-wrap">
      <UserCart type="student"/>
      <UserCart type="teacher"/>
      <UserCart type="parent"/>
      <UserCart type="staff"/>
    </div>


    {/*Middle charts */}
    <div className="flex gap-4 flex-col lg:flex-row">
      {/*COUNT CART */}
      <div className="w-full lg:w-1/3 h-[450px]">
      <CountChart/>
      </div>


      {/*ATTENDENANCE CHARGE2024 */}
  <div className="w-full lg:w-2/3 h-[450px]">
        <AttendanceChart/>
      </div>

    </div>


    {/*BottomCharts */}
    <div className="w-full h-[500px]">
        <FinanceChart/>
    </div>

    </div>
    {/*Right */}
    <div className="w-full lg:w-1/3 flex flex-col gap-8">
<EventCalendar/>
<Announcements/>
    </div>
    </div>
  )
}

export default AdminPage
