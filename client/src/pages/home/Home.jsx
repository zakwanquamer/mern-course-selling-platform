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
            <button className="border border-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
              Watch Demo
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

      {/* ⭐ FEATURES */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-500">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "100% Practical Training",
              img: "https://images.unsplash.com/photo-1581090700227-1e8c2c7c76c9",
            },
            {
              title: "Lifetime Access",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            },
            {
              title: "Earn from Home",
              img: "https://images.unsplash.com/photo-1584697964154-3d7cdb3c27a3",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 📚 COURSES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-10 text-yellow-500">
          Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic GSM",
              img: "https://images.unsplash.com/photo-1510557880182-3caa2c44e4d4",
            },
            {
              title: "Advanced Unlocking",
              img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
            },
            {
              title: "Flashing Expert",
              img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-400 mt-2">
                  Learn complete {course.title} with real projects.
                </p>
                <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="py-16 bg-[#0a0a0a] text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">
          Student Success
        </h2>

        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="student"
            className="w-20 h-20 rounded-full mb-4 border-2 border-yellow-500"
          />
          <p className="max-w-xl text-gray-300">
            "I started earning ₹30,000/month after this course. Highly recommended!"
          </p>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-500">
          Start Your GSM Career Today
        </h2>
        <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-lg hover:scale-105 transition">
          Enroll Now
        </button>
      </section>

    
    </div>
  );
};

export default Home;