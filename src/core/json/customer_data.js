import { getData } from "../../utils/api.js";

export const getCustomerData = async () => {
	try {
		const { customers } = await getData("/customers"); // Fetch customers from API
		return customers;
	} catch (error) {
		console.error("Error fetching customer data:", error);
		return [];
	}
};
