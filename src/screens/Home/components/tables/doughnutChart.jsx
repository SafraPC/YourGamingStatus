import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { random_rgba } from "../../../../helpers/randomColor";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ metric, label }) => {
	if (metric && metric.length) {
		const backColor = metric?.map((_item) => random_rgba());
		const data = {
			maintainAspectRatio: false,
			labels: metric?.map((item) => item.name),
			datasets: [
				{
					label: label,
					data: metric?.map((item) => item.value),
					backgroundColor: backColor,
					borderColor: backColor,
					borderWidth: 1,
				},
			],
		};
		return <Doughnut data={data} />;
	}
	return null;
};
export default DoughnutChart;
