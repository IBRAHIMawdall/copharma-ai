import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>من أنا - CoPharma.ai</title>
        <meta name="description" content="تعرف على مؤسس CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">من أنا</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">إبراهيم عوض الله</h2>
                <p className="text-lg text-gray-600">صيدلي إكلينيكي</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">الخبرة المهنية</h3>
                  <p className="text-gray-600">
                    صيدلي في مستشفى برجيل - أبوظبي
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">المؤهلات العلمية</h3>
                  <p className="text-gray-600">
                    بكالوريوس الصيدلة - كلية الصيدلة، جامعة الإسكندرية، مصر (2016)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">الرؤية</h3>
                  <p className="text-gray-600">
                    تقديم خدمات صيدلانية ذكية وموثوقة تجمع بين الخبرة المهنية والتكنولوجيا الحديثة
                  </p>
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