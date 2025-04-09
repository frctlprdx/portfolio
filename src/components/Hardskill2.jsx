import img2 from '../assets/img/img2.jpg';

const HardSkill2 = () => {
    return (
    <div className="w-screen max-w-6xl mx-auto bg-black text-white border-2 border-violet-500 rounded-2xl shadow-lg p-5 flex items-center gap-6 h-48">
        <div className="flex-1">
          <h2 className="text-xl font-bold">iOS & Swift - The Complete iOS App Development Bootcamp from Udemy</h2>
          <p className="mt-2 text-sm">Learning programming in iOS using swift and many more tools such as SwiftUI, cocoapods, sqlite, Realm, CoreData, 
            Firebase, Core ML, and many more.</p>
        </div>
        <img 
          src={img2}
          alt="Deskripsi Gambar" 
          className="w-42 h-36 object-cover rounded-lg"
        />
    </div>
    );
  }
  
  export default HardSkill2;
  