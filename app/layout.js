import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RMDF",
  description: "We help those in need",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
