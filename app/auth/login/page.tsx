"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); // Giriş başarılı mesajı
        localStorage.setItem("token", data.token); // JWT token'ı sakla
        setTimeout(() => {
          router.push("/"); // Ana sayfaya yönlendir
        }, 2000); // 2 saniye bekleme
      } else {
        setMessage(data.message); // Hata mesajını göster
      }
    } catch (error) {
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h2>
        {message && (
          <p className={`text-center mb-4 ${response.ok ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 mb-4 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
