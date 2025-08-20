import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactInfo() {
  const contactInfo = {
    address: "مستشفى برجيل - أبوظبي، الإمارات العربية المتحدة",
    mobile: "+971 58 500 4660",
    email: "copharma.ai@gmail.com",
    workingHours: {
      weekdays: "9:00 صباحاً - 10:00 مساءً",
      weekends: "10:00 صباحاً - 8:00 مساءً"
    },
    socialMedia: {
      facebook: "facebook.com/copharma.ai",
      twitter: "twitter.com/copharma_ai",
      instagram: "instagram.com/copharma.ai"
    }
  }

  return (
    <>
      <Head>
        <title>بيانات الاتصال - CoPharma.ai</title>
        <meta name="description" content="تواصل معنا في CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">بيانات الاتصال</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* معلومات الاتصال */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">معلومات الاتصال</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="font-semibold">العنوان</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h3 className="font-semibold">أرقام الهاتف</h3>
                      <p className="text-gray-600">هاتف: {contactInfo.phone}</p>
                      <p className="text-gray-600">موبايل: {contactInfo.mobile}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="font-semibold">البريد الإلكتروني</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <h3 className="font-semibold">ساعات العمل</h3>
                      <p className="text-gray-600">أيام الأسبوع: {contactInfo.workingHours.weekdays}</p>
                      <p className="text-gray-600">عطلة نهاية الأسبوع: {contactInfo.workingHours.weekends}</p>
                    </div>
                  </div>
                </div>

                {/* وسائل التواصل الاجتماعي */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">تابعنا على</h3>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a href={`https://${contactInfo.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </a>
                    <a href={`https://${contactInfo.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800">
                      Twitter
                    </a>
                    <a href={`https://${contactInfo.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* خريطة الموقع */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">موقعنا</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  {/* يمكن إضافة خريطة تفاعلية هنا */}
                  <div className="bg-gray-200 w-full h-[300px] flex items-center justify-center">
                    <p className="text-gray-600">خريطة الموقع</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}