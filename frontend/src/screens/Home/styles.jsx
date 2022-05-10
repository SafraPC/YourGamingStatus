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
	background-color: white;
	@media screen and (min-width: 992px) {
		padding: 3rem;
	}

	> canvas {
		max-height: 500px !important;
		min-height: 300px !important;
	}
`;

export const AddItemButton = styled.button`
	padding: 0.5rem;
	top: 20px;
	right: 45px;
	cursor: pointer;
	border: green;
	border-radius: 0.3rem;
	background-color: white;
	border: 1px solid green;
	color: green;
	transition: background-color 0.3s ease;
	:hover {
		background-color: green;
		color: white;
	}
`;

export const HorizontalView = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

export const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const ModalInputField = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	:not(:first-child) {
		margin-top: 1.5rem;
	}
`;

export const ModalLabel = styled.label`
	color: black;

	margin-bottom: 0.4rem;
	font-size: 14px;
`;

export const AlignTabView = styled.div`
	margin-top: 2.5rem;
	> label {
		font-size: 18px;
		font-weight: bold;
	}
	padding: 1rem;
`;
