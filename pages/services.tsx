import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-blue-600">خدماتنا</h1>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li>استشارات صيدلانية رقمية</li>
          <li>مراجعة وصفات وأدوية</li>
          <li>بيع منتجات طبية موثوقة</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
