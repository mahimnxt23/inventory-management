import { getData } from "../../utils/api.js";

export const getMedicinsData = async () => {
	try {
		const medicines = await getData("/medicines"); // Fetch medicines from API

		return medicines;
	} catch (error) {
		console.error("Error fetching medicines data:", error);
		return [];
	}
};
