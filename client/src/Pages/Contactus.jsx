/* eslint-disable react/prop-types */
import { Button, Spinner } from "flowbite-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact({ setProgress }) {
	const [state, handleSubmit] = useForm("xvoerqzr");

	useEffect(() => {
		const mailConfirmation = () => {
			if (state.succeeded) {
				return toast.success("Your message has been send.", {
					position: "top-center",
				});
			}
		};
		mailConfirmation();
	});

	return (
		<section>
			<div className="google-map | min-w-full h-auto overflow-x-hidden">
				<iframe
					title="g-map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.760814648595!2d72.86588947407607!3d18.728295841353866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87845e2dbca71%3A0xdf7454cdf08fcb3!2sJay%20Prabha%20Holiday%20Home!5e0!3m2!1sen!2sin!4v1707142063726!5m2!1sen!2sin"
					className="h-[300px] sm:h-[370px] w-full"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					frameBorder="0"
				></iframe>
				<div className="my-8 mx-auto flex flex-col-reverse gap-5 md:gap-0 items-start md:flex-row">
					<div className="contact-form-container | box-border w-full md:w-7/12 px-5 sm:px-14 md:px-5 lg:px-10 3xl:px-20">
						{/* <Fade left duration={1800}> */}
						<div className="contact-form | p-5 shadow border border-neutral-100">
							<form onSubmit={handleSubmit}>
								<div className="greet-feedback | mb-7 text-neutral-600">
									<p>How can we help?</p>
									<p>
										Have questions or want to chat? Fill out our contact form,
										and we’ll put you in touch with the right people.
									</p>
								</div>

								<div className="relative z-0 w-full mb-7 group">
									<input
										type="text"
										name="name"
										id="name"
										className="block px-1 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=""
										required
										autoComplete="name"
									/>
									<label
										htmlFor="name"
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
									>
										Fullname
									</label>
								</div>
								<ValidationError
									prefix="Name"
									field="name"
									errors={state.errors}
								/>

								<div className="relative z-0 w-full mb-7 group">
									<input
										type="email"
										name="email"
										id="floating_email"
										className="block px-1 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
										autoComplete="email"
									/>
									<label
										htmlFor="floating_email"
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 autofill:bg-none"
									>
										Email address
									</label>
								</div>
								<ValidationError
									prefix="Email"
									field="email"
									errors={state.errors}
								/>

								<div className="relative z-0 w-full mb-7 group">
									<input
										type="number"
										name="mobile-number"
										id="mobile-number"
										placeholder=" "
										maxLength={10}
										minLength={10}
										className="block px-1 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
										required
									/>
									<label
										htmlFor="mobile-number"
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
									>
										Phone number
									</label>
								</div>

								<ValidationError
									prefix="Mobile-Number"
									field="mobile-number"
									errors={state.errors}
								/>

								<div className="w-full mb-7 group">
									<label
										htmlFor="message"
										className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="4"
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Enter your message..."
									></textarea>
								</div>

								<ValidationError
									prefix="Message"
									field="message"
									errors={state.errors}
								/>
								<Button
									type="submit"
									disabled={state.submitting}
									gradientDuoTone="purpleToBlue"
									className="mx-auto w-28 rounded-3xl px-4"
								>
									{state.submitting ? (
										<>
											<Spinner aria-label="Spinner button example" />
											<span className="inline-block ms-2">Sending...</span>
										</>
									) : (
										<>
											<span className="me-2">Send</span>
											<i className="bi bi-send-fill"></i>
										</>
									)}
								</Button>
								<p
									id="helper-text-explanation"
									class="mt-2 text-sm text-gray-500 dark:text-gray-400"
								>
									If Email is Not send. Call us{" "}
									<a
										href="tel:9270326629"
										class="font-medium text-blue-600 hover:underline dark:text-blue-500"
									>
										9270326629
									</a>
									.
								</p>
							</form>
						</div>
						{/* </Fade> */}
					</div>

					<div className="contact-details-container | box-border w-full md:w-5/12 px-5 sm:px-14 md:px-5 lg:px-10 3xl:px-20">
						{/* <Fade right duration={1800}> */}
						<div className="contact-details | shadow bg-white text-neutral-600">
							<div className="contact-legend py-5 px-8 text-center bg-[#7cb0fd] text-xl text-white font-medium">
								Contact Details
							</div>
							<ul className="contact-list px-5 py-6">
								<li className="pb-4 border-b border-gray-500 mt-3">
									<address className="flex gap-3">
										<div className="contact-icon">
											<i className="bi bi-geo-alt-fill"></i>
										</div>
										<div className="contact-info">
											<div className="contact label font-semibold pb-2 text-neutral-700">
												Address:
											</div>
											<div className="contact-content font-medium">
												<Link
													to="https://www.google.com/maps/place/Jay+Prabha+Holiday+Home+Hotel/@18.7287728,72.8665638,17z/data=!4m6!3m5!1s0x3be87845e2dbca71:0xdf7454cdf08fcb3!8m2!3d18.7287728!4d72.8691387!16s%2Fg%2F11g8cs0gqn?entry=ttu"
													target="_blank"
												>
													At post Kihim, near Bhilleshwar temple, Alibag,
													Maharashtra-402208.
												</Link>
											</div>
										</div>
									</address>
								</li>
								<li className="pb-4 border-b border-gray-500 mt-3">
									<div className="flex gap-3">
										<div className="contact-icon">
											<i className="bi bi-phone-fill"></i>
										</div>
										<div className="contact-info">
											<div className="contact label font-semibold pb-2 text-neutral-700">
												Phone:
											</div>
											<div className="contact-content font-medium hover:opacity-75 transition-opacity mb-2">
												<Link to="tel:+91 9270326629">+91 9270326629</Link>
											</div>
											<div className="contact-content font-medium hover:opacity-75 transition-opacity">
												<Link to="tel:+91 9370628695">+91 9370628695</Link>
											</div>
										</div>
									</div>
								</li>
								<li className="mt-3">
									<div className="flex gap-3">
										<div className="contact-icon">
											<i className="bi bi-envelope-at-fill"></i>
										</div>
										<div className="contact-info">
											<div className="contact label font-semibold pb-2 text-neutral-700">
												Mail:
											</div>
											<div className="contact-content font-medium hover:opacity-75 transition-opacity">
												<Link to="mailto:jay17mhatre@gmail.com">
													jayprabha@gmail.com
												</Link>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						{/* </Fade> */}
					</div>
				</div>
			</div>
		</section>
	);
}
