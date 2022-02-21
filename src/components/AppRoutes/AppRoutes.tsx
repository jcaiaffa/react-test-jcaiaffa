import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Blog from "../../screens/Blog/Blog";
import About from "../../screens/About/About";
import BlogDetail from "../../screens/BlogDetail/BlogDetail";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/blog" element={<Blog />}></Route>
			<Route path="/blog/:id" element={<BlogDetail />}></Route>
		</Routes>
	);
};

export default AppRoutes;
