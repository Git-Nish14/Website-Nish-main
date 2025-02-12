// lib/query_sanity.ts
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '69b6l5ot',       // Your Sanity project ID
  dataset: 'production',       // Your dataset name
  apiVersion: '2023-01-01',     // Use a specific API version
  useCdn: false,               // Set to false for fresh data
});

export async function getBlogs() {
  const query = `*[_type == "blog"]{
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      _id,
      title
    }
  } | order(publishedAt desc)`;
  const blogs = await client.fetch(query);
  return blogs;
}

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    title,
    description
  }`;
  const categories = await client.fetch(query);
  return categories;
}

export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug]{
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      _id,
      title
    }
  }`;
  const blog = await client.fetch(query, { slug });
  return blog;
}

export async function getallprojects() {
  const projects = await client.fetch(`*[_type == "project"]{
  _id,
  title,
  description,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  image{alt},
  link
}`);
  return projects;
}     
