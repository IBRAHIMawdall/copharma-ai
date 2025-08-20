import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    {
      title: "استشارات دوائية",
      description: "استشارات متخصصة حول الأدوية وتفاعلاتها",
      icon: "💊"
    },
    {
      title: "متابعة العلاج",
      description: "خطة متابعة شخصية ومراقبة تناول الأدوية",
      icon: "📋"
    },
    {
      title: "توصيل أدوية",
      description: "خدمة توصيل سريعة وآمنة للأدوية",
      icon: "🚚"
    },
    {
      title: "استشارات صحية",
      description: "نصائح صحية عامة ونمط حياة صحي",
      icon: "💪"
    }
  ]

  return (
    <>
      <Head>
        <title>خدماتنا - CoPharma.ai</title>
        <meta name="description" content="خدمات صيدلانية متكاملة وموثوقة" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">خدماتنا</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
