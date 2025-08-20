import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  const products = [
    {
      name: "فيتامين د",
      price: "45 درهم",
      description: "مكمل غذائي يومي لدعم صحة العظام",
      category: "فيتامينات"
    },
    {
      name: "جهاز قياس الضغط",
      price: "199 درهم",
      description: "جهاز رقمي دقيق لقياس ضغط الدم",
      category: "أجهزة طبية"
    },
    {
      name: "كمامات طبية",
      price: "25 درهم",
      description: "علبة تحتوي على 50 كمامة طبية",
      category: "مستلزمات طبية"
    }
  ]

  return (
    <>
      <Head>
        <title>منتجاتنا - CoPharma.ai</title>
        <meta name="description" content="تسوق منتجاتنا الطبية والصحية" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">منتجاتنا</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                    {product.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}