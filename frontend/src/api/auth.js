import api from "../services/api";

export const loginApi = async (email, password) => {
	try {
		const response = await api.post("/login", {
			email: email,
			password: password,
		});
		if (response.status === 200) {
			return response;
		}
		return false;
	} catch (err) {
		return false;
	}
};
