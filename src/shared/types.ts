
export type Post = {
	id: number;
	title: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string;
    }
  >;
  }
};
