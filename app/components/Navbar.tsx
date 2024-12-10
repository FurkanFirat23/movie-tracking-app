"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Kullanıcı oturumunu kontrol et
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Token varsa oturum açık
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        localStorage.removeItem("token"); // Token'ı kaldır
        setIsLoggedIn(false); // Oturum durumunu güncelle
        router.push("/"); // Ana sayfaya yönlendir
      } else {
        console.error("Çıkış yapılamadı.");
      }
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        Film Takip
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link href="/profile" className="mr-4">
              Profil
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="mr-4">
              Giriş Yap
            </Link>
            <Link href="/auth/register" className="bg-green-500 px-4 py-2 rounded text-white">
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
