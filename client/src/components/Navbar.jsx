import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactModal } from "./ContactModal";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { ReservationModal } from "./ReservationModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleReservationModal = () =>
    setShowReservationModal(!showReservationModal);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { t } = useTranslation();

  const { activeLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-colors duration-300 ${
          isHomePage
            ? scrolled
              ? "bg-zinc-900/80 backdrop-blur"
              : "bg-transparent"
            : "bg-zinc-900/90 backdrop-blur"
        }`}
      >
        <div
          className={`container mx-auto ${
            scrolled ? "p-5" : "p-8"
          } flex items-center justify-between`}
        >
          <div className="flex-1 flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-100 flex items-center gap-5 uppercase font-semibold tracking-widest cursor-pointer hover:text-amber-400 transition duration-300"
            >
              <FiMenu size={24} />
              <span className="hidden md:block">{t("menu")}</span>
            </button>
            <div className="md:relative md:ml-15 absolute right-6">
              <button
                onClick={() => setShowLangModal(!showLangModal)}
                className="text-gray-100 flex items-center gap-2 uppercase font-semibold tracking-widest cursor-pointer hover:text-amber-400 transition duration-300"
              >
                {activeLanguage} <IoIosArrowDown size={22} />
              </button>
              {showLangModal && (
                <div className="absolute top-2/3 md:left-14 right-6">
                  <div className="w-32 bg-white shadow-lg p-5">
                    <div className="flex flex-col gap-5">
                      <span
                        onClick={() => {
                          changeLanguage("tr");
                          setShowLangModal(false);
                        }}
                        className="cursor-pointer hover:text-gray-500"
                      >
                        Türkçe
                      </span>
                      <span
                        onClick={() => {
                          changeLanguage("en");
                          setShowLangModal(false);
                        }}
                        className="cursor-pointer hover:text-gray-500"
                      >
                        English
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 flex justify-center cursor-pointer">
            <img
              src="https://www.maxxroyal.com/media/cn3jd3df/logo.svg?height=50"
              alt="hotel-logo"
              onClick={() => navigate("/")}
              className=""
            />
          </div>

          <div className="flex-1 flex items-center justify-end space-x-2">
            <button
              onClick={() => setShowContactForm(true)}
              className="transition-all duration-300 cursor-pointer text-gray-100 text-sm font-semibold hover:bg-white hover:text-black border border-white px-5 py-1 lg:px-10 lg:py-3 uppercase lg:tracking-widest hidden lg:block"
            >
              {t("contactUs")}
            </button>
            <button
              onClick={toggleReservationModal}
              className="transition-all duration-300 cursor-pointer bg-white text-sm font-semibold hover:bg-gray-300 hover:border-gray-300 hover:text-black border border-white px-5 py-1 lg:px-10 lg:py-3 uppercase lg:tracking-widest hidden lg:block"
            >
              {t("navbarReservation")}
            </button>
          </div>
        </div>
      </nav>

      {/* Left Menu */}
      <div
        className={`fixed top-0 left-0 h-full p-20 w-full md:w-[500px] bg-white shadow-lg z-60 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <button className="absolute top-1 right-1" onClick={toggleMenu}>
              <FiX size={22} className="cursor-pointer" />
            </button>
          </div>
          <ul className="space-y-8 pt-5 uppercase tracking-wider font-semibold">
            <li>
              <a
                href="/hakkimizda"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("whyUs")}
              </a>
            </li>
            <li>
              <a
                href="/odalar"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("menuRooms")}
              </a>
            </li>
            <li>
              <a
                href="/galeri"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("gallery")}
              </a>
            </li>
            <hr />
            <li>
              <a
                href="/iletisim"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("contact")}
              </a>
            </li>
            <li>
              <a
                href="/adres"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("ourAddress")}
              </a>
            </li>
            <li>
              <a
                href="/sosyal"
                className="text-gray-700 hover:tracking-widest transition-all duration-300"
              >
                {t("socialMedia")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Blur */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"
        />
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactModal setShowContactForm={setShowContactForm} />
      )}

      {/* Reservation Modal */}
        <ReservationModal isOpen={showReservationModal} onClose={toggleReservationModal} />
    </>
  );
}
