import React from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import DoughnutChart from "./components/doughnutChart";
import TableData from "./components/tableData";
import VerticalChart from "./components/verticalChart";
import { Card, CardContainer, ChartContainer, ChartContent } from "./styles";

const Home = () => {
	return (
		<Page screen="Lobby">
			<PageContent>
				<PageTitle>Minhas Métricas:</PageTitle>
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
					<ChartContent>
						<VerticalChart />
					</ChartContent>
					<ChartContent>
						<DoughnutChart />
					</ChartContent>
					<ChartContent>
						<TableData />
					</ChartContent>
				</ChartContainer>
			</PageContent>
		</Page>
	);
};
export default Home;
