// app/blog/BlogList.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

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
  description?: string;
}

interface BlogListProps {
  blogs: Blog[];
  categories: Category[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs by category title (if a category other than "All" is selected)
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) =>
          blog.categories?.some((cat) => cat.title === selectedCategory)
        );

  return (
    <div className={styles.blogPage}>
      {/* Sidebar with Categories */}
      <aside className={styles.sidebar}>
        <h2>Categories</h2>
        <ul>
          <li
            onClick={() => setSelectedCategory("All")}
            className={selectedCategory === "All" ? styles.active : ""}
          >
            All
          </li>
          {categories.map((cat) => (
            <li
              key={cat._id}
              onClick={() => setSelectedCategory(cat.title)}
              className={selectedCategory === cat.title ? styles.active : ""}
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area with Blog Posts */}
      <main className={styles.blogContent}>
        <h1>Blog Posts</h1>
        <div className={styles.blogGrid}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog._id} className={styles.blogPost}>
                <h3>{blog.title}</h3>
                <p className={styles.date}>
                  {new Date(blog.publishedAt).toDateString()}
                </p>
                {blog.mainImage?.asset?.url && (
                  <div className={styles.blogImageContainer}>
                    <Image
                      src={blog.mainImage.asset.url}
                      alt={blog.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                {blog.author && (
                  <div className={styles.authorInfo}>
                    {blog.author.image?.asset?.url && (
                      <Image
                        src={blog.author.image.asset.url}
                        alt={blog.author.name}
                        width={40}
                        height={40}
                        className={styles.authorImage}
                      />
                    )}
                    <span>By {blog.author.name}</span>
                  </div>
                )}
                <p>{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className={styles.readMoreLink}
                >
                  Read More →
                </Link>
              </div>
            ))
          ) : (
            <p>No posts available for the selected category.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogList;
