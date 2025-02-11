import axios from "axios";
import { base_url } from "../environment";

// Create axios instance with default config
const api = axios.create({
	baseURL: base_url,
	headers: {
		"Content-Type": "application/json",
	},
});

// Universal GET function
export const getData = async (endpoint) => {
	try {
		const response = await api.get(endpoint);
		return response.data;
	} catch (error) {
		throw new Error(error.response?.data?.message || "Failed to fetch data");
	}
};

// Universal POST function
export const postData = async (endpoint, data) => {
	try {
		const response = await api.post(endpoint, data);
		return response.data;
	} catch (error) {
		throw new Error(error.response?.data?.message || "Failed to post data");
	}
};

// Universal PUT function
export const putData = async (endpoint, data) => {
	try {
		const response = await api.put(endpoint, data);
		return response.data;
	} catch (error) {
		throw new Error(error.response?.data?.message || "Failed to update data");
	}
};

// Universal DELETE function
export const deleteData = async (endpoint) => {
	try {
		const response = await api.delete(endpoint);
		return response.data;
	} catch (error) {
		throw new Error(error.response?.data?.message || "Failed to delete data");
	}
};
