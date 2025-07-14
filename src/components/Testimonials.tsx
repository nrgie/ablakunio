import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Kiss Gábor",
    text: "Nagyon gyorsan, tisztán dolgoztak. Az ablakok minősége kiváló, az ár is korrekt volt. Ajánlom mindenkinek!",
    rating: 5,
    img: "/testimonials/gabor.webp",
  },
  {
    name: "Szabó Anikó",
    text: "Szuper csapat, profi beépítés. Minden a megbeszéltek szerint zajlott, kedves ügyfélszolgálat.",
    rating: 5,
    img: "/testimonials/aniko.webp",
  },
  {
    name: "Nagy László",
    text: "Ablakcsere után érezhetően melegebb lett a lakásban. Gyors ajánlatadás, pontos kivitelezés.",
    rating: 5,
    img: "/testimonials/laszlo.webp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  return (
    <section className="bg-white py-12 md:py-20" id="velemenyek">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-ablakunio-blue">
          Ügyfeleink mondták
        </h2>
        <div className="relative max-w-xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src={testimonials[current].img}
                alt={testimonials[current].name}
                fill
                className="object-cover rounded-full border-4 border-ablakunio-blue"
                sizes="64px"
              />
            </div>
            <div className="text-lg font-semibold mb-2">{testimonials[current].name}</div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" fill={i < testimonials[current].rating ? "#fbbc04" : "#ddd"} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">&quot;{testimonials[current].text}&quot;</p>
          </div>
          {/* Carousel controls */}
          <div className="flex justify-center gap-3 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-ablakunio-blue" : "bg-gray-300"}`}
                aria-label={`Vélemény ${i + 1}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}