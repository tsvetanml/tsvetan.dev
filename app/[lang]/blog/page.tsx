import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Ordenar por fecha (más reciente primero)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="border-2 border-blue-900 border-opacity-60 p-6 rounded-lg bg-white shadow-md transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
              <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
