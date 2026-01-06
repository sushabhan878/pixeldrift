import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelDrift",
  description: "Design and development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefin.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
