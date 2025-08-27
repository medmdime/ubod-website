import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/TermOfUse";
import PricingPage from "./pages/Pricing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="min-h-[100vh]">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/term-of-service" element={<Terms />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
