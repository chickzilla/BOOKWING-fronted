import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import SideBarType from "@/components/SideBarType/SideBarType";

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
        <SideBarType />
        {children}
      </body>
    </html>
  );
}
