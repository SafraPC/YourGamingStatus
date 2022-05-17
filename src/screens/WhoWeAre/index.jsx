import React from "react";
import { Page } from "../../components/Page";
import { PageContent, PageTitle } from "../../styles/styles";
import { Description } from "./styles";

const WhoWeAre = () => {
	return (
		<Page screen="Quem Somos">
			<PageContent>
				<PageTitle>Quem somos? </PageTitle>
				<hr />
				<Description>
					<span>
						YourGamingStatus é uma plataforma para se orientar o quão Gamer você
						é!
					</span>
					<span>
						Essa plataforma foi criada, pensada, arquitetada, desenvolvida e
						publicada por Leandro Safra, desenvolvedor e estudante de Análise de
						Desenvolvimento de Sistemas na IFSP (Instituto Federal de São Paulo)
					</span>
					<span>
						Essa plataforma irá te ajudar a parametrizar quantas conquistar você
						atingiu em seus jogos e qual seu nível em relação a elas e o nível
						Gamer em geral.
					</span>
				</Description>
			</PageContent>
		</Page>
	);
};
export default WhoWeAre;
