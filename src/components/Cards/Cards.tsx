import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import type { Post } from "../../shared/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
	items: Post[];
	setActivePostTitle: (content: string) => void;
	setActivePost: (content: string) => void;
	setVisibility: (visible: string) => void;
	filter: string;
	isLoading: boolean;
	featuredPost: boolean;
	currentPage: number;
};

const StyledCardList = styled.div`
	display: flex;
	padding: 60px;
	column-gap: 40px;
	row-gap: 40px;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;

	&.loading-spinner {
		min-height: 500px;
		background-image: url("https://cutewallpaper.org/21/loading-gif-transparent-background/Update-throbber-icon-in-Seven-theme-2775725-Drupalorg.gif");
		background-size: 50px;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.card {
		cursor: pointer;
		width: calc(33.33% - 67px);
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
		padding: 20px;
		transition: box-shadow 0.25s ease-in-out;
		min-height: 165px;
		display: flex;
		flex-direction: column;
		position: relative;
		animation: fadeIn 0.4s ease-in-out;
		animation-fill-mode: forwards;

		.postThumb {
			height: 200px;
			margin-bottom: 20px;
			position: relative;
			z-index: 1;
			object-fit: cover;
			width: 100%;
		}

		&.featured {
			width: 100%;

			.postThumb {
				height: 400px;
				margin-bottom: 40px;
			}
		}

		&:hover {
			box-shadow: 0 0 18px rgba(0, 0, 0, 0.18);
		}
		@media (max-width: 992px) {
			width: 100%;
		}
	}

	.notFound {
		margin: 50px auto;
	}
`;

const Cards = ({
	items,
	setActivePostTitle,
	setActivePost,
	setVisibility,
	filter,
	isLoading,
	featuredPost,
	currentPage,
}: Props) => {
	const click = (title: string, content: string, visible: string) => {
		setActivePostTitle(title);
		setActivePost(content);
		setVisibility(visible);
	};

	const navigate = useNavigate();

	const routeTo = (id: number) => {
		const path = `/blog/${id}`;
		navigate(path);
	};

	const postLists = items.filter(
		(post) =>
			post.content.rendered.toLowerCase().includes(filter.toLocaleLowerCase()) ||
			post.title.rendered.toLowerCase().includes(filter.toLocaleLowerCase()) ||
			filter === ""
	);

	let loadingSpinner = "";

	if (isLoading) {
		loadingSpinner = "loading-spinner";
	}

	return (
		<StyledCardList className={loadingSpinner}>
			{postLists.length <= 0 && isLoading === false ? (
				<div className="notFound"> No posts were found...</div>
			) : currentPage == 0 && featuredPost === true ? (
				postLists
					.filter((post, index) => index < (currentPage + 1) * 4)
					.map((post, index) => (
						<div
							key={post.id}
							className={
								featuredPost === true && currentPage == 0 && filter === ""
									? `card ${index == 0 ? "featured" : ""}`
									: `card`
							}
							onClick={() =>
								featuredPost !== true
									? click(post.title.rendered, post.content.rendered, "visible")
									: routeTo(post.id)
							}
						>
							{filter === "" ? (
								<LazyLoadImage
									key={post._embedded["wp:featuredmedia"]["0"].source_url}
									className="postThumb"
									src={
										index == 0
											? post._embedded["wp:featuredmedia"]["0"].source_url
											: post._embedded["wp:featuredmedia"]["0"].source_url + "?w=430&h=230&crop=1"
									}
									effect="blur"
								/>
							) : (
								""
							)}
							{parse(post.title.rendered)}
							<br />
							{/*parse(post.excerpt.rendered)*/}
						</div>
					))
			) : (
				postLists.map((post, index) => (
					<div
						key={post.id}
						className={
							featuredPost === true && currentPage == 0 && filter === ""
								? `card ${index == 0 ? "featured" : ""}`
								: `card`
						}
						onClick={() =>
							featuredPost !== true
								? click(post.title.rendered, post.content.rendered, "visible")
								: routeTo(post.id)
						}
					>
						{filter === "" ? (
							<LazyLoadImage
								key={post._embedded["wp:featuredmedia"]["0"].source_url}
								className="postThumb"
								src={post._embedded["wp:featuredmedia"]["0"].source_url + "?w=430&h=230&crop=1"}
								effect="blur"
							/>
						) : (
							""
						)}
						{parse(post.title.rendered)}
						<br />
						{/*parse(post.excerpt.rendered)*/}
					</div>
				))
			)}
		</StyledCardList>
	);
};

export default Cards;
