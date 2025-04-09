import img6 from '../assets/img/img6.jpg';

const Organization3 = () => {
    return (
        <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <img 
          src={img6}
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">Commitee in Seminar Nasional Teknik Informatika 2024</h2>
          <p className="mt-2 text-sm">As a logistics committee member for SEMNASTI, I'm responsible for managing 
            and ensuring the availability of all necessary equipment and materials for the event. My role involved coordinating the procurement, preparation, 
            and setup of items such as stage arrangements, seating, sound systems, projectors, banners, and other essential supplies. During the seminar, 
            I  monitored and maintained the equipment, quickly addressing any technical or logistical issues that arose. After the event, you were responsible for organizing the dismantling and storage of materials, ensuring that everything was returned properly.</p>
        </div>
      </div>
    );
  }
  
  export default Organization3;
  