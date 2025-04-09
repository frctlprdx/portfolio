import { useState } from 'react';
import img4 from '../assets/img/img4.jpg';

const Organization1 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <img 
          src={img4}
          alt="Organization Certificate" 
          className="w-42 h-36 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">Committee in Hi-Technology 2024</h2>

          {/* Tombol hanya di mobile */}
          <button 
            onClick={() => setShowModal(true)} 
            className="mt-1 px-2 py-1 text-xs text-violet-400 rounded bg-transparent hover:bg-violet-400 hover:text-black transition md:hidden"
          >
            Show Description
          </button>

          {/* Description langsung tampil di desktop */}
          <p className="hidden mt-2 text-sm md:block">
            Arrange the concept of the competition, check all the requirements to make sure
            the competition runs well, ensure the judges can evaluate the participants, and ask
            participants after their presentation.
          </p>
        </div>
      </div>

      {/* Modal di mobile */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 md:hidden">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-sm p-4 mx-4">
            <h3 className="font-bold text-lg mb-2">Description</h3>
            <p className="text-sm mb-4">
              Arrange the concept of the competition, check all the requirements to make sure
              the competition runs well, ensure the judges can evaluate the participants, and ask
              participants after their presentation.
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

export default Organization1;
