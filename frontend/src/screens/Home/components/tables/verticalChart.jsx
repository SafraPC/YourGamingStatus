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

const labels = ["Total"];

const data = {
	labels,
	datasets: [
		{
			label: "Aventura",
			data: [100],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Terror",
			data: [200],
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "Investigação",
			data: [50],
			backgroundColor: "rgba(30, 60, 125, 0.5)",
		},
		{
			label: "Competitivos",
			data: [100],
			backgroundColor: "rgba(80, 20, 350, 0.5)",
		},
	],
};

const VerticalChart = () => {
	return <Bar options={options} data={data} responsive={true} />;
};

export default VerticalChart;
