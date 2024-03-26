import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.tsx';
import Navbar from './components/Navbar.jsx';
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import BookingForm from './Pages/BookingForm.jsx';
import Location from './Pages/Contactus.jsx';
import Gallery from './Pages/Gallery.jsx';
import Footer from './Pages/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review11 from './components/Review/Review12.jsx';
import Packages from './Pages/Packages.jsx';
import UpdateBooking from './components/Updates/UpdateBooking.jsx';
import BookingDetails from './components/Updates/BookingDetails.jsx';

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
        <Route path="/signup" element={<Signup />} />
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
