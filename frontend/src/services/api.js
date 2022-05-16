import axios from "axios";

const api = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_API}`,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("@token")}`,
	},
});

api.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = `Bearer ${localStorage.getItem(
			"@token"
		)}`;
		return config;
	},
	async function (error) {
		if (error.response.status === 401 && localStorage.getItem("@token")) {
			localStorage.removeItem("@token");
			window.location.reload();
		}
		return Promise.reject(error);
	}
);
export default api;
