import api from "../services/api";

export const registerGamesAPI = async (formData) => {
	try {
		const response = await api.post("/register/games", formData);
		if (response.status === 200) {
			return true;
		}
		return false;
	} catch (err) {
		return false;
	}
};

export const getUserGamesAPI = async () => {
	try {
		const response = await api.get("/games");
		if (response.status === 200) {
			return response.data;
		}
		return [];
	} catch (err) {
		return [];
	}
};
