import React from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";

export const ContactModal = ({ setShowContactForm }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed transition inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white flex flex-col gap-5 p-10 rounded-xl shadow-lg relative max-w-lg w-full">
        <button
          onClick={() => setShowContactForm(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
        >
          <FiX size={24} />
        </button>
        <h2 className="text-2xl font-light italic mb-6 text-center font-serif">
          {t("contactUs")}
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="text-center tracking-tight font-semibold">
            MAXX ROYAL RESORT:
          </h3>
          <p className="underline text-center text-sm italic tracking-tight cursor-pointer">
            444 1 907
          </p>
          <p className="underline text-center text-sm italic tracking-tight cursor-pointer">
            book@maxxroyal.com
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex flex-col gap-5">
          <h3 className="text-center tracking-tight font-semibold">
            CAJA BY MAXX ROYAL:
          </h3>
          <p className="underline text-center text-sm italic tracking-tight cursor-pointer">
            444 1 907
          </p>
          <p className="underline text-center text-sm italic tracking-tight cursor-pointer">
            book@cayabymaxxroyal.com
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div>
          <h2 className="tracking-tight font-semibold text-md text-center my-3 uppercase">
            {t("otherQuestions")}
          </h2>
          <a
            href="/iletisim"
            className="border p-5 border-black/50 tracking-wider font-semibold text-sm flex items-center justify-center gap-5 cursor-pointer hover:bg-pink-200 hover:text-black/50 hover:border-pink-400 transition duration-300 uppercase"
          >
            {t("contact")} <LuMoveRight size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};
