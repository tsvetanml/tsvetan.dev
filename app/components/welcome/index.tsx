"use client";

import { Dictionary } from "@/app/[lang]/dictionaries";
import { NavigationItemType } from "@/app/types";
import Memoji from "@/public/memoji.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaClock, FaFolderOpen } from "react-icons/fa";

export default function Welcome({ dict }: { dict: Dictionary }): JSX.Element {
  console.log(dict);
  const description = dict.welcome.description;
  const actions = [
    {
      type: NavigationItemType.LINK,
      href: '/timeline',
      icon: <FaClock className="mr-2" />,
      text: 'Timeline',
    },
    {
      type: NavigationItemType.LINK,
      href: '/projects',
      icon: <FaFolderOpen className="mr-2" />,
      text: 'Projects',
    },
    {
      type: NavigationItemType.LINK,
      external: true,
      href: 'https://github.com/tsvetanml',
      icon: <AiOutlineGithub className="mr-2" />,
      text: 'GitHub',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Retraso entre elementos para el efecto secuencial
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="justify-center w-52 h-52 flex items-center"
        variants={itemVariants}
      >

        <Image src={Memoji} className="rounded-full" alt="Memoji" />
      </motion.div>

      <motion.div
        className="max-w-lg sm:max-w-xl md:sm:max-w-3xl lg:sm:max-w-4xl w-full space-y-8 text-center"
        variants={containerVariants}
      >
        <motion.h1
          className="text-blue-700 text-5xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold"
          variants={itemVariants}
        >
          Hey <span className="inline-block origin-70">👋</span> I&apos;m Tsvetan, <br className="hidden sm:block" /> a{' '}
          <div className="inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-blue-200 bg-opacity-15 text-blue-700 text-opacity-70 rounded-lg">
            developer.
          </div>
        </motion.h1>

        <motion.p
          className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-600 sm:text-lg md:text-xl md:max-w-3xl"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div
          key="links"
          className="flex flex-col sm:flex-row items-center justify-center my-8 sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {actions.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }} // Efecto de elevación y ligera ampliación
              transition={{ type: "spring", stiffness: 250, damping: 20 }} // Animación suave y natural
            >
              <Link
                className="inline-flex items-center  bg-opacity-80 text-blue-600 font-semibold justify-center backdrop-filter backdrop-blur-sm rounded-lg cursor-pointer px-8 py-2  border-opacity-60"
                href={action.href}
                target={action.external ? "_blank" : "_self"}
                rel={action.external ? "noopener noreferrer" : ""}
              >
                {action.icon}
                {action.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>


      </motion.div>
    </motion.div>
  );
}