import React from "react";
import { useTranslation } from "react-i18next";

export default function GuestDropdown({ adults, children, setAdults, setChildren }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded shadow-md space-y-3 w-64">
      <div className="flex justify-between items-center">
        <span className="text-lg text-gray-500">{t("adults")}</span>
        <div className="flex items-center gap-2">
          <button onClick={() => setAdults(Math.max(1, adults - 1))} className="p-2 w-10 h-10 border border-gray-300 cursor-pointer hover:bg-gray-300 transition flex items-center justify-center text-xl rounded-full">-</button>
          <span>{adults}</span>
          <button onClick={() => setAdults(adults + 1)} className="p-2 w-10 h-10 border border-gray-300 cursor-pointer hover:bg-gray-300 transition flex items-center justify-center text-xl rounded-full">+</button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg text-gray-500">{t("children")}</span>
        <div className="flex items-center gap-2">
          <button onClick={() => setChildren(Math.max(0, children - 1))} className="p-2 w-10 h-10 border border-gray-300 cursor-pointer hover:bg-gray-300 transition flex items-center justify-center text-xl rounded-full">-</button>
          <span>{children}</span>
          <button onClick={() => setChildren(children + 1)} className="p-2 w-10 h-10 border border-gray-300 cursor-pointer hover:bg-gray-300 transition flex items-center justify-center text-xl rounded-full">+</button>
        </div>
      </div>
    </div>
  );
}
