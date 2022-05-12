import axios from "axios";
import { useNavigate } from "react-router-dom";

//Model for requisitions with axios:
const api = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_API}`,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("@token")}`,
	},
});
api.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		console.log("cu");
		const access_token = localStorage.getItem("@token");
		console.log(error.response, access_token);
		if (error.response.status === 401 && access_token) {
			// localStorage.removeItem("@token");
			// window.location.reload();
		}
		return Promise.reject(error);
	}
);
export default api;
