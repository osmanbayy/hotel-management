import React from "react";
import Navbar from "../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import { LuMoveRight } from "react-icons/lu";
import { useTranslation, Trans } from "react-i18next";
import { RoomsPromotion } from "../components/RoomsPromotion";
import ReservationNav from "../components/ReservationNav";

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className=" bg-gradient-to-t from-rose-200 to-teal-200">
      <div className="relative min-h-screen overflow-hidden">
        <Navbar />
        <video
          className="absolute -top-10 left-0 w-full h-full object-cover z-20 brightness-50"
          src="/mainvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-opacity-50 z-20 flex items-center justify-center text-center">
          <div className="text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <Trans
                i18nKey="title"
                components={{
                  1: <span className="font-light italic text-red-600" />,
                }}
              />
            </h1>
            <p className="text-lg md:text-2xl">{t("subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Reservation Navigation */}
      <ReservationNav />

      <div className="flex flex-col items-center gap-10 mx-auto text-center max-w-5xl my-20 py-10 lg:py-20 px-5">
        <h2 className="text-5xl">
          <Trans
            i18nKey="perfectSpot"
            components={{
              1: <span className="font-light italic text-red-600" />,
            }}
          />
        </h2>
        <p className="text-lg">{t("promotionalPost")}</p>
        <p className="text-lg">{t("promotionalPost2")}</p>
        <a
          href="/hakkimizda"
          className="border p-5 border-black/50 tracking-wider font-semibold text-sm flex items-center justify-center gap-5 cursor-pointer hover:text-green-700 hover:border-white transition duration-300"
        >
          {t("explore")} <LuMoveRight size={22} />
        </a>
      </div>

      {/* Rooms Promotion Section */}
      <RoomsPromotion />

      {/* Services Section */}
      <div className="flex md:flex-row flex-col items-center justify-evenly p-5 gap-10 max-w-6xl mx-auto my-5 lg:my-20">
        <div className="flex-1/2">
          <img
            src="https://www.maxxroyal.com/media/amwjmwpo/maxxroyal_subat2024_101341.jpg?width=768&height=1160&format=webp"
            alt="services-image"
            className="w-[500px] h-[500px] object-contain "
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 flex-1/2">
          <h1 className="font-serif text-3xl tracking-tight">
            {t("personalService")}
          </h1>
          <p className="text-gray-600 text-lg">
            {t("personalServiceParagraph")}
          </p>
          <p className="text-gray-600 text-lg">
            {t("personalServiceParagraph2")}
          </p>
        </div>
      </div>

      <div className="flex md:flex-row md:gap-10 flex-col-reverse px-5 items-center justify-evenly max-w-6xl mx-auto -mt-10 mb-10 md:my-20">
        <div className="flex flex-col gap-5 flex-1/2">
          <h1 className="font-serif text-3xl tracking-tight">
            {t("roomService")}
          </h1>
          <p className="text-gray-600 text-lg">
            {t("personalServiceParagraph")}
          </p>
          <p className="text-gray-600 text-lg">
            {t("personalServiceParagraph2")}
          </p>
        </div>
        <div className="flex-1/2">
          <img
            src="https://www.tahdotel.com.tr/upload/galeri/odaservisi.jpg"
            alt="services-image"
            className="w-[500px] h-[400px] md:h-[500px] object-contain "
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col p-5 items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1/4">
          <img src="/logo-joco.webp" alt="" />
        </div>
        <div className="flex flex-2/4 flex-col gap-5 text-center">
          <h1 className="text-4xl font-serif tracking-wider">{t("theBest")}</h1>
          <p className="text-lg text-gray-600">{t("theBestParagraph")}</p>
          <p className="text-lg text-gray-600">{t("theBestParagraph2")}</p>
        </div>
      </div>
    </div>
  );
}
