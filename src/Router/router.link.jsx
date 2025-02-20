import React from "react";
import { Navigate, Route } from "react-router-dom";
import Dashboard from "../feature-module/dashboard/Dashboard";
import AddProduct from "../feature-module/inventory/addproduct";
import ProductList from "../feature-module/inventory/productlist";
import Grid from "../feature-module/uiinterface/grid";
import Images from "../feature-module/uiinterface/images";
import Lightboxes from "../feature-module/uiinterface/lightbox";
import Media from "../feature-module/uiinterface/media";
import Modals from "../feature-module/uiinterface/modals";
import Offcanvas from "../feature-module/uiinterface/offcanvas";
import Pagination from "../feature-module/uiinterface/pagination";

import Accordion from "../feature-module/uiinterface/accordion";
import Alert from "../feature-module/uiinterface/alert";
import Avatar from "../feature-module/uiinterface/avatar";
import Badges from "../feature-module/uiinterface/badges";
import Borders from "../feature-module/uiinterface/borders";
import Buttons from "../feature-module/uiinterface/buttons";
import ButtonsGroup from "../feature-module/uiinterface/buttonsgroup";
import Popovers from "../feature-module/uiinterface/popover";

import Counter from "../feature-module/uiinterface/advancedui/counter";
import DragDrop from "../feature-module/uiinterface/advancedui/dragdrop";
import Rating from "../feature-module/uiinterface/advancedui/rating";
import Stickynote from "../feature-module/uiinterface/advancedui/stickynote";
import TextEditor from "../feature-module/uiinterface/advancedui/texteditor";
import Timeline from "../feature-module/uiinterface/advancedui/timeline";
import Uiscrollbar from "../feature-module/uiinterface/advancedui/uiscrollbar";
import Breadcrumb from "../feature-module/uiinterface/breadcrumb";
import Cards from "../feature-module/uiinterface/cards";
import Carousel from "../feature-module/uiinterface/carousel";
import Apexchart from "../feature-module/uiinterface/charts/apexcharts";
import ChartJs from "../feature-module/uiinterface/charts/chartjs";
import Colors from "../feature-module/uiinterface/colors";
import Dropdowns from "../feature-module/uiinterface/dropdowns";
import FeatherIcons from "../feature-module/uiinterface/icons/feathericon";
import FlagIcons from "../feature-module/uiinterface/icons/flagicons";
import FontawesomeIcons from "../feature-module/uiinterface/icons/fontawesome";
import IonicIcons from "../feature-module/uiinterface/icons/ionicicons";
import MaterialIcons from "../feature-module/uiinterface/icons/materialicon";
import PE7Icons from "../feature-module/uiinterface/icons/pe7icons";
import SimplelineIcons from "../feature-module/uiinterface/icons/simplelineicon";
import ThemifyIcons from "../feature-module/uiinterface/icons/themify";
import TypiconIcons from "../feature-module/uiinterface/icons/typicons";
import WeatherIcons from "../feature-module/uiinterface/icons/weathericons";
import NavTabs from "../feature-module/uiinterface/navtabs";
import Placeholder from "../feature-module/uiinterface/placeholder";
import Progress from "../feature-module/uiinterface/progress";
import RangeSlides from "../feature-module/uiinterface/rangeslider";
import Spinner from "../feature-module/uiinterface/spinner";
import SweetAlert from "../feature-module/uiinterface/sweetalert";
import Toasts from "../feature-module/uiinterface/toasts";
import Tooltips from "../feature-module/uiinterface/tooltips";
import Typography from "../feature-module/uiinterface/typography";
import Video from "../feature-module/uiinterface/video";

const routes = all_routes;

import Email from "../feature-module/Application/email";
import AddEmployee from "../feature-module/hrm/addemployee";
import EditEmployee from "../feature-module/hrm/editemployee";
import EmployeesGrid from "../feature-module/hrm/employeesgrid";
import EditProduct from "../feature-module/inventory/editproduct";
import ExpiredProduct from "../feature-module/inventory/expiredproduct";
import LowStock from "../feature-module/inventory/lowstock";
import ProductDetail from "../feature-module/inventory/productdetail";
import { Units } from "../feature-module/inventory/units";
import Blankpage from "../feature-module/pages/blankpage";
import Comingsoon from "../feature-module/pages/comingsoon";
import EmailVerification from "../feature-module/pages/emailverification/emailverification";
import EmailverificationThree from "../feature-module/pages/emailverification/emailverificationThree";
import EmailverificationTwo from "../feature-module/pages/emailverification/emailverificationTwo";
import Error404 from "../feature-module/pages/errorpages/error404";
import Error500 from "../feature-module/pages/errorpages/error500";
import Forgotpassword from "../feature-module/pages/forgotpassword/forgotpassword";
import ForgotpasswordThree from "../feature-module/pages/forgotpassword/forgotpasswordThree";
import ForgotpasswordTwo from "../feature-module/pages/forgotpassword/forgotpasswordTwo";
import Lockscreen from "../feature-module/pages/lockscreen";
import Signin from "../feature-module/pages/login/signin";
import Profile from "../feature-module/pages/profile";
import Register from "../feature-module/pages/register/register";
import Resetpassword from "../feature-module/pages/resetpassword/resetpassword";
import ResetpasswordThree from "../feature-module/pages/resetpassword/resetpasswordThree";
import ResetpasswordTwo from "../feature-module/pages/resetpassword/resetpasswordTwo";
import Twostepverification from "../feature-module/pages/twostepverification/twostepverification";
import TwostepverificationThree from "../feature-module/pages/twostepverification/twostepverificationThree";
import TwostepverificationTwo from "../feature-module/pages/twostepverification/twostepverificationTwo";
import Undermaintainence from "../feature-module/pages/undermaintainence";
import Customers from "../feature-module/people/customers";
import PurchaseOrderReport from "../feature-module/purchases/purchaseorderreport";
import PurchaseReturns from "../feature-module/purchases/purchasereturns";
import PurchasesList from "../feature-module/purchases/purchaseslist";
import SalesReport from "../feature-module/Reports/salesreport";
import InvoiceReport from "../feature-module/sales/invoicereport";
import SalesList from "../feature-module/sales/saleslist";
import SalesReturn from "../feature-module/sales/salesreturn";
import InvoiceSettings from "../feature-module/settings/appsetting/invoicesettings";
import PrinterSettings from "../feature-module/settings/appsetting/printersettings";
import BankSetting from "../feature-module/settings/financialsettings/banksetting";
import BankSettingGrid from "../feature-module/settings/financialsettings/banksettinggrid";
import CurrencySettings from "../feature-module/settings/financialsettings/currencysettings";
import PaymentGateway from "../feature-module/settings/financialsettings/paymentgateway";
import TaxRates from "../feature-module/settings/financialsettings/taxrates";
import ConnectedApps from "../feature-module/settings/generalsettings/connectedapps";
import GeneralSettings from "../feature-module/settings/generalsettings/generalsettings";
import Notification from "../feature-module/settings/generalsettings/notification";
import SecuritySettings from "../feature-module/settings/generalsettings/securitysettings";
import BanIpaddress from "../feature-module/settings/othersettings/ban-ipaddress";
import StorageSettings from "../feature-module/settings/othersettings/storagesettings";
import EmailSettings from "../feature-module/settings/systemsettings/emailsettings";
import GdprSettings from "../feature-module/settings/systemsettings/gdprsettings";
import OtpSettings from "../feature-module/settings/systemsettings/otpsettings";
import SmsGateway from "../feature-module/settings/systemsettings/smsgateway";
import Appearance from "../feature-module/settings/websitesettings/appearance";
import CompanySettings from "../feature-module/settings/websitesettings/companysettings";
import CustomFields from "../feature-module/settings/websitesettings/customfields";
import LanguageSettings from "../feature-module/settings/websitesettings/languagesettings";
import LocalizationSettings from "../feature-module/settings/websitesettings/localizationsettings";
import PosSettings from "../feature-module/settings/websitesettings/possettings";
import Preference from "../feature-module/settings/websitesettings/preference";
import Prefixes from "../feature-module/settings/websitesettings/prefixes";
import SocialAuthentication from "../feature-module/settings/websitesettings/socialauthentication";
import SystemSettings from "../feature-module/settings/websitesettings/systemsettings";
import Managestock from "../feature-module/stock/managestock";
import ClipBoard from "../feature-module/uiinterface/advancedui/clipboard";
import Ribbon from "../feature-module/uiinterface/advancedui/ribbon";
import FormBasicInputs from "../feature-module/uiinterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../feature-module/uiinterface/forms/formelements/checkbox-radios";
import FileUpload from "../feature-module/uiinterface/forms/formelements/fileupload";
import FormMask from "../feature-module/uiinterface/forms/formelements/form-mask";
import FormSelect from "../feature-module/uiinterface/forms/formelements/form-select";
import FormWizard from "../feature-module/uiinterface/forms/formelements/form-wizard";
import FormPikers from "../feature-module/uiinterface/forms/formelements/formpickers";
import GridGutters from "../feature-module/uiinterface/forms/formelements/grid-gutters";
import InputGroup from "../feature-module/uiinterface/forms/formelements/input-group";
import FloatingLabel from "../feature-module/uiinterface/forms/formelements/layouts/floating-label";
import FormHorizontal from "../feature-module/uiinterface/forms/formelements/layouts/form-horizontal";
import FormSelect2 from "../feature-module/uiinterface/forms/formelements/layouts/form-select2";
import FormValidation from "../feature-module/uiinterface/forms/formelements/layouts/form-validation";
import FormVertical from "../feature-module/uiinterface/forms/formelements/layouts/form-vertical";
import BootstrapIcons from "../feature-module/uiinterface/icons/bootstrapicons";
import RemixIcons from "../feature-module/uiinterface/icons/remixIcons";
import TablerIcon from "../feature-module/uiinterface/icons/tablericon";
import Leaflet from "../feature-module/uiinterface/map/leaflet";
import Swiperjs from "../feature-module/uiinterface/swiperjs";
import DataTables from "../feature-module/uiinterface/table/data-tables";
import TablesBasic from "../feature-module/uiinterface/table/tables-basic";
import Sortable from "../feature-module/uiinterface/ui-sortable";
import DeleteAccount from "../feature-module/usermanagement/deleteaccount";
import Permissions from "../feature-module/usermanagement/permissions";
import RolesPermissions from "../feature-module/usermanagement/rolespermissions";
import Users from "../feature-module/usermanagement/users";
import { all_routes } from "./all_routes";

export const publicRoutes = [
	{
		id: 1,
		path: routes.dashboard,
		name: "home",
		element: <Dashboard />,
		route: Route,
	},
	{
		id: 2,
		path: routes.productlist,
		name: "products",
		element: <ProductList />,
		route: Route,
	},
	{
		id: 3,
		path: routes.addproduct,
		name: "products",
		element: <AddProduct />,
		route: Route,
	},
	{
		id: 6,
		path: routes.units,
		name: "unit",
		element: <Units />,
		route: Route,
	},
	{
		id: 10,
		path: routes.alerts,
		name: "alert",
		element: <Alert />,
		route: Route,
	},
	{
		id: 11,
		path: routes.grid,
		name: "grid",
		element: <Grid />,
		route: Route,
	},

	{
		id: 12,
		path: routes.accordion,
		name: "accordion",
		element: <Accordion />,
		route: Route,
	},
	{
		id: 13,
		path: routes.avatar,
		name: "avatar",
		element: <Avatar />,
		route: Route,
	},
	{
		id: 14,
		path: routes.images,
		name: "images",
		element: <Images />,
		route: Route,
	},

	{
		id: 15,
		path: routes.badges,
		name: "badges",
		element: <Badges />,
		route: Route,
	},
	{
		id: 16,
		path: routes.lightbox,
		name: "lightbox",
		element: <Lightboxes />,
		route: Route,
	},

	{
		id: 17,
		path: routes.borders,
		name: "borders",
		element: <Borders />,
		route: Route,
	},
	{
		id: 18,
		path: routes.media,
		name: "lightbox",
		element: <Media />,
		route: Route,
	},
	{
		id: 19,
		path: routes.buttons,
		name: "borders",
		element: <Buttons />,
		route: Route,
	},
	{
		id: 20,
		path: routes.modals,
		name: "modals",
		element: <Modals />,
		route: Route,
	},
	{
		id: 21,
		path: routes.offcanvas,
		name: "offcanvas",
		element: <Offcanvas />,
		route: Route,
	},
	{
		id: 22,
		path: routes.pagination,
		name: "offcanvas",
		element: <Pagination />,
		route: Route,
	},
	{
		id: 23,
		path: routes.buttonsgroup,
		name: "buttonsgroup",
		element: <ButtonsGroup />,
		route: Route,
	},
	{
		id: 24,
		path: routes.popover,
		name: "buttonsgroup",
		element: <Popovers />,
		route: Route,
	},
	{
		id: 25,
		path: routes.breadcrumb,
		name: "breadcrumb",
		element: <Breadcrumb />,
		route: Route,
	},
	{
		id: 26,
		path: routes.cards,
		name: "cards",
		element: <Cards />,
		route: Route,
	},
	{
		id: 27,
		path: routes.dropdowns,
		name: "dropdowns",
		element: <Dropdowns />,
		route: Route,
	},
	{
		id: 27,
		path: routes.colors,
		name: "colors",
		element: <Colors />,
		route: Route,
	},
	{
		id: 28,
		path: routes.carousel,
		name: "carousel",
		element: <Carousel />,
		route: Route,
	},
	{
		id: 29,
		path: routes.spinner,
		name: "spinner",
		element: <Spinner />,
		route: Route,
	},
	{
		id: 30,
		path: routes.carousel,
		name: "carousel",
		element: <Carousel />,
		route: Route,
	},
	{
		id: 31,
		path: routes.navtabs,
		name: "navtabs",
		element: <NavTabs />,
		route: Route,
	},
	{
		id: 32,
		path: routes.toasts,
		name: "toasts",
		element: <Toasts />,
		route: Route,
	},
	{
		id: 33,
		path: routes.typography,
		name: "typography",
		element: <Typography />,
		route: Route,
	},
	{
		id: 34,
		path: routes.video,
		name: "video",
		element: <Video />,
		route: Route,
	},
	{
		id: 35,
		path: routes.tooltip,
		name: "tooltip",
		element: <Tooltips />,
		route: Route,
	},
	{
		id: 36,
		path: routes.draganddrop,
		name: "draganddrop",
		element: <DragDrop />,
		route: Route,
	},
	{
		id: 37,
		path: routes.sweetalerts,
		name: "sweetalerts",
		element: <SweetAlert />,
		route: Route,
	},
	{
		id: 38,
		path: routes.progress,
		name: "progress",
		element: <Progress />,
		route: Route,
	},
	{
		id: 39,
		path: routes.placeholder,
		name: "placeholder",
		element: <Placeholder />,
		route: Route,
	},
	{
		id: 40,
		path: routes.rating,
		name: "rating",
		element: <Rating />,
	},
	{
		id: 41,
		path: routes.texteditor,
		name: "text-editor",
		element: <TextEditor />,
		route: Route,
	},
	{
		id: 42,
		path: routes.counter,
		name: "counter",
		element: <Counter />,
		route: Route,
	},
	{
		id: 43,
		path: routes.scrollbar,
		name: "scrollbar",
		element: <Uiscrollbar />,
		route: Route,
	},
	{
		id: 43,
		path: routes.clipboard,
		name: "clipboard",
		element: <ClipBoard />,
		route: Route,
	},
	{
		id: 44,
		path: routes.stickynote,
		name: "stickynote",
		element: <Stickynote />,
		route: Route,
	},
	{
		id: 44,
		path: routes.tablebasic,
		name: "tablebasic",
		element: <TablesBasic />,
		route: Route,
	},
	{
		id: 45,
		path: routes.timeline,
		name: "timeline",
		element: <Timeline />,
		route: Route,
	},
	{
		id: 45,
		path: routes.datatable,
		name: "datatable",
		element: <DataTables />,
		route: Route,
	},
	{
		id: 46,
		path: routes.apexchart,
		name: "apex-chart",
		element: <Apexchart />,
		route: Route,
	},

	{
		id: 46,
		path: routes.basicinput,
		name: "formbasicinput",
		element: <FormBasicInputs />,
		route: Route,
	},
	{
		id: 47,
		path: routes.chartjs,
		name: "chart-js",
		element: <ChartJs />,
		route: Route,
	},
	{
		id: 47,
		path: routes.checkboxradio,
		name: "checkboxradio",
		element: <CheckboxRadios />,
		route: Route,
	},
	{
		id: 48,
		path: routes.rangeslider,
		name: "range-slider",
		element: <RangeSlides />,
		route: Route,
	},
	{
		id: 49,
		path: routes.fontawesome,
		name: "fontawesome",
		element: <FontawesomeIcons />,
		route: Route,
	},
	{
		id: 50,
		path: routes.feathericon,
		name: "feathericon",
		element: <FeatherIcons />,
		route: Route,
	},
	{
		id: 51,
		path: routes.ionicicons,
		name: "ionicicons",
		element: <IonicIcons />,
		route: Route,
	},
	{
		id: 52,
		path: routes.materialicons,
		name: "materialicons",
		element: <MaterialIcons />,
		route: Route,
	},
	{
		id: 53,
		path: routes.pe7icons,
		name: "pe7icons",
		element: <PE7Icons />,
		route: Route,
	},
	{
		id: 54,
		path: routes.simpleline,
		name: "simpleline",
		element: <SimplelineIcons />,
		route: Route,
	},
	{
		id: 55,
		path: routes.themifyicons,
		name: "themifyicon",
		element: <ThemifyIcons />,
		route: Route,
	},
	{
		id: 56,
		path: routes.iconweather,
		name: "iconweather",
		element: <WeatherIcons />,
		route: Route,
	},
	{
		id: 57,
		path: routes.typicons,
		name: "typicons",
		element: <TypiconIcons />,
		route: Route,
	},
	{
		id: 58,
		path: routes.flagicons,
		name: "flagicons",
		element: <FlagIcons />,
		route: Route,
	},
	{
		id: 58,
		path: routes.inputgroup,
		name: "inputgroup",
		element: <InputGroup />,
		route: Route,
	},
	{
		id: 59,
		path: routes.ribbon,
		name: "ribbon",
		element: <Ribbon />,
		route: Route,
	},
	{
		id: 102,
		path: routes.Sortable,
		name: "Sortable",
		element: <Sortable />,
		route: Route,
	},
	{
		id: 103,
		path: routes.SwiperJs,
		name: "SwiperJs",
		element: <Swiperjs />,
		route: Route,
	},
	{
		id: 104,
		path: routes.FormPicker,
		name: "FormPicker",
		element: <FormPikers />,
		route: Route,
	},
	{
		id: 105,
		path: routes.Leaflets,
		name: "Leaflet",
		element: <Leaflet />,
		route: Route,
	},
	{
		id: 106,
		path: routes.remixIcon,
		name: "remixIcon",
		element: <RemixIcons />,
		route: Route,
	},
	{
		id: 107,
		path: routes.BootstrapIcon,
		name: "BootstrapIcon",
		element: <BootstrapIcons />,
		route: Route,
	},
	{
		id: 108,
		path: routes.TablerIcon,
		name: "TablerIcon",
		element: <TablerIcon />,
		route: Route,
	},
	{
		id: 49,
		path: routes.gridgutters,
		name: "gridgutters",
		element: <GridGutters />,
		route: Route,
	},
	{
		id: 50,
		path: routes.gridgutters,
		name: "gridgutters",
		element: <GridGutters />,
		route: Route,
	},
	{
		id: 51,
		path: routes.formselect,
		name: "formselect",
		element: <FormSelect />,
		route: Route,
	},
	{
		id: 52,
		path: routes.fileupload,
		name: "fileupload",
		element: <FileUpload />,
		route: Route,
	},
	{
		id: 53,
		path: routes.formmask,
		name: "formmask",
		element: <FormMask />,
		route: Route,
	},
	{
		id: 54,
		path: routes.formhorizontal,
		name: "formhorizontal",
		element: <FormHorizontal />,
		route: Route,
	},
	{
		id: 54,
		path: routes.formvertical,
		name: "formvertical",
		element: <FormVertical />,
		route: Route,
	},
	{
		id: 55,
		path: routes.floatinglabel,
		name: "floatinglabel",
		element: <FloatingLabel />,
		route: Route,
	},
	{
		id: 56,
		path: routes.formvalidation,
		name: "formvalidation",
		element: <FormValidation />,
		route: Route,
	},
	{
		id: 57,
		path: routes.select2,
		name: "select2",
		element: <FormSelect2 />,
		route: Route,
	},
	{
		id: 58,
		path: routes.wizard,
		name: "wizard",
		element: <FormWizard />,
		route: Route,
	},
	{
		id: 58,
		path: routes.expiredproduct,
		name: "expiredproduct",
		element: <ExpiredProduct />,
		route: Route,
	},
	{
		id: 59,
		path: routes.lowstock,
		name: "lowstock",
		element: <LowStock />,
		route: Route,
	},
	{
		id: 65,
		path: routes.editproduct,
		name: "editproduct",
		element: <EditProduct />,
		route: Route,
	},
	{
		id: 65,
		path: routes.email,
		name: "email",
		element: <Email />,
		route: Route,
	},
	{
		id: 68,
		path: routes.purchaselist,
		name: "purchaselist",
		element: <PurchasesList />,
		route: Route,
	},
	{
		id: 69,
		path: routes.purchaseorderreport,
		name: "purchaseorderreport",
		element: <PurchaseOrderReport />,
		route: Route,
	},
	{
		id: 70,
		path: routes.purchasereturn,
		name: "purchasereturn",
		element: <PurchaseReturns />,
		route: Route,
	},
	{
		id: 71,
		path: routes.appearance,
		name: "appearance",
		element: <Appearance />,
		route: Route,
	},
	{
		id: 72,
		path: routes.socialauthendication,
		name: "socialauthendication",
		element: <SocialAuthentication />,
		route: Route,
	},
	{
		id: 73,
		path: routes.languagesettings,
		name: "languagesettings",
		element: <LanguageSettings />,
		route: Route,
	},
	{
		id: 74,
		path: routes.invoicesettings,
		name: "invoicesettings",
		element: <InvoiceSettings />,
		route: Route,
	},
	{
		id: 75,
		path: routes.printersettings,
		name: "printersettings",
		element: <PrinterSettings />,
		route: Route,
	},
	{
		id: 76,
		path: routes.possettings,
		name: "possettings",
		element: <PosSettings />,
		route: Route,
	},
	{
		id: 77,
		path: routes.customfields,
		name: "customfields",
		element: <CustomFields />,
		route: Route,
	},
	{
		id: 78,
		path: routes.emailsettings,
		name: "emailsettings",
		element: <EmailSettings />,
		route: Route,
	},
	{
		id: 79,
		path: routes.smssettings,
		name: "smssettings",
		element: <SmsGateway />,
		route: Route,
	},
	{
		id: 80,
		path: routes.otpsettings,
		name: "otpsettings",
		element: <OtpSettings />,
		route: Route,
	},
	{
		id: 81,
		path: routes.gdbrsettings,
		name: "gdbrsettings",
		element: <GdprSettings />,
		route: Route,
	},
	{
		id: 82,
		path: routes.paymentgateway,
		name: "paymentgateway",
		element: <PaymentGateway />,
		route: Route,
	},
	{
		id: 83,
		path: routes.banksettingslist,
		name: "banksettingslist",
		element: <BankSetting />,
		route: Route,
	},
	{
		id: 84,
		path: routes.customers,
		name: "customers",
		element: <Customers />,
		route: Route,
	},
	{
		id: 87,
		path: routes.managestock,
		name: "managestock",
		element: <Managestock />,
		route: Route,
	},
	{
		id: 90,
		path: routes.salesreport,
		name: "salesreport",
		element: <SalesReport />,
		route: Route,
	},
	{
		id: 89,
		path: routes.generalsettings,
		name: "generalsettings",
		element: <GeneralSettings />,
		route: Route,
	},
	{
		id: 90,
		path: routes.securitysettings,
		name: "securitysettings",
		element: <SecuritySettings />,
		route: Route,
	},
	{
		id: 91,
		path: routes.notification,
		name: "notification",
		element: <Notification />,
		route: Route,
	},
	{
		id: 92,
		path: routes.connectedapps,
		name: "connectedapps",
		element: <ConnectedApps />,
		route: Route,
	},
	{
		id: 93,
		path: routes.systemsettings,
		name: "systemsettings",
		element: <SystemSettings />,
		route: Route,
	},
	{
		id: 94,
		path: routes.companysettings,
		name: "companysettings",
		element: <CompanySettings />,
		route: Route,
	},
	{
		id: 94,
		path: routes.localizationsettings,
		name: "localizationsettings",
		element: <LocalizationSettings />,
		route: Route,
	},
	{
		id: 95,
		path: routes.prefixes,
		name: "prefixes",
		element: <Prefixes />,
		route: Route,
	},
	{
		id: 99,
		path: routes.preference,
		name: "preference",
		element: <Preference />,
		route: Route,
	},
	{
		id: 99,
		path: routes.banipaddress,
		name: "banipaddress",
		element: <BanIpaddress />,
		route: Route,
	},
	{
		id: 99,
		path: routes.storagesettings,
		name: "storagesettings",
		element: <StorageSettings />,
		route: Route,
	},
	{
		id: 99,
		path: routes.taxrates,
		name: "taxrates",
		element: <TaxRates />,
		route: Route,
	},
	{
		id: 99,
		path: routes.currencysettings,
		name: "currencysettings",
		element: <CurrencySettings />,
		route: Route,
	},
	{
		id: 102,
		path: routes.saleslist,
		name: "saleslist",
		element: <SalesList />,
		route: Route,
	},
	{
		id: 102,
		path: routes.invoicereport,
		name: "invoicereport",
		element: <InvoiceReport />,
		route: Route,
	},
	{
		id: 102,
		path: routes.salesreturn,
		name: "salesreturn",
		element: <SalesReturn />,
		route: Route,
	},
	{
		id: 106,
		path: routes.profile,
		name: "profile",
		element: <Profile />,
		route: Route,
	},
	{
		id: 20,
		path: routes.blankpage,
		name: "blankpage",
		element: <Blankpage />,
		route: Route,
	},
	{
		id: 104,
		path: routes.users,
		name: "users",
		element: <Users />,
		route: Route,
	},
	{
		id: 105,
		path: routes.rolespermission,
		name: "rolespermission",
		element: <RolesPermissions />,
		route: Route,
	},
	{
		id: 106,
		path: routes.permissions,
		name: "permissions",
		element: <Permissions />,
		route: Route,
	},
	{
		id: 107,
		path: routes.deleteaccount,
		name: "deleteaccount",
		element: <DeleteAccount />,
		route: Route,
	},
	{
		id: 108,
		path: routes.employeegrid,
		name: "employeegrid",
		element: <EmployeesGrid />,
		route: Route,
	},
	{
		id: 109,
		path: routes.addemployee,
		name: "addemployee",
		element: <AddEmployee />,
		route: Route,
	},
	{
		id: 110,
		path: routes.editemployee,
		name: "editemployee",
		element: <EditEmployee />,
		route: Route,
	},
	{
		id: 113,
		path: routes.productdetails,
		name: "productdetails",
		element: <ProductDetail />,
		route: Route,
	},
	{
		id: 116,
		path: "*",
		name: "NotFound",
		element: <Navigate to="/" />,
		route: Route,
	},
	{
		id: 117,
		path: "/",
		name: "Root",
		element: <Dashboard />,
		// element: <Navigate to="/signin" />,
		route: Route,
	},
	{
		id: 118,
		path: routes.banksettingsgrid,
		name: "banksettingsgrid",
		element: <BankSettingGrid />,
		route: Route,
	},
];
export const posRoutes = [{}];

export const pagesRoute = [
	{
		id: 1,
		path: routes.signin,
		name: "signin",
		element: <Signin />,
		route: Route,
	},
	{
		id: 4,
		path: routes.register,
		name: "register",
		element: <Register />,
		route: Route,
	},
	{
		id: 7,
		path: routes.forgotPassword,
		name: "forgotPassword",
		element: <Forgotpassword />,
		route: Route,
	},
	{
		id: 7,
		path: routes.forgotPasswordTwo,
		name: "forgotPasswordTwo",
		element: <ForgotpasswordTwo />,
		route: Route,
	},
	{
		id: 8,
		path: routes.forgotPasswordThree,
		name: "forgotPasswordThree",
		element: <ForgotpasswordThree />,
		route: Route,
	},
	{
		id: 9,
		path: routes.resetpassword,
		name: "resetpassword",
		element: <Resetpassword />,
		route: Route,
	},
	{
		id: 10,
		path: routes.resetpasswordTwo,
		name: "resetpasswordTwo",
		element: <ResetpasswordTwo />,
		route: Route,
	},
	{
		id: 11,
		path: routes.resetpasswordThree,
		name: "resetpasswordThree",
		element: <ResetpasswordThree />,
		route: Route,
	},
	{
		id: 12,
		path: routes.emailverification,
		name: "emailverification",
		element: <EmailVerification />,
		route: Route,
	},
	{
		id: 12,
		path: routes.emailverificationTwo,
		name: "emailverificationTwo",
		element: <EmailverificationTwo />,
		route: Route,
	},
	{
		id: 13,
		path: routes.emailverificationThree,
		name: "emailverificationThree",
		element: <EmailverificationThree />,
		route: Route,
	},
	{
		id: 14,
		path: routes.twostepverification,
		name: "twostepverification",
		element: <Twostepverification />,
		route: Route,
	},
	{
		id: 15,
		path: routes.twostepverificationTwo,
		name: "twostepverificationTwo",
		element: <TwostepverificationTwo />,
		route: Route,
	},
	{
		id: 16,
		path: routes.twostepverificationThree,
		name: "twostepverificationThree",
		element: <TwostepverificationThree />,
		route: Route,
	},
	{
		id: 17,
		path: routes.lockscreen,
		name: "lockscreen",
		element: <Lockscreen />,
		route: Route,
	},
	{
		id: 18,
		path: routes.error404,
		name: "error404",
		element: <Error404 />,
		route: Route,
	},
	{
		id: 19,
		path: routes.error500,
		name: "error500",
		element: <Error500 />,
		route: Route,
	},
	{
		id: 20,
		path: routes.comingsoon,
		name: "comingsoon",
		element: <Comingsoon />,
		route: Route,
	},
	{
		id: 21,
		path: routes.undermaintenance,
		name: "undermaintenance",
		element: <Undermaintainence />,
		route: Route,
	},
];
