"use client";

import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    profilePicture: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Kullanıcı bilgilerini GET ile al
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user/profile");
        if (!res.ok) throw new Error("API isteği başarısız oldu.");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError("Kullanıcı bilgileri alınamadı.");
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  // Profil güncelleme
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Güncelleme başarısız oldu.");
      const data = await res.json();
      setSuccess(data.message);
    } catch (error) {
      setError("Profil güncellenirken bir hata oluştu.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-10 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Profil</h1>
      {error && (
        <p className="text-red-500 text-center mb-4">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-500 text-center mb-4">
          {success}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="username">
            Kullanıcı Adı:
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            E-Posta:
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="profilePicture"
          >
            Profil Resmi URL'si:
          </label>
          <input
            type="text"
            id="profilePicture"
            value={user.profilePicture}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, profilePicture: e.target.value }))
            }
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition"
        >
          Profili Güncelle
        </button>
      </form>
    </div>
  );
}
