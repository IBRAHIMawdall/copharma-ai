import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, FormEvent } from 'react'

export default function Booking() {
  const [booking, setBooking] = useState({
    service: '',
    serviceType: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    profession: '',
    experience: '',
    notes: ''
  })

  const services = [
    {
      category: "التطوير المهني للصيادلة",
      options: [
        "كورس تخصصي أونلاين - 200-500 درهم",
        "ورشة عمل متقدمة - 300-600 درهم",
        "برنامج شهادة معتمدة - 500-1000 درهم"
      ]
    },
    {
      category: "الاستشارات المهنية",
      options: [
        "تطوير السيرة الذاتية الطبية - 300 درهم",
        "استشارة الترقية الوظيفية - 500 درهم",
        "التحضير لامتحانات الاعتماد - 800 درهم"
      ]
    },
    {
      category: "المحتوى التعليمي المتخصص",
      options: [
        "اشتراك شهري - 100 درهم",
        "اشتراك ربع سنوي - 250 درهم",
        "اشتراك سنوي - 500 درهم"
      ]
    }
  ]

  const professions = [
    "طبيب عام",
    "طبيب متخصص",
    "صيدلي",
    "ممرض/ممرضة",
    "طالب طب",
    "طالب صيدلة",
    "أخرى"
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: إضافة منطق حفظ الحجز والدفع
    console.log(booking)
    alert('تم استلام طلبك بنجاح! سيتم التواصل معك خلال 24 ساعة لتأكيد التفاصيل والدفع.')
  }

  return (
    <>
      <Head>
        <title>احجز خدمتك المهنية - CoPharma.ai</title>
        <meta name="description" content="احجز خدمتك المهنية المتخصصة - تطوير مهني، استشارات، ومحتوى تعليمي للعاملين في القطاع الطبي" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                احجز خدمتك المهنية
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8"
              >
                استثمر في تطوير مسيرتك المهنية مع خدماتنا المتخصصة
              </motion.p>
            </div>
          </div>

          <div className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit} 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">فئة الخدمة</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.service}
                      onChange={(e) => setBooking({...booking, service: e.target.value, serviceType: ''})}
                    >
                      <option value="">اختر فئة الخدمة</option>
                      {services.map((service) => (
                        <option key={service.category} value={service.category}>{service.category}</option>
                      ))}
                    </select>
                  </div>

                  {booking.service && (
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">نوع الخدمة المحدد</label>
                      <select
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                        value={booking.serviceType}
                        onChange={(e) => setBooking({...booking, serviceType: e.target.value})}
                      >
                        <option value="">اختر الخدمة المحددة</option>
                        {services.find(s => s.category === booking.service)?.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">التاريخ المفضل</label>
                    <input
                      type="date"
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.date}
                      onChange={(e) => setBooking({...booking, date: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">الوقت المفضل</label>
                    <input
                      type="time"
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.time}
                      onChange={(e) => setBooking({...booking, time: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.name}
                      onChange={(e) => setBooking({...booking, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">رقم الهاتف</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.phone}
                      onChange={(e) => setBooking({...booking, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.email}
                      onChange={(e) => setBooking({...booking, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">المهنة</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.profession}
                      onChange={(e) => setBooking({...booking, profession: e.target.value})}
                    >
                      <option value="">اختر مهنتك</option>
                      {professions.map((profession) => (
                        <option key={profession} value={profession}>{profession}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">سنوات الخبرة</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.experience}
                      onChange={(e) => setBooking({...booking, experience: e.target.value})}
                    >
                      <option value="">اختر سنوات الخبرة</option>
                      <option value="أقل من سنة">أقل من سنة</option>
                      <option value="1-3 سنوات">1-3 سنوات</option>
                      <option value="3-5 سنوات">3-5 سنوات</option>
                      <option value="5-10 سنوات">5-10 سنوات</option>
                      <option value="أكثر من 10 سنوات">أكثر من 10 سنوات</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">أهدافك من الخدمة</label>
                    <textarea
                      rows={4}
                      placeholder="اكتب أهدافك وتوقعاتك من الخدمة..."
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                      value={booking.notes}
                      onChange={(e) => setBooking({...booking, notes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">ملاحظة مهمة:</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    سيتم التواصل معك خلال 24 ساعة لتأكيد التفاصيل وترتيب عملية الدفع. 
                    جميع خدماتنا مصممة خصيصاً للمهنيين في القطاع الطبي.
                  </p>
                </div>

                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    إرسال طلب الحجز
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}