import Image from "next/image";

const products = [
  {
    name: "Műanyag ablakok",
    desc: "Hő- és hangszigetelt, többkamrás profilból, prémium vasalattal és dizájn kilinccsel, akár egyedi méretben is.",
    img: "/products/muanyag-ablak.webp",
  },
  {
    name: "Alumínium ablakok",
    desc: "Kiemelkedő stabilitás, modern és letisztult megjelenés, nagy üvegfelületekhez, passzívházakhoz is.",
    img: "/products/aluminium-ablak.webp",
  },
  {
    name: "Bejárati ajtók",
    desc: "Biztonságos, masszív ajtók műanyagból vagy alumíniumból, modern vagy klasszikus stílusban.",
    img: "/products/bejarati-ajto.webp",
  },
  {
    name: "Redőnyök, szúnyoghálók",
    desc: "Extra árnyékolás, rovarmentes otthon – motoros vagy manuális vezérléssel, színre fújva.",
    img: "/products/redony-szunyoghalo.webp",
  },
];

export default function Products() {
  return (
    <section className="bg-ablakunio-blue/5 py-12 md:py-20" id="termekek">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-ablakunio-blue">
          Termékeink
        </h2>
        <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition flex flex-col items-center text-center p-5"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain rounded"
                  sizes="(max-width: 768px) 50vw, 128px"
                />
              </div>
              <div className="font-bold text-lg mb-2 text-gray-900">{p.name}</div>
              <div className="text-gray-600 text-base">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}