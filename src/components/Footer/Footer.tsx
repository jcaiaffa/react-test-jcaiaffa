import styled from "styled-components";
import React from "react";

const FooterWrapper = styled.footer`
	padding: 70px 0 0;
	background-color: #000000;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	.container {
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		align-items: center;
		column-gap: 40px;
		font-size: 18px;
		flex-wrap: wrap;
		width: 100%;
		margin: auto;

		.column {
			width: calc(25% - 40px);
			text-align: center;

			div {
				margin-bottom: 12px;
				font-weight: 300;

				&:first-child {
					font-weight: 700;
					font-size: 22px;
				}
			}
		}
	}

	.copyRight {
		font-size: 14px;
		width: 100%;
		margin-top: 80px;
		text-align: center;
		background-color: #1b1b1b;
		padding: 20px 0;
		border-top: 1px solid #3b3b3b;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;

			.column {
				width: 100%;
				margin-bottom: 20px;
			}
		}
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<div className="column">
					<div>Column 1</div>
					<div>Lorem</div>
					<div>Lorem</div>
				</div>
				<div className="column">
					<div>Column 2</div>
					<div>Lorem</div>
					<div>Lorem</div>
				</div>
				<div className="column">
					<div>Column 3</div>
					<div>Lorem</div>
					<div>Lorem</div>
				</div>
				<div className="column">
					<div>Lorem</div>
					<div>Lorem</div>
					<div>Lorem</div>
				</div>
			</div>

			<div className="copyRight">&copy; 2020</div>
		</FooterWrapper>
	);
};

export default Footer;
