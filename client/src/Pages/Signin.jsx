import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import { getError } from '../utils';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      toast.error(getError(error));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);
  return (
    <div>
      <div className="h-screen flex justify-center items-center text-center vh-100">
        <div
          className="p-6 rounded shadow-md  md:w-3/4 bg-[linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))]"
          style={{ width: '40%' }}
        >
          <h2 className="mb-3 text-white text-xl">
            <b>Login</b>
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3 text-left">
              <label
                htmlFor="exampleInputEmail1"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="mt-1 p-2 border rounded-md w-full"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-left">
              <label
                htmlFor="exampleInputPassword1"
                className="block text-sm font-medium text-gray-700"
              >
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-1 p-2 border rounded-md w-full"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          {/* TO add ' appostopee */}
          <div className="bottom-0 right-0 p-2 my-2 flex items-center space-x-2 bg-gray-800 text-white">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01M16.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l8-8z"
              ></path>
            </svg>
            <p className="text-sm">Don't have an account?</p>
            <Link to="/signup" className="text-blue-500 underline">
              Sign-Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
