import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "@fontsource/poppins";

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen dark:bg-slate-800">
      <Header />
      <main className="flex-grow min-h-screen">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
