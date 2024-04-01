import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Store } from '../Store';

const Signup = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <div className="h-screen flex justify-center items-center text-center vh-100">
        <div className="p-6 rounded-2xl shadow bg-[linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))] w-[40%]">
          <h2 className="mb-3 text-white stext-center text-2xl">
            <b>Register</b>
          </h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3 text-left">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>First Name</strong>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Here..."
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-left">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Last Name</strong>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Here..."
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-left">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="mt-1 p-2 border rounded-md w-full"
                id="Email"
                name="Email"
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-3 text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="mb-3 text-left">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-6 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          <div className="bottom-0 right-0 p-2 my-2 flex items-center space-x-2 bg-gray-800 text-white">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 9v2m0 4h.01M16.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l8-8z"></path>
            </svg>
            <p className="text-sm">Already have an account?</p>
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
