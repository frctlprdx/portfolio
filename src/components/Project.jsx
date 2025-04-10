import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import anpr from "../assets/img/anpr.png";
import fr from "../assets/img/fr.png";
import textclass from "../assets/img/fraud.png";
import hitech from "../assets/img/hitech.png";
import hris from "../assets/img/hris.png";
import notetaking from "../assets/img/notetaking.png";
import catchquiz from "../assets/img/catch.png";
import warungajib from "../assets/img/warungajib.png";

const projects = {
  "Machine Learning": [
    {
      title: "Automatic Plate Number Recognition",
      description: "A model for Recognize Plate Number based on real dataset we got from Jakarta Roads. I use YOLO for recognize the vehicles, ESRGAN for super-resolution to fix the images, and easyOCR to read the plate",
      image: anpr,
      buttons: [{ text: "View Project on Github", link: "https://github.com/frctlprdx/Plate-Number-Recognition" }],
    },
    {
      title: "Face Detection and Recognition",
      description: "Recognize the image using public dataset. In this project I use MTCNN to detect the faces, Inception ResNet to embed the faces, and SVM to classify the faces.",
      image: fr,
      buttons: [
        { text: "View Project on Github", link: "https://github.com/frctlprdx/Face-Detection" },
        { text: "Project Report", link: "https://drive.google.com/file/d/1zv6RenrPaG-RTCyp8POCSoQCn-jFHZTA/view?usp=drive_link" },
      ],
    },
    {
      title: "Text Classification",
      description: "Classified text between fraud or not,this is my team project, we got the data from kaggle and our personal messages. We use SMOTE to oversample imbalance data and use CNN to train model to recognize between fraud or not.",
      image: textclass,
      buttons: [
        { text: "View Project on Github", link: "https://github.com/frctlprdx/CNN-Text-Classification/tree/main" },
      ],
    },
    // {
    //   title: "ML Project 4",
    //   description: "A NLP model to summarize articles automatically.",
    //   image: "/images/ml4.jpg",
    //   buttons: [{ text: "Preview", link: "https://example.com/ml4" }],
    // },
  ],
  "Web Development": [
    {
      title: "Hitech 2025",
      description: "Website with React.JS for registration to Hi-Technology 2025 event.",
      image: hitech,
      buttons: [
        { text: "Live Site", link: "https://hitech.hmtiudinus.org/" },
      ],
    },
    {
      title: "Human Resources Information Systems",
      description: "Internship project at Sintech.co.id to migrate Human Resources Information System from native PHP to Laravel. I use Laravel, easyUI, and MySQL for this project.",
      image: hris,
      buttons: [
        { text: "GitHub", link: "https://github.com/user/web2" },
        { text: "Sintech", link: "https://sintech.co.id/" },
      ],
    },
    {
      title: "Note Taking App",
      description: "Simple Note Taking App using Laravel, MySQL and tailwindcss with Alpine.JS",
      image: notetaking,
      buttons: [
        { text: "GitHub", link: "https://github.com/frctlprdx/todolistlaravel" },
      ],
    },
  ],
  "Mobile App": [
    {
      title: "Career Quiz",
      description: "Quiz App to help you find your career path, just answer the quick question let us decide the path. We use Kotlin for the Android version and Firebase as a database.",
      image:catchquiz,
      buttons: [{ text: "View Project", link: "https://github.com/frctlprdx/Psikotes-Quiz-Kotlin" }],
    },
    {
      title: "Warung Ajib",
      description: "Simple E-commerce apps with payment gateaway features using Midtrans to help small business sells their goods. I use Flutter for the mobile version, Node.JS for the backend, MySQL and Firebase for database.",
      image: warungajib,
      buttons: [
        { text: "GitHub", link: "https://github.com/frctlprdx/Simple-Menu-Order" },
      ],
    },
    // {
    //   title: "",
    //   description: "",
    //   image: "",
    //   buttons: [
    //     { text: "", link: "" },
    //   ],
    // },
  ],
};

const Project = () => {
  const categories = Object.keys(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const activeCategory = categories[activeIndex];
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
    setShowAll(false); // reset showAll saat ganti kategori
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setShowAll(false);
  };

  const visibleProjects =
    activeCategory === "Machine Learning" && !showAll
      ? projects[activeCategory].slice(0, 3)
      : projects[activeCategory];

  return (
    <div className="w-full px-6 py-24 relative sm:mt-0">
      {/* Pilihan kategori */}
      <div className="relative z-10 flex justify-center items-center space-x-6 mb-8 text-violet-400 text-2xl font-semibold ">
        <button onClick={handlePrev} className="px-4 py-2 hover:text-violet-300 transition">
          {"<"}
        </button>
        <span className="uppercase tracking-wide">{activeCategory}</span>
        <button onClick={handleNext} className="px-4 py-2 hover:text-violet-300 transition">
          {">"}
        </button>
      </div>

      {/* Kartu proyek */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-0">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 h-[450px] w-full bg-black border-2 border-violet-500 rounded-lg shadow-xl flex flex-col justify-between transition-transform hover:scale-105 focus-within:scale-105"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-transparent group-hover:animate-border-run group-focus:animate-border-run pointer-events-none" />
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {project.buttons.map((button, i) => (
                <a
                  key={i}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition text-sm"
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Show More */}
      <div className="flex justify-center mt-10">
        {/* {activeCategory === "Machine Learning" && !showAll && (
          <button
            onClick={() => navigate("/more-")}
            className="px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            Show More
          </button>
        )}

        {activeCategory === "Web Development" && (
          <button
            onClick={() => navigate("/portfolio/web")}
            className="px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            Show More
          </button>
        )}

        {activeCategory === "Mobile App" && (
          <button
            onClick={() => navigate("/portfolio/web")}
            className="px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            Show More
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Project;
