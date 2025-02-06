"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaBlog, FaClock, FaFolderOpen, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

// Opciones del menú definidas en una variable
const menuItems = [
  { href: "/", label: "Home", icon: <FaHome className="w-4 h-4" /> },
  { href: "/projects", label: "Projects", icon: <FaFolderOpen className="w-4 h-4" /> },
  { href: "/timeline", label: "Timeline", icon: <FaClock className="w-4 h-4" /> },
  { href: "/blog", label: "Blog", icon: <FaBlog className="w-4 h-4" /> },
];

const socialLinks = [
  { href: "https://github.com/tsvetanml", label: "Github", icon: <FaGithub className="w-4 h-4" /> },
  { href: "https://www.linkedin.com/in/tsvetan-mladenov/", label: "LinkedIn", icon: <FaLinkedin className="w-4 h-4" /> },
];

// Variantes del contenedor para animaciones en cadena
const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Más lento para que sea visible
      delayChildren: 0.2,    // Retardo inicial
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

// Variantes de los ítems individuales con desvanecimiento
const menuItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referencia para el menú

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="absolute inline-block top-4 left-4 text-left z-10">

      <FaBars onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 p-2 cursor-pointer hover:shadow-lg rounded-md text-blue-500 transition duration-300" />


      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 mt-2 w-48 bg-blue-600 bg-opacity-80 shadow-xl rounded-lg overflow-hidden z-20 border-2 border-blue-900 border-opacity-60 backdrop-filter backdrop-blur-sm"
          >
            <ul className="text-white font-medium text-sm">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-start w-full gap-2 px-4 py-2 transition cursor-pointer"
                  >
                    {item.icon} {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Separador */}
            <div className="border-t border-blue-900 border-opacity-60 my-1"></div>

            <ul className="text-white font-medium text-sm">
              {socialLinks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  whileHover="hover"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-start w-full gap-2 px-4 py-2 transition cursor-pointer"
                  >
                    {item.icon} {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
