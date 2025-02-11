// Add this before creating the axios instance
import axios from "axios";
import { base_url } from "../environment";

const getAuthHeaders = () => {
	const token = localStorage.getItem("token"); // or however you store your auth token
	return token ? { Authorization: `Bearer ${token}` } : {};
};

const api = axios.create({
	baseURL: base_url,
	headers: {
		"Content-Type": "application/json",
		...getAuthHeaders(),
	},
});

// Add request interceptor to update headers for each request
api.interceptors.request.use((config) => {
	config.headers = {
		...config.headers,
		...getAuthHeaders(),
	};
	return config;
});
