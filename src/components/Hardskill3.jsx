import img3 from '../assets/img/img3.jpg';

const HardSkill3 = () => {
    return (
        <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <img 
        src={img3}
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">Complete Machine Learning & Data Science
          Bootcamp 2023 from Udemy</h2>
          <p className="mt-2 text-sm">In this course I learn a lot about Python as basic programming language and
            how to use it in Machine Learning Project, this course also help me to build a couple of Machine Learning Project
            such as fraud classification, face recognition, Plate Number Recognition and many more.</p>
        </div>
      </div>
    );
  }
  
  export default HardSkill3;
  