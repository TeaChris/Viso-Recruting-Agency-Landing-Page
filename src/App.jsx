import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Drop from "./pages/Drop";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="drop" element={<Drop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
