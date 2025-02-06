"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { translateY: -4, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function LatestPosts() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data.slice(0, 5));
    }
    fetchPosts();
  }, []);

  return (
    <motion.div
      className="w-full py-6 px-4 sm:px-8 lg:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" variants={containerVariants}>
        {posts
          ? posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white border-2 border-blue-900 border-opacity-60 rounded-md shadow-md p-4 transition duration-300 cursor-pointer hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{post.description}</p>
                  <p className="text-gray-400 text-xs">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))
          : // 🔥 Skeleton Loader 🔥
          Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-200 border-2 border-gray-300 rounded-md shadow-md p-4 animate-pulse"
            >
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </motion.div>
          ))}

        {posts && posts.length >= 5 && (
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
