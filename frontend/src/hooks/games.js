import { registerGames } from "../api/games";

export const useGames = () => {
	const registerGame = async (formData) => {
		return await registerGames(formData);
	};

	return { registerGame };
};
