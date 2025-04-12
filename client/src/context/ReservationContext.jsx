/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export const useReservation = () => useContext(ReservationContext);

export const ReservationProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarPosition, setCalendarPosition] = useState("bottom");

  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [guestPosition, setGuestPosition] = useState("bottom");

  const value = {
    dateRange,
    setDateRange,
    adults,
    setAdults,
    children: childrenCount,
    setChildren: setChildrenCount,
    showCalendar,
    setShowCalendar,
    calendarPosition,
    setCalendarPosition,
    showGuestDropdown,
    setShowGuestDropdown,
    guestPosition,
    setGuestPosition
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};
