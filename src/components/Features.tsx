import { FC } from "react";

const features = [
  {
    icon: "/features/rocket.svg",
    title: "Villámgyors ügyintézés",
    desc: "Akár <b>2 héten belül</b> beszerelés! Nincs hetekig tartó várakozás, minden folyamatunk gyors és gördülékeny.",
  },
  {
    icon: "/features/quality.svg",
    title: "Prémium minőség",
    desc: "Csak <b>Európai gyártású</b> műanyag és alumínium ablakok, profi beépítéssel. Hosszútávú megoldás!",
  },
  {
    icon: "/features/price.svg",
    title: "Kiemelkedő ár/érték",
    desc: "Közvetlenül a gyártótól, <b>rejtett költségek nélkül</b>. Akciós árak, csomagkedvezmény, ingyenes felmérés.",
  },
  {
    icon: "/features/warranty.svg",
    title: "100% Garancia",
    desc: "<b>Szakszerű beépítésre és termékre is</b> teljes körű garanciát vállalunk, írásban!",
  },
];

const Features: FC = () => (
  <section className="bg-white py-10 md:py-16" id="elonyok">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-ablakunio-blue">
        Miért válassza az AblakUniót?
      </h2>
      <div className="grid gap-7 md:grid-cols-4 sm:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-sm p-6 hover:scale-105 transition">
            <img src={f.icon} alt={f.title} className="w-14 h-14 mb-3" />
            <div className="font-bold text-lg mb-2 text-gray-900">{f.title}</div>
            <div className="text-gray-600 text-base" dangerouslySetInnerHTML={{ __html: f.desc }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;