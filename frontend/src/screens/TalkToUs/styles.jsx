import styled from "styled-components";

export const FormTalkToUs = styled.form`
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;

	> div {
		margin: 3rem 0px 3rem 0px;

		> label {
			font-size: 19px;
		}
		> textarea {
			margin-top: 1rem;
			resize: none;
			min-height: 150px;
		}
	}
`;
