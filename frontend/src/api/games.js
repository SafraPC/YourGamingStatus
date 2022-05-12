import api from "../services/api";

export const registerGames = async (formData) => {
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
