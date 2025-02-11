import React from "react";
import { getBlogs, getCategories } from "../../lib/sanity_query";
import BlogList from "./BlogList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default async function BlogPage() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return (
    <div>
      <Navbar />
      <BlogList blogs={blogs} categories={categories} />
      <Footer />
    </div>
  );
}
