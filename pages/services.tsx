import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface ServiceProps {
  title: string
  description: string
  icon: string
  price: string
  features: string[]
  phase: number
  available: boolean
}

function ServiceCard({ title, description, icon, price, features, phase, available }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
        available ? 'border-green-200 dark:border-green-700' : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {!available && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          المرحلة {phase}
        </div>
      )}
      
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-green-600">{price}</span>
        <span className="text-gray-500 mr-2">درهم</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
            <span className="text-green-500 ml-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          available 
            ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!available}
      >
        {available ? 'احجز الآن' : 'قريباً'}
      </button>
    </motion.div>
  )
}

export default function Services() {
  const services: ServiceProps[] = [
    // المرحلة الأولى - متاحة الآن
    {
      title: "التطوير المهني للصيادلة",
      description: "كورسات تخصصية أونلاين مع شهادات معتمدة وورش عمل متقدمة لتطوير مهاراتك المهنية",
      icon: "📈",
      price: "200-1000",
      features: [
        "كورسات تخصصية أونلاين",
        "شهادات معتمدة",
        "ورش عمل متقدمة",
        "متابعة شخصية",
        "مواد تعليمية حصرية"
      ],
      phase: 1,
      available: true
    },
    {
      title: "الاستشارات المهنية",
      description: "تطوير السيرة الذاتية الطبية واستشارات الترقية والتحضير لامتحانات الاعتماد",
      icon: "💼",
      price: "300-800",
      features: [
        "تطوير السيرة الذاتية الطبية",
        "استشارات الترقية الوظيفية",
        "التحضير لامتحانات الاعتماد",
        "جلسات فردية مخصصة",
        "خطة تطوير مهني شاملة"
      ],
      phase: 1,
      available: true
    },
    {
      title: "المحتوى التعليمي المتخصص",
      description: "مقالات طبية متقدمة ومحاضرات تفاعلية وورش عمل أونلاين للعاملين في القطاع الطبي",
      icon: "📚",
      price: "100-500",
      features: [
        "مقالات طبية متقدمة",
        "محاضرات تفاعلية",
        "ورش عمل أونلاين",
        "اشتراك شهري مرن",
        "محتوى محدث باستمرار"
      ],
      phase: 1,
      available: true
    },
    
    // المرحلة الثانية - قريباً
    {
      title: "المنتجات التعليمية الرقمية",
      description: "تطبيقات تفاعلية للتدريب وبرامج محاكاة طبية وكتب إلكترونية متخصصة",
      icon: "💻",
      price: "50-300",
      features: [
        "تطبيقات تفاعلية للتدريب",
        "برامج محاكاة طبية",
        "كتب إلكترونية متخصصة",
        "أدوات تعليمية متقدمة",
        "تحديثات مجانية"
      ],
      phase: 2,
      available: false
    },
    {
      title: "خدمات الراحة والرفاهية",
      description: "برامج إدارة الضغط النفسي وخدمات التغذية وبرامج اللياقة البدنية للطاقم الطبي",
      icon: "🧘‍♂️",
      price: "200-600",
      features: [
        "برامج إدارة الضغط النفسي",
        "خدمات التغذية للمناوبات",
        "برامج اللياقة المخصصة",
        "جلسات استشارية",
        "متابعة صحية شاملة"
      ],
      phase: 2,
      available: false
    },
    
    // المرحلة الثالثة - المستقبل
    {
      title: "شبكة التواصل المهني",
      description: "منصة تواصل للأطباء العرب مع فرص عمل متخصصة وشراكات مع المستشفيات",
      icon: "🌐",
      price: "100-400",
      features: [
        "منصة تواصل مهني",
        "فرص عمل متخصصة",
        "شراكات مع المستشفيات",
        "شبكة علاقات واسعة",
        "فعاليات ومؤتمرات"
      ],
      phase: 3,
      available: false
    }
  ]

  return (
    <>
      <Head>
        <title>خدماتنا المتخصصة - CoPharma.ai</title>
        <meta name="description" content="خدمات متكاملة للعاملين في القطاع الطبي - تطوير مهني، استشارات، ومحتوى تعليمي متخصص" />
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
                خدماتنا المتخصصة
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 max-w-3xl mx-auto"
              >
                منصة متكاملة للعاملين في القطاع الطبي في الإمارات والخليج
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center space-x-8 rtl:space-x-reverse"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">20K-50K</div>
                  <div className="text-blue-200">الراتب المستهدف (درهم)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-blue-200">مراحل تطوير</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-blue-200">خدمات متخصصة</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  خدمات مصممة خصيصاً للمهنيين الطبيين
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  نستهدف الأطباء والصيادلة أصحاب المرتبات العالية بخدمات تطوير مهني متقدمة
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>

          {/* ROI Section */}
          <div className="py-16 px-8 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12">
                خطة النمو والعائد المتوقع
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">الشهر 3</div>
                  <div className="text-gray-600 dark:text-gray-300">تعادل التكاليف</div>
                  <div className="text-sm text-gray-500 mt-2">100 عميل</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">الشهر 6</div>
                  <div className="text-gray-600 dark:text-gray-300">10K درهم ربح شهري</div>
                  <div className="text-sm text-gray-500 mt-2">500 عميل</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">السنة 1</div>
                  <div className="text-gray-600 dark:text-gray-300">50K+ درهم شهري</div>
                  <div className="text-sm text-gray-500 mt-2">2000 عميل</div>
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
