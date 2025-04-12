import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarDropdown from "./CalendarDropdown";
import GuestDropdown from "./GuestDropdown";
import useDropdownPosition from "../hooks/useDropdownPosition";
import { useReservation } from "../context/ReservationContext";
import { useTranslation } from "react-i18next";
import { ReservationModal } from "./ReservationModal";

export default function ReservationNav() {
  const {
    dateRange,
    setDateRange,
    adults,
    setAdults,
    children,
    setChildren,
    showCalendar,
    setShowCalendar,
    calendarPosition,
    setCalendarPosition,
    showGuestDropdown,
    setShowGuestDropdown,
    guestPosition,
    setGuestPosition,
  } = useReservation();

  const [startDate, endDate] = dateRange;
  const calendarButtonRef = useRef(null);
  const guestButtonRef = useRef(null);
  const calculateDropdownPosition = useDropdownPosition()[1];
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const isDateRangeSelected = startDate && endDate;

  const handleCalendarToggle = () => {
    calculateDropdownPosition(calendarButtonRef, setCalendarPosition);
    setShowCalendar((prev) => !prev);
  };

  const handleGuestToggle = () => {
    calculateDropdownPosition(guestButtonRef, setGuestPosition);
    setShowGuestDropdown((prev) => !prev);
  };

  const handleDateChange = (update) => {
    setDateRange(update);
    if (update[0] && update[1]) {
      setShowCalendar(false);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-zinc-800 w-full flex flex-col md:flex-row -my-20 justify-evenly items-center gap-4 md:gap-6 p-4 md:p-5 relative z-40">
      <button
        onClick={toggleModal}
        className="uppercase font-semibold tracking-widest text-white px-6 py-2 cursor-pointer transition"
      >
        {t("makeReservation")}
      </button>

      <span className="hidden lg:inline text-white">|</span>

      {/* Takvim Seçimi */}
      <div className="relative">
        <button
          ref={calendarButtonRef}
          className="hidden md:block uppercase font-semibold tracking-widest text-white px-6 py-2 cursor-pointer transition"
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

      <span className="hidden md:inline text-white">|</span>

      {/* Yetişkin/Çocuk Seçimi */}
      <div className="relative">
        <button
          ref={guestButtonRef}
          className="hidden md:block uppercase font-semibold tracking-widest text-white px-6 py-2 cursor-pointer transition"
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

      <span className="hidden md:inline text-white">|</span>

      {/* Uygunluk Kontrolü */}
      <button
        onClick={() => navigate("/odalar")}
        className={`hidden md:block font-semibold uppercase tracking-widest text-amber-400 px-8 py-2 cursor-pointer transition border border-amber-400 ${
          !isDateRangeSelected
            ? "opacity-50 !cursor-not-allowed"
            : "hover:bg-amber-400 hover:text-black"
        }`}
        disabled={!isDateRangeSelected}
      >
        {t("checkAvailability")}
      </button>

      <ReservationModal isOpen={showModal} onClose={toggleModal} />
    </div>
  );
}
