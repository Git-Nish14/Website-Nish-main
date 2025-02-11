// app/blog/[slug]/page.tsx
import React from "react";
import { getBlogBySlug } from "../../../lib/sanity_query";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

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

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetails({ params }: BlogPageProps) {
  const blogData = await getBlogBySlug(params.slug);
  const blog: Blog | null = blogData && blogData[0] ? blogData[0] : null;

  if (!blog) {
    return <p className="text-center text-gray-500">Blog not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black py-8">
        <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg my-8">
          <Link
            href="/blog"
            className="text-blue-400 hover:underline mb-4 block"
          >
            ← Back to Blogs
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">{blog.title}</h1>
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
                  className="rounded-full"
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
        </div>
      </div>
      <Footer />
    </>
  );
}
