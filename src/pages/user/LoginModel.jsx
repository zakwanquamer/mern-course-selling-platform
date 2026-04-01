import { X } from "lucide-react";
import Login from "./Login";
import Signup from "./signup";
import { useState , useEffect } from "react";
const LoginModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 px-4 py-6 md:py-12"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-2xl md:max-w-4xl bg-black border border-yellow-400/30 rounded-xl p-4 md:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Close Button (VISIBLE + SAFE POSITION) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-yellow-400 text-black rounded-full p-2 hover:scale-110 transition"
        >
          <X size={20} />
        </button>

        {/* Login Component */}
      {mode === "login" ? (
  <Login switchToSignup={() => setMode("signup")} />
) : (
  <Signup switchToLogin={() => setMode("login")} />
)}
      </div>
    </div>
  );
};

export default LoginModal;