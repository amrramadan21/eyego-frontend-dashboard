"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/store/store";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "123456") {
            setError("");

            dispatch(login(email));

            localStorage.setItem("user", email);

            router.push("/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
             className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-slate-500"
            />
          </div>

                  {error && (
                      <p className="text-sm font-medium text-red-600">
                          {error}
                      </p>
                  )}

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 py-3 font-medium text-white hover:bg-slate-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}