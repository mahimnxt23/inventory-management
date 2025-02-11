import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Edit, Trash2 } from "react-feather";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Breadcrumbs from "../../core/breadcrumbs";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import ManageStockModal from "../../core/modals/stocks/managestockModal";
import Table from "../../core/pagination/datatable";

const Managestock = () => {
	const data = useSelector((state) => state.managestockdata);

	const columns = [
		{
			title: "Product",
			dataIndex: "Product",
			render: (text, record) => (
				<span className="userimgname">
					<Link to="#" className="product-img">
						<ImageWithBasePath alt="img" src={record.Product.Image} />
					</Link>
					<Link to="#">{record.Product.Name}</Link>
				</span>
			),
			sorter: (a, b) => a.Product.Name.length - b.Product.Name.length,
		},
		{
			title: "Date",
			dataIndex: "Date",
			sorter: (a, b) => a.Email.length - b.Email.length,
		},
		{
			title: "Quantity",
			dataIndex: "Quantity",
			sorter: (a, b) => a.Quantity.length - b.Quantity.length,
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
				<Breadcrumbs
					maintitle="Manage Stock"
					subtitle="Manage your stock"
					addButton="Add New Entry"
				/>

				{/* /product list */}
				<div className="card table-list-card">
					<div className="card-body">
						<div className="table-responsive">
							<Table
								className="table datanew"
								columns={columns}
								dataSource={data}
								rowKey={(record) => record.id}
								pagination={true}
							/>
						</div>
					</div>
				</div>
				{/* /product list */}
			</div>
			<ManageStockModal />
		</div>
	);
};

export default Managestock;
