import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { all_routes } from "../../../Router/all_routes";

const Signin = () => {
	const route = all_routes;
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible((prevState) => !prevState);
	};
	return (
		<div className="main-wrapper">
			<div className="account-content">
				<div className="login-wrapper login-new">
					<div className="container">
						<div className="login-content user-login">
							<div className="login-logo">
								<ImageWithBasePath src="assets/img/logo.png" alt="img" />
								<Link to={route.dashboard} className="login-logo logo-white">
									<ImageWithBasePath src="assets/img/logo-white.png" alt />
								</Link>
							</div>
							<form>
								<div className="login-userset">
									<div className="login-userheading">
										<h3>Sign In</h3>
										<h4>
											Access the Dashboard panel using your email and passcode.
										</h4>
									</div>
									<div className="form-login">
										<label className="form-label">Email Address</label>
										<div className="form-addons">
											<input type="text" className="form-control" />
											<ImageWithBasePath
												src="assets/img/icons/mail.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="form-login">
										<label>Password</label>
										<div className="pass-group">
											<input
												type={isPasswordVisible ? "text" : "password"}
												className="pass-input form-control"
											/>
											<span
												className={`fas toggle-password ${
													isPasswordVisible ? "fa-eye" : "fa-eye-slash"
												}`}
												onClick={togglePasswordVisibility}
											></span>
										</div>
									</div>
									<div className="form-login authentication-check">
										<div className="row">
											<div className="col-6">
												<div className="custom-control custom-checkbox">
													<label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
														<input type="checkbox" />
														<span className="checkmarks" />
														Remember me
													</label>
												</div>
											</div>
											<div className="col-6 text-end">
												<Link
													className="forgot-link"
													to={route.forgotPasswordThree}
												>
													Forgot Password?
												</Link>
											</div>
										</div>
									</div>
									<div className="form-login">
										<Link className="btn btn-login" to={route.dashboard}>
											Sign In
										</Link>
									</div>
									<div className="signinform">
										<h4>
											New on our platform?
											<Link to={route.registerThree} className="hover-a">
												{" "}
												Create an account
											</Link>
										</h4>
									</div>
								</div>
							</form>
						</div>
						<div className="my-4 d-flex justify-content-center align-items-center copyright-text">
							<p>
								Copyright © {new Date().getFullYear()}{" "}
								<a
									href="https://ethicalden.com"
									target="_blank"
									rel="noreferrer"
								>
									Ethical Den
								</a>
								. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
