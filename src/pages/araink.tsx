import Head from "next/head";
import { GetServerSideProps } from "next";

type Item = {
  id: number;
  format: string;
  name: string;
  price: number;
  price_retail: number;
  inventory: number;
  real_inventory: number;
  alertmin: number;
};

type Category = {
  [id: string]: Item;
};

type PriceData = {
  [category: string]: Category;
};

type Props = {
  prices: PriceData;
};

export default function Araink({ prices }: Props) {
  return (
    <>
      <Head>
        <title>AblakUnio árlista – Valós árak, napi frissítéssel</title>
        <meta name="description" content="Tekintse meg műanyag és alumínium ablakaink, ajtóink és kiegészítőink aktuális árait! Nincs rejtett költség, minden ár naprakész." />
        <link rel="canonical" href="https://ablakunio.com/araink" />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-ablakunio-blue">Áraink</h1>
        <p className="text-center text-gray-600 mb-8">
          Valós raktárkészlettel, <b>naponta frissülő árakkal</b>. A feltüntetett árak forintban értendők, az ÁFA-t tartalmazzák. 
        </p>
        {Object.entries(prices).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-bold text-ablakunio-blue mb-2">{category.replace(/_/g, " ")}</h2>
            <div className="overflow-x-auto rounded shadow">
              <table className="min-w-full bg-white text-sm">
                <thead>
                  <tr className="bg-ablakunio-blue/10 text-ablakunio-blue font-semibold">
                    <th className="px-3 py-2 text-left">Termék</th>
                    <th className="px-3 py-2 text-right">Kedvezményes ár</th>
                    <th className="px-3 py-2 text-right">Listaár</th>
                    <th className="px-3 py-2 text-center">Egység</th>
                    <th className="px-3 py-2 text-center">Raktár</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(items).map(item => (
                    <tr key={item.id} className="border-b last:border-none">
                      <td className="px-3 py-2">{item.name}</td>
                      <td className="px-3 py-2 text-right font-bold text-ablakunio-blue">
                        {item.price > 0 ? `${item.price.toLocaleString()} Ft` : "-"}
                      </td>
                      <td className="px-3 py-2 text-right text-gray-500">
                        {item.price_retail > 0 ? `${item.price_retail.toLocaleString()} Ft` : "-"}
                      </td>
                      <td className="px-3 py-2 text-center">{item.format.toUpperCase()}</td>
                      <td className="px-3 py-2 text-center">
                        {item.inventory > 0
                          ? item.inventory < item.alertmin
                            ? <span className="text-yellow-600 font-semibold">Alacsony ({item.inventory})</span>
                            : <span className="text-green-700">{item.inventory}</span>
                          : <span className="text-red-600 font-semibold">Elfogyott</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <div className="text-xs text-gray-400 text-center mt-8">
          Árlista forrás: ablakunio.com • {new Date().toLocaleDateString("hu-HU")}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch("https://www.ablakunio.com/items", { cache: "no-store" });
    const data = await res.json();
    return { props: { prices: data.result || {} } };
  } catch {
    return { props: { prices: {} } };
  }
};