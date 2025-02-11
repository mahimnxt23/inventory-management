import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../core/breadcrumbs";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { salesreportdata } from "../../core/json/salesreportdata";
import Table from "../../core/pagination/datatable";

const SalesReport = () => {
	const data = salesreportdata;

	const columns = [
		{
			title: "Product Name",
			dataIndex: "productName",
			render: (text, record) => (
				<span className="productimgname">
					<Link to="#" className="product-img stock-img">
						<ImageWithBasePath alt="" src={record.img} />
					</Link>
					<Link to="#">{text}</Link>
				</span>
			),
			sorter: (a, b) => a.productName.length - b.productName.length,
		},
		{
			title: "SKU",
			dataIndex: "sku",
			sorter: (a, b) => a.sku.length - b.sku.length,
		},

		{
			title: "Category",
			dataIndex: "category",
			sorter: (a, b) => a.category.length - b.category.length,
		},

		{
			title: "Brand",
			dataIndex: "brand",
			sorter: (a, b) => a.brand.length - b.brand.length,
		},
		{
			title: "Sold Qty",
			dataIndex: "soldQty",
			sorter: (a, b) => a.soldQty.length - b.soldQty.length,
		},
		{
			title: "Sold Amount",
			dataIndex: "soldAmount",
			sorter: (a, b) => a.soldAmount.length - b.soldAmount.length,
		},
		{
			title: "Instock Qty",
			dataIndex: "instockQty",
			sorter: (a, b) => a.instockQty.length - b.instockQty.length,
		},
	];
	return (
		<div className="page-wrapper">
			<div className="content">
				<Breadcrumbs
					maintitle="Sales Report"
					subtitle=" Manage Your Sales Report"
				/>
				{/* /product list */}
				<div className="card table-list-card">
					<div className="card-body">
						<div className="table-responsive">
							<Table columns={columns} dataSource={data} />
						</div>
					</div>
				</div>
				{/* /product list */}
			</div>
		</div>
	);
};

export default SalesReport;
