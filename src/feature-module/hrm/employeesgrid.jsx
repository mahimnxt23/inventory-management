import {
	Edit,
	MoreVertical,
	PlusCircle,
	RotateCcw,
	Trash2,
} from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ChevronUp } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { setToogleHeader } from "../../core/redux/action";
import { all_routes } from "../../Router/all_routes";
import { getData } from "../../utils/api";

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

	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchEmployeeData();
	}, []);

	const fetchEmployeeData = async () => {
		setLoading(true);
		try {
			const [empList] = await Promise.all([getData("/employees")]);

			// Store employee list
			setEmployees(empList);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
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
							{loading ? (
								<p>Loading...</p>
							) : error ? (
								<p>Error: {error}</p>
							) : employees.length > 0 ? (
								employees.map((employee) => (
									<div
										key={employee.id}
										className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
									>
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
												<div className="profile-pic active-profile overflow-hidden">
													<img
														src={employee.employee_picture}
														alt={employee.employee_name}
														className="img-fluid employee-img"
													/>
												</div>
												<h5>EMP ID : {employee.employee_id}</h5>
												<h4>{employee.employee_name}</h4>
												<span className="employeeContact">
													{employee.employee_contact}
												</span>
												<p>{employee.employee_address}</p>
											</div>
											<ul className="department">
												<li>
													Joined:{" "}
													{new Date(employee.created_at).toLocaleDateString()}
												</li>
											</ul>
										</div>
									</div>
								))
							) : (
								<p>No employees found.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeesGrid;
