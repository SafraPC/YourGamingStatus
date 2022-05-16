import React from "react";
import { Table } from "../../styles";

const TableData = ({ metric, label }) => {
	if (metric && metric.length) {
		return (
			<Table>
				<tr>
					<th>Nome</th>
					<th>{label}</th>
				</tr>
				{metric.map((item) => (
					<tr>
						<td>{item.name}</td>
						<td>{item.value}</td>
					</tr>
				))}
			</Table>
		);
	}
	return null;
};
export default TableData;
