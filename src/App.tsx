import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Support from "./pages/Support";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Navbar />
          <main className="min-h-[100vh]">
            {/* This ensures content pushes footer down */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/privacyPolicy" element={<Privacy />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
