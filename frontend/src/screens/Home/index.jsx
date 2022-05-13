/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import DoughnutChart from "./components/tables/doughnutChart";
import { AddItemModal } from "./components/modal-add-items";
import TableData from "./components/tables/tableData";
import { RenderTabs } from "./components/tabs/tabIndex";
import VerticalChart from "./components/tables/verticalChart";
import {
	AddItemButton,
	Card,
	CardContainer,
	ChartContainer,
	ChartContent,
	HorizontalView,
} from "./styles";
import { useGames } from "../../hooks/games";

const Home = () => {
	const [showAddModalItem, setShowAddModalItem] = React.useState(false);
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
	const { registerGame, getGames } = useGames();
	const [metrics, setMetrics] = React.useState({
		totalGamesPlayed: 0,
		totalHoursPlayed: 0,
		totalAchievements: 0,
	});
	const [tableMetrics, setTableMetrics] = React.useState({});

	const getUserGames = async () => {
		setUserGames(await getGames());
	};

	React.useEffect(() => {
		getUserGames();
	}, []);

	React.useEffect(() => {
		if (userGames.length) {
			setMetrics({
				totalGamesPlayed: userGames.length,
				totalAchievements: userGames.reduce((a, b) => a + b.qtdAchievements, 0),
				totalHoursPlayed: userGames.reduce((a, b) => a + b.qtdHoursPlayed, 0),
			});

			setTableMetrics({
				mostPlayed: userGames
					.sort((a, b) => b.qtdHoursPlayed - a.qtdHoursPlayed)
					.map((item) => ({
						name: item.name,
						value: item.qtdHoursPlayed,
					}))
					.filter((_item, index) => index < 10),
				mostAchievements: userGames
					.sort((a, b) => b.qtdAchievements - a.qtdAchievements)
					.map((item) => ({
						name: item.name,
						value: item.qtdAchievements,
					}))
					.filter((_item, index) => index < 10),
				mostRate: userGames
					.sort((a, b) => b.rate - a.rate)
					.map((item) => ({
						name: item.name,
						value: item.rate,
					}))
					.filter((_item, index) => index < 10),
			});

			return;
		}
		setMetrics({
			totalAchievements: 0,
			totalGamesPlayed: 0,
			totalHoursPlayed: 0,
		});
		setTableMetrics({});
	}, [userGames]);
	console.log(tableMetrics);
	return (
		<Page screen="Lobby">
			<AddItemModal
				getGames={getUserGames}
				registerGame={registerGame}
				onHide={() => setShowAddModalItem(false)}
				show={showAddModalItem}
			/>
			<PageContent>
				<HorizontalView>
					<PageTitle>Minhas Métricas:</PageTitle>
					<AddItemButton onClick={() => setShowAddModalItem(true)}>
						Adicionar Itens
					</AddItemButton>
				</HorizontalView>
				<CardContainer>
					<Card>
						<div>
							<h1>{metrics.totalGamesPlayed}</h1>
						</div>
						<label>Jogos Jogados</label>
					</Card>
					<Card>
						<div>
							<h1>{metrics.totalHoursPlayed}</h1>
						</div>
						<label>Horas Jogadas</label>
					</Card>
					<Card>
						<div>
							<h1>{metrics.totalAchievements}</h1>
						</div>
						<label>Total de Conquistas</label>
					</Card>
				</CardContainer>
				<ChartContainer>
					<RenderTabs
						label="Jogo mais curtidos! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart metric={tableMetrics?.mostRate} />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart metric={tableMetrics?.mostRate} />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData metric={tableMetrics?.mostRate} />
							</ChartContent>
						)}
					/>
					<RenderTabs
						label="Games mais jogados! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart metric={tableMetrics?.mostPlayed} />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart metric={tableMetrics?.mostPlayed} />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData metric={tableMetrics?.mostPlayed} />
							</ChartContent>
						)}
					/>
					<RenderTabs
						selected={"ring"}
						label="Maiores conquistas! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart metric={tableMetrics?.mostAchievements} />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart metric={tableMetrics?.mostAchievements} />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData metric={tableMetrics?.mostAchievements} />
							</ChartContent>
						)}
					/>
				</ChartContainer>
			</PageContent>
		</Page>
	);
};
export default Home;
