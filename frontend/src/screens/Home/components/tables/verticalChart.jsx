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
	const labels = ["Total"];
	const data = {
		labels,
		datasets: metric?.map((item) => ({
			label: item.name,
			data: [item.value],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		})),
	};
	return <></>;
	return metric && <Bar options={options} data={data} responsive={true} />;
};

export default VerticalChart;
