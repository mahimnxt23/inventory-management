// import React from "react";
// import { Link } from "react-router-dom";
// import { all_routes } from "../../../Router/all_routes";

// const AddCategory = () => {
//   const route = all_routes;
//   return (
//     <>
//       {/* Add Category */}
//       <div className="modal fade" id="add-units-category">
//         <div className="modal-dialog modal-dialog-centered custom-modal-two">
//           <div className="modal-content">
//             <div className="page-wrapper-new p-0">
//               <div className="content">
//                 <div className="modal-header border-0 custom-modal-header">
//                   <div className="page-title">
//                     <h4>Add New Category</h4>
//                   </div>
//                   <button
//                     type="button"
//                     className="close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   >
//                     <span aria-hidden="true">×</span>
//                   </button>
//                 </div>
//                 <div className="modal-body custom-modal-body">
//                   <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input type="text" className="form-control" />
//                   </div>
//                   <div className="modal-footer-btn">
//                     <Link
//                       to="#"
//                       className="btn btn-cancel me-2"
//                       data-bs-dismiss="modal"
//                     >
//                       Cancel
//                     </Link>
//                     <Link to={route.addproduct} className="btn btn-submit">
//                       Submit
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Add Category */}
//     </>
//   );
// };

// export default AddCategory;

import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
	const [categoryName, setCategoryName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// Handle input change
	const handleChange = (e) => {
		setCategoryName(e.target.value);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await axios.post(
				"https://billing.neuralionicsoft.com/api/medicine-categories/",
				{ category_name: categoryName }
			);

			console.log("Category added:", response.data);

			// Close the modal
			document.querySelector("#add-units-category .close").click();

			// Reload the page
			window.location.reload();
		} catch (err) {
			console.error("Error adding category:", err);
			setError("Failed to add category. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{/* Add Category Modal */}
			<div className="modal fade" id="add-units-category">
				<div className="modal-dialog modal-dialog-centered custom-modal-two">
					<div className="modal-content">
						<div className="page-wrapper-new p-0">
							<div className="content">
								<div className="modal-header border-0 custom-modal-header">
									<div className="page-title">
										<h4>Add New Category</h4>
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
									<form onSubmit={handleSubmit}>
										<div className="mb-3">
											<label className="form-label">Name</label>
											<input
												type="text"
												className="form-control"
												value={categoryName}
												onChange={handleChange}
												required
											/>
										</div>
										{error && <p className="text-danger">{error}</p>}
										<div className="modal-footer-btn">
											<button
												type="button"
												className="btn btn-cancel me-2"
												data-bs-dismiss="modal"
											>
												Cancel
											</button>
											<button
												type="submit"
												className="btn btn-submit"
												disabled={loading}
											>
												{loading ? "Submitting..." : "Submit"}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Category Modal */}
		</>
	);
};

export default AddCategory;
