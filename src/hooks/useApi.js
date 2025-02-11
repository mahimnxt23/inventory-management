/* eslint-disable no-unused-vars */
import { useState } from "react";
import { deleteData, getData, postData, putData } from "../utils/api";

const useApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async (endpoint) => {
		setLoading(true);
		setError(null);
		try {
			const data = await getData(endpoint);
			setLoading(false);
			return data;
		} catch (err) {
			setError(err.message);
			setLoading(false);
			return null;
		}
	};

	const createData = async (endpoint, data) => {
		setLoading(true);
		setError(null);
		try {
			const response = await postData(endpoint, data);
			setLoading(false);
			return response;
		} catch (err) {
			setError(err.message);
			setLoading(false);
			return null;
		}
	};

	return {
		fetchData,
		createData,
		loading,
		error,
	};
};

export default useApi;
