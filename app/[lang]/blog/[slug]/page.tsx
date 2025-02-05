import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const postPath = path.join(process.cwd(), "content/blog", `${params.slug}.md`);
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      <div
        className="prose prose-blue"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
