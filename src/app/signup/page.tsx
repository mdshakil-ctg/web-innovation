"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { createUserInDb } from "@/services/users";
import "./SignUp.css";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const { createUser, updateUser, loading, setLoading } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValues>();

  const handleForm: SubmitHandler<SignUpFormValues> = async (data) => {
    setLoading(true);
    try {
      // Step 1: Create Firebase user
      const userCredential = await createUser(data.email, data.password);
      if (userCredential) {
        await updateUser(data.name);
      }

      // Step 2: Store in MongoDB
      const res = await createUserInDb({ name: data.name, email: data.email });

      if (res?.insertedId) {
        openModal({
          title: `Welcome ${data.name}`,
          message: "Please check your email for exclusive offers!",
          autoCloseTime: 5000,
        });
      }

      setLoading(false);
      router.push(redirectTo);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error && error.message === "User already exists") {
        openModal({
          title: `${data.email} is already taken. Please use another email.`,
          autoCloseTime: 5000,
        });
      }
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center">
      <form className="main-form" onSubmit={handleSubmit(handleForm)}>
        <h3>Sign Up Here</h3>

        <label htmlFor="username">Full Name</label>
        <input
          {...register("name", { required: true })}
          id="username"
          placeholder="Your Full Name"
          className="input-field"
        />
        {errors.name && <span className="error-text">Name is required</span>}

        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          placeholder="Email"
          className="input-field"
        />
        {errors.email && <span className="error-text">Email required</span>}

        <label htmlFor="password">Password</label>
        <input
          {...register("password", { minLength: 6 })}
          type="password"
          id="password"
          placeholder="Your Password"
          className="input-field"
        />
        {errors.password && <span className="error-text">Password must be 6 characters</span>}

        <div className="terms">
          <label htmlFor="terms">
            I agree with <span className="underline">Terms and Conditions</span> and{" "}
            <span className="underline">Privacy Policies</span>
          </label>
          <input
            type="checkbox"
            id="terms"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>

        <button disabled={!isChecked || loading} className="btn-reg">
          {loading ? "Loading..." : "Register"}
        </button>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-300">
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
