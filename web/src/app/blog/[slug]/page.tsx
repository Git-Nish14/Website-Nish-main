import { getBlogBySlug } from "@/lib/sanity_query";
import BlogContent from "@/components/Blog/blogContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default async function BlogDetails({
  params: { slug },
}: {
  params: { slug?: string };
}) {
  if (!slug) {
    return notFound();
  }

  try {
    const blogData = await getBlogBySlug(slug);
    const blog = blogData?.[0] || null;

    if (!blog) {
      return notFound();
    }

    return (
      <>
        <Navbar />
        <BlogContent blog={blog} />
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return notFound();
  }
}
