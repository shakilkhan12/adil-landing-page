'use client'
import { createTheme, ThemeProvider } from "@mui/material";
import "./globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a4fed",
    },
  },
});
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
      
      <body>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
