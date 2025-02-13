import {
	ChevronUp,
	PlusCircle,
	RotateCcw,
} from "feather-icons-react/build/IconComponents";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setToogleHeader } from "../../core/redux/action";

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

import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getMedicinsData } from "../../core/json/productlistdata";
import Table from "../../core/pagination/datatable";

const ProductList = () => {
	const [medicins, setMedicins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.getMedicinsData);

	useEffect(() => {
		fetchMedicinData();
	}, []);

	const fetchMedicinData = async () => {
		setLoading(true);
		try {
			const medicinsList = await getMedicinsData();
			setMedicins(medicinsList);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const deleteMedicin = async (id) => {
		try {
			const response = await fetch(`/api/medicins/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete medicin");
			}

			return true;
		} catch (error) {
			console.error("Error deleting medicin:", error);
			throw error;
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

	const handleDelete = async (id) => {
		try {
			await deleteMedicin(id);
			setMedicins(medicins.filter((medicin) => medicin.id !== id));

			MySwal.fire({
				title: "Deleted!",
				text: "Medicin has been removed.",
				icon: "success",
				confirmButtonText: "OK",
			});
		} catch (error) {
			MySwal.fire("Error", "Could not delete medicin!", "error");
		}
	};

	const columns = [
		{
			title: "Serial No.",
			dataIndex: "SerialNo",
			render: (_, __, index) => index + 1,
		},
		{
			title: "Medicin Name",
			dataIndex: "medicine_name",
			render: (text, record) => (
				<span className="productimgname">
					<Link to="" className="product-img stock-img">
						<img alt="" src={record.medicine_picture} />
					</Link>
					<Link to="">{text}</Link>
				</span>
			),
		},
		{ title: "Medicin Type", dataIndex: "medicine_type" },
		{ title: "Medicin Category", dataIndex: "medicine_category" },
		{ title: "Bottle Capacity", dataIndex: "bottle_capacity" },
		{ title: "Total Bottle", dataIndex: "total_medicine" },
		{ title: "Created Date", dataIndex: "created_at" },
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
			</div>
		</div>
	);
};

export default ProductList;
