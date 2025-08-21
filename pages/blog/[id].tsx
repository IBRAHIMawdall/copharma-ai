import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

interface Article {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const articleContent: { [key: string]: Article } = {
  1: {
    title: "دور المكملات الغذائية في تعزيز المناعة",
    content: `
      يلعب جهاز المناعة دوراً حيوياً في حماية الجسم من الأمراض والعدوى. في هذا المقال، سنتعرف على أهم المكملات الغذائية التي تساعد في تقوية جهاز المناعة.

      فيتامين D:
      - يعزز وظائف خلايا المناعة
      - يقلل من خطر الإصابة بالعدوى
      - المصادر: أشعة الشمس، الأسماك الدهنية، البيض

      فيتامين C:
      - مضاد أكسدة قوي
      - يدعم إنتاج خلايا المناعة البيضاء
      - المصادر: الحمضيات، الفلفل الأخضر، الكيوي

      الزنك:
      - ضروري لتطور وعمل خلايا المناعة
      - يساعد في الاستجابة المناعية
      - المصادر: اللحوم، المأكولات البحرية، المكسرات

      نصائح مهمة:
      1. استشر الطبيب قبل بدء أي مكملات غذائية
      2. اتبع الجرعات الموصى بها
      3. لا تعتمد فقط على المكملات - اتبع نظاماً غذائياً متوازناً
    `,
    image: "/images/blog/immunity.jpg",
    author: "د. إبراهيم عوض الله",
    date: "2024-03-15",
    readTime: "7 دقائق",
    category: "تغذية صحية"
  },
  // ... المزيد من المقالات
}

export default function ArticlePage() {
  const router = useRouter()
  const { id } = router.query
  const articleId = Array.isArray(id) ? id[0] : id;
  const article = articleId ? articleContent[articleId] : undefined;

  if (!article) return <div>جاري التحميل...</div>

  return (
    <>
      <Head>
        <title>{article.title} - CoPharma.ai</title>
        <meta name="description" content={article.title} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="max-w-4xl mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-[400px]">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full bg-gray-200"
                  style={{
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} للقراءة</span>
                  </div>
                </div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
                >
                  {article.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content.replace(/\\n/g, '<br/>') }}
                />

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{article.author}</span>
                      <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {article.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>صيدلي إكلينيكي</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}