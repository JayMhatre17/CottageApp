import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getError } from "../utils";

const Signin = () => {
	const navigate = useNavigate();
	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { userInfo } = state;

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("/api/users/signin", {
				email,
				password,
			});
			ctxDispatch({ type: "USER_SIGNIN", payload: data });
			localStorage.setItem("userInfo", JSON.stringify(data));
			navigate(redirect || "/");
		} catch (error) {
			toast.error(getError(error), { position: "top-center" });
		}
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);
	return (
		<div>
			<div className="flex justify-center items-center">
				<img
					className="blur relative w-full h-screen"
					src="./images/2023-03-10.jpg"
					alt="background"
				/>
				<div
					className="w-11/12 p-4 sm:w-1/2 sm:p-6 rounded shadow-md absolute bg-[linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))]"
					// style={{
					// 	width: "40%",
					// 	"@media (max-width: 640px)": {
					// 		width: "90%",
					// 	},
					// }}
				>
					<h2 className="mb-3 text-white text-xl text-center">
						<b>Login</b>
					</h2>
					<form onSubmit={submitHandler}>
						<div className="mb-3 text-left">
							<label htmlFor="email" className="block font-medium text-[white]">
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="example@mail.com"
								className="mt-1 p-2 border rounded-md w-full"
								name="email"
								onChange={(event) => setEmail(event.target.value)}
								required
								autoComplete="email"
							/>
						</div>
						<div className="mb-3 text-left">
							<label
								htmlFor="password"
								className="block font-medium text-[white]"
							>
								Password
							</label>
							<input
								type="password"
								placeholder="password..."
								className="mt-1 p-2 border rounded-md w-full"
								id="password"
								name="password"
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="mx-auto text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
							>
								Login
							</button>
						</div>
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
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01M16.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l8-8z"
							></path>
						</svg>
						<p className="text-sm">Don't have an account?</p>
						<Link
							to={`/signup?redirect=${redirect}`}
							className="text-blue-500 underline"
						>
							Sign-Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
