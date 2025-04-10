import { useState } from 'react';
import img1 from '../assets/img/img1.jpg';

const HardSkill1 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <img 
          src={img1} 
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-[15px] sm:text-xl font-bold">
            Master Laravel 11 & PHP: From Beginner to Advanced from Udemy
          </h2>

          {/* Tombol hanya di mobile */}
          <button 
            onClick={() => setShowModal(true)} 
            className="mt-1 px-2 py-1 text-xs text-violet-400 rounded bg-transparent hover:bg-violet-400 hover:text-black transition md:hidden"
          >
            Show Description
          </button>

          {/* Description langsung tampil di desktop */}
          <p className="hidden mt-2 text-sm md:block">
            This Course Help me to understand Laravel in general, building web with Model, View, Controller,
            using routes and etc. This also help me to get my internship opportunity in Sintech.com
          </p>
        </div>
      </div>

      {/* Modal di mobile */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 md:hidden">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-sm p-4 mx-4">
            <h3 className="font-bold text-lg mb-2">Description</h3>
            <p className="text-sm mb-4">
              This Course Help me to understand Laravel in general, building web with Model, View, Controller,
              using routes and etc. This also help me to get my internship opportunity in Sintech.com
            </p>
            <button 
              onClick={() => setShowModal(false)} 
              className="px-3 py-1 text-sm rounded bg-violet-500 text-white hover:bg-violet-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HardSkill1;
