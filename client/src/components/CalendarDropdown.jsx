import React from "react";
import DatePicker from "react-datepicker";
import { tr } from "date-fns/locale";

export default function CalendarDropdown({ startDate, endDate, onChange }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        minDate={new Date()}
        locale={tr}
      />
    </div>
  );
}
