"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [date, setDate] = useState(new Date(2024, 7, 12)); // August 12, 2024

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h2>Class Schedule</h2>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        date={date} // Set to display the date with your events
        onNavigate={(newDate) => setDate(newDate)}
        style={{ height: 800 }}
        onView={handleOnChangeView}
        min={new Date(2024, 7, 12, 8, 0, 0)}  // 8:00 AM
        max={new Date(2024, 7, 12, 17, 0, 0)} // 5:00 PM
        defaultView={Views.DAY} // Start with day view to see events clearly
        defaultDate={new Date(2024, 7, 12)} // August 12, 2024
      />
    </div>
  );
};

export default BigCalendar;