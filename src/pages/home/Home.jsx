import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* 🔥 HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Learn GSM Software & Mobile Repair
          </h1>
          <p className="mt-4 text-gray-300">
            Start your career in mobile unlocking, flashing & repairing.
            Earn money from home with real skills.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:scale-105 transition">
              Buy Course
            </button>
            
          </div>
        </div>

        {/* Right Image */}
        <img
          src="https://images.unsplash.com/photo-1580910051074-3eb694886505"
          alt="GSM Training"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </section>

   
     

    
    </div>
  );
};

export default Home;

