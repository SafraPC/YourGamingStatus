import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { random_rgba } from "../../../../helpers/randomColor";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "",
		},
	},
};

const VerticalChart = ({ metric }) => {
	if (metric && metric.length) {
		const labels = ["Total"];

		const data = {
			labels,
			datasets: metric?.map((item) => ({
				label: item.name,
				data: [item.value],
				backgroundColor: random_rgba(),
			})),
		};
		return <Bar options={options} data={data} responsive="true" />;
	}
	return null;
};

export default VerticalChart;
