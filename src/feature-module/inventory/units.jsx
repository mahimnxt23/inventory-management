import axios from "axios";
// Edit,
import { Trash2 } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddUnit from "../../core/modals/inventory/addunit";
import EditUnit from "../../core/modals/inventory/editunit";
import Table from "../../core/pagination/datatable";

const API_URL = "https://billing.neuralionicsoft.com/api/bottlebreakages/";

export const Units = () => {
	const [units, setUnits] = useState([]); // Ensure state is always an array
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchUnitsData();
	}, []);

	// Fetch Bottle Breakage Data
	const fetchUnitsData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(API_URL);

			// Ensure the response is an array, even if empty
			setUnits(Array.isArray(response.data) ? response.data : []);
		} catch (err) {
			setError(err.message);
			setUnits([]); // Ensure state is reset
		} finally {
			setLoading(false);
		}
	};

	// Delete Entry
	const deleteUnit = async (id) => {
		try {
			await axios.delete(`${API_URL}${id}/`);
			setUnits(units.filter((unit) => unit.id !== id));

			Swal.fire({
				title: "Deleted!",
				text: "Entry has been removed.",
				icon: "success",
				confirmButtonText: "OK",
			});
		} catch (error) {
			Swal.fire("Error", "Could not delete entry!", "error");
		}
	};

	// Confirmation Alert Before Deletion
	const showConfirmationAlert = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "This action cannot be undone!",
			showCancelButton: true,
			confirmButtonColor: "#00ff00",
			confirmButtonText: "Yes, delete it!",
			cancelButtonColor: "#ff0000",
			cancelButtonText: "Cancel",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await deleteUnit(id);
			}
		});
	};

	// Table Columns
	const columns = [
		{ title: "Medicine ID", dataIndex: "medicine" },
		{ title: "Responsible Employee", dataIndex: "responsible_employee" },
		{ title: "Lost Quantity", dataIndex: "lost_quantity" },
		{ title: "Reason", dataIndex: "reason" },
		{
			title: "Date",
			dataIndex: "date_time",
			render: (date) => (date ? new Date(date).toLocaleDateString() : "N/A"),
		},
		{
			title: "Action",
			dataIndex: "action",
			render: (_, record) => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						{/* <Link
							className="me-2 p-2"
							to="#"
							data-bs-toggle="modal"
							data-bs-target="#edit-units"
						>
							<Edit className="info-img" />
							Edit
						</Link> */}
						<Link
							className="confirm-text p-2"
							to="#"
							onClick={() => showConfirmationAlert(record.id)}
						>
							<Trash2 className="info-img" />
							Delete
						</Link>
					</div>
				</div>
			),
		},
	];

	// Show loading state
	if (loading) return <p>Loading...</p>;

	// Show error message if API request fails
	if (error) return <p className="text-danger">Error: {error}</p>;

	return (
		<>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>Broken Bottle Units</h4>
								<h6>Manage your broken units</h6>
							</div>
						</div>
						<div className="page-btn">
							<a
								to="#"
								className="btn btn-added"
								data-bs-toggle="modal"
								data-bs-target="#add-units"
							>
								Add New Entry
							</a>
						</div>
					</div>

					{/* Show a message when there are no entries */}
					{units.length === 0 ? (
						<div className="alert alert-info text-center">
							No bottle breakage records found.
						</div>
					) : (
						<div className="card table-list-card">
							<div className="card-body">
								<div className="table-responsive">
									<Table columns={columns} dataSource={units} rowKey="id" />
								</div>
							</div>
						</div>
					)}
				</div>
				<AddUnit />
				<EditUnit />
			</div>
		</>
	);
};
