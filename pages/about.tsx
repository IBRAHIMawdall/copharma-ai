import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن - CoPharma.ai | منصة التطوير المهني للعاملين في القطاع الطبي</title>
        <meta name="description" content="منصة متكاملة للعاملين في القطاع الطبي في الإمارات والخليج - تطوير مهني، استشارات، ومحتوى تعليمي متخصص" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
            <div className="max-w-6xl mx-auto px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                من نحن
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 max-w-3xl mx-auto"
              >
                منصة متكاملة للعاملين في القطاع الطبي في الإمارات والخليج
              </motion.p>
            </div>
          </div>

          <div className="py-16 px-8">
            <div className="max-w-6xl mx-auto">
              {/* الرؤية والرسالة */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">رؤيتنا</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    أن نكون المنصة الرائدة في الشرق الأوسط لتقديم الخدمات المهنية المتخصصة للعاملين في القطاع الطبي، 
                    مع التركيز على الأطباء والصيادلة أصحاب المرتبات العالية (20,000-50,000 درهم شهرياً).
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">رسالتنا</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    تمكين المهنيين الطبيين من تطوير مسيرتهم المهنية من خلال خدمات تعليمية واستشارية متقدمة، 
                    مع ضمان الجودة والأمان القانوني في جميع خدماتنا.
                  </p>
                </motion.div>
              </div>

              {/* الجمهور المستهدف */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                  من نخدم؟
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl mb-4">👨‍⚕️</div>
                    <h3 className="text-xl font-bold mb-2">الأطباء</h3>
                    <p className="text-blue-100 mb-2">25,000-50,000 درهم</p>
                    <p className="text-sm">تطوير مهني متقدم</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl mb-4">💊</div>
                    <h3 className="text-xl font-bold mb-2">الصيادلة</h3>
                    <p className="text-green-100 mb-2">15,000-30,000 درهم</p>
                    <p className="text-sm">كورسات تخصصية</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl mb-4">👩‍⚕️</div>
                    <h3 className="text-xl font-bold mb-2">الممرضين</h3>
                    <p className="text-purple-100 mb-2">10,000-20,000 درهم</p>
                    <p className="text-sm">برامج متخصصة</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl mb-4">🎓</div>
                    <h3 className="text-xl font-bold mb-2">الطلاب</h3>
                    <p className="text-orange-100 mb-2">استثمار مستقبلي</p>
                    <p className="text-sm">تأهيل مبكر</p>
                  </motion.div>
                </div>
              </div>

              {/* فريق العمل */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                  فريق العمل المتخصص
                </h2>
                <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                  فريق متنوع من الخبراء والمتخصصين في القطاع الطبي والتعليمي 
                  بخبرة تزيد عن 60 عاماً مجتمعة في خدمة المهنيين الطبيين
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">💊</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">خبير الصيدلة الإكلينيكية</h3>
                      <p className="text-blue-600 dark:text-blue-400">متخصص في التطوير المهني</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• 15+ سنة خبرة في التطوير المهني</p>
                      <p className="mb-2">• خبير في تصميم البرامج التدريبية</p>
                      <p>• مدرب معتمد في الصيدلة الإكلينيكية</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">🌿</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">استشاري التطوير المهني</h3>
                      <p className="text-green-600 dark:text-green-400">خبير في الاستشارات المهنية</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• خبير في الاستشارات المهنية</p>
                      <p className="mb-2">• متخصص في تطوير المسار الوظيفي</p>
                      <p>• مدرب معتمد في القيادة الطبية</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">⚗️</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">مدير المحتوى التعليمي</h3>
                      <p className="text-purple-600 dark:text-purple-400">خبير في التعليم الطبي</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• خبير في تطوير المحتوى التعليمي</p>
                      <p className="mb-2">• متخصص في التعلم الإلكتروني</p>
                      <p>• مؤلف عدة كتب طبية متخصصة</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">👩‍💼</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">مديرة العمليات</h3>
                      <p className="text-red-600 dark:text-red-400">خبيرة في إدارة المشاريع</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• خبيرة في إدارة المشاريع الطبية</p>
                      <p className="mb-2">• متخصصة في ضمان الجودة</p>
                      <p>• مدربة في إدارة الأعمال الصحية</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">💻</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">مدير التقنيات</h3>
                      <p className="text-indigo-600 dark:text-indigo-400">خبير في التقنيات الطبية</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• خبير في التقنيات الطبية الحديثة</p>
                      <p className="mb-2">• مطور منصات التعلم الإلكتروني</p>
                      <p>• متخصص في الذكاء الاصطناعي الطبي</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">🌱</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">مستشارة التطوير</h3>
                      <p className="text-yellow-600 dark:text-yellow-400">خبيرة في استراتيجيات التطوير</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="mb-2">• خبيرة في استراتيجيات التطوير</p>
                      <p className="mb-2">• متخصصة في التدريب المتقدم</p>
                      <p>• مستشارة في التخطيط المهني</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* القيم والمبادئ */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-xl text-white text-center">
                <h3 className="text-3xl font-bold mb-8">قيمنا ومبادئنا</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-xl font-semibold mb-2">الأمان القانوني</h4>
                    <p className="text-blue-100">لا نقدم استشارات طبية مباشرة</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h4 className="text-xl font-semibold mb-2">التطوير المرحلي</h4>
                    <p className="text-blue-100">نبدأ صغير ونكبر تدريجياً</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐</div>
                    <h4 className="text-xl font-semibold mb-2">الجودة أولاً</h4>
                    <p className="text-blue-100">كل مرحلة تكتمل 100% قبل التالية</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-xl font-semibold mb-2">التركيز على الربحية</h4>
                    <p className="text-blue-100">كل خدمة لها نموذج ربح واضح</p>
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