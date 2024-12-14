"use client";

import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState<any>(null); // Kullanıcı bilgilerini tutar
  const [profilePicture, setProfilePicture] = useState<string>(""); // Profil resmini tutar
  const [message, setMessage] = useState<string | null>(null); // Hata veya başarı mesajlarını tutar

  // Profil bilgilerini almak için API çağrısı
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Oturum açmanız gerekiyor.");
      return;
    }

    try {
      const response = await fetch("/api/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setProfilePicture(data.profilePicture || ""); // Varsayılan profil resmi
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Bir hata oluştu. Profil alınamadı.");
    }
  };

  // Sayfa yüklendiğinde profil bilgilerini al
  useEffect(() => {
    fetchProfile();
  }, []);

  // Kullanıcı yoksa ya da profil verisi gelmediyse, yükleniyor mesajını göster
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {message ? <p className="text-red-500">{message}</p> : <p>Yükleniyor...</p>}
      </div>
    );
  }

  // Profil verisi geldiğinde bu kısmı göster
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Profil</h2>
        {message && <p className="text-red-500 mb-4">{message}</p>}

        {/* Kullanıcı bilgilerini göster */}
        <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>

        {/* Profil resmini güncelleme kısmı */}
        <div className="mt-4">
          <label htmlFor="profilePicture">Profil Resmi URL:</label>
          <input
            type="text"
            id="profilePicture"
            className="w-full p-2 border rounded"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>

        {/* Profil resmini güncelleme butonu */}
        <button
          onClick={async () => {
            const token = localStorage.getItem("token");
            if (!token || !profilePicture) return;

            try {
              const response = await fetch("/api/auth/profile", {
                method: "PUT", // Profil güncelleme
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ profilePicture }),
              });

              const data = await response.json();
              if (response.ok) {
                setMessage("Profil resmi güncellendi!");
                setUser({ ...user, profilePicture: data.profilePicture });
              } else {
                setMessage(data.error || "Bir hata oluştu.");
              }
            } catch (error) {
              setMessage("Bir hata oluştu. Profil resmi güncellenemedi.");
            }
          }}
          className="w-full mt-4 bg-green-500 text-white p-2 rounded"
        >
          Profil Resmini Güncelle
        </button>
      </div>
    </div>
  );
};

export default Profile;
