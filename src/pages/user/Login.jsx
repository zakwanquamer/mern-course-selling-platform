import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Lottie from "lottie-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";

function Login() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange", // real-time validation
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black px-4">

      <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/20">

        {/* LEFT */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-black">
<Lottie
  path="https://assets7.lottiefiles.com/packages/lf20_fcfjwiyb.json"
  className="w-80"
/>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 bg-[#111] p-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full p-3 rounded-lg bg-black text-white border 
                ${errors.email ? "border-red-500" : "border-gray-700"} 
                focus:outline-none focus:border-yellow-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
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
                className={`w-full p-3 rounded-lg bg-black text-white border pr-10
                ${errors.password ? "border-red-500" : "border-gray-700"}
                focus:outline-none focus:border-yellow-400`}
              />

              {/* Eye Toggle */}
              <div
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-yellow-400"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              disabled={!isValid}
              className={`w-full p-3 rounded-lg font-semibold transition 
              ${
                isValid
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
            >
              Login
            </button>

          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            New here?{" "}
            <span className="text-yellow-400 cursor-pointer hover:underline">
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;