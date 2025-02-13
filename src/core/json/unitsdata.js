import { getData } from "../../utils/api.js";

export const getUnitsdata = async () => {
	try {
		const units = await getData("/bottlebreakages/"); // Fetch medicines from API
		return units.data;
	} catch (error) {
		console.error("Error fetching medicines data:", error);
		return [];
	}
};
