import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  // Csak mobilon jelenjen meg (pl. max 768px)
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden">
      <div className="flex justify-between items-center px-4 py-3 bg-ablakunio-blue text-white shadow-lg">
        <span className="font-semibold text-base">
          Kérd ajánlatunkat most!
        </span>
        <Link
          href="#ajanlat"
          className="ml-4 px-5 py-2 bg-ablakunio-yellow text-ablakunio-blue font-bold rounded shadow hover:bg-yellow-400 transition"
        >
          Ajánlatkérés
        </Link>
      </div>
    </div>
  );
}