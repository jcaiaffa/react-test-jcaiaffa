import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import Cards from "../Cards/Cards";
import SearchFilter from "../SearchFilter/SearchFilter";
import Pagination from "../Pagination/Pagination";
import type { Post } from "../../shared/types";

type Props = {
	searchBarVisible: boolean;
	paginationVisible: boolean;
	itemsPerPage: number;
	featuredPost: boolean;
};

const PostList = ({ searchBarVisible, paginationVisible, itemsPerPage, featuredPost }: Props) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [activePost, setActivePost] = useState<string>("");
	const [visibility, setVisibility] = useState<string>("");
	const [filter, setFilter] = useState<string>("");
	const ITEMS_PER_PAGE = itemsPerPage;
	const [items, setItems] = useState<Post[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		async function loadPosts() {
			const response = await fetch(
				`https://techcrunch.com/wp-json/wp/v2/posts/?_embed&per_page=${
					ITEMS_PER_PAGE > 3 && ITEMS_PER_PAGE < 7 ? 30 : ITEMS_PER_PAGE
				}`
			);
			if (!response.ok) {
				// oups! something went wrong
				return;
			}

			const posts = await response.json();
			const newPosts: Post[] = [...posts].splice(0, ITEMS_PER_PAGE);
			setPosts(posts);
			setItems(newPosts);
			setVisibility("hidden");
			setFilter("");
			setIsloading(false);
		}

		loadPosts();
	}, [ITEMS_PER_PAGE]);

	return (
		<div style={{ background: "#f0f0f0", minHeight: "auto" }}>
			<Popup contents={activePost} visibility={visibility} setVisibility={setVisibility} />

			<SearchFilter
				value={filter}
				setFilter={setFilter}
				setItems={setItems}
				posts={posts}
				visible={searchBarVisible}
				currentPage={currentPage}
			/>
			<Cards
				items={items}
				setActivePost={setActivePost}
				setVisibility={setVisibility}
				filter={filter}
				isLoading={isLoading}
				featuredPost={featuredPost}
				currentPage={currentPage}
			/>
			<Pagination
				setItems={setItems}
				posts={posts}
				itemsPerPage={ITEMS_PER_PAGE}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				filter={filter}
				visible={paginationVisible}
			/>
		</div>
	);
};

export default PostList;
