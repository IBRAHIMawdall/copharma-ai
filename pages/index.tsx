import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useApp } from '../context/AppContext'

interface ServiceCardProps {
  title: string;
  description: string;
}
function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800"
    >
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default function Home() {
  const { t, lang, theme } = useApp()

  return (
    <>
      <Head>
        <title>CoPharma.ai - {t('home.subtitle')}</title>
        <meta name="description" content={t('home.subtitle')} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 dark:from-blue-700 dark:via-blue-800 dark:to-purple-900"
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center text-white">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl">💊</span>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  CoPharma.ai
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-3xl mb-8 max-w-4xl leading-relaxed font-light"
              >
                منصة صيدلانية ذكية لرعاية صحية شاملة ومتطورة
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl mb-12 max-w-3xl text-blue-100"
              >
                استشارات دوائية متخصصة • متابعة علاجية دقيقة • توصيل آمن للأدوية
              </motion.p>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/booking" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 hover:scale-105 transform transition duration-300 shadow-lg">
                  احجز استشارة مجانية
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform transition duration-300">
                  تعرف على خدماتنا
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 flex items-center justify-center space-x-8 rtl:space-x-reverse"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm text-blue-200">مريض راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">دعم متواصل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">صيدلي متخصص</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="py-20 px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
            <div className="relative max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  خدماتنا المتميزة
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  نقدم مجموعة شاملة من الخدمات الصيدلانية المتطورة لضمان أفضل رعاية صحية لك
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <ServiceCard 
                    title="استشارات دوائية متخصصة"
                    description="احصل على استشارات دوائية من صيادلة متخصصين لضمان الاستخدام الآمن والفعال للأدوية"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ServiceCard 
                    title="متابعة العلاج الشخصية"
                    description="خطة متابعة مخصصة لحالتك الصحية مع تذكيرات ذكية ومراقبة مستمرة لتقدم العلاج"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <ServiceCard 
                    title="توصيل الأدوية السريع"
                    description="خدمة توصيل آمنة وسريعة للأدوية إلى منزلك مع ضمان جودة التخزين والنقل"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 px-8 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center">لماذا CoPharma.ai؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  icon="🔒"
                  title="موثوق وآمن"
                  description="خدمات صيدلانية معتمدة ومرخصة من الجهات المختصة"
                />
                <FeatureCard
                  icon="⚡"
                  title="سريع وفعال"
                  description="استشارات فورية وخدمة توصيل سريعة للأدوية"
                />
                <FeatureCard
                  icon="👨‍⚕️"
                  title="خبرة متخصصة"
                  description="فريق من الصيادلة المتخصصين ذوي الخبرة"
                />
                <FeatureCard
                  icon="💊"
                  title="متابعة مستمرة"
                  description="متابعة دورية لخطتك العلاجية وتذكير بمواعيد الدواء"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}


