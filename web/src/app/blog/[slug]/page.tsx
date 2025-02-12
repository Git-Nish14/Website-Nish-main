"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Correct way in App Router
import { getBlogBySlug } from "../../../lib/sanity_query";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

interface Blog {
  _id: string;
  title: string;
  mainImage?: { asset: { url: string } };
  publishedAt: string;
  body: any;
  author?: {
    name: string;
    image?: { asset: { url: string } };
  };
}

const BlogDetails = () => {
  const params = useParams(); // ✅ Correct way in App Router
  const slug = params?.slug as string; // Ensure it's a string
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchBlog = async () => {
        setLoading(true);
        const blogData = await getBlogBySlug(slug);
        setBlog(blogData && blogData[0] ? blogData[0] : null);
        setLoading(false);
      };
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-center text-gray-500">Blog not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-8">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              links: {
                enable: true,
                distance: 120,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
              },
            },
          }}
          className="absolute inset-0 pointer-events-none"
        />

        <motion.div
          className="relative p-10 rounded-lg shadow-lg max-w-3xl w-full bg-black bg-opacity-80 text-white z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-400 text-sm mb-4">
            {new Date(blog.publishedAt).toDateString()}
          </p>

          {blog.author && (
            <div className="flex items-center mb-4">
              {blog.author.image?.asset?.url && (
                <Image
                  src={blog.author.image.asset.url}
                  alt={blog.author.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white"
                />
              )}
              <span className="ml-2 text-gray-300">By {blog.author.name}</span>
            </div>
          )}

          {blog.mainImage?.asset?.url && (
            <div className="my-6 relative w-full h-96 overflow-hidden rounded-lg">
              <Image
                src={blog.mainImage.asset.url}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <article className="prose prose-lg max-w-none text-gray-200">
            <PortableText value={blog.body} />
          </article>

          {/* Back to Blogs Button at the Bottom */}
          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 text-lg font-bold border-2 text-white border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              ← Back to Blogs
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
