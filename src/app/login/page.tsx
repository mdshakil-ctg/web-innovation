"use client";

import { Suspense } from "react";
import LoginForm from "./LoginForm";
// import LoginForm from "@/components/LoginForm"; // adjust path if needed

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Loading login...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
