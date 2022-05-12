import { getUserGamesAPI, registerGamesAPI } from "../api/games";

export const useGames = () => {
	const registerGame = async (formData) => {
		return await registerGamesAPI(formData);
	};
	const getGames = async () => {
		return await getUserGamesAPI();
	};

	return { registerGame, getGames };
};
