import styled from "styled-components";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import type { Post } from "../../shared/types";

type Props = {
	setItems: Dispatch<SetStateAction<Post[]>>;
	posts: Post[];
	itemsPerPage: number;
	setCurrentPage: (number: number) => void;
	currentPage: number;
	filter: string;
	visible: boolean;
};

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 70px;
	input {
		font-size: 17px;
		margin-right: 5px;
	}

	button {
		font-size: 17px;
		appearance: none;
		border: 0;
		background-color: #000;
		color: #fff;
		padding: 8px 30px;
		border-radius: 10px;
		border: 2px solid #000;
		cursor: pointer;
		transition: background-color 0.25s ease-in-out;

		&:hover {
			background-color: #fff;
			color: #000;
		}

		&.disabled {
			cursor: initial;
			background-color: #8f8f8f;
			border-color: #8f8f8f;

			&:hover {
				color: #fff;
			}
		}
	}
	span {
		font-size: 17px;
		margin: 0 20px;
	}
`;

const Pagination = ({
	setItems,
	posts,
	itemsPerPage,
	setCurrentPage,
	currentPage,
	filter,
	visible,
}: Props) => {
	const [prevActive, setPrevActive] = useState<string>("disabled");
	const [nextActive, setNextActive] = useState<string>("enabled");
	const [filterVisible, setFilterVisible] = useState<boolean>(visible);

	if (filter !== "") {
		posts = posts.filter(
			(post) =>
				post.content.rendered.toLowerCase().includes(filter.toLocaleLowerCase()) ||
				post.title.rendered.toLowerCase().includes(filter.toLocaleLowerCase()) ||
				filter === ""
		);
	}

	const updateField = (pageNumber: number) => {
		if (pageNumber == 0) {
			pageNumber = 1;
		} else if (pageNumber > totalPages) {
			pageNumber = totalPages;
		}
		const firstIndex = (pageNumber - 1) * itemsPerPage;
		setItems([...posts].splice(firstIndex, itemsPerPage));
		setCurrentPage(pageNumber - 1);
	};

	const next = () => {
		const totalElements = posts.length;
		const nextPage = currentPage + 1;
		const firstIndex = nextPage * itemsPerPage;

		if (firstIndex >= totalElements) {
			setNextActive("disabled");
			return;
		} else {
			setPrevActive("enabled");
		}

		setItems([...posts].splice(firstIndex, itemsPerPage));
		setCurrentPage(nextPage);

		if (currentPage + 2 === Math.ceil(posts.length / itemsPerPage)) {
			setItems([...posts].splice(firstIndex, itemsPerPage));
			setNextActive("disabled");
		}
	};

	const prev = () => {
		const nextPage = currentPage - 1;
		const firstIndex = nextPage * itemsPerPage;

		if (firstIndex < 0) {
			setPrevActive("disabled");
			return;
		} else {
			setNextActive("enabled");
		}

		setItems([...posts].splice(firstIndex, itemsPerPage));
		setCurrentPage(nextPage);

		if (firstIndex === 0) {
			setItems([...posts].splice(firstIndex, itemsPerPage));
			setPrevActive("disabled");
		}
	};

	const totalPages = Math.ceil(posts.length / itemsPerPage);

	useEffect(() => {
		if (currentPage + 1 === Math.ceil(posts.length / itemsPerPage)) {
			setNextActive("disabled");
		}

		if (currentPage + 1 > totalPages) {
			setCurrentPage(0);
		}

		if (posts.length <= 0) {
			setFilterVisible(false);
		} else {
			if (visible === true) {
				setFilterVisible(true);
			}
		}

		if (currentPage + 1 === totalPages && totalPages === 1 && filter !== "") {
			setPrevActive("disabled");
			setNextActive("disabled");
		} else if (currentPage + 1 === totalPages) {
			setNextActive("disabled");
			setPrevActive("enabled");
		} else if (currentPage == 0) {
			setPrevActive("disabled");
		} else {
			setNextActive("enabled");
		}
	}, [currentPage, setCurrentPage, totalPages, setNextActive, posts, itemsPerPage]);

	if (filterVisible === true) {
		return (
			<PaginationWrapper>
				<button className={prevActive} onClick={() => prev()}>
					Prev
				</button>
				<span>
					Page{" "}
					<input
						type="number"
						value={currentPage + 1}
						onChange={(e) => updateField(parseInt(e.target.value))}
						min="1"
						max={totalPages}
					/>
					/ {Math.ceil(posts.length / itemsPerPage)}
				</span>
				<button className={nextActive} onClick={() => next()}>
					Next
				</button>
			</PaginationWrapper>
		);
	} else {
		return null;
	}
};

export default Pagination;
