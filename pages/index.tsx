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
            className="relative h-[600px] bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative max-w-4xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
              <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {t('home.title')}
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8"
              >
                {t('home.subtitle')}
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 hover:scale-105 transform transition duration-300">
                  احجز استشارة
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
          <div className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center">خدماتنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard 
                  title={t('home.services.consultation.title')}
                  description={t('home.services.consultation.description')}
                />
                <ServiceCard 
                  title={t('home.services.monitoring.title')}
                  description={t('home.services.monitoring.description')}
                />
                <ServiceCard 
                  title={t('home.services.delivery.title')}
                  description={t('home.services.delivery.description')}
                />
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


