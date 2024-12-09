"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // Başarılı olup olmadığını belirler
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); // Mesajı sıfırla
    setIsSuccess(null); // Başarı durumunu sıfırla

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Başarıyla kayıt olundu.");
        setIsSuccess(true); // Başarı durumu
        setTimeout(() => {
          router.push("/auth/login"); // Giriş yap ekranına yönlendir
        }, 2000); // 2 saniye sonra yönlendir
      } else {
        setMessage(data.error || "Bir hata oluştu.");
        setIsSuccess(false); // Hata durumu
      }
    } catch (error) {
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsSuccess(false); // Hata durumu
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Kayıt Ol</h2>
        {message && (
          <p className={`text-center mb-4 ${isSuccess ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="w-full p-2 mb-4 border rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}
