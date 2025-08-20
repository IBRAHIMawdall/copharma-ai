import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: إضافة منطق إرسال النموذج
    console.log(formData)
    alert('تم إرسال رسالتك بنجاح!')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
                      name="name"
                      type="text"
                      required
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">الرسالة</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.message}
                      onChange={handleChange}
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