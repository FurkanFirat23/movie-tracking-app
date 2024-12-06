export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Kayıt Ol</h1>
      <form className="w-full max-w-sm">
        {/* Kullanıcı Adı Input */}
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Şifre Input */}
        <input
          type="password"
          placeholder="Şifre"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Kayıt Ol Butonu */}
        <button className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600 focus:outline-none">
          Kayıt Ol
        </button>
      </form>
      {/* Alt Kısım: Giriş Yap Linki */}
      <div className="mt-4 text-center">
        <p className="text-sm">
          Zaten bir hesabınız var mı?{" "}
          <a
            href="/auth/login"
            className="text-green-500 underline hover:text-green-700"
          >
            Giriş Yap
          </a>
        </p>
      </div>
    </div>
  );
}
