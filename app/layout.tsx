import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main className="py-10 bg-gradient-to-r from-blue-900 to-teal-400">
        <div className="max-w-md mx-auto mt-10">
        {children}
        </div>
      </main>
      <Footer />
      </body>
    </html>
  );
}
