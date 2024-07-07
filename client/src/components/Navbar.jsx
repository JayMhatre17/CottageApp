import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Slide, ToastContainer } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../Store";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
	const { state, dispatch: ctxDispatch } = useContext(Store);

	const { userInfo } = state;

	const signOut = () => {
		ctxDispatch({ type: "USER_SIGNOUT" });
		localStorage.removeItem("userInfo");
	};

	return (
		<>
			<ToastContainer transition={Slide} />
			<Disclosure
				as="nav"
				className="bg-[#4f4ffc] z-50 shadow-lg sticky top-0 rigth-0 w-full border-b border-b-slate-100 select-none"
			>
				{({ open }) => (
					<>
						<div className="mx-auto px-5">
							<div className="relative flex h-20 3xl:h-24 items-center justify-between">
								<div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
									<Link to={"/"}>
										<div className="flex flex-shrink-0 items-center flex-row">
											<img
												src="./images/logo/lg-logo.png"
												className="w-[250px] sm:block hidden"
												alt="logo"
											></img>
											<img
												src="./images/logo/ss-logo.png"
												className="h-[60px] sm:hidden block"
												alt="logo"
											></img>
										</div>
									</Link>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>

									<div className="hidden sm:ml-6 md:block text-base 3xl:text-xl text-slate-50 font-light">
										<div className="flex space-x-4 items-center">
											<div className="nav-item">
												<NavLink to={"/"} className="header-nav">
													Home
												</NavLink>
											</div>
											<div className="nav-item">
												<NavLink to={"/photos"} className="header-nav">
													Photos
												</NavLink>
											</div>
											<div className="nav-item">
												<NavLink to={"/landmark"} className="header-nav">
													Landmarks
												</NavLink>
											</div>
											<div className="nav-item">
												<NavLink to={"/contactus"} className="header-nav">
													Contact us
												</NavLink>
											</div>

											<div className="nav-item">
												{userInfo ? (
													<ProfileDropdown
														userInfo={userInfo}
														signOut={signOut}
													/>
												) : (
													<NavLink to={"/login"} className="header-nav">
														Login
													</NavLink>
												)}
											</div>
											<div className="nav-item"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="flex flex-col items-stretch justify-evenly gap-2 p-3">
								<NavLink
									to="/"
									className="header-nav | flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] hover:bg-[#d7d7ff]"
								>
									<Disclosure.Button>Home</Disclosure.Button>
								</NavLink>

								<NavLink
									to="/photos"
									className="header-nav | flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] hover:bg-[#d7d7ff]"
								>
									<Disclosure.Button>Photos</Disclosure.Button>
								</NavLink>
								<NavLink
									to="/landmark"
									className="header-nav | flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] hover:bg-[#d7d7ff]"
								>
									<Disclosure.Button>Landmarks</Disclosure.Button>
								</NavLink>

								<NavLink
									to="/contactus"
									className="header-nav | flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] hover:bg-[#d7d7ff]"
								>
									<Disclosure.Button>Contact Us</Disclosure.Button>
								</NavLink>

								{userInfo ? (
									<div className="flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] text-white">
										<ProfileDropdown userInfo={userInfo} signOut={signOut} />
									</div>
								) : (
									<NavLink
										to={"/login"}
										className="header-nav | flex flex-row items-center justify-center py-2 rounded-lg bg-[#8f8fffb9] hover:bg-[#d7d7ff]"
									>
										Login
									</NavLink>
								)}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
}
