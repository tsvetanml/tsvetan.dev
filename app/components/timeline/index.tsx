"use client";
import { motion } from "framer-motion";

interface LatestProps {
  timeline: Timeline[];
}

export default function Timeline({ timeline }: LatestProps): JSX.Element {
  return (
    <div className="relative p-20 max-h-[99vh] overflow-y-auto space-y-8 scrollbar-none">
      <div style={{ paddingTop: "10px" }} /> {/* Espacio vacío arriba */}

      {timeline.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative flex items-start space-x-4"
        >
          <div className="absolute -left-10 flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
            {event.icon}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-semibold">{event.year}</h3>
            <h4 className="text-lg font-medium text-blue-600">{event.title}</h4>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
