import React, { useState } from "react";
import Popup from "../Popup/Popup";
import Cards from "../Cards/Cards";
import SearchFilter from "../SearchFilter/SearchFilter";
import Pagination from "../Pagination/Pagination";
import { useFetch } from "../../shared/hooks/useFetch";

type Props = {
	searchBarVisible: boolean;
	paginationVisible: boolean;
	itemsPerPage: number;
	featuredPost: boolean;
};

const PostList = ({ searchBarVisible, paginationVisible, itemsPerPage, featuredPost }: Props) => {
	const [activePostTitle, setActivePostTitle] = useState<string>("");
	const [activePost, setActivePost] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(0);

	const { posts, isLoading, items, setItems, filter, setFilter, visibility, setVisibility } =
		useFetch(itemsPerPage);

	return (
		<div style={{ background: "#f0f0f0", minHeight: "auto" }}>
			<Popup
				title={activePostTitle}
				contents={activePost}
				visibility={visibility}
				setVisibility={setVisibility}
			/>

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
				setActivePostTitle={setActivePostTitle}
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
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				filter={filter}
				visible={paginationVisible}
			/>
		</div>
	);
};

export default PostList;
