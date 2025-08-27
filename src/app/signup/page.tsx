"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const {
    createUser,
    updateUser,
    googleSignup,
    facebookSignup,
    loading,
    setLoading,
  } = useAuth();

  const [isChecked, setIsChecked] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/");

  // ✅ Fix: use window.location.search instead of useSearchParams
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setRedirectTo(params.get("from") || "/");
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } =
    useForm<SignUpFormValues>();

  // Email/Password signup
  const handleForm: SubmitHandler<SignUpFormValues> = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUser(
        data.email,
        data.password,
        data.name
      );
      if (userCredential) await updateUser(data.name);

      openModal({
        title: `Welcome ${data.name}`,
        message: "Please check your email for exclusive offers!",
        autoCloseTime: 5000,
      });

      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await googleSignup();
      openModal({
        title: "Welcome with Google!",
        message: "You’ve successfully signed up with Google.",
        autoCloseTime: 5000,
      });
      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // Facebook signup
  const handleFacebookSignup = async () => {
    setLoading(true);
    try {
      await facebookSignup();
      openModal({
        title: "Welcome with Facebook!",
        message: "You’ve successfully signed up with Facebook.",
        autoCloseTime: 5000,
      });
      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center overflow-hidden">
      <form
        className="relative z-10 bg-gray-900/90 backdrop-blur-md rounded-xl p-8 w-[90%] sm:w-[380px] flex flex-col gap-4 shadow-xl"
        onSubmit={handleSubmit(handleForm)}
      >
        {/* Floating blurred circles */}
        <div className="absolute w-56 h-56 bg-blue-600 rounded-full -top-32 -left-32 opacity-40 blur-3xl"></div>
        <div className="absolute w-56 h-56 bg-orange-500 rounded-full -bottom-32 -right-32 opacity-40 blur-3xl"></div>

        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Sign Up Here
        </h2>

        {/* Full Name */}
        <label className="text-gray-300 text-sm font-medium">Full Name</label>
        <input
          {...register("name", { required: true })}
          placeholder="Your Full Name"
          className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.name && (
          <span className="text-red-400 text-xs">Name is required</span>
        )}

        {/* User ID */}
        <label className="text-gray-300 text-sm font-medium">User ID</label>
        <input
          {...register("email", { required: true })}
          placeholder="Email or Phone"
          className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.email && (
          <span className="text-red-400 text-xs">Email is required</span>
        )}

        {/* Password */}
        <label className="text-gray-300 text-sm font-medium">Password</label>
        <input
          {...register("password", { minLength: 6 })}
          type="password"
          placeholder="Your Password"
          className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.password && (
          <span className="text-red-400 text-xs">
            Password must be 6+ characters
          </span>
        )}

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 accent-orange-500"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="text-gray-400">
            I agree with <span className="underline">Terms and Conditions</span>{" "}
            and <span className="underline">Privacy Policies</span>
          </label>
        </div>

        {/* Register button */}
        <button
          disabled={!isChecked || loading}
          className="bg-orange-600 hover:bg-orange-500 text-black font-bold py-3 rounded-md disabled:opacity-50 transition"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        {/* Already have an account */}
        <p className="text-gray-400 text-center text-xs">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Log In Here!
          </a>
        </p>

        {/* Social buttons */}
        <div className="flex sm:flex-row gap-4 mt-2">
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            <FcGoogle size={20} />
          </button>
          <button
            type="button"
            onClick={handleFacebookSignup}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            <FaFacebookF size={20} className="text-blue-500" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
