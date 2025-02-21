"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./Blog/ParticlesBackground"; // Importing the separate particles component

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  publishedAt: string;
  excerpt?: string;
  author?: {
    name: string;
    image?: { asset: { url: string } };
  };
  categories?: { _id: string; title: string }[];
}

interface Category {
  _id: string;
  title: string;
}

interface BlogListProps {
  blogs: Blog[];
  categories: Category[];
}

const POSTS_PER_PAGE = 6; // Number of posts per page

const BlogList: React.FC<BlogListProps> = ({ blogs, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) =>
          blog.categories?.some((cat) => cat.title === selectedCategory)
        );

  // Calculate pagination indices
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Category Dropdown */}
      <div className="absolute top-1 right-1">
        <select
          className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Cards */}
      <div className="mt-12 w-full max-w-6xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="bg-gray-900 text-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-gray-400 text-sm">
                  {new Date(blog.publishedAt).toDateString()}
                </p>
                {blog.mainImage?.asset?.url && (
                  <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                    <Image
                      src={blog.mainImage.asset.url}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <p className="mt-4 text-gray-300">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300 shadow-md"
                >
                  Read More →
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              No posts available for the selected category.
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-800 text-white rounded">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
