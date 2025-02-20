import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../Router/all_routes";
import AddCategory from "../../core/modals/inventory/addcategory";
import { base_url } from "../../environment";

const EditProduct = () => {
	const { id } = useParams(); // Get medicine ID from URL
	const route = all_routes;

	const [categories, setCategories] = useState([]);
	const [formData, setFormData] = useState({
		medicine_name: "",
		slug: "",
		medicine_type: "",
		description: "",
		medicine_picture: "",
		pack_size: "",
		total_case_pack: "",
		stocks: "Available",
		unit_price: "",
		medicine_category: null,
		created_by: 1, // Default user ID
	});

	// Fetch categories from the backend
	useEffect(() => {
		axios
			.get(`${base_url}/medicine-categories/`)
			.then((response) => {
				const options = response.data.map((category) => ({
					value: category.id,
					label: category.category_name,
				}));
				setCategories(options);
			})
			.catch((error) => console.error("Error fetching categories:", error));
	}, [id]);

	// Fetch existing medicine details
	useEffect(() => {
		axios
			.get(`${base_url}/medicines/${id}/`)
			.then((response) => {
				setFormData(response.data);
			})
			.catch((error) => console.error("Error fetching medicine:", error));
	}, [id]);

	// Handle form inputs
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle category selection
	const handleCategoryChange = (selectedOption) => {
		setFormData({ ...formData, medicine_category: selectedOption.value });
	};

	// Handle form submission (PATCH request)
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.patch(`${base_url}/medicines/${id}/`, formData)
			.then((response) => {
				console.log("Medicine updated successfully", response.data);
				// Redirect or show success message
			})
			.catch((error) => console.error("Error updating medicine:", error));
	};

	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>Edit Medicine</h4>
						</div>
					</div>
					<ul className="table-top-head">
						<li>
							<div className="page-btn">
								<Link to={route.productlist} className="btn btn-secondary">
									Back to Product
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="card">
						<div className="card-body add-product pb-0">
							<div className="row">
								<div className="col-lg-6 mt-3">
									<label className="form-label">Medicine Name</label>
									<input
										type="text"
										name="medicine_name"
										value={formData.medicine_name}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
								<div className="col-lg-6 mt-3">
									<label className="form-label">Slug</label>
									<input
										type="text"
										name="slug"
										value={formData.slug}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6 mt-3">
									<label className="form-label">Medicine Type</label>
									<input
										type="text"
										name="medicine_type"
										value={formData.medicine_type}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
								<div className="col-lg-6 mt-3">
									<label className="form-label">Pack Size</label>
									<input
										type="number"
										name="pack_size"
										value={formData.pack_size}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6 mt-3">
									<label className="form-label">Unit Price</label>
									<input
										type="number"
										name="unit_price"
										value={formData.unit_price}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
								<div className="col-lg-6 mt-3">
									<label className="form-label">Total Case Pack</label>
									<input
										type="number"
										name="total_case_pack"
										value={formData.total_case_pack}
										onChange={handleChange}
										className="form-control"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6 mt-3">
									<div className="add-newplus">
										<label className="form-label">Category</label>
										<Link
											to="#"
											data-bs-toggle="modal"
											data-bs-target="#add-units-category"
										>
											<span>Add New</span>
										</Link>
									</div>
									<Select
										options={categories}
										onChange={handleCategoryChange}
										value={categories.find(
											(c) => c.value === formData.medicine_category
										)}
										placeholder="Select Category"
									/>
								</div>
								<div className="col-lg-6 mt-3">
									<label className="form-label">Stock Status</label>
									<select
										name="stocks"
										value={formData.stocks}
										onChange={handleChange}
										className="form-control"
									>
										<option value="Available">Available</option>
										<option value="Out of Stock">Out of Stock</option>
									</select>
								</div>
							</div>

							<div className="col-lg-12 mt-3">
								<label className="form-label">Description</label>
								<textarea
									name="description"
									value={formData.description}
									onChange={handleChange}
									className="form-control"
								></textarea>
							</div>

							<div className="col-lg-12 mt-3 mb-4">
								<button type="submit" className="btn btn-submit">
									Update Medicine
								</button>
								<button type="button" className="btn btn-cancel ms-2">
									Cancel
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>

			{/* Modals */}
			<AddCategory onCategoryAdded={() => window.location.reload()} />
		</div>
	);
};

export default EditProduct;
