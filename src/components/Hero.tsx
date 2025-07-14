import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ablakunio-blue/5 pt-6 pb-12 md:py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-ablakunio-blue mb-4 leading-tight">
            Műanyag és alumínium ablakok <span className="text-ablakunio-yellow">beépítéssel</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6">
            Ablakcsere, redőny, szúnyogháló – mindent egy helyen, <b>gyorsan és garanciával</b>. Több mint 5000 elégedett ügyfél!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#ajanlat"
              className="inline-block px-7 py-3 bg-ablakunio-blue text-white font-bold text-lg rounded shadow hover:bg-blue-700 transition"
            >
              Kérek ajánlatot
            </Link>
            <Link
              href="/araink"
              className="inline-block px-7 py-3 bg-ablakunio-yellow text-ablakunio-blue font-bold text-lg rounded shadow hover:bg-yellow-400 transition"
            >
              Akciós áraink
            </Link>
          </div>
          {/* Trustmarkerek */}
          <div className="flex gap-4 mt-7 justify-center md:justify-start">
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Image src="/google-star.svg" alt="Google értékelés" width={20} height={20} />
              4.8/5 | 230+ vélemény
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Image src="/flag-hu.svg" alt="Magyar cég" width={20} height={20} />
              100% magyar cég
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Image src="/delivery.svg" alt="Gyors szállítás" width={20} height={20} />
              Gyors szállítás
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/hero-ablak.webp"
            alt="Modern ablak illusztráció"
            width={410}
            height={350}
            className="rounded-lg shadow-xl"
            priority
            sizes="(max-width: 768px) 90vw, 410px"
          />
        </div>
      </div>
    </section>
  );
}