import { useState } from "react";
import { Menu, X, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0b0b0f]/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-red-900/30">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          <span className="text-red-500">GSM</span>{" "}
          <span className="text-gray-300">Academy</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          
          {["Home", "Courses", "Services", "Pricing", "Contact"].map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              
              {/* Text */}
              <span className="group-hover:text-white transition duration-300">
                {item}
              </span>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Cart */}
          <button className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              0
            </span>
          </button>

          {/* Login */}
          <button className="flex items-center gap-1 text-sm hover:text-white text-gray-300">
            <User size={18} /> Login
          </button>

          {/* Register */}
          <button className="px-4 py-1.5 rounded-lg border border-gray-600 hover:border-red-500 hover:text-white transition">
            Register
          </button>

          {/* Admin Login */}
          <button className="text-xs text-gray-400 hover:text-red-400 transition">
            Admin
          </button>

          {/* Buy Course CTA */}
          <button className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 transition shadow-md">
            Buy Course
          </button>

        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-red-500">
          {open ? (
            <X size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#111] px-6 pb-5 border-t border-red-900/30">
          
          <ul className="flex flex-col gap-4 text-gray-300 mt-4">
            <li>Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col gap-3 mt-5">

            <button className="flex items-center justify-center gap-2 border py-2 rounded-lg">
              <User size={18} /> Login
            </button>

            <button className="py-2 border rounded-lg">
              Register
            </button>

            <button className="text-sm text-gray-400">
              Admin Login
            </button>

            <button className="py-2 bg-red-600 rounded-lg">
              Buy Course
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;