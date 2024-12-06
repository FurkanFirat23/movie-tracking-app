"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Parola sıfırlama linki e-posta adresinize gönderildi.");
      } else {
        setMessage(data.error || "Bir hata oluştu.");
      }
    } catch (error) {
      setMessage("Sunucuya bağlanırken bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Şifremi Unuttum</h1>
      <div className="w-full max-w-sm">
        <input
          type="email"
          placeholder="E-posta adresinizi girin"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleResetPassword}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none"
        >
          Parola Sıfırlama Linki Gönder
        </button>
        {message && <p className="mt-4 text-sm text-center text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
