import styled from "styled-components";

export const Table = styled.table`
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;

	> td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	> tr:nth-child(even) {
		background-color: #dddddd;
	}
`;
export const ChartContainer = styled.div``;

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const Card = styled.div`
	width: 20%;
	min-height: 150px;
	border-radius: 0.3rem;
	background-color: white;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> div {
		border: 2px solid black;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		border-radius: 300px;
		margin: 0.7rem;
		> h1 {
			font-size: 18px;
			font-weight: bold;
		}
		> label {
			font-size: 15px;
		}
	}
`;

export const ChartContent = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;
	@media screen and (min-width: 992px) {
		padding: 3rem;
	}

	> canvas {
		max-height: 500px !important;
		min-height: 300px !important;
	}
`;
