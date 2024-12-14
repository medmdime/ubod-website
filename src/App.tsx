import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Support from './pages/Support';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>

    <Router>
      <div className="bg-beige">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
    </I18nextProvider>

  );
}

export default App;