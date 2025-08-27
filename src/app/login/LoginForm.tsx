// /app/login/LoginForm.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { loginUser, googleSignup, facebookSignup, loading, setLoading } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

  const handleForm: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    try {
      await loginUser(data.email, data.password);
      openModal({ title: "Welcome back!", message: "Successfully logged in.", autoCloseTime: 4000 });
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      openModal({ title: "Login Failed", message: "Invalid email or password.", autoCloseTime: 4000 });
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignup();
      openModal({ title: "Welcome with Google!", message: "Successfully logged in with Google.", autoCloseTime: 4000 });
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoading(true);
    try {
      await facebookSignup();
      openModal({ title: "Welcome with Facebook!", message: "Successfully logged in with Facebook.", autoCloseTime: 4000 });
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form
      className="relative z-10 bg-gray-900/90 backdrop-blur-md rounded-xl p-8 w-[90%] sm:w-[380px] flex flex-col gap-4 shadow-xl"
      onSubmit={handleSubmit(handleForm)}
    >
      {/* Floating blurred circles */}
      <div className="absolute w-56 h-56 bg-blue-600 rounded-full -top-32 -left-32 opacity-40 blur-3xl"></div>
      <div className="absolute w-56 h-56 bg-orange-500 rounded-full -bottom-32 -right-32 opacity-40 blur-3xl"></div>

      <h2 className="text-2xl font-semibold text-white text-center mb-2">Login Here</h2>

      {/* Email */}
      <label className="text-gray-300 text-sm font-medium">Email or Phone</label>
      <input {...register("email", { required: true })} placeholder="Your Email or Phone"
        className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
      {errors.email && <span className="text-red-400 text-xs">Email is required</span>}

      {/* Password */}
      <label className="text-gray-300 text-sm font-medium">Password</label>
      <input {...register("password", { minLength: 6 })} type="password" placeholder="Your Password"
        className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
      {errors.password && <span className="text-red-400 text-xs">Password must be 6+ characters</span>}

      {/* Remember Me */}
      <div className="flex items-center gap-2 text-xs">
        <input type="checkbox" id="remember" className="w-4 h-4 accent-orange-500" onChange={(e) => setIsChecked(e.target.checked)} />
        <label htmlFor="remember" className="text-gray-400">Remember Me</label>
      </div>

      {/* Login button */}
      <button disabled={loading || !isChecked} className="bg-orange-600 hover:bg-orange-500 text-black font-bold py-3 rounded-md disabled:opacity-50 transition">
        {loading ? "Loading..." : "Login"}
      </button>

      {/* Forgot Password */}
      <p className="text-gray-400 text-center text-xs">
        Forgot your password? <a href="/reset-password" className="text-blue-500">Reset Here</a>
      </p>

      {/* Social buttons */}
      <div className="flex sm:flex-row gap-4 mt-2">
        <button type="button" onClick={handleGoogleLogin} className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
          <FcGoogle size={20} />
        </button>
        <button type="button" onClick={handleFacebookLogin} className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
          <FaFacebookF size={20} className="text-blue-500" />
        </button>
      </div>

      {/* Sign Up link */}
      <p className="text-gray-400 text-center text-xs mt-2">
        Don’t have an account? <a href="/signup" className="text-blue-500">Sign Up Here!</a>
      </p>
    </form>
  );
};

export default LoginForm;
