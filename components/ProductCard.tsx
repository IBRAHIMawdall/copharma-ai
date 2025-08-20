export default function ProductCard({ name, price }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-blue-600 font-semibold">{price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">اطلب الآن</button>
    </div>
  )
}
