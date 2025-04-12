import React, { useRef } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useDropdownPosition from "../hooks/useDropdownPosition";
import { useReservation } from "../context/ReservationContext";
import { useTranslation } from "react-i18next";
import CalendarDropdown from "./CalendarDropdown";
import GuestDropdown from "./GuestDropdown";

export const ReservationModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const {
    adults,
    setAdults,
    children,
    setChildren,
    dateRange,
    setDateRange,
    showCalendar,
    setShowCalendar,
    calendarPosition,
    setCalendarPosition,
    showGuestDropdown,
    setShowGuestDropdown,
    guestPosition,
    setGuestPosition,
  } = useReservation();

  const calendarButtonRef = useRef(null);
  const guestButtonRef = useRef(null);

  const calculateDropdownPosition = useDropdownPosition()[1];
  const [startDate, endDate] = dateRange;
  const isDateRangeSelected = startDate && endDate;

  const { t } = useTranslation();

  const handleCalendarToggle = () => {
    calculateDropdownPosition(calendarButtonRef, setCalendarPosition);
    setShowCalendar((prev) => !prev);
  };

  const handleDateChange = (update) => {
    setDateRange(update);
    if (update[0] && update[1]) {
      setShowCalendar(false);
    }
  };

  const handleGuestToggle = () => {
    calculateDropdownPosition(guestButtonRef, setGuestPosition);
    setShowGuestDropdown((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 w-full h-2/3 bg-neutral-700 !z-50 transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full h-full p-6 flex flex-col gap-5">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-white cursor-pointer"
          >
            <span className="font-semibold">{t("close")}</span>{" "}
            <FiX size={30} />
          </button>
        </div>
        <div className="w-full h-[1px] bg-white/50"></div>
        <div className="pt-15 flex flex-col gap-5 justify-center items-center">
          <div className="flex justify-center">
            <img
              src="https://www.maxxroyal.com/media/cn3jd3df/logo.svg?height=50"
              alt="hotel-logo"
              onClick={() => {
                navigate("/");
                onClose();
              }}
              className="cursor-pointer"
            />
          </div>
          <h1 className="text-4xl font-light italic font-serif pt-4 pb-10 text-amber-500">
            {t("checkAvailability")}
          </h1>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="relative">
              <button
                ref={calendarButtonRef}
                className={`${isDateRangeSelected ? 'flex-1' : 'w-64'} uppercase font-semibold tracking-widest text-white px-6 py-2 border cursor-pointer transition`}
                onClick={handleCalendarToggle}
              >
                {startDate && endDate
                  ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                  : t("selectDates")}
              </button>

              {showCalendar && (
                <div
                  className={`absolute ${
                    calendarPosition === "top" ? "bottom-20" : "top-14"
                  } z-50`}
                >
                  <CalendarDropdown
                    onChange={handleDateChange}
                    endDate={endDate}
                    startDate={startDate}
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                ref={guestButtonRef}
                className="w-64 border uppercase font-semibold tracking-widest text-white px-6 py-2 cursor-pointer transition"
                onClick={handleGuestToggle}
              >
                {adults} {t("adults")}, {children} {t("children")}
              </button>

              {showGuestDropdown && (
                <div
                  className={`absolute ${
                    guestPosition === "top" ? "bottom-20" : "top-14"
                  } z-50`}
                >
                  <GuestDropdown
                    adults={adults}
                    children={children}
                    setAdults={setAdults}
                    setChildren={setChildren}
                  />
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => navigate("/odalar")}
                className={`w-64 font-semibold uppercase tracking-widest text-amber-400 px-8 py-2 cursor-pointer transition border border-amber-400 ${
                  !isDateRangeSelected
                    ? "opacity-50 !cursor-not-allowed"
                    : "hover:bg-amber-400 hover:text-black"
                }`}
                disabled={!isDateRangeSelected}
              >
                {t("checkAvailability")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
