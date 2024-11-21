import { Inter, Unbounded } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

const unbounded = Unbounded({ subsets: ['latin'] })


export const metadata = {
  title: "Shane Roach Portfolio",
  description: "Checkout my projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body
        className={unbounded.className}
      >
        <Navbar />
        <main className='px-20 py-20 max-w-6xl mx-auto'>
          
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
