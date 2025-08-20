import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, ChangeEvent, FormEvent } from 'react'

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  notes: string;
}
export default function Booking() {
  const [booking, setBooking] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const services = [
    "استشارة دوائية",
    "مراجعة الأدوية",
    "خطة علاجية",
    "استشارة صحية عامة"
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { // <-- استبدل هذا بمعرف النموذج الخاص بك
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setBooking({ // Reset form
          service: '',
          date: '',
          time: '',
          name: '',
          phone: '',
          notes: ''
        });
      } else {
        throw new Error('حدث خطأ أثناء إرسال الحجز. الرجاء المحاولة مرة أخرى.');
      }
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
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
                    name="service"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.service}
                    onChange={handleChange}
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
                    name="date"
                    type="date"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الوقت</label>
                  <input
                    name="time"
                    type="time"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.time}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الاسم</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">ملاحظات إضافية</label>
                  <textarea
                    name="notes"
                    rows={4}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={booking.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {submitting ? 'جارٍ الإرسال...' : 'تأكيد الحجز'}
                </button>
              </div>

              {submitSuccess && (
                <div className="mt-4 p-3 text-center text-green-800 bg-green-100 border border-green-300 rounded-lg">
                  تم استلام حجزك بنجاح! سنتواصل معك قريبًا للتأكيد.
                </div>
              )}
              {submitError && (
                <div className="mt-4 p-3 text-center text-red-800 bg-red-100 border border-red-300 rounded-lg">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}