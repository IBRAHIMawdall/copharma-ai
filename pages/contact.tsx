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

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_CONTACT', { // <-- استبدل هذا بمعرف النموذج الخاص بك
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ // Reset form
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('حدث خطأ أثناء إرسال رسالتك. الرجاء المحاولة مرة أخرى.');
      }
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

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
                    disabled={submitting}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
                  >
                    {submitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </div>
                {submitSuccess && (
                  <div className="mt-4 p-3 text-center text-green-800 bg-green-100 border border-green-300 rounded-lg">
                    تم استلام رسالتك بنجاح! سنتواصل معك قريبًا.
                  </div>
                )}
                {submitError && (
                  <div className="mt-4 p-3 text-center text-red-800 bg-red-100 border border-red-300 rounded-lg">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}