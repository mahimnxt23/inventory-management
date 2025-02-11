import { Download, RotateCcw } from "feather-icons-react/build/IconComponents";
import PropTypes from "prop-types";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ChevronUp, PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setToogleHeader } from "./redux/action";

const Breadcrumbs = (props) => {
	const location = useLocation();
	const data = useSelector((state) => state.toggle_header);

	let addButton = null;
	const dispatch = useDispatch();

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
	if (
		location.pathname === "/product-list" ||
		location.pathname === "/stock-transfer"
	) {
		addButton = (
			<div className="page-header">
				<div className="add-item d-flex">
					<div className="page-title">
						<h4>{props.maintitle}</h4>
						<h6>{props.subtitle}</h6>
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
				</ul>
				<div className="page-btn">
					<Link
						to="#"
						className="btn btn-added"
						data-bs-toggle="modal"
						data-bs-target="#add-units"
					>
						<PlusCircle className="me-2" />
						{props.addButton}
					</Link>
				</div>
				<div className="page-btn import">
					<Link
						to="#"
						className="btn btn-added color"
						data-bs-toggle="modal"
						data-bs-target="#view-notes"
					>
						<Download className="me-2" />
						{props.importbutton}
					</Link>
				</div>
			</div>
		);
	} else if (
		location.pathname === "/sales-report" ||
		location.pathname === "/call-history" ||
		location.pathname === "/inventory-report" ||
		location.pathname === "/purchase-report" ||
		location.pathname === "/customer-report" ||
		location.pathname === "/supplier-report" ||
		location.pathname === "/income-report" ||
		location.pathname === "/tax-report" ||
		location.pathname === "/expense-report" ||
		location.pathname === "/profit-loss-report" ||
		location.pathname === "/invoice-report"
	) {
		addButton = (
			<div className="page-header">
				<div className="add-item d-flex">
					<div className="page-title">
						<h4>{props.maintitle}</h4>
						<h6>{props.subtitle}</h6>
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
		);
	} else if (
		location.pathname == "/expense-list" ||
		location.pathname == "/expense-category" ||
		location.pathname == "/customers" ||
		location.pathname == "/warehouse" ||
		location.pathname == "/store-list" ||
		location.pathname == "/suppliers" ||
		location.pathname == "/manage-stocks" ||
		location.pathname == "/stock-adjustment"
	) {
		addButton = (
			<div className="page-header">
				<div className="add-item d-flex">
					<div className="page-title">
						<h4>{props.maintitle}</h4>
						<h6>{props.subtitle}</h6>
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
						data-bs-target="#add-units"
					>
						<PlusCircle className="me-2" />
						{props.addButton}
					</Link>
				</div>
			</div>
		);
	}

	return <>{addButton}</>;
};

Breadcrumbs.propTypes = {
	maintitle: PropTypes.string,
	subtitle: PropTypes.string,
	addButton: PropTypes.string,
	importbutton: PropTypes.string,
};

export default Breadcrumbs;
