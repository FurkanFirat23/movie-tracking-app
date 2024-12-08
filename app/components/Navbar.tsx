import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🎬</span>
        <h1 className="text-xl font-bold tracking-wide text-blue-400">
          Film Takip
        </h1>
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/search"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          Ara
        </Link>
        <Link
          href="/auth/login"
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition duration-300"
        >
          Giriş Yap
        </Link>
        <Link
          href="/auth/register"
          className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition duration-300"
        >
          Kayıt Ol
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
