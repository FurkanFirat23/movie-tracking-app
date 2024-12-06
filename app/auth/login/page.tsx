export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Giriş Yap</h1>
      <form className="w-full max-w-sm">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Şifre"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Login Button */}
        <button className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none">
          Giriş Yap
        </button>
      </form>
      {/* Links */}
      <div className="mt-4 text-center">
        <p className="text-sm">
          Üye değil misiniz?{" "}
          <a href="/auth/register" className="text-blue-500 underline hover:text-blue-700">
            Kayıt Ol
          </a>
        </p>
        <p className="text-sm mt-2">
          <a href="/auth/forgot-password" className="text-blue-500 underline hover:text-blue-700">
            Şifremi Unuttum
          </a>
        </p>
      </div>
    </div>
  );
}
