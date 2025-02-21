import axios from "axios";
import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Breadcrumbs from "../../core/breadcrumbs";
import ManageStockModal from "../../core/modals/stocks/managestockModal";
import Table from "../../core/pagination/datatable";

const API_URL = "https://billing.neuralionicsoft.com/api/medicinestocks/";

const Managestock = () => {
	const [stockData, setStockData] = useState([]); // Holds stock data
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchStockData();
	}, []);

	// Fetch stock data
	const fetchStockData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(API_URL);
			// Ensure the response is valid and has expected structure
			setStockData(
				Array.isArray(response.data.medicine_data)
					? response.data.medicine_data
					: []
			);
		} catch (err) {
			setError(err.message);
			setStockData([]); // Prevent crash if error occurs
		} finally {
			setLoading(false);
		}
	};

	// Delete stock entry
	const deleteStock = async (id) => {
		try {
			await axios.delete(`${API_URL}${id}/`);
			setStockData(stockData.filter((item) => item.id !== id));

			MySwal.fire({
				title: "Deleted!",
				text: "Stock entry has been removed.",
				icon: "success",
				confirmButtonText: "OK",
			});
		} catch (error) {
			Swal.fire("Error", "Could not delete stock entry!", "error");
		}
	};

	const MySwal = withReactContent(Swal);

	// Confirmation alert before deletion
	const showConfirmationAlert = (id) => {
		MySwal.fire({
			title: "Are you sure?",
			text: "This action cannot be undone!",
			showCancelButton: true,
			confirmButtonColor: "#00ff00",
			confirmButtonText: "Yes, delete it!",
			cancelButtonColor: "#ff0000",
			cancelButtonText: "Cancel",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await deleteStock(id);
			}
		});
	};

	// Table columns
	const columns = [
		{
			title: "Medicine ID",
			dataIndex: "medicine",
		},
		{
			title: "Total Case Pack",
			dataIndex: "total_case_pack",
		},
		{
			title: "Purchase Price",
			dataIndex: "purchase_price",
		},
		{
			title: "Total Amount",
			dataIndex: "total_amount",
		},
		{
			title: "Created Date",
			dataIndex: "created_at",
			render: (date) => (date ? new Date(date).toLocaleDateString() : "N/A"),
		},
		{
			title: "Action",
			dataIndex: "action",
			render: (_, record) => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						<Link
							className="me-2 p-2"
							to="#"
							data-bs-toggle="modal"
							data-bs-target="#edit-units"
						>
							<Edit className="feather-edit" />
						</Link>
						<Link
							className="confirm-text p-2"
							to="#"
							onClick={() => showConfirmationAlert(record.id)}
						>
							<Trash2 className="feather-trash-2" />
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
		<div className="page-wrapper">
			<div className="content">
				<Breadcrumbs
					maintitle="Manage Stock"
					subtitle="Manage your stock"
					addButton="Add New Entry"
				/>

				{/* Show a message when there are no entries */}
				{stockData.length === 0 ? (
					<div className="alert alert-info text-center">
						No stock records found.
					</div>
				) : (
					<div className="card table-list-card">
						<div className="card-body">
							<div className="table-responsive">
								<Table columns={columns} dataSource={stockData} rowKey="id" />
							</div>
						</div>
					</div>
				)}
			</div>

			<ManageStockModal />
		</div>
	);
};

export default Managestock;
