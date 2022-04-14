import React from "react";
import { Table } from "../styles";

const TableData = () => {
	return (
		<Table>
			<tr>
				<th>Nome</th>
				<th>Tipo</th>
				<th>Horas</th>
			</tr>
			<tr>
				<td>The last of us</td>
				<td>Aventura</td>
				<td>35</td>
			</tr>
			<tr>
				<td>Uncharted</td>
				<td>Aventura</td>
				<td>40</td>
			</tr>
			<tr>
				<td>League of Legends</td>
				<td>Competitivo</td>
				<td>12400</td>
			</tr>
			<tr>
				<td>CS:GO</td>
				<td>FPS</td>
				<td>400</td>
			</tr>
		</Table>
	);
};
export default TableData;
