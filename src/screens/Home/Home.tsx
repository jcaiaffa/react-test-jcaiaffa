import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";
import useSelector from "../../shared/hooks/useSelector";

const Home = () => {
	const username = useSelector((state) => state.login.username);

	return (
		<div>
			<Hero title={"Welcome"} subtitle={username} featuredImage={""} />
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
