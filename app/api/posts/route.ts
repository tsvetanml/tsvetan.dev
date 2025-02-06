import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  // Ordenar los posts por fecha (más recientes primero)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return NextResponse.json(posts);
}
