import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Lottie from "lottie-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";

function Login({ switchToSignup, switchToForgot }) {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden border border-yellow-500/20">

        {/* LEFT (Animation) */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-black">
          <Lottie
            path="https://assets7.lottiefiles.com/packages/lf20_fcfjwiyb.json"
            className="w-64 lg:w-80"
          />
        </div>

        {/* RIGHT (Form) */}
        <div className="w-full md:w-1/2 bg-[#111] p-5 sm:p-6 md:p-8">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-black text-white border 
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
                {...register("password")}
                className={`w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-black text-white border pr-10
                ${errors.password ? "border-red-500" : "border-gray-700"}
                focus:outline-none focus:border-yellow-400`}
              />

              {/* Eye Icon */}
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

            {/* 🔥 Remember + Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-yellow-400" />
                Remember me
              </label>

              <button
                type="button"
                onClick={switchToForgot}
                className="text-yellow-400 hover:underline"
              >
                Forgot Password?
              </button>
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
              Login
            </button>

          </form>

          {/* Switch to Signup */}
          <p className="text-gray-400 text-xs sm:text-sm text-center mt-6">
            New here?{" "}
            <span
              onClick={switchToSignup}
              className="text-yellow-400 cursor-pointer hover:underline"
            >
              Create account
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;