import { useState } from 'react';
import genai from '../assets/img/genai.jpg';

const HardSkill4 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48 relative">
      <div className="flex-1">
        <h2 className="text-[15px] sm:text-xl font-bold">
          Complete Generative AI Course With Langchain and Huggingface from Udemy
        </h2>

        {/* Desktop Description */}
        <p className="text-sm hidden sm:block">
          In this course I learn about Generative AI, learn how to make chatbot with API from ChatGPT, Langchain, and Hugging Face.
        </p>

        {/* Mobile Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="mt-1 px-2 py-1 text-xs text-violet-400 rounded bg-transparent hover:bg-violet-400 hover:text-black transition md:hidden"
          >
          Show Description
        </button>
      </div>

      <img
        src={genai}
        alt="Deskripsi Gambar"
        className="w-42 h-36 object-cover rounded-lg"
      />

      {/* Popup for Mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-4 rounded-xl max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm">
              In this course I learn about Generative AI, learn how to make chatbot with API from ChatGPT, Langchain, and Hugging Face.
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

export default HardSkill4;
