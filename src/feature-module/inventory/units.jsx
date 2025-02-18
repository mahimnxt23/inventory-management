import {
	ChevronUp,
	PlusCircle,
	RotateCcw,
} from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getUnitsdata } from "../../core/json/unitsdata";
import AddUnit from "../../core/modals/inventory/addunit";
import EditUnit from "../../core/modals/inventory/editunit";
import Table from "../../core/pagination/datatable";
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

export const Units = () => {
	const [units, setUnits] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);

	useEffect(() => {
		fetchUnitsData();
	}, []);

	const fetchUnitsData = async () => {
		setLoading(true);
		try {
			const UnitsList = await getUnitsdata();
			setUnits(UnitsList);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const deleteUnit = async (id) => {
		try {
			const response = await fetch(`/api/bottlebreakages/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete unit");
			}

			return true;
		} catch (error) {
			console.error("Error deleting unit:", error);
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
			await deleteUnit(id);
			setUnits(units.filter((unit) => unit.id !== id));

			MySwal.fire({
				title: "Deleted!",
				text: "Unit has been removed.",
				icon: "success",
				confirmButtonText: "OK",
			});
		} catch (error) {
			MySwal.fire("Error", "Could not delete units!", "error");
		}
	};

	const columns = [
		{
			title: "Serial No.",
			dataIndex: "id",
			// dataIndex: "serialno",
			// render: (_, __, index) => index + 1,
			// sorter: (a, b) => a.serialno.length - b.serialno.length,
		},
		{
			title: "Medicine name",
			dataIndex: "medicine",
			// sorter: (a, b) => a.medicinename.length - b.medicinename.length,
		},
		{
			title: "Responsible Employee",
			dataIndex: "responsible_employee",
			// sorter: (a, b) => a.resemployee.length - b.resemployee.length,
		},
		{
			title: "Lost quantity",
			dataIndex: "lost_quantity",
			// sorter: (a, b) => a.lostquantity.length - b.lostquantity.length,
		},
		{
			title: "Reason",
			dataIndex: "reason",
			// sorter: (a, b) => a.reason.length - b.reason.length,
		},
		{
			title: "Date",
			dataIndex: "date_time",
			render: (date) => new Date(date).toLocaleDateString(),
			// sorter: (a, b) => a.date.length - b.date.length,
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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

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
								<Table columns={columns} dataSource={units} />
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
