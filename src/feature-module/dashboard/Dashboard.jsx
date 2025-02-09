import "bootstrap-daterangepicker/daterangepicker.css";
import { Calendar } from "feather-icons-react/build/IconComponents";
import React from "react";
import Chart from "react-apexcharts";
import CountUp from "react-countup";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { all_routes } from "../../Router/all_routes";

const Dashboard = () => {
	const route = all_routes;
	const currentYear = new Date().getFullYear();
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
	const options = {
		series: [
			{
				name: "Sales Analysis",
				data: [25, 30, 18, 15, 22, 20, 30, 20, 22, 18, 15, 20],
			},
		],
		chart: {
			height: 273,
			type: "area",
			zoom: {
				enabled: false,
			},
		},
		colors: ["#FF9F43"],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "straight",
		},
		title: {
			text: "",
			align: "left",
		},
		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		},
		yaxis: {
			min: 10,
			max: 60,
			tickAmount: 5,
			labels: {
				formatter: (val) => {
					return val / 1 + "K";
				},
			},
		},
		legend: {
			position: "top",
			horizontalAlign: "left",
		},
	};

	return (
		<div>
			<div className="page-wrapper">
				<div className="content">
					<div className="row">
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash1.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										<CountUp start={0} end={307144} duration={3} prefix="# " />
									</h5>
									<h6>Total Medicines</h6>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash1.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										<CountUp start={0} end={307144} duration={3} prefix="# " />
									</h5>
									<h6>Total Bottles of Medicines</h6>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash1.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										<CountUp start={0} end={307144} duration={3} prefix="# " />
									</h5>
									<h6>Total Orders</h6>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget dash1 w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash2.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										$
										<CountUp start={0} end={4385} duration={3} />
									</h5>
									<h6>Total Revenue Amount</h6>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget dash2 w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash3.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										$
										<CountUp
											start={0}
											end={385656.5}
											duration={3}
											decimals={1}
										/>
									</h5>
									<h6>Total Purchase Amount</h6>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-6 col-12 d-flex">
							<div className="dash-widget dash3 w-100">
								<div className="dash-widgetimg">
									<span>
										<ImageWithBasePath
											src="assets/img/icons/dash4.svg"
											alt="img"
										/>
									</span>
								</div>
								<div className="dash-widgetcontent">
									<h5>
										$
										<CountUp start={0} end={40000} duration={3} />
									</h5>
									<h6>Total Sales Amount</h6>
								</div>
							</div>
						</div>
					</div>
					{/* Button trigger modal */}
					<div className="row sales-board">
						<div className="col-12">
							<div className="card flex-fill default-cover">
								<div className="card-header d-flex justify-content-between align-items-center">
									<h5 className="card-title mb-0">Sales Analytics</h5>
									<div className="graph-sets">
										<div className="dropdown dropdown-wraper">
											<button
												className="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
												type="button"
												id="dropdown-sales"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<Calendar className="feather-14" />
												{currentYear}
											</button>
											<ul
												className="dropdown-menu"
												aria-labelledby="dropdown-sales"
											>
												<li>
													<Link to="#" className="dropdown-item">
														{currentYear}
													</Link>
												</li>
												<li>
													<Link to="#" className="dropdown-item">
														{currentYear - 1}
													</Link>
												</li>
												<li>
													<Link to="#" className="dropdown-item">
														{currentYear - 2}
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div id="sales-analysis" className="chart-set" />
									<Chart
										options={options}
										series={options.series}
										type="area"
										height={273}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="card flex-fill default-cover mb-4">
						<div className="card-header d-flex justify-content-between align-items-center">
							<h4 className="card-title mb-0">Recent Products</h4>
							<div className="view-all-link">
								<Link to="#" className="view-all d-flex align-items-center">
									View All
									<span className="ps-2 d-flex align-items-center">
										<ArrowRight className="feather-16" />
									</span>
								</Link>
							</div>
						</div>
						<div className="card-body">
							<div className="table-responsive dataview">
								<table className="table dashboard-recent-products">
									<thead>
										<tr>
											<th>SL No</th>
											<th>Product Name</th>
											<th>No of Bottles</th>
											<th>Total Medicine (ml/mg)</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td className="productimgname">
												<Link to={route.productlist} className="product-img">
													<ImageWithBasePath
														src="assets/img/products/stock-img-01.png"
														alt="product"
													/>
												</Link>
												<Link to={route.productlist}>Paracetamol</Link>
											</td>
											<td>25 bottles</td>
											<td>500 ml</td>
											<td>2025-02-08</td>
										</tr>
										<tr>
											<td>2</td>
											<td className="productimgname">
												<Link to={route.productlist} className="product-img">
													<ImageWithBasePath
														src="assets/img/products/stock-img-06.png"
														alt="product"
													/>
												</Link>
												<Link to={route.productlist}>Ibuprofen</Link>
											</td>
											<td>10 bottles</td>
											<td>200 mg</td>
											<td>2025-02-05</td>
										</tr>
										<tr>
											<td>3</td>
											<td className="productimgname">
												<Link to={route.productlist} className="product-img">
													<ImageWithBasePath
														src="assets/img/products/stock-img-02.png"
														alt="product"
													/>
												</Link>
												<Link to={route.productlist}>Amoxicillin</Link>
											</td>
											<td>15 bottles</td>
											<td>750 ml</td>
											<td>2025-02-07</td>
										</tr>
										<tr>
											<td>4</td>
											<td className="productimgname">
												<Link to={route.productlist} className="product-img">
													<ImageWithBasePath
														src="assets/img/products/stock-img-03.png"
														alt="product"
													/>
												</Link>
												<Link to={route.productlist}>Cetirizine</Link>
											</td>
											<td>20 bottles</td>
											<td>250 mg</td>
											<td>2025-02-01</td>
										</tr>
										<tr>
											<td>5</td>
											<td className="productimgname">
												<Link to={route.productlist} className="product-img">
													<ImageWithBasePath
														src="assets/img/products/stock-img-01.png"
														alt="product"
													/>
												</Link>
												<Link to={route.productlist}>Vitamin C Syrup</Link>
											</td>
											<td>30 bottles</td>
											<td>1,000 ml</td>
											<td>2025-02-09</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Latest Orders</h4>
						</div>
						<div className="card-body">
							<div className="table-responsive dataview">
								<table className="table dashboard-recent-products">
									<thead>
										<tr>
											<th>SL No</th>
											<th>Order ID</th>
											<th>Customer Name</th>
											<th>Total Medicine (ml/mg)</th>
											<th>Total Amount</th>
											<th>Status</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>#ORD001</td>
											<td>John Doe</td>
											<td>500 ml</td>
											<td>$125</td>
											<td>
												<span className="badge badge-linesuccess">
													Completed
												</span>
											</td>
											<td>2025-02-08</td>
										</tr>
										<tr>
											<td>2</td>
											<td>#ORD002</td>
											<td>Jane Smith</td>
											<td>200 mg</td>
											<td>$45</td>
											<td>
												<span className="badge badges-warning">Pending</span>
											</td>
											<td>2025-02-07</td>
										</tr>
										<tr>
											<td>3</td>
											<td>#ORD003</td>
											<td>Michael Brown</td>
											<td>750 ml</td>
											<td>$150</td>
											<td>
												<span className="badge badge-linedanger">
													Cancelled
												</span>
											</td>
											<td>2025-02-05</td>
										</tr>
										<tr>
											<td>4</td>
											<td>#ORD004</td>
											<td>Emily Davis</td>
											<td>250 mg</td>
											<td>$80</td>
											<td>
												<span className="badge badge-linesuccess">
													Completed
												</span>
											</td>
											<td>2025-02-06</td>
										</tr>
										<tr>
											<td>5</td>
											<td>#ORD005</td>
											<td>Chris Wilson</td>
											<td>1,000 ml</td>
											<td>$200</td>
											<td>
												<span className="badge badges-warning">
													In Progress
												</span>
											</td>
											<td>2025-02-09</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Expired Products</h4>
						</div>
						<div className="card-body">
							<div className="table-responsive dataview">
								<table className="table dashboard-expired-products">
									<thead>
										<tr>
											<th className="no-sort">
												<label className="checkboxs">
													<input type="checkbox" id="select-all" />
													<span className="checkmarks" />
												</label>
											</th>
											<th>Product</th>
											<th>SKU</th>
											<th>Manufactured Date</th>
											<th>Expired Date</th>
											<th className="no-sort">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks" />
												</label>
											</td>
											<td>
												<div className="productimgname">
													<Link to="#" className="product-img stock-img">
														<ImageWithBasePath
															src="assets/img/products/expire-product-01.png"
															alt="product"
														/>
													</Link>
													<Link to="#">Red Premium Handy </Link>
												</div>
											</td>
											<td>
												<Link to="#">PT006</Link>
											</td>
											<td>17 Jan 2023</td>
											<td>29 Mar 2023</td>
											<td className="action-table-data">
												<div className="edit-delete-action">
													<Link className="me-2 p-2" to="#">
														<i data-feather="edit" className="feather-edit" />
													</Link>
													<Link
														className=" confirm-text p-2"
														to="#"
														onClick={showConfirmationAlert}
													>
														<i
															data-feather="trash-2"
															className="feather-trash-2"
														/>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks" />
												</label>
											</td>
											<td>
												<div className="productimgname">
													<Link to="#" className="product-img stock-img">
														<ImageWithBasePath
															src="assets/img/products/expire-product-02.png"
															alt="product"
														/>
													</Link>
													<Link to="#">Iphone 14 Pro</Link>
												</div>
											</td>
											<td>
												<Link to="#">PT007</Link>
											</td>
											<td>22 Feb 2023</td>
											<td>04 Apr 2023</td>
											<td className="action-table-data">
												<div className="edit-delete-action">
													<Link className="me-2 p-2" to="#">
														<i data-feather="edit" className="feather-edit" />
													</Link>
													<Link
														className="confirm-text p-2"
														to="#"
														onClick={showConfirmationAlert}
													>
														<i
															data-feather="trash-2"
															className="feather-trash-2"
														/>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks" />
												</label>
											</td>
											<td>
												<div className="productimgname">
													<Link to="#" className="product-img stock-img">
														<ImageWithBasePath
															src="assets/img/products/expire-product-03.png"
															alt="product"
														/>
													</Link>
													<Link to="#">Black Slim 200 </Link>
												</div>
											</td>
											<td>
												<Link to="#">PT008</Link>
											</td>
											<td>18 Mar 2023</td>
											<td>13 May 2023</td>
											<td className="action-table-data">
												<div className="edit-delete-action">
													<Link className="me-2 p-2" to="#">
														<i data-feather="edit" className="feather-edit" />
													</Link>
													<Link
														className=" confirm-text p-2"
														to="#"
														onClick={showConfirmationAlert}
													>
														<i
															data-feather="trash-2"
															className="feather-trash-2"
														/>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks" />
												</label>
											</td>
											<td>
												<div className="productimgname">
													<Link to="#" className="product-img stock-img">
														<ImageWithBasePath
															src="assets/img/products/expire-product-04.png"
															alt="product"
														/>
													</Link>
													<Link to="#">Woodcraft Sandal</Link>
												</div>
											</td>
											<td>
												<Link to="#">PT009</Link>
											</td>
											<td>29 Mar 2023</td>
											<td>27 May 2023</td>
											<td className="action-table-data">
												<div className="edit-delete-action">
													<Link className="me-2 p-2" to="#">
														<i data-feather="edit" className="feather-edit" />
													</Link>
													<Link
														className=" confirm-text p-2"
														to="#"
														onClick={showConfirmationAlert}
													>
														<i
															data-feather="trash-2"
															className="feather-trash-2"
														/>
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks" />
												</label>
											</td>
											<td>
												<div className="productimgname">
													<Link to="#" className="product-img stock-img">
														<ImageWithBasePath
															src="assets/img/products/stock-img-03.png"
															alt="product"
														/>
													</Link>
													<Link to="#">Apple Series 5 Watch </Link>
												</div>
											</td>
											<td>
												<Link to="#">PT010</Link>
											</td>
											<td>24 Mar 2023</td>
											<td>26 May 2023</td>
											<td className="action-table-data">
												<div className="edit-delete-action">
													<Link
														className="me-2 p-2"
														to="#"
														data-bs-toggle="modal"
														data-bs-target="#edit-units"
													>
														<i data-feather="edit" className="feather-edit" />
													</Link>
													<Link
														className=" confirm-text p-2"
														to="#"
														onClick={showConfirmationAlert}
													>
														<i
															data-feather="trash-2"
															className="feather-trash-2"
														/>
													</Link>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
