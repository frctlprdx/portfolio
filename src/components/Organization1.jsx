const Organization1 = () => {
    return (
      <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <img 
          src="../src/assets/img/img4.jpg" 
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">Committee in Hi-Technology 2024</h2>
          <p className="mt-2 text-sm">Arrange the concept of the competition, check all the requirement to make sure
            the competition run well, make sure the judges can evaluate the participant and asking participant 
            after they gave the presentation </p>
        </div>
      </div>
    );
  }
  
  export default Organization1;
  