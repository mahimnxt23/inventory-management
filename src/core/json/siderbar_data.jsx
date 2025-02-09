import React from "react";
import * as Icon from "react-feather";

export const SidebarData = [
	{
		label: "Main",
		submenuOpen: true,
		showSubRoute: false,
		submenuHdr: "Main",
		submenuItems: [
			{
				label: "Dashboard",
				link: "/admin-dashboard",
				icon: <Icon.Grid />,
			},
		],
	},
	{
		label: "User Management",
		submenuOpen: true,
		showSubRoute: false,
		submenuHdr: "User Management",
		submenuItems: [
			{
				label: "Employees",
				link: "/employees-grid",
				icon: <Icon.Users />,
				showSubRoute: false,
			},
			{
				label: "Customers",
				link: "/customers",
				icon: <Icon.User />,
				showSubRoute: false,
			},
		],
	},
	{
		label: "Inventory",
		submenuOpen: true,
		showSubRoute: false,
		submenuHdr: "Inventory",
		submenuItems: [
			{
				// label: "Category",
				label: "Medicine Categories",
				link: "/category-list",
				icon: <Icon.Codepen />,
				showSubRoute: false,
				submenu: false,
			},
			{
				// label: "Products",
				label: "Medicines",
				link: "/product-list",
				icon: <Icon.Box />,
				showSubRoute: false,
				submenu: false,
			},
			{
				// label: "Units",
				label: "Bottle Breakage",
				link: "/units",
				icon: <Icon.Speaker />,
				showSubRoute: false,
				submenu: false,
			},
			{
				label: "Expired Products",
				link: "/expired-products",
				icon: <Icon.Codesandbox />,
				showSubRoute: false,
				submenu: false,
			},
			{
				label: "Manage Stock",
				link: "/manage-stocks",
				icon: <Icon.Package />,
				showSubRoute: false,
				submenu: false,
			},
			{
				label: "Low Stocks",
				link: "/low-stocks",
				icon: <Icon.TrendingDown />,
				showSubRoute: false,
				submenu: false,
			},
		],
	},
	{
		label: "Sales",
		submenuOpen: true,
		submenuHdr: "Sales",
		submenu: false,
		showSubRoute: false,
		submenuItems: [
			{
				label: "Sales",
				link: "/sales-list",
				icon: <Icon.ShoppingCart />,
				showSubRoute: false,
				submenu: false,
			},
			{
				label: "Invoices",
				link: "/invoice-report",
				icon: <Icon.FileText />,
				showSubRoute: false,
				submenu: false,
			},
		],
	},
	{
		label: "Orders",
		submenuOpen: true,
		submenuHdr: "Orders",
		showSubRoute: false,
		submenuItems: [
			{
				label: "Purchases",
				link: "/purchase-list",
				icon: <Icon.ShoppingBag />,
				showSubRoute: false,
				submenu: false,
			},
		],
	},
	{
		label: "Reports",
		submenuOpen: true,
		showSubRoute: false,
		submenuHdr: "Reports",
		submenuItems: [
			{
				label: "Sales Report",
				link: "/sales-report",
				icon: <Icon.BarChart2 />,
				showSubRoute: false,
			},
			{
				label: "Purchase Report",
				link: "/purchase-report",
				icon: <Icon.PieChart />,
				showSubRoute: false,
			},
			{
				label: "Inventory Report",
				link: "/inventory-report",
				icon: <Icon.Inbox />,
				showSubRoute: false,
			},
			{
				label: "Invoice Report",
				link: "/invoice-report",
				icon: <Icon.File />,
				showSubRoute: false,
			},
			{
				label: "Supplier Report",
				link: "/supplier-report",
				icon: <Icon.UserCheck />,
				showSubRoute: false,
			},
			{
				label: "Customer Report",
				link: "/customer-report",
				icon: <Icon.User />,
				showSubRoute: false,
			},
			{
				label: "Expense Report",
				link: "/expense-report",
				icon: <Icon.FileText />,
				showSubRoute: false,
			},
			{
				label: "Income Report",
				link: "/income-report",
				icon: <Icon.BarChart />,
				showSubRoute: false,
			},
			{
				label: "Tax Report",
				link: "/tax-report",
				icon: <Icon.Database />,
				showSubRoute: false,
			},
			{
				label: "Profit & Loss",
				link: "/profit-loss-report",
				icon: <Icon.TrendingDown />,
				showSubRoute: false,
			},
		],
	},
	{
		label: "General",
		submenu: true,
		showSubRoute: false,
		submenuHdr: "General",
		submenuItems: [
			{
				label: "Profile",
				link: "/profile",
				icon: <Icon.User />,
				showSubRoute: false,
			},
			{
				label: "Notifications",
				link: "/notification",
				icon: <Icon.Bell />,
				showSubRoute: false,
			},
			{
				label: "Logout",
				link: "/signin",
				icon: <Icon.LogOut />,
				showSubRoute: false,
			},
		],
	},
];
