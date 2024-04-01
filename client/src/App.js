import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.tsx';
import Navbar from './components/Navbar.jsx';
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup.jsx';
import BookingForm from './Pages/BookingForm.jsx';
import Location from './Pages/Contactus.jsx';
import Gallery from './Pages/Gallery.jsx';
import Footer from './Pages/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Packages from './Pages/Packages.jsx';
import AdminRoute from './components/AdminRoute.js';
import BookingListScreen from './Pages/BookingListScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ToastContainer closeOnClick={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact-us" element={<Location />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/images" element={<Gallery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/packages" element={<Packages />} />

          {/* Admin Routes */}
          <Route
            path="/bookingslist"
            element={
              <AdminRoute>
                <BookingListScreen />
              </AdminRoute>
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
