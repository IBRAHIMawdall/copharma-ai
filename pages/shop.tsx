import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  return (
    <>
      <Navbar />
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard name="كمامة طبية" price="20 AED" />
        <ProductCard name="مطهر يدين" price="15 AED" />
        <ProductCard name="ميزان حرارة" price="35 AED" />
      </main>
      <Footer />
    </>
  )
}
