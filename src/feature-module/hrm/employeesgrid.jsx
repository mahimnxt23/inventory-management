import {
	Edit,
	MoreVertical,
	PlusCircle,
	RotateCcw,
	Trash2,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ChevronUp } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { setToogleHeader } from "../../core/redux/action";
import { all_routes } from "../../Router/all_routes";

const EmployeesGrid = () => {
	const route = all_routes;

	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	const renderRefreshTooltip = (props) => (
		<Tooltip id="refresh-tooltip" {...props}>
			Refresh
		</Tooltip>
	);
	const renderCollapseTooltip = (props) => (
		<Tooltip id="refresh-tooltip" {...props}>
			Collapse
		</Tooltip>
	);
	const MySwal = withReactContent(Swal);
	const showConfirmationAlert = () => {
		MySwal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: "#00ff00",
			confirmButtonText: "Yes, delete it!",
			cancelButtonColor: "#ff0000",
			cancelButtonText: "Cancel",
		}).then((result) => {
			if (result.isConfirmed) {
				MySwal.fire({
					title: "Deleted!",
					text: "User has been deleted.",
					className: "btn btn-success",
					confirmButtonText: "OK",
					customClass: {
						confirmButton: "btn btn-success",
					},
				});
			} else {
				MySwal.close();
			}
		});
	};
	return (
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>Employees</h4>
								<h6>Manage your employees</h6>
							</div>
						</div>
						<ul className="table-top-head">
							<li>
								<OverlayTrigger placement="top" overlay={renderRefreshTooltip}>
									<Link data-bs-toggle="tooltip" data-bs-placement="top">
										<RotateCcw />
									</Link>
								</OverlayTrigger>
							</li>
							<li>
								<OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
									<Link
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										id="collapse-header"
										className={data ? "active" : ""}
										onClick={() => {
											dispatch(setToogleHeader(!data));
										}}
									>
										<ChevronUp />
									</Link>
								</OverlayTrigger>
							</li>
						</ul>
						<div className="page-btn">
							<Link to={route.addemployee} className="btn btn-added">
								<PlusCircle className="me-2" />
								Add New Employee
							</Link>
						</div>
					</div>

					{/* /product list */}
					<div className="employee-grid-widget">
						<div className="row">
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-01.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS001</h5>
										<h4>Mitchum Daniel</h4>
										<span>Designer</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 23 Jul 2023</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />{" "}
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-02.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS002</h5>
										<h4>Susan Lopez</h4>
										<span>Curator</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 30 May 2023</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linedanger text-center w-auto me-1">
												Inactive
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />{" "}
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic">
											<ImageWithBasePath
												src="assets/img/users/user-03.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS003</h5>
										<h4>Robert Grossman</h4>
										<span>System Administrator</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 14 Aug 2023</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-06.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS004</h5>
										<h4>Janet Hembre</h4>
										<span>Administrative Officer</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 17 Jun 2023</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-04.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS005</h5>
										<h4>Russell Belle</h4>
										<span>Technician</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 16 Jan 2014</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linedanger text-center w-auto me-1">
												Inactive
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic">
											<ImageWithBasePath
												src="assets/img/users/user-05.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS006</h5>
										<h4>Edward K. Muniz</h4>
										<span>Office Support Secretary</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 07 Feb 2017</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-07.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS007</h5>
										<h4>Susan Moore</h4>
										<span>Tech Lead</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 14 Mar 2023</li>
									</ul>
								</div>
							</div>
							<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
								<div className="employee-grid-profile">
									<div className="profile-head">
										<div>
											<span className="badge badge-linesuccess text-center w-auto me-1">
												Active
											</span>
										</div>
										<div className="profile-head-action">
											<div className="dropdown profile-action">
												<Link
													to="#"
													className="action-icon dropdown-toggle"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<MoreVertical />
												</Link>
												<ul className="dropdown-menu">
													<li>
														<Link
															to={route.editemployee}
															className="dropdown-item"
														>
															<Edit className="info-img" />
															Edit
														</Link>
													</li>
													<li>
														<Link
															to="#"
															className="dropdown-item confirm-text mb-0"
															onClick={showConfirmationAlert}
														>
															<Trash2 className="info-img" />
															Delete
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile-info">
										<div className="profile-pic active-profile">
											<ImageWithBasePath
												src="assets/img/users/user-08.jpg"
												alt=""
											/>
										</div>
										<h5>EMP ID : POS008</h5>
										<h4>Lance Jackson</h4>
										<span>Database administrator</span>
										<span className="employeeContact">+00 00000-000000</span>
									</div>
									<ul className="department">
										<li>Joined: 23 July 2023</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeesGrid;
