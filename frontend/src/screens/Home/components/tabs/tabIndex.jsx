import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { AlignTabView } from "../../styles";
export const RenderTabs = ({ label, renderGraph, renderRing, renderTable }) => {
	return (
		<AlignTabView>
			<label>{label && label}</label>
			<Tabs defaultActiveKey="graph">
				<Tab eventKey="graph" title="Gráfico">
					<div>{renderGraph && renderGraph()}</div>
				</Tab>
				<Tab eventKey="ring" title="Anél">
					{renderRing && renderRing()}
				</Tab>
				<Tab eventKey="table" title="Tabela">
					{renderTable && renderTable()}
				</Tab>
			</Tabs>
		</AlignTabView>
	);
};
