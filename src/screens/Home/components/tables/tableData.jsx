import React from "react";
import { Table } from "../../styles";

const TableData = ({ metric, label }) => {
	if (metric && metric.length) {
		return (
			<Table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>{label}</th>
					</tr>
				</thead>
				<tbody>
					{metric.map((item, index) => (
						<tr key={index}>
							<td>{item.name}</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
	return null;
};
export default TableData;
