type Price = {
  termek: string;
  akcios_ar: string;
  lista_ar: string;
};

const PriceTable = ({ prices }: { prices: Price[] }) => (
  <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
    <thead>
      <tr>
        <th className="py-3 px-4 bg-gray-100 text-left">Termék</th>
        <th className="py-3 px-4 bg-gray-100 text-left">Akciós ár</th>
        <th className="py-3 px-4 bg-gray-100 text-left">Lista ár</th>
      </tr>
    </thead>
    <tbody>
      {prices.map((item, i) => (
        <tr key={i} className="odd:bg-gray-50">
          <td className="py-2 px-4">{item.termek}</td>
          <td className="py-2 px-4 font-bold text-green-700">{item.akcios_ar}</td>
          <td className="py-2 px-4 line-through text-gray-400">{item.lista_ar}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PriceTable;