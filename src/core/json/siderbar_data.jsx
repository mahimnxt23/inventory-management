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
			},
			{
				label: "Customers",
				link: "/customers",
				icon: <Icon.User />,
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
				// label: "Products",
				label: "Medicines",
				link: "/product-list",
				icon: <Icon.Box />,
			},
			{
				label: "Medicine Category",
				link: "/category-list",
				icon: <Icon.Codepen />,
				showSubRoute: false,
				submenu: false,
			},
			{
				// label: "Units",
				label: "Bottle Breakage",
				link: "/units",
				icon: <Icon.Speaker />,
			},
			{
				label: "Manage Stock",
				link: "/manage-stocks",
				icon: <Icon.Package />,
			},
			{
				label: "Low Stocks",
				link: "/low-stocks",
				icon: <Icon.TrendingDown />,
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
			},
			{
				label: "Logout",
				link: "/signin",
				icon: <Icon.LogOut />,
			},
		],
	},
];
