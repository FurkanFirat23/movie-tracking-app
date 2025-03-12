// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import { UserProvider } from './context/UserContext';

// Yeni Wrapper oluşturun
function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ClientWrapper>
          <Navbar />
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
