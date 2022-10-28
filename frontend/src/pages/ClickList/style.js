import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
  padding: 20px;

	table {
		border-spacing: 0;
		border-collapse: collapse;
	}

	tr,
	td,
	th {
		border: 1px solid white;
		text-align: center;
		padding: 5px;
	}

	th {
		span {
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
	}

	div {
		display: flex;
		height: 200px;
		justify-content: center;
		gap: 10px;
		align-items: center;
	}
`;
