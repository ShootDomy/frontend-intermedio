import { Footer } from "@/Components/Common/Footer";
import { ListadoLibros } from "@/Components/Common/ListadoLibros";
import { Navbar } from "@/Components/Common/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)] min-h-screen max-h-screen min-w-screen max-w-screen`}
    >
      <main className="flex flex-col h-screen w-screen">
        <Navbar />
        <div className="flex flex-col flex-1 w-full overflow-y-auto p-2">
          <ListadoLibros />
        </div>
        <Footer />
      </main>
    </div>
  );
}
