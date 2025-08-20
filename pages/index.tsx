import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">مرحباً بك في CoPharma.ai</h1>
        <p className="mt-4 text-lg text-gray-700">حلول دوائية واستشارات ذكية.. بلغتك!</p>
      </main>
      <Footer />
    </>
  )
}
