"use client";

import { useRouter } from "next/navigation";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        // Yerel oturumu temizle
        localStorage.removeItem("token");
        alert("Başarıyla çıkış yapıldı.");
        router.push("/"); // Ana sayfaya yönlendirme
      } else {
        const errorData = await response.json();
        console.error("Logout failed:", errorData);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Çıkış Yap
    </button>
  );
};

export default LogoutButton;
