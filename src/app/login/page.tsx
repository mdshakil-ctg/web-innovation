// /app/login/page.tsx
import { Suspense } from "react";
import LoginForm from "./LoginForm";
import Loading from "../components/Loading";

export const dynamic = "force-dynamic"; // Ensures no static pre-rendering

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center overflow-hidden">
      <Suspense fallback={<Loading show={true} />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
