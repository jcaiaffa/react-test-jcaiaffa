import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import Hero from "../../components/Hero/Hero";
import type { Post } from "../../shared/types";
import Footer from "../../components/Footer/Footer";

const BlogDetailPage = styled.div`
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

	* {
		max-width: 100%;
	}

	.wp-caption {
		margin: auto;
	}

	img {
		height: auto;
	}

	.postDetail {
		max-width: 100%;

		.backButton {
			margin-bottom: 50px;
			display: block;
		}
	}
`;

// fetch wordpress post by id with useEffect

const BlogDetail = () => {
	const { id } = useParams();
	const [post, setPost] = useState<Post>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${id}?_embed`)
			.then((response) => response.json())
			.then((data) => {
				setPost(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	let loadingSpinner = "";

	if (isLoading) {
		loadingSpinner = "loading-spinner";
	}

	return (
		<div>
			<Hero
				title={post ? post.title.rendered : ""}
				subtitle={""}
				featuredImage={post ? post._embedded["wp:featuredmedia"]["0"].source_url : ""}
			/>
			<BlogDetailPage className={loadingSpinner}>
				<div className="postDetail">
					<Link className="backButton" to="/blog">
						{`<< Back to Blog`}
					</Link>

					<h2>{post ? post.title.rendered : ""}</h2>
					<div>{post ? parse(post.content.rendered) : ""}</div>
				</div>
			</BlogDetailPage>
			<Footer />
		</div>
	);
};

export default BlogDetail;
