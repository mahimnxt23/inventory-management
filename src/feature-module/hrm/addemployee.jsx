import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import AlertModal from "../../core/modals/alerts/alert";

const AddEmployee = () => {
	const route = all_routes;

	const [formData, setFormData] = useState({
		full_name: "",
		contact: "",
		address: "",
		email: "",
		role: "",
	});
	const [image, setImage] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleRoleChange = (selectedOption) => {
		setFormData({ ...formData, role: selectedOption.value });
	};

	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [modalMessage, setModalMessage] = useState("");
	const [modalVariant, setModalVariant] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData();

		// Append form fields
		Object.keys(formData).forEach((key) => {
			form.append(key, formData[key] ? String(formData[key]) : "");
		});

		// Append image file
		if (image) {
			form.append("employee_picture", image);
		}

		try {
			const response = await axios.post(
				"https://billing.neuralionicsoft.com/api/register/",
				form
			);
			console.log("Success:", response.data);
			// Set success modal content
			setModalTitle("Success");
			setModalMessage("Employee added successfully!");
			setModalVariant("success");
			setShowModal(true);

			// Redirect to employee list after 1.5 seconds
			setTimeout(() => navigate("/employee-grid"), 1500);
		} catch (error) {
			console.error(
				"Error updating employee:",
				error.response?.data || error.message
			);

			// Set error modal content
			setModalTitle("Error");
			setModalMessage("Failed to add employee. Please try again.");
			setModalVariant("danger");
			setShowModal(true);
		}
	};

	const roleOptions = [
		// { value: null, label: "Choose" },
		{ value: "Inventory Manager", label: "Inventory Manager" },
		{ value: "Billing Staff", label: "Billing Staff" },
		{ value: "Admin", label: "Admin" },
		{ value: "Staff", label: "Staff" },
	];

	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>New Employee</h4>
							<h6>Create an Employee</h6>
						</div>
					</div>
					<ul className="table-top-head">
						<li>
							<div className="page-btn">
								<Link to={route.employeegrid} className="btn btn-secondary">
									Back to Employee List
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="card">
						<div className="card-body">
							<div className="new-employee-field">
								<div className="card-title-head">
									<h6>Employee Information</h6>
								</div>
								<div className="profile-pic-upload">
									<div className="profile-pic">
										<span>Profile Photo</span>
									</div>
									<div className="input-blocks mb-0">
										<input type="file" onChange={handleImageChange} />
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input
												type="text"
												name="email"
												className="form-control"
												onChange={handleChange}
												value={formData.email}
												required
											/>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Employee Name</label>
											<input
												type="text"
												name="full_name"
												className="form-control"
												onChange={handleChange}
												value={formData.full_name}
												required
											/>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Contact Number</label>
											<input
												type="text"
												name="contact"
												className="form-control"
												onChange={handleChange}
												value={formData.contact}
												required
											/>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Employee Role</label>
											<Select
												classNamePrefix="react-select"
												options={roleOptions}
												placeholder="Choose"
												onChange={handleRoleChange}
												value={roleOptions.find(
													(option) => option.value === formData.role
												)}
											/>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Address</label>
											<input
												type="text"
												name="address"
												className="form-control"
												onChange={handleChange}
												value={formData.address}
												required
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-end mb-3">
						<button type="button" className="btn btn-cancel me-2">
							Cancel
						</button>
						<button type="submit" className="btn btn-submit">
							Add Employee
						</button>
					</div>
				</form>

				{/* Alert Modal */}
				<AlertModal
					show={showModal}
					onHide={() => setShowModal(false)}
					title={modalTitle}
					message={modalMessage}
					variant={modalVariant}
				/>
			</div>
		</div>
	);
};

export default AddEmployee;
