
"use client"; 

import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();

  return (
    <nav className="flex justify-between p-4 bg-gray-800">
      <span>Film Takip</span>
      <div>
        {user ? (
          <>
            <button className="mr-4">Profil</button>
            <button
              className="text-red-500"
              onClick={() => setUser(null)} 
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <button className="mr-4">Giriş Yap</button>
            <button>Üye Ol</button>
          </>
        )}
      </div>
    </nav>
  );
}
