import React from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import DoughnutChart from "./components/doughnutChart";
import { AddItemModal } from "./components/modal-add-items";
import TableData from "./components/tableData";
import VerticalChart from "./components/verticalChart";
import {
	AddItemButton,
	Card,
	CardContainer,
	ChartContainer,
	ChartContent,
	HorizontalView,
} from "./styles";

const Home = () => {
	const [showAddModalItem, setShowAddModalItem] = React.useState(false);

	const closeModalItem = () => {
		setShowAddModalItem(false);
	};

	return (
		<Page screen="Lobby">
			<AddItemModal onHide={closeModalItem} show={showAddModalItem} />
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
