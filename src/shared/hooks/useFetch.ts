import { useEffect, useState } from "react";
import type { Post } from "../types";

export const useFetch = (itemsPerPage: number) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsloading] = useState(true);
	const [items, setItems] = useState<Post[]>([]);
	const [visibility, setVisibility] = useState<string>("");
	const [filter, setFilter] = useState<string>("");

	useEffect(() => {
		let isActive = true;
		async function loadPosts() {
			const response = await fetch(
				`https://techcrunch.com/wp-json/wp/v2/posts/?_embed&per_page=${
					itemsPerPage > 3 && itemsPerPage < 7 ? 30 : itemsPerPage
				}`
			);
			if (!response.ok) {
				// oups! something went wrong
				return;
			}

			const posts = await response.json();
			const newPosts: Post[] = [...posts].splice(0, itemsPerPage);
			if (isActive) {
				setPosts(posts);
				setItems(newPosts);
				setVisibility("hidden");
				setFilter("");
				setIsloading(false);
			}
		}

		loadPosts();

		return () => {
			isActive = false;
		};
	}, [itemsPerPage]);

	return { posts, isLoading, items, setItems, filter, setFilter, visibility, setVisibility };
};
