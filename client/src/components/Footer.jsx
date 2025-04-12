import React from "react";
import { footerData } from "../utils/FooterData";
import FooterColumn from "./FooterColumn";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-center my-5">
        <img
          src="https://www.maxxroyal.com/media/bw3jp5op/maxx_logo_black.svg?height=50"
          alt="footer-logo"
        />
      </div>
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 text-center mt-20 mb-10">
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="flex items-center justify-center gap-10 my-10">
        <FaFacebook size={24} />
        <FaInstagram size={24} />
        <FaYoutube size={24} />
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="flex md:flex-row flex-col items-center justify-between my-5">
        <div className="flex gap-5">
          <p className="text-gray-400 text-sm">{t("privacyPolicy")}</p>
          <p className="text-gray-400 text-sm">{t("termsOfUse")}</p>
          <p className="text-gray-400 text-sm">{t("cookies")}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">
            Copyright &copy; Maxx Royal, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
