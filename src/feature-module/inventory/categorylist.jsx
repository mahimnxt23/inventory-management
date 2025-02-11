import {
	ChevronUp,
	PlusCircle,
	RotateCcw,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddCategoryList from "../../core/modals/inventory/addcategorylist";
import EditCategoryList from "../../core/modals/inventory/editcategorylist";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";

const CategoryList = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);
	const dataSource = useSelector((state) => state.categotylist_data);

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
			sorter: (a, b) => a.Code.length - b.Code.length,
		},
		{
			title: "Category",
			dataIndex: "category",
			sorter: (a, b) => a.category.length - b.category.length,
		},
		{
			title: "Status",
			dataIndex: "status",
			render: (text) => (
				<span className="badge badge-linesuccess">
					<Link to="#"> {text}</Link>
				</span>
			),
			sorter: (a, b) => a.status.length - b.status.length,
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
							data-bs-target="#edit-category"
						>
							<Edit data-feather="edit" className="feather-edit"></Edit>
						</Link>
						<Link className="confirm-text p-2" to="#">
							<Trash2
								data-feather="trash-2"
								className="feather-trash-2"
								onClick={showConfirmationAlert}
							></Trash2>
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
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="add-item d-flex">
							<div className="page-title">
								<h4>Category</h4>
								<h6>Manage your categories</h6>
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
							<Link
								to="#"
								className="btn btn-added"
								data-bs-toggle="modal"
								data-bs-target="#add-category"
							>
								<PlusCircle className="me-2" />
								Add New Category
							</Link>
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
			</div>
			<AddCategoryList />
			<EditCategoryList />
		</div>
	);
};

export default CategoryList;
