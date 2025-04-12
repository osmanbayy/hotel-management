import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { About } from "../pages/About";
import { Rooms } from "../pages/Rooms";
import { Contact } from "../pages/Contact";
import { Gallery } from "../pages/Gallery";
import { Footer } from "../components/Footer"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/odalar" element={<Rooms />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/galeri" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};
