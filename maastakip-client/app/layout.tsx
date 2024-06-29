import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_NAME } from "./config/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SITE_NAME,
  description: "Maaş Takip ve Hesaplama Uygulama Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " min-h-screen flex justify-between flex-col "
        }
      >
        <Navbar></Navbar>

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
