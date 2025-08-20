import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

const articles = [
  {
    id: 1,
    title: "دور المكملات الغذائية في تعزيز المناعة",
    excerpt: "دراسة شاملة عن فيتامين D وفيتامين C والزنك ودورها في تقوية جهاز المناعة",
    image: "/images/blog/immunity.jpg",
    date: "2024-03-15",
    readTime: "7 دقائق",
    category: "تغذية صحية"
  },
  {
    id: 2,
    title: "الاستخدام الآمن لمضادات الالتهاب",
    excerpt: "دليل مفصل حول الاستخدام الصحيح لمضادات الالتهاب غير الستيرويدية (NSAIDs)",
    image: "/images/blog/nsaids.jpg",
    date: "2024-03-12",
    readTime: "5 دقائق",
    category: "أدوية"
  },
  {
    id: 3,
    title: "ضغط الدم: القاتل الصامت",
    excerpt: "كل ما تحتاج معرفته عن ارتفاع ضغط الدم وطرق الوقاية والعلاج",
    image: "/images/blog/blood-pressure.jpg",
    date: "2024-03-10",
    readTime: "8 دقائق",
    category: "صحة القلب"
  },
  {
    id: 4,
    title: "السكري والصيام: إرشادات مهمة",
    excerpt: "نصائح طبية لمرضى السكري حول الصيام الآمن وتنظيم الأدوية",
    image: "/images/blog/diabetes.jpg",
    date: "2024-03-08",
    readTime: "6 دقائق",
    category: "السكري"
  },
  {
    id: 5,
    title: "الأدوية والحمل: ما يجب تجنبه",
    excerpt: "قائمة شاملة بالأدوية الآمنة والممنوعة خلال فترة الحمل",
    image: "/images/blog/pregnancy.jpg",
    date: "2024-03-05",
    readTime: "10 دقائق",
    category: "صحة المرأة"
  }
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>المدونة - CoPharma.ai</title>
        <meta name="description" content="مقالات ونصائح صحية من خبراء CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center"
            >
              المدونة الطبية
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-full h-full bg-gray-200 dark:bg-gray-700"
                        style={{
                          backgroundImage: `url(${article.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {article.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {article.readTime} للقراءة
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 hover:underline">
                          اقرأ المزيد →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}