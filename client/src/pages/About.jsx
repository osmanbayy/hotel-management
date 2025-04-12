import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <Navbar />
      <div className="relative flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about-photo"
          className="w-full object-cover h-screen"
        />
        <div className="absolute bottom-8">
          <h1 className="text-sm my-4 uppercase text-white font-semibold tracking-wider text-center">
            {t("exploreAbout")}
          </h1>
          <h1 className="text-5xl font-serif italic text-white text-center">
            {t("whyRoyal")}
          </h1>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col items-center justify-evenly p-5 gap-10 max-w-6xl mx-auto my-5 lg:my-20">
        <div className="flex-1/2">
          <img
            src="https://www.maxxroyal.com/media/xkyg3hw4/maxx-royal-resorts-why-max-pinnacle-of-hospitality.jpeg?width=401&height=470&format=webp"
            alt="services-image"
            className="w-[500px] h-[300px] md:h-[500px] object-cover "
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 flex-1/2">
          <h1 className="font-serif text-3xl tracking-tight">
            {t("unlimitedExperience")}
          </h1>
          <p className="text-gray-600 text-lg">
            {t("unlimitedExperienceParagraph")}
          </p>
          <p className="text-gray-600 text-lg">
            {t("unlimitedExperienceParagraph2")}
          </p>
        </div>
      </div>
    </div>
  );
};
