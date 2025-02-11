import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";
// import CustomerModal from "../../core/modals/peoples/customerModal";

const Customers = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.customerdata);

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
			sorter: (a, b) => a.Code.length - b.Code.length,
		},
		{
			title: "Customer Name",
			dataIndex: "CustomerName",
			sorter: (a, b) => a.CustomerName.length - b.CustomerName.length,
		},
		{
			title: "Email",
			dataIndex: "Email",
			sorter: (a, b) => a.Email.length - b.Email.length,
		},
		{
			title: "Phone",
			dataIndex: "Phone",
			sorter: (a, b) => a.Phone.length - b.Phone.length,
		},
		{
			title: "Action",
			dataIndex: "action",
			render: () => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						<div className="input-block add-lists"></div>

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
							onClick={showConfirmationAlert}
						>
							<Trash2 className="feather-trash-2" />
						</Link>
					</div>
				</div>
			),
			sorter: (a, b) => a.createdby.length - b.createdby.length,
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
								dataSource={data}
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
