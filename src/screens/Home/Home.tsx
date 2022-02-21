import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";

const Home = () => {
	return (
		<div>
			<Hero title={"Welcome"} subtitle={""} featuredImage={""} />
			<h1 style={{ textAlign: "center" }}>Our last news</h1>
			<PostList
				searchBarVisible={false}
				paginationVisible={false}
				itemsPerPage={3}
				featuredPost={false}
			/>
			<Footer />
		</div>
	);
};

export default Home;
