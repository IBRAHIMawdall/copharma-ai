import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: "كمامة طبية", price: "20 AED" },
  { id: 2, name: "مطهر يدين", price: "15 AED" },
  { id: 3, name: "ميزان حرارة", price: "35 AED" }
]

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleProductClick = (productName: string) => {
    setSelectedProduct(productName)
    // TODO: Add cart functionality or redirect to product details
    // console.log(`Selected product: ${productName}`) // Remove in production
  }

  return (
    <>
      <Head>
        <title>المتجر - CoPharma.ai</title>
        <meta name="description" content="تسوق للمنتجات الطبية والصيدلانية" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              المتجر
            </h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  name={product.name} 
                  price={product.price}
                  onClick={() => handleProductClick(product.name)}
                />
              ))}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
