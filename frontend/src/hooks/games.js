import React from "react";
import { getUserGamesAPI, registerGamesAPI } from "../api/games";

export const useGames = () => {
	const [tableMetrics, setTableMetrics] = React.useState({});
	const [userGames, setUserGames] = React.useState([
		{
			gender: "",
			name: "",
			qtdAchievements: 0,
			qtdHoursPlayed: 0,
			rate: 0,
			updatedAt: "",
			userId: "",
		},
	]);
	const [metrics, setMetrics] = React.useState({
		totalGamesPlayed: 0,
		totalHoursPlayed: 0,
		totalAchievements: 0,
	});

	const registerGame = async (formData) => {
		const response = await registerGamesAPI(formData);
		if (response) {
			getGames();
		}
	};
	const getGames = async () => {
		const response = await getUserGamesAPI();
		if (response.length) {
			console.log("true");
			setUserGames(response);
			setMetrics({
				totalGamesPlayed: response.length,
				totalAchievements: response.reduce((a, b) => a + b.qtdAchievements, 0),
				totalHoursPlayed: response.reduce((a, b) => a + b.qtdHoursPlayed, 0),
			});
			setTableMetrics({
				mostPlayed: response
					.sort((a, b) => b.qtdHoursPlayed - a.qtdHoursPlayed)
					.map((item) => ({
						name: item.name,
						value: item.qtdHoursPlayed,
					}))
					.filter((_item, index) => index < 10),
				mostAchievements: response
					.sort((a, b) => b.qtdAchievements - a.qtdAchievements)
					.map((item) => ({
						name: item.name,
						value: item.qtdAchievements,
					}))
					.filter((_item, index) => index < 10),
				mostRate: response
					.sort((a, b) => b.rate - a.rate)
					.map((item) => ({
						name: item.name,
						value: item.rate,
					}))
					.filter((_item, index) => index < 10),
			});
			return;
		}
		setTableMetrics({});
		setMetrics({
			totalGamesPlayed: 0,
			totalHoursPlayed: 0,
			totalAchievements: 0,
		});
	};

	return { registerGame, getGames, tableMetrics, metrics, userGames };
};
