import styled from "styled-components";
import React, { SetStateAction, Dispatch } from "react";
import type { Post } from "../../shared/types";

type Props = {
	value: string;
	setFilter: (setFilter: string) => void;
	setItems: Dispatch<SetStateAction<Post[]>>;
	posts: Post[];
	visible: boolean;
	currentPage: number;
};

const FilterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 60px 0;
	max-width: 1200px;
	margin: 0 auto;

	input {
		height: 40px;
		width: 100%;
		padding: 8px 20px;
		font-size: 18px;
	}
`;

const Filter = ({ value, setFilter, setItems, posts, visible, currentPage }: Props) => {
	const changeFilterValue = (value: string) => {
		setFilter(value);
		const postsList = posts.filter(
			(post) =>
				post.content.rendered.toLowerCase().includes(value.toLocaleLowerCase()) ||
				post.title.rendered.toLowerCase().includes(value.toLocaleLowerCase()) ||
				value === ""
		);
		if (currentPage === 0 && value == "") {
			setItems([...postsList].splice(0, 4));
		} else {
			setItems([...postsList].splice(0, 3));
		}
	};

	return visible == true ? (
		<FilterWrapper>
			<input
				placeholder="Search..."
				type="text"
				value={value}
				onChange={(event) => changeFilterValue(event.target.value)}
			/>
		</FilterWrapper>
	) : null;
};

export default Filter;
