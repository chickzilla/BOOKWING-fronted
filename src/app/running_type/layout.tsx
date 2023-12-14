import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import NavBarType from "@/components/NavBarType/NavBarType";
import Navbar from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOK WING",
  description: "THE BEST RUNNING EVENT WEBSITE",
};

export default function TypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <NavBarType />
        {children}
      </body>
    </html>
  );
}
