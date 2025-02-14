import React from "react";
import { getBlogs, getCategories } from "../../lib/sanity_query";
import BlogList from "../../components/BlogList";

export default async function BlogPage() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return (
    <div>
      <BlogList blogs={blogs} categories={categories} />
    </div>
  );
}
