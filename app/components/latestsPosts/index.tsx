"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  summary: string;
  date: string;
  link: string;
}

const samplePosts: Post[] = [
  { id: 1, title: "Mastering React Hooks", summary: "A guide to using hooks effectively.", date: "April 12, 2024", link: "/blog/react-hooks" },
  { id: 2, title: "Next.js 15 Features", summary: "What's new in Next.js 15?", date: "March 28, 2024", link: "/blog/nextjs-15" },
  { id: 3, title: "Tailwind CSS Tips", summary: "Productivity hacks with Tailwind.", date: "March 10, 2024", link: "/blog/tailwind-tips" },
  { id: 4, title: "JavaScript Best Practices", summary: "Writing clean, efficient JS.", date: "February 20, 2024", link: "/blog/js-best-practices" },
  { id: 5, title: "TypeScript for Beginners", summary: "Getting started with TypeScript.", date: "February 5, 2024", link: "/blog/typescript-beginners" },
  { id: 6, title: "Optimizing Web Performance", summary: "Speed up your web apps.", date: "January 22, 2024", link: "/blog/web-performance" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Mayor retraso entre posts
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // Transición suave
  },
  hover: {
    translateY: -4, // Efecto de hover anterior
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function LatestPosts() {
  const visiblePosts = samplePosts.slice(0, 5);
  const hasMorePosts = samplePosts.length > 5;

  return (
    <motion.div
      className="w-full py-6 px-4 sm:px-8 lg:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={containerVariants}
      >
        {visiblePosts.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            whileHover="hover"
            className="bg-white border-2 border-blue-900 border-opacity-60 rounded-md shadow-md p-4 transition duration-300 cursor-pointer hover:shadow-lg"
          >
            <Link href={post.link}>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2">{post.summary}</p>
                <p className="text-gray-400 text-xs">{post.date}</p>
              </div>
            </Link>
          </motion.div>
        ))}

        {hasMorePosts && (
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex items-center justify-center bg-gray-100 border-2 border-blue-900 border-opacity-60 rounded-md shadow-md p-2 transition duration-300 cursor-pointer hover:shadow-lg"
          >
            <Link href="/blog" className="text-blue-600 text-sm font-medium">
              + See All Posts
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
