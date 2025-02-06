import fs from "fs/promises"; // ✅ Versión asíncrona de fs
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

interface PostProps {
  params: Promise<{ slug: string }>; // ✅ Ahora es una promesa
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params; // ✅ Extraer el slug correctamente

  if (!slug) {
    throw new Error("Slug not found");
  }

  const postPath = path.join(process.cwd(), "content/blog", `${slug}.md`);

  try {
    const fileContents = await fs.readFile(postPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return (
      <div className="p-8 max-w-3xl h-screen mx-auto overflow-auto bg-white shadow-lg border-x-2 border-blue-900 border-opacity-60 
  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent hover:scrollbar-thumb-blue-700 transition-all duration-300">

        {/* 🏷️ Título y Fecha */}
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500">{data.date}</p>

        {/* 📖 Contenido del Post */}
        <div
          className="prose prose-blue mt-6 text-gray-800"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* 🔙 Botón para Volver al Blog */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 font-semibold justify-center backdrop-filter backdrop-blur-sm rounded-lg cursor-pointer px-6 py-2 border-blue-900 border-opacity-60 transition-transform transform hover:scale-105"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return <div className="text-center text-red-500 p-8">Error loading post.</div>;
  }
}
