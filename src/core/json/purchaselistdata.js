import { getData } from "../../utils/api.js";

export const getPurchaseslist = async () => {
	try {
		const orders = await getData("/orders/");
		return orders;
	} catch (error) {
		console.error("Error fetching orders data:", error);
		return [];
	}
};
