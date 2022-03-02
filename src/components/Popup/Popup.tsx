import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";

type Props = {
	title: string;
	contents: string;
	visibility: string;
	setVisibility: (setVisibility: string) => void;
};

const PopupWrapper = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;

	.popup {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		max-width: 90%;
		height: 50vh;
		padding: 40px 10px 40px 40px;
		box-sizing: border-box;
		box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		width: 700px;

		a {
			color: #0a4da5;
		}

		* {
			max-width: 100%;
		}

		.wp-caption {
			margin: auto;
		}

		img {
			height: auto;
			margin: auto;
		}
	}

	.box {
		overflow: auto;
		height: 100%;
		padding-right: 30px;
	}

	.close-icon {
		position: absolute;
		right: -20px;
		top: -20px;
		font-size: 35px;
		cursor: pointer;
		z-index: 3;
		font-family: Arial, Helvetica, sans-serif;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: #f0f0f0f0;
		text-align: center;
		color: #000;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
	}

	&:before {
		content: "";
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		display: block;
	}

	&.visible {
		display: block;
	}
`;

const Popup = ({ contents, title, visibility, setVisibility }: Props) => {
	const closeModal = () => {
		setVisibility("hidden");
	};

	return (
		<PopupWrapper className={visibility}>
			<div className="popup">
				<span className="close-icon" onClick={() => closeModal()}>
					x
				</span>
				<div className="box">
					<h1>{parse(title)}</h1>
					{contents !== undefined ? parse(contents) : ""}
				</div>
			</div>
		</PopupWrapper>
	);
};

export default Popup;
