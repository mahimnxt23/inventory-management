import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getPurchaseslist } from "../../core/json/purchaselistdata";
import AddPurchases from "../../core/modals/purchases/addpurchases";
import EditPurchases from "../../core/modals/purchases/editpurchases";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";

const PurchasesList = () => {
	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			render: (_, __, index) => index + 1,
		},
		{
			title: "Customer ID",
			dataIndex: "customer_user",
		},
		{
			title: "Order No.",
			dataIndex: "order_no",
		},
		{
			title: "Order Items",
			dataIndex: "order_items",
			render: (items) => (
				<>
					{items.map((item, index) => (
						<p key={index}>
							Med ID: {item.medicine} x
							<strong>({item.medicine_quantity})</strong>
						</p>
					))}
				</>
			),
		},
		{
			title: "Order Date",
			dataIndex: "order_date",
			render: (date) => new Date(date).toLocaleDateString(),
		},
		{
			title: "Order Status",
			dataIndex: "order_status",
			render: (text) => (
				<span
					className={`badges ${
						text === "Received" ? "status-badge" : "badge-bgdanger"
					}`}
				>
					{text}
				</span>
			),
		},
		{
			title: "Paid Amount",
			dataIndex: "total_amount",
		},
		{
			title: "Tax",
			dataIndex: "tax",
		},
		{
			title: "Discount",
			dataIndex: "discount",
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

	const handleDelete = async (id) => {
		try {
			await deleteOrder(id);
			setOrders(orders.filter((order) => order.id !== id));

			MySwal.fire({
				title: "Deleted!",
				text: "Order has been removed.",
				icon: "success",
				confirmButtonText: "OK",
			});
		} catch (error) {
			MySwal.fire("Error", "Could not delete order!", "error");
		}
	};

	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	useEffect(() => {
		fetchOrderData();
	}, []);

	const fetchOrderData = async () => {
		setLoading(true);
		try {
			const ordersList = await getPurchaseslist();
			setOrders(ordersList);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const deleteOrder = async (id) => {
		try {
			const response = await fetch(`/api/orders/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete order");
			}

			return true;
		} catch (error) {
			console.error("Error deleting order:", error);
			throw error;
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header transfer">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>Purchase List</h4>
								<h6>Manage your purchases</h6>
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
							<div className="table-responsive product-list">
								<Table columns={columns} dataSource={orders} />
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
			</div>
			<AddPurchases />
			<EditPurchases />
		</div>
	);
};

export default PurchasesList;
