import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { purchaseslist } from "../../core/json/purchaselistdata";
import AddPurchases from "../../core/modals/purchases/addpurchases";
import EditPurchases from "../../core/modals/purchases/editpurchases";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";

const PurchasesList = () => {
	const columns = [
		{
			title: "SupplierName",
			dataIndex: "supplierName",
			sorter: (a, b) => a.supplierName.length - b.supplierName.length,
		},
		{
			title: "Reference",
			dataIndex: "reference",
			sorter: (a, b) => a.reference.length - b.reference.length,
		},

		{
			title: "Date",
			dataIndex: "date",
			sorter: (a, b) => a.date.length - b.date.length,
		},

		{
			title: "Status",
			dataIndex: "status",
			render: (text) => (
				<span
					className={`badges ${
						text === "Received" ? "status-badge" : "badge-bgdanger"
					}`}
				>
					{text}
				</span>
			),
			sorter: (a, b) => a.status.length - b.status.length,
		},
		{
			title: "GrandTotal",
			dataIndex: "grandTotal",
			sorter: (a, b) => a.grandTotal.length - b.grandTotal.length,
		},
		{
			title: "Paid",
			dataIndex: "paid",
			sorter: (a, b) => a.paid.length - b.paid.length,
		},
		{
			title: "Due",
			dataIndex: "due",
			sorter: (a, b) => a.due.length - b.due.length,
		},
		{
			title: "CreatedBy",
			dataIndex: "createdBy",
			render: (text) => (
				<span
					className={`badges ${
						text === "Paid" ? "badge-linesuccess" : "badge-linedangered"
					}`}
				>
					{text}
				</span>
			),
			sorter: (a, b) => a.createdBy.length - b.createdBy.length,
		},

		{
			title: "Actions",
			dataIndex: "actions",
			key: "actions",
			render: () => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						<Link className="me-2 p-2" to="#">
							<i data-feather="eye" className="feather-eye"></i>
						</Link>
						<Link
							className="me-2 p-2"
							data-bs-toggle="modal"
							data-bs-target="#edit-units"
						>
							<i data-feather="edit" className="feather-edit"></i>
						</Link>
						<Link
							className="confirm-text p-2"
							to="#"
							onClick={showConfirmationAlert}
						>
							<i data-feather="trash-2" className="feather-trash-2"></i>
						</Link>
					</div>
				</div>
			),
		},
	];
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

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

	const showConfirmationAlert = () => {
		MySwal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: "#00ff00",
			confirmButtonText: "Yes, delete it!",
			cancelButtonColor: "#ff0000",
			cancelButtonText: "Cancel",
		}).then((result) => {
			if (result.isConfirmed) {
				MySwal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					className: "btn btn-success",
					confirmButtonText: "OK",
					customClass: {
						confirmButton: "btn btn-success",
					},
				});
			} else {
				MySwal.close();
			}
		});
	};

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
								<Table columns={columns} dataSource={purchaseslist} />
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
