import api from "../services/api";

export const loginApi = async ({ email, password }) => {
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

export const registerApi = async ({ email, name, password }) => {
	try {
		const response = await api.post("/register", {
			email: email,
			name: name,
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
