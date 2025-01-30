
import { FaBaby, FaBuilding, FaCode, FaLaptop, FaLaptopCode, FaPlane } from "react-icons/fa";
import Timeline from "../components/timeline";
export default function Page() {
  const timeline = [
    {
      year: "1999",
      title: "Born in Blagoevgrad, Bulgaria",
      description: "Started my journey in the world from Blagoevgrad, Bulgaria.",
      icon: <FaBaby />,
    },
    {
      year: "2005",
      title: "Moved to Tarragona, Spain",
      description: "Relocated to Spain and began adapting to a new culture and environment.",
      icon: <FaPlane />,
    },
    {
      year: "2015",
      title: "Started Vocational Training in IT",
      description: "Began studying Microcomputer Systems and Networks at Institut Campclar.",
      icon: <FaLaptopCode />,
    },
    {
      year: "2017",
      title: "Advanced Studies in Web Development",
      description: "Enrolled in Higher Degree of Web Application Development at Institut Vidal i Barraquer.",
      icon: <FaCode />,
    },
    {
      year: "2019",
      title: "Fullstack Developer at Movertis",
      description: "Started working at Movertis in Tarragona in a hybrid and on-site model.",
      icon: <FaCode />,
    },
    {
      year: "2023",
      title: "Fullstack Developer at Grup Oliva Motor",
      description: "Joined Grup Oliva Motor as a Fullstack Developer, working on-site.",
      icon: <FaBuilding />,
    },
    {
      year: "2024",
      title: "Remote Fullstack Developer at ONLEAN",
      description: "Started working remotely for ONLEAN in Barcelona as a Fullstack Developer.",
      icon: <FaLaptop />,
    },
  ];

  return (
    <div className="items-center justify-center max-w-4xl mx-auto mt-[3vh]">

      <Timeline timeline={timeline} />

    </div>
  );
}

