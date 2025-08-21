import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, FormEvent } from 'react'

export default function Booking() {
  const [booking, setBooking] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    notes: ''
  })

  const services = [
    "استشارة دوائية",
    "مراجعة الأدوية",
    "خطة علاجية",
    "استشارة صحية عامة"
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: إضافة منطق حفظ الحجز
    console.log(booking)
    alert('تم تأكيد حجزك بنجاح!')
  }

  return (
    <>
      <Head>
        <title>احجز موعد - CoPharma.ai</title>
        <meta name="description" content="احجز موعدك مع صيدلي متخصص" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">احجز موعد</h1>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">نوع الخدمة</label>
                  <select
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.service}
                    onChange={(e) => setBooking({...booking, service: e.target.value})}
                  >
                    <option value="">اختر الخدمة</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">التاريخ</label>
                  <input
                    type="date"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.date}
                    onChange={(e) => setBooking({...booking, date: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الوقت</label>
                  <input
                    type="time"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.time}
                    onChange={(e) => setBooking({...booking, time: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.name}
                    onChange={(e) => setBooking({...booking, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.phone}
                    onChange={(e) => setBooking({...booking, phone: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">ملاحظات إضافية</label>
                  <textarea
                    rows={4}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.notes}
                    onChange={(e) => setBooking({...booking, notes: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition"
                >
                  تأكيد الحجز
                </button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}