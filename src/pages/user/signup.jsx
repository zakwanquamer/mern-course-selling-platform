import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

function Signup({ switchToLogin }) {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-[#111] p-5 sm:p-6 md:p-8 rounded-2xl border border-yellow-500/20">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-5 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* NAME */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg bg-black text-white border 
              ${errors.name ? "border-red-500" : "border-gray-700"}
              focus:outline-none focus:border-yellow-400`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg bg-black text-white border 
              ${errors.email ? "border-red-500" : "border-gray-700"}
              focus:outline-none focus:border-yellow-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
                  message: "Must include 1 uppercase & 1 number",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg bg-black text-white border pr-10
              ${errors.password ? "border-red-500" : "border-gray-700"}
              focus:outline-none focus:border-yellow-400`}
            />

            {/* Eye Toggle */}
            <div
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-yellow-400"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={!isValid}
            className={`w-full py-3 rounded-lg font-semibold transition 
            ${
              isValid
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-gray-400 text-xs sm:text-sm text-center mt-5">
          Already have an account?{" "}
          <span
            onClick={switchToLogin}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;