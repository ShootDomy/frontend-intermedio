import { geistMono, geistSans } from "@/fonts/Geist";
import React from "react";
import { Navbar } from "../Common/Navbar";
import { Footer } from "../Common/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)] min-h-screen max-h-screen min-w-screen max-w-screen`}
    >
      <main className="flex flex-col h-screen w-screen">
        <Navbar />
        <div className="flex flex-col flex-1  w-full overflow-y-auto p-2">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};
