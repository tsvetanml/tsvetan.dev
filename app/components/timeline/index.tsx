"use client";
import { motion } from "framer-motion";

interface Timeline {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
  details?: { text: string; icons?: JSX.Element[] }[];
}

interface LatestProps {
  timeline: Timeline[];
}

export default function Timeline({ timeline }: LatestProps): JSX.Element {
  return (
    <div className="relative h-screen overflow-y-auto scrollbar-none">

      <div className="relative w-full max-w-4xl mx-auto py-6">

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-blue-500 rounded-full" />

        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
              } relative mb-4`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-800 rounded-full shadow-md" />

            <div
              className={`w-5/12 p-4 rounded-lg shadow-md border-2 border-blue-900 border-opacity-40 bg-white ${index % 2 === 0 ? "ml-8" : "mr-8"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-600 text-xl">{event.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-blue-700">
                    {event.year}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-500">
                    {event.title}
                  </h4>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-1">{event.description}</p>

              {event.details && (
                <ul className="mt-2 pl-4 list-disc text-gray-600 text-sm">
                  {event.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-1 text-sm"
                    >
                      {detail.text}
                      {detail.icons &&
                        detail.icons.map((icon, iconIdx) => (
                          <span key={iconIdx} className="text-blue-500 text-xs">
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
    </div>
  );
}
