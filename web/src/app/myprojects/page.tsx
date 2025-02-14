import React from "react";
import { getallprojects } from "@/lib/sanity_query";
import ProjectList from "@/components/ProjectList"; // Import Client Component

export default async function MyProjectsPage() {
  const projects = await getallprojects(); // ✅ Fetching is done in Server Component

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <ProjectList projects={projects} />{" "}
      </div>
    </>
  );
}
