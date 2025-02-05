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
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">📚 Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-l-4 border-blue-600 pl-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl text-blue-600 font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
