"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  repo: string;
  soon?: boolean;
}

const projects: Project[] = [
  {
    name: "WeatherLens",
    description: "Dashboard interactivo para consultar el clima en tiempo real.",
    repo: "https://github.com/tsvetanml/weatherlens",
  },
  {
    name: "SaaS Backend Template",
    description: "Boilerplate para backend de plataformas SaaS con autenticación y pagos.",
    repo: "https://github.com/tsvetanml/saas-backend-template",
  },
  {
    name: "WhatShould I Watch",
    description: "Aplicación para descubrir películas y series populares con la ayuda de la IA",
    repo: "https://what2watchai-9r91xdm0h-tsvetanmls-projects.vercel.app",
    soon: true,
  }
];

export default function Projects() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="flex justify-between items-center border-b border-blue-200 pb-4"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{project.name}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
