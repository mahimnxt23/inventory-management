import {
	ChevronUp,
	Edit,
	PlusCircle,
	RotateCcw,
	Trash2,
} from "feather-icons-react/build/IconComponents";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Brand from "../../core/modals/inventory/brand";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";
import { all_routes } from "../../Router/all_routes";

const ProductList = () => {
	const dataSource = useSelector((state) => state.product_list);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	const route = all_routes;

	const columns = [
		{
			title: "Medicine Name",
			dataIndex: "medicinename",
			sorter: (a, b) => a.medicinename.length - b.medicinename.length,
		},
		{
			title: "Medicine Type",
			dataIndex: "medicinetype",
			sorter: (a, b) => a.medicinetype.length - b.medicinetype.length,
		},

		{
			title: "Medicine Category",
			dataIndex: "medicinecategory",
			sorter: (a, b) => a.medicinecategory.length - b.medicinecategory.length,
		},

		{
			title: "Bottle Capacity",
			dataIndex: "bottlecapacity",
			sorter: (a, b) => a.bottlecapacity.length - b.bottlecapacity.length,
		},
		{
			title: "Total Bottle",
			dataIndex: "totalbottle",
			sorter: (a, b) => a.totalbottle.length - b.totalbottle.length,
		},
		{
			title: "Created Date",
			dataIndex: "createdate",
			sorter: (a, b) => a.createdate.length - b.createdate.length,
		},
		{
			title: "Action",
			dataIndex: "action",
			render: () => (
				<div className="action-table-data">
					<div className="edit-delete-action">
						<div className="input-block add-lists"></div>
						<Link className="me-2 p-2" to={route.editproduct}>
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
	return (
		<div className="page-wrapper">
			<div className="content">
				<div className="page-header">
					<div className="add-item d-flex">
						<div className="page-title">
							<h4>Product List</h4>
							<h6>Manage your products</h6>
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
									onClick={(e) => {
										e.preventDefault();
										dispatch(setToogleHeader(!data));
									}}
								>
									<ChevronUp />
								</Link>
							</OverlayTrigger>
						</li>
					</ul>
					<div className="page-btn">
						<Link to={route.addproduct} className="btn btn-added">
							<PlusCircle className="me-2 iconsize" />
							Add New Product
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
				<Brand />
			</div>
		</div>
	);
};

export default ProductList;
