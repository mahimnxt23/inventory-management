import { DatePicker } from "antd";
import { Calendar } from "feather-icons-react/build/IconComponents";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUnit = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div>
			{/* Add Unit */}
			<div className="modal fade" id="add-units">
				<div className="modal-dialog modal-dialog-centered custom-modal-two">
					<div className="modal-content">
						<div className="page-wrapper-new p-0">
							<div className="content">
								<div className="modal-header border-0 custom-modal-header">
									<div className="page-title">
										<h4>Create Bottle Breakage Entry</h4>
									</div>
									<button
										type="button"
										className="close"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">×</span>
									</button>
								</div>
								<div className="modal-body custom-modal-body">
									<form>
										<div className="mb-3">
											<label className="form-label">Medicine name</label>
											<input type="text" className="form-control" />
										</div>
										<div className="mb-3">
											<label className="form-label">Responsible Employee</label>
											<input type="text" className="form-control" />
										</div>
										<div className="mb-3">
											<label className="form-label">Description</label>
											<input type="textarea" className="form-control" />
										</div>
										<div className="mb-3">
											<label className="form-label">Lost quantity</label>
											<input type="text" className="form-control" />
										</div>
										<div className="mb-3">
											<label className="form-label">Reason</label>
											<input type="text" className="form-control" />
										</div>
										<div className="mb-3">
											<div className="input-blocks">
												<label>Date</label>
												<div className="input-groupicon calender-input">
													<Calendar className="info-img" />
													<DatePicker
														selected={selectedDate}
														onChange={handleDateChange}
														type="date"
														className="datetimepicker"
														dateFormat="dd-MM-yyyy"
														placeholder="Choose Date"
													/>
												</div>
											</div>
										</div>

										<div className="modal-footer-btn">
											<button
												type="button"
												className="btn btn-cancel me-2"
												data-bs-dismiss="modal"
											>
												Cancel
											</button>
											<Link to="#" className="btn btn-submit">
												Create Breakage Entry
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Unit */}
		</div>
	);
};

export default AddUnit;
