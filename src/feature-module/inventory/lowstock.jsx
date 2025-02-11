import {
	ChevronUp,
	Mail,
	RotateCcw,
	Sliders,
} from "feather-icons-react/build/IconComponents";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Filter } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import EditLowStock from "../../core/modals/inventory/editlowstock";
import Table from "../../core/pagination/datatable";
import { setToogleHeader } from "../../core/redux/action";

const LowStock = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.toggle_header);
	const dataSource = useSelector((state) => state.lowstock_data);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
	};

	const oldandlatestvalue = [
		{ value: "date", label: "Sort by Date" },
		{ value: "newest", label: "Newest" },
		{ value: "oldest", label: "Oldest" },
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

	const columns = [
		{
			title: "Warehouse",
			dataIndex: "warehouse",

			sorter: (a, b) => a.warehouse.length - b.warehouse.length,
			width: "5%",
		},
		{
			title: "Store",
			dataIndex: "store",
			sorter: (a, b) => a.store.length - b.store.length,
		},
		{
			title: "Product",
			dataIndex: "product",
			render: (text, record) => (
				<span className="productimgname">
					<Link to="#" className="product-img stock-img">
						<ImageWithBasePath alt="" src={record.img} />
					</Link>
					{text}
				</span>
			),
			sorter: (a, b) => a.product.length - b.product.length,
		},
		{
			title: "Category",
			dataIndex: "category",
			sorter: (a, b) => a.category.length - b.category.length,
		},
		{
			title: "SkU",
			dataIndex: "sku",
			sorter: (a, b) => a.sku.length - b.sku.length,
		},
		{
			title: "Qty",
			dataIndex: "qty",
			sorter: (a, b) => a.qty.length - b.qty.length,
		},
		{
			title: "Qty Alert",
			dataIndex: "qtyalert",
			sorter: (a, b) => a.qtyalert.length - b.qtyalert.length,
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
							data-bs-target="#edit-stock"
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
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="page-title me-auto">
							<h4>Low Stocks</h4>
							<h6>Manage your low stocks</h6>
						</div>
						<ul className="table-top-head">
							<li>
								<div className="status-toggle d-flex justify-content-between align-items-center">
									<input
										type="checkbox"
										id="user2"
										className="check"
										defaultChecked="true"
									/>
									<label htmlFor="user2" className="checktoggle">
										checkbox
									</label>
									Auto Notify
								</div>
							</li>
							<li className="me-4">
								<Link
									to=""
									className="btn btn-secondary"
									data-bs-toggle="modal"
									data-bs-target="#send-email"
								>
									<Mail className="feather-mail" />
									Manually Send Email
								</Link>
							</li>
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
					<div className="table-tab">
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-home"
								role="tabpanel"
								aria-labelledby="pills-home-tab"
							>
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
							<div
								className="tab-pane fade"
								id="pills-profile"
								role="tabpanel"
								aria-labelledby="pills-profile-tab"
							>
								{/* /product list */}
								<div className="card table-list-card">
									<div className="card-body">
										<div className="table-top">
											<div className="search-set">
												<div className="search-input">
													<input
														type="text"
														placeholder="Search"
														className="form-control form-control-sm formsearch"
													/>
													<Link to className="btn btn-searchset">
														<i
															data-feather="search"
															className="feather-search"
														/>
													</Link>
												</div>
											</div>
											<div className="search-path">
												<Link
													className={`btn btn-filter ${
														isFilterVisible ? "setclose" : ""
													}`}
													id="filter_search"
												>
													<Filter
														className="filter-icon"
														onClick={toggleFilterVisibility}
													/>
													<span onClick={toggleFilterVisibility}>
														<ImageWithBasePath
															src="assets/img/icons/closes.svg"
															alt="img"
														/>
													</span>
												</Link>
											</div>
											<div className="form-sort">
												<Sliders className="info-img" />
												<Select
													className="img-select"
													classNamePrefix="react-select"
													options={oldandlatestvalue}
													placeholder="Newest"
												/>
											</div>
										</div>
										{/* /Filter */}
										<div className="card" id="filter_inputs1">
											<div className="card-body pb-0">
												<div className="row">
													<div className="col-lg-3 col-sm-6 col-12">
														<div className="input-blocks">
															<i data-feather="box" className="info-img" />
															<select className="react-select">
																<option>Choose Product</option>
																<option>Lenovo 3rd Generation </option>
																<option>Nike Jordan</option>
																<option>Amazon Echo Dot </option>
															</select>
														</div>
													</div>
													<div className="col-lg-3 col-sm-6 col-12">
														<div className="input-blocks">
															<i data-feather="zap" className="info-img" />
															<select className="react-select">
																<option>Choose Category</option>
																<option>Laptop</option>
																<option>Shoe</option>
																<option>Speaker</option>
															</select>
														</div>
													</div>
													<div className="col-lg-3 col-sm-6 col-12">
														<div className="input-blocks">
															<i data-feather="archive" className="info-img" />
															<select className="react-select">
																<option>Choose Warehouse</option>
																<option>Lavish Warehouse </option>
																<option>Lobar Handy </option>
																<option>Traditional Warehouse </option>
															</select>
														</div>
													</div>
													<div className="col-lg-3 col-sm-6 col-12 ms-auto">
														<div className="input-blocks">
															<Link className="btn btn-filters ms-auto">
																{" "}
																<i
																	data-feather="search"
																	className="feather-search"
																/>{" "}
																Search{" "}
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* /Filter */}
										<div className="table-responsive">
											<Table columns={columns} dataSource={dataSource} />
										</div>
									</div>
								</div>
								{/* /product list */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<EditLowStock />
		</div>
	);
};

export default LowStock;
