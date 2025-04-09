import { useState } from 'react';
import img5 from '../assets/img/img5.jpg';

const Organization2 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-auto md:h-48 relative">
      <div className="flex-1">
        <h2 className="text-xl font-bold">
          Committee in ITC 2024
        </h2>

        {/* Deskripsi desktop */}
        <p className="mt-2 text-sm hidden sm:block">
          As a competition committee member at ITC (Information Technology Competition),
          I'm responsible for organizing and managing various aspects of the competition.
          I planned the competition structure, set up rules and evaluation criteria, and
          coordinated with the panel of judges to ensure a fair and smooth judging process.
        </p>

        {/* Tombol untuk mobile */}
        <button
          onClick={() => setShowPopup(true)}
          className="sm:hidden mt-2 text-violet-400 text-xs px-3 py-1 rounded transition-colors duration-200 bg-transparent hover:bg-violet-600 hover:text-black"
        >
          Show Description
        </button>
      </div>

      {/* Gambar tetap di kanan */}
      <img
        src={img5}
        alt="Deskripsi Gambar"
        className="w-42 h-36 object-cover rounded-lg"
      />

      {/* Popup modal mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-4 rounded-xl max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm">
              As a competition committee member at ITC (Information Technology Competition),
              I'm responsible for organizing and managing various aspects of the competition.
              I planned the competition structure, set up rules and evaluation criteria, and
              coordinated with the panel of judges to ensure a fair and smooth judging process.
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

export default Organization2;
