import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import useDispatch from "../../shared/hooks/useDispatch";
import { setUsername } from "../../store/login";

type Props = {
	title: string;
	subtitle: string;
	featuredImage: string;
};

const HeroWrapper = styled.div`
	background-color: #6a85a8;
	color: #ffffff;
	min-height: 200px;
	display: flex;
	padding: 80px 30px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	text-align: center;

	&.detailPost:after {
		content: "";
		background-color: rgba(0, 0, 0, 0.55);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		backdrop-filter: blur(8px);
	}

	&.detailPost {
		h1 {
			text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		}
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-height: 100%;
		position: relative;
		z-index: 1;
	}

	h1 {
		font-size: 50px;
		margin: 0;
	}
	h2 {
		text-transform: capitalize;
	}
`;

const Hero = ({ title, subtitle, featuredImage }: Props) => {
	const dispatch = useDispatch();

	return (
		<HeroWrapper
			className={featuredImage ? "detailPost" : ""}
			style={{ backgroundImage: `url(${featuredImage})` }}
		>
			<div className="container">
				<h1>{parse(title)}</h1>
				{subtitle !== "" ? (
					<h2
						onClick={() => {
							dispatch(setUsername(""));
						}}
					>
						{subtitle}
					</h2>
				) : null}
			</div>
		</HeroWrapper>
	);
};

export default Hero;
