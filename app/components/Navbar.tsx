import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-lg font-bold">Film Takip</h1>
    <div>
      <Link href="/" className="mr-4">Ana Sayfa</Link>
      <Link href="/search">Ara</Link>
    </div>
  </nav>
);

export default Navbar;
