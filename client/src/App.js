import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.tsx";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Signin from "./Pages/Signin.jsx";
import Signup from "./Pages/Signup.jsx";
import AnimLoader from "./components/AnimLoader.js";
import Location from "./Pages/Contactus.jsx";
import Landmarks from "./Pages/Landmarks.jsx";
import Photos from "./Pages/Photos.jsx";
import Footer from "./Pages/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Packages from "./Pages/Packages.jsx";
import AdminRoute from "./components/AdminRoute.js";
import ScrollRestore from "./components/ScrollRestore.js";
import PageNotFound from "./Pages/PageNotFound.jsx";
import PhotosListScreen from "./Pages/Admin/PhotosListScreen.jsx";

function App() {
	return (
		<BrowserRouter>
			<ScrollRestore />
			<div className="flex flex-col min-h-[90vh]">
				<AnimLoader />
				<ToastContainer closeOnClick={false} position="top-center" />
				<Navbar />
				<Routes>
					<Route path="*" element={<PageNotFound />} />
					<Route path="" element={<Home />} />
					{/* {showSplash ? <AnimLoader /> : <Route path="/" component={Home} />} */}
					<Route path="/contactus" element={<Location />} />
					<Route path="/login" element={<Signin />} />
					<Route path="/photos" element={<Photos />} />
					<Route path="/signup" element={<Signup />} />

					{/* <Route path="/packages" element={<Packages />} /> */}
					<Route path="/landmark" element={<Landmarks />} />
					{/* Admin Routes */}
					{/* <Route
						path="/bookingslist"
						element={
							<AdminRoute>
								<BookingListScreen />
							</AdminRoute>
						}
					></Route> */}
					<Route
						path="/photoslist"
						element={
							<AdminRoute>
								<PhotosListScreen />
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
