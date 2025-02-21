import React from "react";
import { getBlogs, getCategories } from "../../lib/sanity_query";
import BlogList from "../../components/BlogList";

export default async function BlogPage() {
  const blogs = await getBlogs(1, 10); // Example arguments: currentPage = 1, POSTS_PER_PAGE = 10
  const categories = await getCategories();

  return (
    <div>
      <BlogList blogs={blogs} categories={categories} />
    </div>
  );
}
