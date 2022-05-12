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
			createdAt: "",
			gender: "",
			name: "",
			qtdAchievements: 0,
			qtdHoursPlayed: 0,
			rate: 0,
			updatedAt: "",
			userId: "",
			__v: 0,
			_id: "",
		},
	]);
	const { registerGame, getGames } = useGames();

	const getUserGames = async () => {
		setUserGames(await getGames());
	};

	React.useEffect(() => {
		getUserGames();
	}, []);

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
							<h1>300</h1>
						</div>
						<label>Jogos Jogados</label>
					</Card>
					<Card>
						<div>
							<h1>3500</h1>
						</div>
						<label>Horas Jogadas</label>
					</Card>
					<Card>
						<div>
							<h1>14</h1>
						</div>
						<label>Tipos Diferentes</label>
					</Card>
				</CardContainer>
				<ChartContainer>
					<RenderTabs
						selected={"ring"}
						label="Generos mais jogados! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData />
							</ChartContent>
						)}
					/>
					<RenderTabs
						label="Games mais jogados! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData />
							</ChartContent>
						)}
					/>
					<RenderTabs
						selected={"ring"}
						label="Maiores conquistas! (TOP 10): "
						renderGraph={() => (
							<ChartContent>
								<VerticalChart />
							</ChartContent>
						)}
						renderRing={() => (
							<ChartContent>
								<DoughnutChart />
							</ChartContent>
						)}
						renderTable={() => (
							<ChartContent>
								<TableData />
							</ChartContent>
						)}
					/>
				</ChartContainer>
			</PageContent>
		</Page>
	);
};
export default Home;
