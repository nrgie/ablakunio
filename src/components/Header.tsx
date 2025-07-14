import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="AblakUnio logó" className="h-8 w-auto" />
          <span className="font-bold text-xl text-ablakunio-blue">AblakUnio</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#termekek" className="text-gray-700 hover:text-ablakunio-blue transition">Termékek</Link>
          <Link href="#velemenyek" className="text-gray-700 hover:text-ablakunio-blue transition">Vélemények</Link>
          <Link href="/araink" className="text-gray-700 hover:text-ablakunio-blue transition">Áraink</Link>
          <Link href="#kapcsolat" className="text-gray-700 hover:text-ablakunio-blue transition">Kapcsolat</Link>
          <Link
            href="#ajanlat"
            className="ml-4 px-4 py-2 bg-ablakunio-blue text-white font-semibold rounded shadow hover:bg-blue-700 transition"
          >
            Ajánlatkérés
          </Link>
        </div>
        <button
          className="md:hidden flex items-center"
          aria-label="Mobil menü"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-7 w-7 text-ablakunio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col gap-2 py-4 px-6">
            <Link href="#termekek" className="py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Termékek</Link>
            <Link href="#velemenyek" className="py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Vélemények</Link>
            <Link href="/araink" className="py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Áraink</Link>
            <Link href="#kapcsolat" className="py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Kapcsolat</Link>
            <Link
              href="#ajanlat"
              className="mt-3 px-4 py-2 bg-ablakunio-blue text-white font-semibold rounded shadow text-center"
              onClick={() => setMenuOpen(false)}
            >
              Ajánlatkérés
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}