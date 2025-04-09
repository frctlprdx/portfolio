import { useState } from 'react';
import img6 from '../assets/img/img6.jpg';

const Organization3 = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-auto md:h-48 relative">
      {/* Gambar di kiri */}
      <img
        src={img6}
        alt="Deskripsi Gambar"
        className="w-42 h-36 object-cover rounded-lg"
      />

      {/* Konten */}
      <div className="flex-1">
        <h2 className="text-xl font-bold">Committee in SEMNASTI 2024</h2>

        {/* Deskripsi tampil langsung di desktop */}
        <p className="mt-2 text-sm hidden sm:block">
          As a logistics committee member for SEMNASTI, I'm responsible for managing 
          and ensuring the availability of all necessary equipment and materials for the event.
          My role involved coordinating the procurement, preparation, and setup of items such as stage arrangements,
          seating, sound systems, projectors, banners, and other essential supplies.
          During the seminar, I monitored and maintained the equipment, quickly addressing any technical or logistical issues that arose.
          After the event, I was responsible for organizing the dismantling and storage of materials, ensuring that everything was returned properly.
        </p>

        {/* Tombol show untuk mobile */}
        <button
          onClick={() => setShowPopup(true)}
          className="sm:hidden mt-2 text-violet-400 text-xs px-3 py-1 rounded transition-colors duration-200 bg-transparent hover:bg-violet-600 hover:text-black"
        >
          Show Description
        </button>
      </div>

      {/* Popup untuk mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-4 rounded-xl max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm">
              As a logistics committee member for SEMNASTI, I'm responsible for managing 
              and ensuring the availability of all necessary equipment and materials for the event.
              My role involved coordinating the procurement, preparation, and setup of items such as stage arrangements,
              seating, sound systems, projectors, banners, and other essential supplies.
              During the seminar, I monitored and maintained the equipment, quickly addressing any technical or logistical issues that arose.
              After the event, I was responsible for organizing the dismantling and storage of materials, ensuring that everything was returned properly.
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

export default Organization3;
