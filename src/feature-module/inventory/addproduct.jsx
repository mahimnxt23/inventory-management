/* eslint-disable no-unused-vars */
import axios from "axios";
import {
	ArrowLeft,
	ChevronDown,
	Info,
	PlusCircle,
	X,
} from "feather-icons-react/build/IconComponents";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { base_url } from "../../environment";
import { all_routes } from "../../Router/all_routes";

const AddProduct = () => {
	const route = all_routes;

	const [imagePreview, setImagePreview] = useState("");
	const [isImageVisible, setIsImageVisible] = useState(true);

	const [formData, setFormData] = useState({
		medicine_name: "",
		slug: "",
		medicine_type: "",
		description: "",
		medicine_picture: null,
		pack_size: "",
		total_case_pack: "",
		stocks: "Available",
		unit_price: "",
		medicine_category: "",
		created_by: 1,
	});

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData({ ...formData, medicine_picture: file });
			const reader = new FileReader();
			reader.onloadend = () => setImagePreview(reader.result);
			reader.readAsDataURL(file);
			setIsImageVisible(true);
		}
	};

	const handleRemoveImage = () => {
		setImagePreview("");
		setFormData({ ...formData, medicine_picture: null });
		setIsImageVisible(false);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData();

		Object.entries(formData).forEach(([key, value]) => {
			if (key === "medicine_picture" && value) {
				data.append(key, value, value.name);
			} else {
				data.append(key, value);
			}
		});

		try {
			const response = await axios.post(`${base_url}/medicines`, data, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			console.log("Medicine added:", response.data);
			// Add success notification/redirect here
		} catch (error) {
			console.error("Error:", error);
			// Add error handling here
		}
	};

	const medicineTypes = [
		{ value: "Liquids", label: "Liquids" },
		{ value: "Tablets", label: "Tablets" },
		{ value: "Capsules", label: "Capsules" },
	];

	const stockOptions = [
		{ value: "Available", label: "Available" },
		{ value: "Out of Stock", label: "Out of Stock" },
	];

	const categoryOptions = [
		{ value: 1, label: "Homeopathic" },
		{ value: 2, label: "Allopathic" },
	];

	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>New Medicine</h4>
							<h6>Create new medicine</h6>
						</div>
					</div>
					<ul className="table-top-head">
						<li>
							<div className="page-btn">
								<Link to={route.productlist} className="btn btn-secondary">
									<ArrowLeft className="me-2" />
									Back to Product
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="card">
						<div className="card-body add-product pb-0">
							<div
								className="accordion-card-one accordion"
								id="accordionExample"
							>
								<div className="accordion-item">
									<div className="accordion-header" id="headingOne">
										<div
											className="accordion-button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
										>
											<div className="addproduct-icon">
												<h5>
													<Info className="add-info" />
													<span>Medicine Information</span>
												</h5>
												<Link to="#">
													<ChevronDown className="chevron-down-add" />
												</Link>
											</div>
										</div>
									</div>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
									>
										<div className="accordion-body">
											<div className="row">
												<div className="col-lg-2 col-sm-6 col-12">
													<div className="mb-3 add-product">
														<label>Medicine Image</label>
														<div className="image-upload">
															<input
																type="file"
																onChange={handleImageUpload}
																accept="image/*"
																hidden
																id="medicineImage"
															/>
															<label
																htmlFor="medicineImage"
																className="upload-label"
															>
																{imagePreview ? (
																	<div className="position-relative">
																		<img
																			src={imagePreview}
																			alt="Preview"
																			className="img-thumbnail img-fluid"
																			style={{
																				height: "200px",
																				width: "200px",
																				objectFit: "cover",
																			}}
																		/>
																		<X
																			className="position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1"
																			style={{ cursor: "pointer" }}
																			onClick={handleRemoveImage}
																		/>
																	</div>
																) : (
																	<div className="image-uploads text-center p-4 border rounded">
																		<PlusCircle className="mb-2" size={24} />
																		<h6>Upload Image</h6>
																	</div>
																)}
															</label>
														</div>
													</div>
												</div>

												<div className="col-lg-10">
													<div className="row">
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Medicine Name</label>
																<input
																	type="text"
																	className="form-control"
																	name="medicine_name"
																	value={formData.medicine_name}
																	onChange={handleChange}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Slug</label>
																<input
																	type="text"
																	className="form-control"
																	name="slug"
																	value={formData.slug}
																	onChange={handleChange}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Medicine Type</label>
																<Select
																	options={medicineTypes}
																	onChange={(e) =>
																		setFormData({
																			...formData,
																			medicine_type: e.value,
																		})
																	}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Category</label>
																<Select
																	options={categoryOptions}
																	onChange={(e) =>
																		setFormData({
																			...formData,
																			medicine_category: e.value,
																		})
																	}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Pack Size</label>
																<input
																	type="text"
																	className="form-control"
																	name="pack_size"
																	value={formData.pack_size}
																	onChange={handleChange}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Unit Price ($)</label>
																<input
																	type="number"
																	className="form-control"
																	name="unit_price"
																	value={formData.unit_price}
																	onChange={handleChange}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Stock Status</label>
																<Select
																	options={stockOptions}
																	defaultValue={stockOptions[0]}
																	onChange={(e) =>
																		setFormData({
																			...formData,
																			stocks: e.value,
																		})
																	}
																	required
																/>
															</div>
														</div>
														<div className="col-lg-6 col-sm-6 col-12">
															<div className="mb-3">
																<label>Total Case Pack</label>
																<input
																	type="number"
																	className="form-control"
																	name="total_case_pack"
																	value={formData.total_case_pack}
																	onChange={handleChange}
																	required
																/>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-lg-12">
													<div className="mb-3">
														<label>Description</label>
														<textarea
															className="form-control"
															rows="4"
															name="description"
															value={formData.description}
															onChange={handleChange}
															maxLength={500}
														/>
														<small className="text-muted">
															Max 500 characters
														</small>
													</div>
												</div>
											</div>

											<div className="row mt-4">
												<div className="col-lg-12">
													<div className="d-flex justify-content-end gap-2">
														<button type="button" className="btn btn-secondary">
															Cancel
														</button>
														<button type="submit" className="btn btn-primary">
															Save Medicine
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
