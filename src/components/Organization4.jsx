import itc2025 from '../assets/img/itc2025.jpg';

const Organization4 = () => {
    return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <div className="flex-1">
          <h2 className="text-xl font-bold">Commitee in Information Technology Competition 2025</h2>
          <p className="mt-2 text-sm">It si my second chance as a competition committee member at ITC (Information Technology Competition), My team fix a couple of problems that happened last time, make the competition more scheduled and more organized</p>
        </div>
        <img 
          src={itc2025}
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
    </div>
    );
  }
  
  export default Organization4;
  