import {
	ChevronUp,
	PlusCircle,
	RotateCcw,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddUnit from "../../core/modals/inventory/addunit";
import EditUnit from "../../core/modals/inventory/editunit";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";

export const Units = () => {
	const dataSource = useSelector((state) => state.unit_data);
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

	const columns = [
		{
			title: "Serial No.",
			dataIndex: "serialno",
			sorter: (a, b) => a.serialno.length - b.serialno.length,
		},
		{
			title: "Medicine name",
			dataIndex: "medicinename",
			sorter: (a, b) => a.medicinename.length - b.medicinename.length,
		},
		{
			title: "Responsible Employee",
			dataIndex: "resemployee",
			sorter: (a, b) => a.resemployee.length - b.resemployee.length,
		},
		{
			title: "Lost quantity",
			dataIndex: "lostquantity",
			sorter: (a, b) => a.lostquantity.length - b.lostquantity.length,
		},
		{
			title: "Reason",
			dataIndex: "reason",
			sorter: (a, b) => a.reason.length - b.reason.length,
		},
		{
			title: "Date",
			dataIndex: "date",
			sorter: (a, b) => a.date.length - b.date.length,
		},
		{
			title: "Actions",
			dataIndex: "actions",
			key: "actions",
			render: () => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						<Link
							className="me-2 p-2"
							to="#"
							data-bs-toggle="modal"
							data-bs-target="#edit-units"
						>
							<i data-feather="edit" className="feather-edit"></i>
						</Link>
						<Link className="confirm-text p-2" to="#">
							<i
								data-feather="trash-2"
								className="feather-trash-2"
								onClick={showConfirmationAlert}
							></i>
						</Link>
					</div>
				</div>
			),
		},
	];
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
		<>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>Broken Bootle Units</h4>
								<h6>Manage your broken units</h6>
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
						<div className="page-btn">
							<a
								to="#"
								className="btn btn-added"
								data-bs-toggle="modal"
								data-bs-target="#add-units"
							>
								<PlusCircle className="me-2" />
								Add New Entry
							</a>
						</div>
					</div>
					{/* /product list */}
					<div className="card table-list-card">
						<div className="card-body">
							<div className="table-responsive">
								<Table columns={columns} dataSource={dataSource} />
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
				<AddUnit />
				<EditUnit />
			</div>
		</>
	);
};
