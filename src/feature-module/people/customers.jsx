import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToogleHeader } from "../../core/redux/action";

// import { Edit, Trash2 } from "react-feather";
import React, { useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getCustomerData } from "../../core/json/customer_data";
import Table from "../../core/pagination/datatable";

const Customers = () => {
	const [customers, setCustomers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	useEffect(() => {
		fetchCustomerData();
	}, []);

	const fetchCustomerData = async () => {
		setLoading(true);
		try {
			const customerList = await getCustomerData();
			setCustomers(customerList);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const MySwal = withReactContent(Swal);

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
				await handleDelete(id);
			}
		});
	};

	const deleteCustomer = async (id) => {
		try {
			const response = await fetch(
				`https://billing.neuralionicsoft.com/api/customers/${id}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				throw new Error("Failed to delete customer");
			}

			return true;
		} catch (error) {
			console.error("Error deleting customer:", error);
			throw error;
		}
	};

	const handleDelete = async (id) => {
		try {
			const isDeleted = await deleteCustomer(id);

			if (isDeleted) {
				setCustomers(customers.filter((customer) => customer.id !== id));

				// Show success alert
				MySwal.fire({
					title: "Deleted!",
					text: "Customer has been removed.",
					icon: "success",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			// Show error alert
			MySwal.fire("Error", "Could not delete customer!", "error");
		}
	};

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

	const columns = [
		{
			title: "Serial No.",
			dataIndex: "SerialNo",
			render: (_, __, index) => index + 1,
		},
		{ title: "Customer Name", dataIndex: "customer_name" },
		{ title: "Email", dataIndex: "customer_email" },
		{ title: "Phone", dataIndex: "customer_phone" },
		{ title: "Address", dataIndex: "customer_address" },
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
							<Edit className="feather-edit" />
						</Link> */}

						<Link
							className="confirm-text p-2"
							to="#"
							onClick={() => {
								showConfirmationAlert(record.id);
							}}
						>
							<Trash2 className="feather-trash-2" />
						</Link>
					</div>
				</div>
			),
		},
	];

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>Customer List</h4>
							<h6>Manage Your Expense Category</h6>
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
				</div>

				{/* /product list */}
				<div className="card table-list-card">
					<div className="card-body">
						<div className="table-responsive">
							<Table
								className="table datanew"
								columns={columns}
								dataSource={customers}
							/>
						</div>
					</div>
				</div>
				{/* /product list */}
			</div>
		</div>
	);
};

export default Customers;
