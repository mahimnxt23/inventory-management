import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { all_routes } from "../../../Router/all_routes";

const Register = () => {
	const route = all_routes;
	const [passwordVisibility, setPasswordVisibility] = useState({
		password: false,
		confirmPassword: false,
	});

	const togglePasswordVisibility = (field) => {
		setPasswordVisibility((prevState) => ({
			...prevState,
			[field]: !prevState[field],
		}));
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
							<form action="signin">
								<div className="login-userset">
									<div className="login-userheading">
										<h3>Register</h3>
										<h4>Create a New Account</h4>
									</div>
									<div className="form-login">
										<label>Name</label>
										<div className="form-addons">
											<input type="text" className="form-control" />
											<ImageWithBasePath
												src="assets/img/icons/user-icon.svg"
												alt="img"
											/>
										</div>
									</div>
									<div className="form-login">
										<label>Email Address</label>
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
												type={passwordVisibility.password ? "text" : "password"}
												className="pass-input form-control"
											/>
											<span
												className={`fas toggle-password ${
													passwordVisibility.password
														? "fa-eye"
														: "fa-eye-slash"
												}`}
												onClick={() => togglePasswordVisibility("password")}
											></span>
										</div>
									</div>
									<div className="form-login">
										<label>Confirm Passworrd</label>
										<div className="pass-group">
											<input
												type={
													passwordVisibility.confirmPassword
														? "text"
														: "password"
												}
												className="pass-input form-control"
											/>
											<span
												className={`fas toggle-password ${
													passwordVisibility.confirmPassword
														? "fa-eye"
														: "fa-eye-slash"
												}`}
												onClick={() =>
													togglePasswordVisibility("confirmPassword")
												}
											></span>
										</div>
									</div>
									<div className="form-login authentication-check">
										<div className="row">
											<div className="col-sm-8">
												<div className="custom-control custom-checkbox justify-content-start">
													<div className="custom-control custom-checkbox">
														<label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
															<input type="checkbox" />
															<span className="checkmarks" />I agree to the{" "}
															<Link to="#" className="hover-a">
																Terms &amp; Privacy
															</Link>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="form-login">
										<Link to={route.signin} className="btn btn-login">
											Sign Up
										</Link>
									</div>
									<div className="signinform">
										<h4>
											Already have an account ?{" "}
											<Link to={route.signin} className="hover-a">
												Sign In Instead
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
							</p>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
