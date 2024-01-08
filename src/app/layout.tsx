import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar/Navbar";
import ThemProvider from "@/providers/ThemProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOK WING",
  description: "THE BEST RUNNING EVENT WEBSITE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemProvider>
          <Navbar />
          {children}
        </ThemProvider>
      </body>
    </html>
  );
}
