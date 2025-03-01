import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Support from "./pages/Support";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Footer from "./components/Footer";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <main className="flex-grow h-lvh">
          {/* This ensures content pushes footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
