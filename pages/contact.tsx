import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, FormEvent } from 'react'
import { sanitizeFormData, isValidEmail } from '../utils/security'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      // Sanitize and validate form data
      const sanitizedData = sanitizeFormData(formData)
      
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة')
      }
      
      if (!isValidEmail(sanitizedData.email)) {
        throw new Error('يرجى إدخال بريد إلكتروني صحيح')
      }
      
      // TODO: إضافة منطق إرسال النموذج
      // console.log(sanitizedData) // Remove in production
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('تم إرسال رسالتك بنجاح!')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'حدث خطأ أثناء إرسال الرسالة')
    } finally {
      setIsSubmitting(false)
    }
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
                  {submitMessage && (
                    <div className={`p-3 rounded ${submitMessage.includes('نجاح') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
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