import { useState } from 'react';
import python from '../assets/img/python.jpg';

const HardSkill5 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48 relative">
      <img
        src={python}
        alt="Deskripsi Gambar"
        className="w-42 h-36 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-[15px] sm:text-xl font-bold">
          Learn Python Programming Masterclass from Udemy
        </h2>

        {/* Desktop description */}
        <p className="mt-2 text-sm hidden sm:block">
          In this course I learn all about Python, it helps me understand the elementary things about programming especially using Python and after I complete this course I can learn easier in another language because I already know the concept.
        </p>

        {/* Mobile button */}
        <button
          onClick={() => setShowPopup(true)}
          className="mt-1 px-2 py-1 text-xs text-violet-400 rounded bg-transparent hover:bg-violet-400 hover:text-black transition md:hidden"
          >
          Description
        </button>
      </div>

      {/* Popup for Mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-4 rounded-xl max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm">
              In this course I learn all about Python, it helps me understand the elementary things about programming especially using Python and after I complete this course I can learn easier in another language because I already know the concept.
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

export default HardSkill5;
