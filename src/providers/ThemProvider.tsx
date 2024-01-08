"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function ThemProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
