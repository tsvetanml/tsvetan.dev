
import Timeline from "@/app/components/timeline";
import { FaAngular, FaBaby, FaBuilding, FaCode, FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaLaptop, FaLaptopCode, FaNodeJs, FaPlane, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function Page() {

  const timeline = [
    {
      year: "1999",
      title: "Born in Blagoevgrad, Bulgaria",
      description: "Started my journey in the world 🌍 from Blagoevgrad, Bulgaria.",
      icon: <FaBaby />,
      details: [
        { text: "First words were 'Hello World!' (probably not true) 🤖" },
        { text: "Expert in crying and napping 😴" },
      ],
    },
    {
      year: "2005",
      title: "Moved to Tarragona, Spain",
      description: "Relocated to Spain ✈️ and began adapting to a new culture and environment.",
      icon: <FaPlane />,
      details: [
        { text: "Learned to speak Spanish 🇪🇸 and Catalan 🗣️" },
        { text: "Became a master of playground diplomacy 🤝" },
      ],
    },
    {
      year: "2015",
      title: "Started Vocational Training in IT",
      description: "Began studying Microcomputer Systems and Networks 💻 at Institut Campclar.",
      icon: <FaLaptopCode />,
      details: [
        { text: "Introduced to programming and networking 🌐" },
        { text: "First experience with Linux 🐧 and basic server setups" },
      ],
    },
    {
      year: "2017",
      title: "Advanced Studies in Web Development",
      description: "Enrolled in Higher Degree of Web Application Development 💼 at Institut Vidal i Barraquer.",
      icon: <FaCode />,
      details: [
        {
          text: "Technologies:",
          icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
        },
        { text: "Built my first full-stack applications 🚀" },
      ],
    },
    {
      year: "2019",
      title: "Fullstack Developer at Movertis",
      description: "Started working at Movertis in Tarragona in a hybrid and on-site model 🏢.",
      icon: <FaCode />,
      details: [
        {
          text: "Technologies:",
          icons: [<FaAngular />, <FaNodeJs />, <FaDatabase />, <SiMongodb />],
        },
        { text: "Contributed to large-scale fleet management software 🚚" },
      ],
    },
    {
      year: "2023",
      title: "Fullstack Developer at Grup Oliva Motor",
      description: "Joined Grup Oliva Motor 🚗 as a Fullstack Developer, working on-site.",
      icon: <FaBuilding />,
      details: [
        {
          text: "Technologies:",
          icons: [<FaReact />, <SiNextdotjs />, <FaDatabase />, <SiMongodb />, <SiTailwindcss />, <SiPostgresql />],
        },
        { text: "Optimized internal systems for business processes 📊" },
      ],
    },
    {
      year: "2024",
      title: "Remote Fullstack Developer at ONLEAN",
      description: "Started working remotely 🏡 for ONLEAN in Barcelona as a Fullstack Developer.",
      icon: <FaLaptop />,
      details: [
        {
          text: "Technologies:",
          icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <SiTailwindcss />],
        },
        { text: "Developing scalable SaaS solutions for industrial automation ⚙️" },
      ],
    },
  ];


  return (
    <div className="relative h-screen max-w-6xl mx-auto overflow-y-auto scrollbar-none">
      {/* Efecto de ocultamiento sutil arriba */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Efecto de ocultamiento sutil abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <Timeline timeline={timeline} />
    </div>

  );
}

