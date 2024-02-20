import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage.jsx";
import Navbar from "./components/Pages/Navbar.jsx";
import Login from "./components/Pages/Login.jsx";
import Register from "./components/Pages/Register.jsx";
import Dashboard from "./components/Pages/Dashboard.jsx";
import BookingForm from "./components/Pages/Booking";
import Location from "./components/Pages/Contact.jsx";
import Gallery from "./components/Pages/Gallery.jsx";
import Footer from "./components/Pages/Footer.jsx";
import About from "./components/Pages/About.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/contact-us" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/images" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api/host/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
