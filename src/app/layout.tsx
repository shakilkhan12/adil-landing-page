'use client'
import "./globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      // Your AOS options here (optional)
    });
  }, []);
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
