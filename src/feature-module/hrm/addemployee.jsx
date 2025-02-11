import { DatePicker } from "antd";
import { ChevronUp, Info } from "feather-icons-react/build/IconComponents";
import ArrowLeft from "feather-icons-react/build/IconComponents/ArrowLeft";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { setToogleHeader } from "../../core/redux/action";
import { all_routes } from "../../Router/all_routes";

const AddEmployee = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	const renderCollapseTooltip = (props) => (
		<Tooltip id="refresh-tooltip" {...props}>
			Collapse
		</Tooltip>
	);

	const [selectedDate1, setSelectedDate1] = useState(new Date());
	const handleDateChange1 = (date) => {
		setSelectedDate1(date);
	};

	const role = [
		{ value: "Choose", label: "Choose" },
		{ value: "Inventory Manager", label: "Inventory Manager" },
		{ value: "Billing Staff", label: "Billing Staff" },
	];

	return (
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>New Employee</h4>
								<h6>Create new Employee</h6>
							</div>
						</div>
						<ul className="table-top-head">
							<li>
								<div className="page-btn">
									<Link to={route.employeegrid} className="btn btn-secondary">
										<ArrowLeft className="me-2" />
										Back to Employee List
									</Link>
								</div>
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
					</div>
					{/* /product list */}
					<form>
						<div className="card">
							<div className="card-body">
								<div className="new-employee-field">
									<div className="card-title-head">
										<h6>
											<span>
												<Info className="feather-edit" />
											</span>
											Employee Information
										</h6>
									</div>
									<div className="profile-pic-upload">
										<div className="profile-pic">
											<span>
												<PlusCircle className="plus-down-add" />
												Profile Photo
											</span>
										</div>
										<div className="input-blocks mb-0">
											<div className="image-upload mb-0">
												<input type="file" />
												<div className="image-uploads">
													<h4>Change Image</h4>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<div className="mb-3">
												<label className="form-label">Employee Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="mb-3">
												<label className="form-label">Email Address</label>
												<input type="email" className="form-control" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="mb-3">
												<label className="form-label">Contact Number</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="mb-3">
												<label className="form-label">Employee Role</label>

												<Select
													classNamePrefix="react-select"
													options={role}
													placeholder="Choose"
												/>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="input-blocks">
												<label>Joining Date</label>
												<div className="input-groupicon calender-input">
													<DatePicker
														selected={selectedDate1}
														onChange={handleDateChange1}
														type="date"
														className="filterdatepicker"
														dateFormat="dd-MM-yyyy"
														placeholder="Choose Date"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* /product list */}
						<div className="text-end mb-3">
							<button type="button" className="btn btn-cancel me-2">
								Cancel
							</button>
							<Link to="#" className="btn btn-submit">
								Add Employee
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddEmployee;
