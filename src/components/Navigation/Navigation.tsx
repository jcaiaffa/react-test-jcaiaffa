import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000000;
	color: #ffffff;

	li {
		list-style: none;
		margin: 1.5rem;

		a {
			color: #ffffff;
			text-decoration: none;
			transition: opacity 0.25s ease-in-out;
			padding-bottom: 15px;
			position: relative;

			&.active {
				color: #00ffff;

				&:after {
					background-color: #00ffff;
				}
			}

			&:after {
				content: "";
				width: 0%;
				height: 1px;
				background-color: #ffffff;
				display: block;
				transition: width 0.25s ease-in-out;
				position: absolute;
				bottom: 10px;
				left: 0;
			}

			&:hover {
				opacity: 0.5;

				color: #00ffff;

				&:after {
					opacity: 0.99;
					width: 100%;
					background-color: #00ffff;
				}
			}
		}
	}
`;

type NavItem = {
	title: string;
	to: string;
};

const items: NavItem[] = [
	{ title: "Home", to: "/" },
	{ title: "About", to: "/about" },
	{ title: "Blog", to: "/blog" },
];

const Navigation = () => {
	return (
		<Nav>
			{items.map((item) => (
				<li key={item.title}>
					<NavLink to={item.to}>{item.title}</NavLink>
				</li>
			))}
		</Nav>
	);
};

export default Navigation;
