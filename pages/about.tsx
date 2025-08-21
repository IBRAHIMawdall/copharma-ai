import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن - CoPharma.ai</title>
        <meta name="description" content="تعرف على فريق CoPharma.ai من الصيادلة المتخصصين" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">من نحن</h1>
            
            <div className="space-y-8">
              {/* مقدمة عن الفريق */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">فريق CoPharma.ai</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  نحن فريق من الصيادلة المتخصصين والخبراء في مجال الرعاية الصيدلانية، نجمع بين الخبرة العالمية والتكنولوجيا المتقدمة لتقديم أفضل الخدمات الصحية في دولة الإمارات العربية المتحدة.
                </p>
              </div>

              {/* تخصصات الفريق */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">💊</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">صيدلي إكلينيكي أول</h3>
                    <p className="text-blue-600 dark:text-blue-400">تخصص مصري</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبرة واسعة في الصيدلة الإكلينيكية</p>
                    <p className="mb-2">• متخصص في أدوية القلب والسكري</p>
                    <p>• استشارات طبية متقدمة</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">🌿</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">صيدلانية متخصصة</h3>
                    <p className="text-green-600 dark:text-green-400">تخصص أردني</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبيرة في صيدليات المجتمع</p>
                    <p className="mb-2">• متخصصة في التغذية العلاجية</p>
                    <p>• استشارات المكملات الغذائية</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">⚗️</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">استشاري الأدوية</h3>
                    <p className="text-purple-600 dark:text-purple-400">تخصص لبناني</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبرة دولية في الاستشارات</p>
                    <p className="mb-2">• متخصص في تفاعلات الأدوية</p>
                    <p>• مراجعة العلاجات المعقدة</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">👶</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">صيدلانية إكلينيكية</h3>
                    <p className="text-red-600 dark:text-red-400">تخصص سوداني</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبيرة في طب الأطفال</p>
                    <p className="mb-2">• متخصصة في أدوية الأطفال</p>
                    <p>• استشارات الحوامل والرضاعة</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">💻</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">صيدلي تقني</h3>
                    <p className="text-indigo-600 dark:text-indigo-400">تخصص تونسي</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبير في التقنيات الصيدلانية</p>
                    <p className="mb-2">• مطور الأنظمة الذكية</p>
                    <p>• متخصص في الصيدلة الرقمية</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">🌱</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">صيدلانية استشارية</h3>
                    <p className="text-yellow-600 dark:text-yellow-400">تخصص مغربي</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">• خبيرة في الطب التكميلي</p>
                    <p className="mb-2">• متخصصة في الأعشاب الطبية</p>
                    <p>• استشارات العلاج الطبيعي</p>
                  </div>
                </div>
              </div>

              {/* رؤية الفريق */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center">
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-lg leading-relaxed">
                  نسعى لتكون CoPharma.ai المنصة الرائدة في الشرق الأوسط لتقديم الخدمات الصيدلانية الذكية، حيث نجمع بين الخبرة العربية العريقة والتكنولوجيا المتطورة لضمان رعاية صحية شاملة وموثوقة لجميع المرضى.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}