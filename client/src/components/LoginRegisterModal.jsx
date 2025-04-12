import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";

export const LoginRegisterModal = () => {
  return (
    <div className="p-8 flex flex-col bg-white shadow-2xl w-72 transition-all duration-300">
      <div className="flex flex-col gap-8">
        <p className="text-center">Hesabım</p>
        <button className="p-6 bg-zinc-800 text-white cursor-pointer hover:bg-zinc-600 transition-all duration-300">
          Oturum Aç
        </button>
        <button className="p-6 bg-zinc-200 cursor-pointer hover:bg-zinc-700 hover:text-white transition-all duration-300">
          Hesabımı Oluştur
        </button>
        <span className="text-center text-gray-500">
          Hesabınızı oluşturun ve üyelere özel fiyatlardan yararlanın.
        </span>
        <hr />
        <div className="flex items-center gap-5 cursor-pointer">
            <IoCalendarClearOutline /> Rezervasyonlarım
        </div>
      </div>
    </div>
  );
};
