export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <span className="font-bold">CoPharma.ai</span>
      <div className="space-x-4">
        <a href="/" className="hover:underline">الرئيسية</a>
        <a href="/services" className="hover:underline">الخدمات</a>
        <a href="/shop" className="hover:underline">المتجر</a>
      </div>
    </nav>
  )
}
