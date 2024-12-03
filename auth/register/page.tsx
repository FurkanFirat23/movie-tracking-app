"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Registration successful!");
      router.push("/auth/login");
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Username"
        className="block p-2 border mb-4"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="block p-2 border mb-4"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="block p-2 border mb-4"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Register</button>
    </form>
  );
}
