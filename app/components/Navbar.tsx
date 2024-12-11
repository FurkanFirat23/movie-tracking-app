"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Token varsa giriş yapılmış
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/"; // Ana sayfaya yönlendir
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Film Takip</Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link href="/profile" className="mr-4">Profil</Link>
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Çıkış Yap</button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="mr-4">Giriş Yap</Link>
            <Link href="/auth/register" className="bg-green-500 p-2 rounded">Kayıt Ol</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
