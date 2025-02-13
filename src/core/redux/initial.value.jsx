import { attandanceadmindata } from "../json/attendanceadmindata";
import { attendenceemployeedata } from "../json/attendence-employeedata";
import { barcodedata } from "../json/barcodedata";
import { brandlistdata } from "../json/brandlistdata";
import { callhistorydata } from "../json/callhistorydata";
import { categorylist } from "../json/categorylistdata";
import { getCustomerData } from "../json/customer_data";
import { dashboarrecentproductddata } from "../json/dashboarddata";
import { expiredproductdata } from "../json/dashboardexpiredproduct";
import { deleteaccountdata } from "../json/deleteaccount";
import { departmentlistdata } from "../json/departmentlistdata";
import { designationdata } from "../json/designationdata";
import { expiredproduct } from "../json/expiredproductdata";
import { invoicereportdata } from "../json/invoicereportdata";
import { leavesadmindata } from "../json/leavesadmin";
import { leavedata } from "../json/leavesdata";
import { leavetypedata } from "../json/leavetypedata";
import { lowstockdata } from "../json/lowstockdata";
import { ManageStocksdata } from "../json/managestocks_data";
import { getMedicinsData } from "../json/productlistdata";
import { quotationlistdata } from "../json/quotationlistdata";
import { rolesandpermission } from "../json/rolesandpermissiondata";
import { salestransaction } from "../json/salesdashboardrecenttranscation";
import { salersretrunsdata } from "../json/salesreturn";
import { shiftlistdata } from "../json/shiftlistdata";
import { StockTransferData } from "../json/stocktransferdata";
import { subcateorydata } from "../json/subcategorydata";
import { SupplierData } from "../json/supplier_data";
import { getUnitsdata } from "../json/unitsdata";
import { userlisadata } from "../json/users";
import { variantattributesdata } from "../json/variantattributesdata";
import { warrentydata } from "../json/waarrentydata";

const initialState = {
	product_list: getMedicinsData,
	dashboard_recentproduct: dashboarrecentproductddata,
	dashboard_expiredproduct: expiredproductdata,
	saleshdashboard_recenttransaction: salestransaction,
	brand_list: brandlistdata,
	unit_data: getUnitsdata,
	variantattributes_data: variantattributesdata,
	warranty_data: warrentydata,
	barcode_data: barcodedata,
	departmentlist_data: departmentlistdata,
	designation_data: designationdata,
	shiftlist_data: shiftlistdata,
	attendenceemployee_data: attendenceemployeedata,
	toggle_header: false,
	invoicereport_data: invoicereportdata,
	salesreturns_data: salersretrunsdata,
	quotationlist_data: quotationlistdata,
	customerdata: getCustomerData,
	supplierdata: SupplierData,
	managestockdata: ManageStocksdata,
	stocktransferdata: StockTransferData,
	userlist_data: userlisadata,
	rolesandpermission_data: rolesandpermission,
	deleteaccount_data: deleteaccountdata,
	attendanceadmin_data: attandanceadmindata,
	leavesadmin_data: leavesadmindata,
	leavetypes_data: leavetypedata,
	holiday_data: leavedata,
	expiredproduct_data: expiredproduct,
	lowstock_data: lowstockdata,
	categotylist_data: categorylist,
	subcategory_data: subcateorydata,
	callhistory_data: callhistorydata,
	layoutstyledata: localStorage.getItem("layoutStyling"),
};

export default initialState;
