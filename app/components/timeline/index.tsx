"use client";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

interface Timeline {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
  details?: { text: string; icons?: JSX.Element[] }[]; // Detalles con texto e iconos
}

interface LatestProps {
  timeline: Timeline[];
}

export default function Timeline({ timeline }: LatestProps): JSX.Element {
  return (
    <div className="relative p-10 max-h-[99vh] overflow-y-auto space-y-8 scrollbar-none">
      {/* Indicador de desplazamiento */}
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-blue-500 text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown />
      </motion.div>

      <div style={{ paddingTop: "30px" }} /> {/* Espacio vacío arriba */}

      {timeline.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative flex items-start space-x-4"
        >
          <div className="absolute -left-10 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg">
            {event.icon}
          </div>

          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-xl border-2 border-blue-900 border-opacity-40 w-full">
            <h3 className="text-2xl font-bold text-blue-700">{event.year}</h3>
            <h4 className="text-xl font-semibold text-blue-500">{event.title}</h4>
            <p className="text-gray-700 mt-2">{event.description}</p>

            {event.details && (
              <ul className="mt-4 pl-4 list-disc text-gray-600">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                    {detail.text}
                    {detail.icons &&
                      detail.icons.map((icon, iconIdx) => (
                        <span key={iconIdx} className="text-blue-500">
                          {icon}
                        </span>
                      ))}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
