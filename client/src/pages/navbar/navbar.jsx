import { useState } from "react";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-yellow-500/20">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* 🔥 Logo */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          <span className="text-yellow-400">GSM</span>{" "}
          <span className="text-white">Academy</span>
        </h1>

        {/* 🖥 Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          
          {["Home", "Courses", "Services", "Pricing", "Contact"].map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              
              <span className="group-hover:text-yellow-400 transition duration-300">
                {item}
              </span>

              {/* Yellow underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

        </ul>

        {/* 🎯 Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Login */}
          <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition">
            <User size={18} /> Login
          </button>

          {/* Register */}
          <button className="px-4 py-1.5 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            Register
          </button>

          {/* Admin */}
          <button className="text-xs text-gray-500 hover:text-yellow-400 transition">
            Admin
          </button>

          {/* My Course CTA */}
          <button className="px-4 py-1.5 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-105 transition shadow-md">
            My Course
          </button>

        </div>

        {/* 📱 Mobile Toggle */}
        <div className="md:hidden text-yellow-400">
          {open ? (
            <X size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-5 border-t border-yellow-500/20">
          
          <ul className="flex flex-col gap-4 text-gray-400 mt-4">
            {["Home", "Courses", "Services", "Pricing", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-yellow-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-5">

            <button className="flex items-center justify-center gap-2 border border-yellow-400 text-yellow-400 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              <User size={18} /> Login
            </button>

            <button className="py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Register
            </button>

            <button className="text-sm text-gray-500 hover:text-yellow-400 transition">
              Admin Login
            </button>

            <button className="py-2 bg-yellow-400 text-black font-semibold rounded-lg">
              My Course
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;