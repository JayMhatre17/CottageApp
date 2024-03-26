import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Slide, ToastContainer } from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';
import './styles/index.css';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signOut = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <Disclosure
        as="nav"
        className="bg-[#1f2022] z-50 shadow-lg sticky top-0 rigth-0 w-full border-b border-b-slate-100 select-none"
      >
        {({ open }) => (
          <>
            <div className="mx-auto px-5">
              <div className="relative flex h-20 3xl:h-24 items-center justify-between">
                <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                  <Link to={'/'}>
                    <div className="flex flex-shrink-0 items-center flex-row">
                      <img
                        src="./images/logo/lg-logo.jpg"
                        className="h-[70px] 3xl:h-[95px]"
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
                        <NavLink to={'/'} className="header-nav">
                          Home
                        </NavLink>
                      </div>
                      <div className="nav-item">
                        <NavLink to={'/images'} className="header-nav">
                          Images
                        </NavLink>
                      </div>
                      <div className="nav-item">
                        <NavLink to={'/contact-us'} className="header-nav">
                          Contact us
                        </NavLink>
                      </div>

                      <div className="nav-item">
                        <NavLink to={'/packages'} className="header-nav">
                          Packages
                        </NavLink>
                      </div>
                      <div className="nav-item">
                        {userInfo ? (
                          <ProfileDropdown
                            userInfo={userInfo}
                            signOut={signOut}
                          />
                        ) : (
                          <NavLink to={'/login'} className="header-nav">
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
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink to="/" className="header-nav">
                  <Disclosure.Button
                    className={
                      'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-neutral-800'
                    }
                  >
                    Home
                  </Disclosure.Button>
                </NavLink>

                <NavLink to="/images" className="header-nav">
                  <Disclosure.Button
                    className={
                      'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-neutral-800'
                    }
                  >
                    Images
                  </Disclosure.Button>
                </NavLink>

                <NavLink to="/contact-us" className="header-nav">
                  <Disclosure.Button
                    className={
                      'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-neutral-800'
                    }
                  >
                    Contact Us
                  </Disclosure.Button>
                </NavLink>

                <NavLink to="/packages" className="header-nav">
                  <Disclosure.Button
                    className={
                      'block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-neutral-800'
                    }
                  >
                    Packages
                  </Disclosure.Button>
                </NavLink>

                <div className="header-nav">
                  {userInfo ? (
                    <ProfileDropdown userInfo={userInfo} signOut={signOut} />
                  ) : (
                    <NavLink to={'/login'} className="header-nav">
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
