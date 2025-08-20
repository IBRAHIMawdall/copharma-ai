import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: إضافة منطق إرسال النموذج
    console.log(formData)
    alert('تم إرسال رسالتك بنجاح!')
  }

  return (
    <>
      <Head>
        <title>اتصل بنا - CoPharma.ai</title>
        <meta name="description" content="تواصل مع فريق CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">اتصل بنا</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">معلومات التواصل</h2>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="ml-2">📍</span>
                    أبوظبي، الإمارات العربية المتحدة
                  </p>
                  <p className="flex items-center">
                    <span className="ml-2">📱</span>
                    +971 XX XXX XXXX
                  </p>
                  <p className="flex items-center">
                    <span className="ml-2">📧</span>
                    info@copharma.ai
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">الاسم</label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">الرسالة</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}