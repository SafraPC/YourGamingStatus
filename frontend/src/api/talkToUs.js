import api from "../services/api";

export const registerCallApi = async ({ description }) => {
	try {
		const response = await api.post("/register/call", {
			description: description,
		});
		if (response.status === 200) {
			return true;
		}
		return false;
	} catch (err) {
		return false;
	}
};
