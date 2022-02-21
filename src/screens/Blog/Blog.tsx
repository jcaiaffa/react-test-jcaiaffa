import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";

const Blog = () => {
	return (
		<div>
			<Hero title={"Blog"} subtitle={"Get our last news"} featuredImage={""} />

			<PostList
				searchBarVisible={true}
				paginationVisible={true}
				itemsPerPage={6}
				featuredPost={true}
			/>
			<Footer />
		</div>
	);
};

export default Blog;
