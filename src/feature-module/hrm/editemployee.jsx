// import { DatePicker } from "antd";
// import { ChevronUp, Info } from "feather-icons-react/build/IconComponents";
// import ArrowLeft from "feather-icons-react/build/IconComponents/ArrowLeft";
// import React, { useState } from "react";
// import { PlusCircle } from "react-feather";
// import { Link } from "react-router-dom";
// import Select from "react-select";
// import { all_routes } from "../../Router/all_routes";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { setToogleHeader } from "../../core/redux/action";
// import { useDispatch, useSelector } from "react-redux";

// const EditEmployee = () => {
//   const route = all_routes;
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.toggle_header);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   const [selectedDate1, setSelectedDate1] = useState(new Date());
//   const handleDateChange1 = (date) => {
//     setSelectedDate1(date);
//   };
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };
//   const [showConfirmPassword, setConfirmPassword] = useState(false);
//   const handleToggleConfirmPassword = () => {
//     setConfirmPassword((prevShowPassword) => !prevShowPassword);
//   };
//   const gender = [
//     { value: "Choose", label: "Choose" },
//     { value: "Male", label: "Male" },
//     { value: "Female", label: "Female" },
//   ];
//   const nationality = [
//     { value: "Choose", label: "Choose" },
//     { value: "United Kingdom", label: "United Kingdom" },
//     { value: "India", label: "India" },
//   ];
//   const types = [
//     { value: "Choose", label: "Choose" },
//     { value: "Regular", label: "Regular" },
//   ];
//   const departments = [
//     { value: "Choose", label: "Choose" },
//     { value: "UI/UX", label: "UI/UX" },
//     { value: "Support", label: "Support" },
//     { value: "HR", label: "HR" },
//     { value: "Engineering", label: "Engineering" },
//   ];
//   const designation = [
//     { value: "Choose", label: "Choose" },
//     { value: "Designer", label: "Designer" },
//     { value: "Developer", label: "Developer" },
//     { value: "Tester", label: "Tester" },
//   ];
//   const bloodgroup = [
//     { value: "Select", label: "Select" },
//     { value: "A+", label: "A+" },
//     { value: "A-", label: "A-" },
//     { value: "B+", label: "B-" },
//     { value: "O+", label: "O-" },
//     { value: "O+", label: "O-" },
//     { value: "AB+", label: "AB-" },
//     { value: "AB+", label: "AB-" },
//   ];
//   const country = [
//     { value: "Choose", label: "Choose" },
//     { value: "United Kingdom", label: "United Kingdom" },
//     { value: "USA", label: "USA" },
//   ];
//   const renderCollapseTooltip = (props) => (
//     <Tooltip id="refresh-tooltip" {...props}>
//       Collapse
//     </Tooltip>
//   );

//   return (
//     <div>
//       <div className="page-wrapper">
//         <div className="content">
//           <div className="page-header">
//             <div className="add-item d-flex">
//               <div className="page-title">
//                 <h4>Edit Employee</h4>
//                 <h6>Edit Employee</h6>
//               </div>
//             </div>
//             <ul className="table-top-head">
//               <li>
//                 <div className="page-btn">
//                   <Link to={route.employeegrid} className="btn btn-secondary">
//                     <ArrowLeft className="me-2" />
//                     Back to Employee List
//                   </Link>
//                 </div>
//               </li>

//               <li>
//                 <OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
//                   <Link
//                     data-bs-toggle="tooltip"
//                     data-bs-placement="top"
//                     id="collapse-header"
//                     className={data ? "active" : ""}
//                     onClick={() => {
//                       dispatch(setToogleHeader(!data));
//                     }}
//                   >
//                     <ChevronUp />
//                   </Link>
//                 </OverlayTrigger>
//               </li>
//             </ul>
//           </div>
//           {/* /product list */}
//           <form>
//             <div className="card">
//               <div className="card-body">
//                 <div className="new-employee-field">
//                   <div className="card-title-head">
//                     <h6>
//                       <span>
//                         <Info className="feather-edit" />
//                       </span>
//                       Employee Information
//                     </h6>
//                   </div>
//                   <div className="profile-pic-upload">
//                     <div className="profile-pic">
//                       <span>
//                         <PlusCircle className="plus-down-add" />
//                         Profile Photo
//                       </span>
//                     </div>
//                     <div className="input-blocks mb-0">
//                       <div className="image-upload mb-0">
//                         <input type="file" />
//                         <div className="image-uploads">
//                           <h4>Change Image</h4>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">First Name</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Last Name</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input type="email" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Contact Number</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Emp Code</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="input-blocks">
//                         <label>Date of Birth</label>
//                         <div className="input-groupicon calender-input">
//                           <DatePicker
//                             selected={selectedDate}
//                             onChange={handleDateChange}
//                             type="date"
//                             className="filterdatepicker"
//                             dateFormat="dd-MM-yyyy"
//                             placeholder="Choose Date"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Gender</label>

//                         <Select
//                           classNamePrefix="react-select"
//                           options={gender}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Nationality</label>

//                         <Select
//                           classNamePrefix="react-select"
//                           options={nationality}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="input-blocks">
//                         <label>Joining Date</label>
//                         <div className="input-groupicon calender-input">
//                           <DatePicker
//                             selected={selectedDate1}
//                             onChange={handleDateChange1}
//                             type="date"
//                             className="filterdatepicker"
//                             dateFormat="dd-MM-yyyy"
//                             placeholder="Choose Date"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <div className="add-newplus">
//                           <label className="form-label">Shift</label>
//                           <Link to="#">
//                             <span>
//                               <PlusCircle className="plus-down-add" />
//                               Add new
//                             </span>
//                           </Link>
//                         </div>

//                         <Select
//                           classNamePrefix="react-select"
//                           options={types}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Department</label>

//                         <Select
//                           classNamePrefix="react-select"
//                           options={departments}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Designation</label>

//                         <Select
//                           classNamePrefix="react-select"
//                           options={designation}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="form-label">Blood Group</label>
//                         <Select
//                           classNamePrefix="react-select"
//                           options={bloodgroup}
//                           placeholder="Choose"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="other-info">
//                     <div className="card-title-head">
//                       <h6>
//                         <span>
//                           <Info className="feather-edit" />
//                         </span>
//                         Other Information
//                       </h6>
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Emergency No 1</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Emergency No 2</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6"></div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Address</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Country</label>

//                           <Select
//                             classNamePrefix="react-select"
//                             options={country}
//                             placeholder="Select"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">State</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">City</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Zipcode</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pass-info">
//                     <div className="card-title-head">
//                       <h6>
//                         <span>
//                           <Info />
//                         </span>
//                         Password
//                       </h6>
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-4 col-md-6">
//                         <div className="input-blocks mb-md-0 mb-sm-3">
//                           <label>Password</label>
//                           <div className="pass-group">
//                             <input
//                               type={showPassword ? "text" : "password"}
//                               className="pass-input"
//                               placeholder="Enter your password"
//                             />
//                             <span
//                               className={`fas toggle-password ${
//                                 showPassword ? "fa-eye" : "fa-eye-slash"
//                               }`}
//                               onClick={handleTogglePassword}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-4 col-md-6">
//                         <div className="input-blocks mb-0">
//                           <label>Confirm Password</label>
//                           <div className="pass-group">
//                             <input
//                               type={showConfirmPassword ? "text" : "password"}
//                               className="pass-input"
//                               placeholder="Enter your password"
//                             />
//                             <span
//                               className={`fas toggle-password ${
//                                 showConfirmPassword ? "fa-eye" : "fa-eye-slash"
//                               }`}
//                               onClick={handleToggleConfirmPassword}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* /product list */}
//             <div className="text-end mb-3">
//               <button type="button" className="btn btn-cancel me-2">
//                 Cancel
//               </button>
//               <Link to="#" className="btn btn-submit">
//                 Save Product
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditEmployee;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom"; // <-- useParams to get the ID from URL
// import Select from "react-select";
// import { all_routes } from "../../Router/all_routes";
// import AlertModal from "../../core/modals/alerts/alert";

// const EditEmployee = () => {
// 	const route = all_routes;
// 	const { id } = useParams(); // <-- Get employee id from the URL
// 	const navigate = useNavigate();

// 	const [formData, setFormData] = useState({
// 		full_name: "",
// 		contact: "",
// 		address: "",
// 		email: "",
// 		role: "",
// 	});
// 	const [image, setImage] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	// State for modal alerts
// 	const [showModal, setShowModal] = useState(false);
// 	const [modalTitle, setModalTitle] = useState("");
// 	const [modalMessage, setModalMessage] = useState("");
// 	const [modalVariant, setModalVariant] = useState("");

// 	// Role options for the select dropdown
// 	const roleOptions = [
// 		{ value: "Inventory Manager", label: "Inventory Manager" },
// 		{ value: "Billing Staff", label: "Billing Staff" },
// 		{ value: "Admin", label: "Admin" },
// 		{ value: "Staff", label: "Staff" },
// 	];

// 	// Fetch employee data based on the ID
// 	useEffect(() => {
// 		const fetchEmployeeDetails = async () => {
// 			try {
// 				const response = await axios.get(
// 					`https://billing.neuralionicsoft.com/api/employees/${id}/`
// 				);
// 				const data = response.data;

// 				// Set the form fields with the existing employee data
// 				setFormData({
// 					full_name: data.full_name,
// 					contact: data.contact,
// 					address: data.address,
// 					email: data.email,
// 					role: data.role,
// 				});
// 				setLoading(false);
// 			} catch (error) {
// 				setError("Error fetching employee data");
// 				setLoading(false);
// 			}
// 		};

// 		fetchEmployeeDetails();
// 	}, [id]);

// 	// Handle form field changes
// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleImageChange = (e) => {
// 		setImage(e.target.files[0]);
// 	};

// 	const handleRoleChange = (selectedOption) => {
// 		setFormData({ ...formData, role: selectedOption.value });
// 	};

// 	// Handle form submission (PATCH request)
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		const form = new FormData();

// 		// Append form fields
// 		Object.keys(formData).forEach((key) => {
// 			form.append(key, formData[key] ? String(formData[key]) : "");
// 		});

// 		// Append image if present
// 		if (image) {
// 			form.append("employee_picture", image);
// 		}

// 		try {
// 			const response = await axios.patch(
// 				`https://billing.neuralionicsoft.com/api/employees/${id}/`,
// 				form
// 			);
// 			console.log("Success:", response.data);

// 			// Set success modal content
// 			setModalTitle("Success");
// 			setModalMessage("Employee details updated successfully!");
// 			setModalVariant("success");
// 			setShowModal(true);

// 			// Redirect to employee list after 1.5 seconds
// 			setTimeout(() => navigate(route.employeegrid), 1500);
// 		} catch (error) {
// 			console.error(
// 				"Error updating employee:",
// 				error.response?.data || error.message
// 			);

// 			// Set error modal content
// 			setModalTitle("Error");
// 			setModalMessage("Failed to update employee. Please try again.");
// 			setModalVariant("danger");
// 			setShowModal(true);
// 		}
// 	};

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>{error}</p>;

// 	return (
// 		<div className="page-wrapper">
// 			<div className="content">
// 				<div className="page-header">
// 					<div className="add-item d-flex">
// 						<div className="page-title">
// 							<h4>Edit Employee</h4>
// 							<h6>Update Employee Information</h6>
// 						</div>
// 					</div>
// 					<ul className="table-top-head">
// 						<li>
// 							<div className="page-btn">
// 								<Link to={route.employeegrid} className="btn btn-secondary">
// 									Back to Employee List
// 								</Link>
// 							</div>
// 						</li>
// 					</ul>
// 				</div>

// 				<form onSubmit={handleSubmit}>
// 					<div className="card">
// 						<div className="card-body">
// 							<div className="new-employee-field">
// 								<div className="card-title-head">
// 									<h6>Employee Information</h6>
// 								</div>
// 								<div className="profile-pic-upload">
// 									<div className="profile-pic">
// 										<span>Profile Photo</span>
// 									</div>
// 									<div className="input-blocks mb-0">
// 										<input type="file" onChange={handleImageChange} />
// 									</div>
// 								</div>
// 								<div className="row">
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Email</label>
// 											<input
// 												type="text"
// 												name="email"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.email}
// 												required
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Employee Name</label>
// 											<input
// 												type="text"
// 												name="full_name"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.full_name}
// 												required
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Contact Number</label>
// 											<input
// 												type="text"
// 												name="contact"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.contact}
// 												required
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Employee Role</label>
// 											<Select
// 												classNamePrefix="react-select"
// 												options={roleOptions}
// 												placeholder="Choose"
// 												onChange={handleRoleChange}
// 												value={roleOptions.find(
// 													(option) => option.value === formData.role
// 												)}
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Address</label>
// 											<input
// 												type="text"
// 												name="address"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.address}
// 												required
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="text-end mb-3">
// 						<button type="button" className="btn btn-cancel me-2">
// 							Cancel
// 						</button>
// 						<button type="submit" className="btn btn-submit">
// 							Update Employee
// 						</button>
// 					</div>
// 				</form>

// 				{/* Alert Modal */}
// 				<AlertModal
// 					show={showModal}
// 					onHide={() => setShowModal(false)}
// 					title={modalTitle}
// 					message={modalMessage}
// 					variant={modalVariant}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default EditEmployee;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom"; // <-- useParams to get the ID from URL
// import Select from "react-select";
// import { all_routes } from "../../Router/all_routes";
// import AlertModal from "../../core/modals/alerts/alert";

// const EditEmployee = () => {
// 	const route = all_routes;
// 	const { id } = useParams(); // <-- Get employee id from the URL
// 	const navigate = useNavigate();

// 	const [formData, setFormData] = useState({
// 		full_name: "",
// 		contact: "",
// 		address: "",
// 		email: "",
// 		role: "",
// 	});
// 	const [image, setImage] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	// State for modal alerts
// 	const [showModal, setShowModal] = useState(false);
// 	const [modalTitle, setModalTitle] = useState("");
// 	const [modalMessage, setModalMessage] = useState("");
// 	const [modalVariant, setModalVariant] = useState("");

// 	// Role options for the select dropdown
// 	const roleOptions = [
// 		{ value: "Inventory Manager", label: "Inventory Manager" },
// 		{ value: "Billing Staff", label: "Billing Staff" },
// 		{ value: "Admin", label: "Admin" },
// 		{ value: "Staff", label: "Staff" },
// 	];

// 	// Fetch employee data based on the ID
// 	useEffect(() => {
// 		const fetchEmployeeDetails = async () => {
// 			try {
// 				const response = await axios.get(
// 					`https://billing.neuralionicsoft.com/api/employees/${id}/`
// 				);
// 				const data = response.data;

// 				// Set the form fields with the existing employee data
// 				setFormData({
// 					full_name: data.employee_name,
// 					contact: data.employee_contact,
// 					address: data.employee_address,
// 					email: data.email, // Make sure the backend sends the email field.
// 					role: data.role,
// 				});
// 				setLoading(false);
// 			} catch (error) {
// 				setError("Error fetching employee data");
// 				setLoading(false);
// 			}
// 		};

// 		fetchEmployeeDetails();
// 	}, [id]);

// 	// Handle form field changes
// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleImageChange = (e) => {
// 		setImage(e.target.files[0]);
// 	};

// 	const handleRoleChange = (selectedOption) => {
// 		setFormData({ ...formData, role: selectedOption.value });
// 	};

// 	// Handle form submission (PATCH request)
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		const form = new FormData();

// 		// Append form fields
// 		Object.keys(formData).forEach((key) => {
// 			form.append(key, formData[key] ? String(formData[key]) : "");
// 		});

// 		// Append image if present
// 		if (image) {
// 			form.append("employee_picture", image);
// 		}

// 		try {
// 			const response = await axios.patch(
// 				`https://billing.neuralionicsoft.com/api/employees/${id}/`,
// 				form
// 			);
// 			console.log("Success:", response.data);

// 			// Set success modal content
// 			setModalTitle("Success");
// 			setModalMessage("Employee details updated successfully!");
// 			setModalVariant("success");
// 			setShowModal(true);

// 			// Redirect to employee list after 1.5 seconds
// 			setTimeout(() => navigate(route.employeegrid), 1500);
// 		} catch (error) {
// 			console.error(
// 				"Error updating employee:",
// 				error.response?.data || error.message
// 			);

// 			// Set error modal content
// 			setModalTitle("Error");
// 			setModalMessage("Failed to update employee. Please try again.");
// 			setModalVariant("danger");
// 			setShowModal(true);
// 		}
// 	};

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>{error}</p>;

// 	return (
// 		<div className="page-wrapper">
// 			<div className="content">
// 				<div className="page-header">
// 					<div className="add-item d-flex">
// 						<div className="page-title">
// 							<h4>Edit Employee</h4>
// 							<h6>Update Employee Information</h6>
// 						</div>
// 					</div>
// 					<ul className="table-top-head">
// 						<li>
// 							<div className="page-btn">
// 								<Link to={route.employeegrid} className="btn btn-secondary">
// 									Back to Employee List
// 								</Link>
// 							</div>
// 						</li>
// 					</ul>
// 				</div>

// 				<form onSubmit={handleSubmit}>
// 					<div className="card">
// 						<div className="card-body">
// 							<div className="new-employee-field">
// 								<div className="card-title-head">
// 									<h6>Employee Information</h6>
// 								</div>
// 								<div className="profile-pic-upload">
// 									<div className="profile-pic">
// 										<span>Profile Photo</span>
// 									</div>
// 									<div className="input-blocks mb-0">
// 										<input type="file" onChange={handleImageChange} />
// 									</div>
// 								</div>
// 								<div className="row">
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Employee Name</label>
// 											<input
// 												type="text"
// 												name="full_name"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.full_name}
// 												required
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Contact Number</label>
// 											<input
// 												type="text"
// 												name="contact"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.contact}
// 												required
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Employee Role</label>
// 											<Select
// 												classNamePrefix="react-select"
// 												options={roleOptions}
// 												placeholder="Choose"
// 												onChange={handleRoleChange}
// 												value={roleOptions.find(
// 													(option) => option.value === formData.role
// 												)}
// 											/>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-6">
// 										<div className="mb-3">
// 											<label className="form-label">Address</label>
// 											<input
// 												type="text"
// 												name="address"
// 												className="form-control"
// 												onChange={handleChange}
// 												value={formData.address}
// 												required
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="text-end mb-3">
// 						<button type="button" className="btn btn-cancel me-2">
// 							Cancel
// 						</button>
// 						<button type="submit" className="btn btn-submit">
// 							Update Employee
// 						</button>
// 					</div>
// 				</form>

// 				{/* Alert Modal */}
// 				<AlertModal
// 					show={showModal}
// 					onHide={() => setShowModal(false)}
// 					title={modalTitle}
// 					message={modalMessage}
// 					variant={modalVariant}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default EditEmployee;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // <-- useParams to get the ID from URL
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import AlertModal from "../../core/modals/alerts/alert";

const EditEmployee = () => {
	const route = all_routes;
	const { id } = useParams(); // <-- Get employee id from the URL
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		full_name: "",
		contact: "",
		address: "",
		role: "",
	});
	const [image, setImage] = useState(null);
	const [currentImage, setCurrentImage] = useState(null); // State to store the current image URL
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// State for modal alerts
	const [showModal, setShowModal] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [modalMessage, setModalMessage] = useState("");
	const [modalVariant, setModalVariant] = useState("");

	// Role options for the select dropdown
	const roleOptions = [
		{ value: "Inventory Manager", label: "Inventory Manager" },
		{ value: "Billing Staff", label: "Billing Staff" },
		{ value: "Admin", label: "Admin" },
		{ value: "Staff", label: "Staff" },
	];

	// Fetch employee data based on the ID
	useEffect(() => {
		const fetchEmployeeDetails = async () => {
			try {
				const response = await axios.get(
					`https://billing.neuralionicsoft.com/api/employees/${id}/`
				);
				const data = response.data;

				// Set the form fields with the existing employee data
				setFormData({
					full_name: data.employee_name,
					contact: data.employee_contact,
					address: data.employee_address,
					role: data.role,
				});
				setCurrentImage(data.employee_picture); // Set the current image URL
				setLoading(false);
			} catch (error) {
				setError("Error fetching employee data");
				setLoading(false);
			}
		};

		fetchEmployeeDetails();
	}, [id]);

	// Handle form field changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleRoleChange = (selectedOption) => {
		setFormData({ ...formData, role: selectedOption.value });
	};

	// Handle form submission (PATCH request)
	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData();

		// Append form fields
		Object.keys(formData).forEach((key) => {
			form.append(key, formData[key] ? String(formData[key]) : "");
		});

		// Append image if present
		if (image) {
			form.append("employee_picture", image);
		}

		try {
			const response = await axios.patch(
				`https://billing.neuralionicsoft.com/api/employees/${id}/`,
				form
			);
			console.log("Success:", response.data);

			// Set success modal content
			setModalTitle("Success");
			setModalMessage("Employee details updated successfully!");
			setModalVariant("success");
			setShowModal(true);

			// Redirect to employee list after 1.5 seconds
			setTimeout(() => navigate(route.employeegrid), 1500);
		} catch (error) {
			console.error(
				"Error updating employee:",
				error.response?.data || error.message
			);

			// Set error modal content
			setModalTitle("Error");
			setModalMessage("Failed to update employee. Please try again.");
			setModalVariant("danger");
			setShowModal(true);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>Edit Employee</h4>
							<h6>Update Employee Information</h6>
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
										{/* Display the current image if available */}
										{currentImage ? (
											<img
												src={currentImage}
												alt="Employee Profile"
												className="img-fluid"
												style={{
													width: "100%",
													height: "100%",
													borderRadius: "8%",
												}}
											/>
										) : (
											<span>Profile Picture</span>
										)}
									</div>
									<div className="input-blocks mb-0">
										<input type="file" onChange={handleImageChange} />
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="mb-3">
											<label className="form-label">Employee Name</label>
											<input
												type="text"
												name="full_name"
												className="form-control"
												onChange={handleChange}
												value={formData.full_name}
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
							Update Employee
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

export default EditEmployee;
