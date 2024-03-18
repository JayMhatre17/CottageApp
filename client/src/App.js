import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home.tsx";
import Navbar from "./components/Pages/Navbar.jsx";
import Signin from "./components/Pages/Signin.jsx";
import Register from "./components/Pages/Register.jsx";
import Dashboard from "./components/Pages/Dashboard.jsx";
import BookingForm from "./components/Pages/BookingForm.jsx";
import Location from "./components/Pages/Contactus.jsx";
import Gallery from "./components/Pages/Gallery.jsx";
import Footer from "./components/Pages/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Review11 from "./components/Review/Review12.jsx";
import Packages from "./components/Pages/Packages.jsx";
import UpdateBooking from "./components/Updates/UpdateBooking.jsx";
import BookingDetails from "./components/Updates/BookingDetails.jsx";
// import ImageGallery from "../src/imageGallery/ImageGallery.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer closeOnClick={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/contact-us" element={<Location />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/rev" element={<Review11 />} />
        <Route path="/images" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/booking/:id" component={<BookingDetails />} />
        <Route path="/booking/:id/update" component={<UpdateBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
