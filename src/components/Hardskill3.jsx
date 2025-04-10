import { useState } from 'react';
import img3 from '../assets/img/img3.jpg';

const HardSkill3 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48 relative">
      <img
        src={img3}
        alt="Deskripsi Gambar"
        className="w-42 h-36 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h2 className="text-[15px] sm:text-xl font-bold">
          Complete Machine Learning & Data Science Bootcamp 2023 from Udemy
        </h2>

        {/* Desktop Description */}
        <p className="mt-2 text-sm hidden sm:block">
          In this course I learn a lot about Python as basic programming language and how to use it in Machine Learning Project,
          this course also help me to build a couple of Machine Learning Project such as fraud classification, face recognition,
          Plate Number Recognition and many more.
        </p>

        {/* Mobile Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="mt-1 px-2 py-1 text-xs text-violet-400 rounded bg-transparent hover:bg-violet-400 hover:text-black transition md:hidden"
          >
          Show Description
        </button>
      </div>

      {/* Popup Mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-4 rounded-xl max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm">
              In this course I learn a lot about Python as basic programming language and how to use it in Machine Learning Project,
              this course also help me to build a couple of Machine Learning Project such as fraud classification, face recognition,
              Plate Number Recognition and many more.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-violet-600 text-sm px-3 py-1 rounded hover:bg-violet-600 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HardSkill3;
