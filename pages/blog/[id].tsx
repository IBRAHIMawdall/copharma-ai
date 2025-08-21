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
    content: `يعتبر جهاز المناعة خط الدفاع الأول للجسم ضد الأمراض والعدوى. في عصرنا الحالي، أصبح تعزيز المناعة أمراً ضرورياً للحفاظ على صحة جيدة.

🔆 فيتامين D - فيتامين الشمس:
• يعزز وظائف خلايا المناعة التائية والمكتسبة
• يقلل من خطر الإصابة بالتهابات الجهاز التنفسي
• المصادر: أشعة الشمس (15-20 دقيقة يومياً)، السلمون، التونة، صفار البيض
• الجرعة الموصى بها: 1000-4000 وحدة دولية يومياً

🍊 فيتامين C - مضاد الأكسدة القوي:
• يحفز إنتاج وعمل خلايا المناعة البيضاء
• يقوي حاجز الجلد ضد مسببات الأمراض
• المصادر: الحمضيات (برتقال، ليمون)، الفراولة، الفلفل الأحمر، البروكلي
• الجرعة الموصى بها: 65-90 ملغ يومياً

⚙️ الزنك - معدن المناعة:
• ضروري لتطوير وعمل خلايا المناعة التائية
• يساعد في شفاء الجروح ومقاومة العدوى
• المصادر: اللحوم الحمراء، المحار، بذور اليقطين، اللوز
• الجرعة الموصى بها: 8-11 ملغ يومياً

🌿 مكملات أخرى مهمة:
• فيتامين E: مضاد أكسدة يحمي أغشية الخلايا
• السيلينيوم: يدعم إنتاج الأجسام المضادة
• البروبيوتيك: يعزز مناعة الجهاز الهضمي

⚠️ نصائح مهمة قبل الاستخدام:
1. استشر طبيبك أو صيدليك قبل بدء أي مكمل غذائي
2. اتبع الجرعات الموصى بها ولا تتجاوزها
3. اعتمد على نظام غذائي متوازن كأساس
4. انتبه للتفاعلات مع الأدوية الأخرى
5. اختر منتجات معتمدة وموثوقة

الخلاصة:
المكملات الغذائية يمكن أن تكون مفيدة لتعزيز المناعة، لكنها ليست بديلاً عن نمط حياة صحي. التوازن هو المفتاح!`,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "صيدلي إكلينيكي",
    date: "2024-03-15",
    readTime: "12 دقيقة",
    category: "تغذية صحية"
  },
  2: {
    title: "دليلك الشامل للفيتامينات الأساسية",
    content: `الفيتامينات هي مركبات عضوية ضرورية للحياة، يحتاجها الجسم بكميات قليلة لكنها حيوية للعمليات الحيوية المختلفة.

🍎 الفيتامينات الذائبة في الماء:

فيتامين B1 (الثيامين):
• ضروري لاستقلاب الطاقة من الكربوهيدرات
• يدعم وظائف الجهاز العصبي
• المصادر: الحبوب الكاملة، اللحوم، البقوليات

فيتامين B12:
• ضروري لتكوين خلايا الدم الحمراء
• يحافظ على صحة الجهاز العصبي
• المصادر: اللحوم، الأسماك، منتجات الألبان

🧈 الفيتامينات الذائبة في الدهون:

فيتامين A:
• ضروري لصحة العيون والرؤية
• يدعم نمو الخلايا وتجديدها
• المصادر: الجزر، البطاطا الحلوة، السبانخ

فيتامين K:
• ضروري لتخثر الدم وشفاء الجروح
• يدعم صحة العظام
• المصادر: الخضروات الورقية، البروكلي، الكرنب

⚠️ علامات نقص الفيتامينات:
• التعب والإرهاق المستمر
• ضعف المناعة وكثرة العدوى
• مشاكل في الجلد والشعر
• بطء شفاء الجروح
• مشاكل في الذاكرة والتركيز

🍽️ نصائح للحصول على الفيتامينات:
1. تناول نظاماً غذائياً متنوعاً ومتوازناً
2. اعتمد على المصادر الطبيعية قبل المكملات
3. استشر متخصصاً قبل تناول مكملات عالية الجرعة
4. انتبه للتفاعلات مع الأدوية
5. اخزن المكملات في مكان بارد وجاف`,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "صيدلانية متخصصة",
    date: "2024-03-10",
    readTime: "15 دقيقة",
    category: "تغذية علاجية"
  },
  3: {
    title: "الأدوية وممارسة الرياضة: دليل شامل",
    content: `ممارسة الرياضة أثناء تناول الأدوية تتطلب عناية خاصة وفهماً عميقاً للتفاعلات المحتملة.

🏃‍♂️ أدوية يجب تجنبها قبل التمرين:

مضادات الالتهاب غير الستيرويدية:
• يمكن أن تقلل من الاستجابة الالتهابية الطبيعية
• قد تؤثر على عملية التعافي وبناء العضلات
• البدائل: الإيبوبروفين، الأسبرين

مدرات البول:
• يمكن أن تسبب الجفاف أثناء التمرين
• قد تقلل من الأداء الرياضي
• البدائل: الفوروسيمايد، الهيدروكلوروثيازيد

💪 أدوية يمكن تناولها مع التمرين:

مكملات البروتين:
• تدعم بناء وإصلاح العضلات
• التوقيت المثالي: 30-60 دقيقة بعد التمرين

الكرياتين:
• يحسن من الأداء في التمارين عالية الشدة
• الجرعة: 3-5 غرام يومياً

⚖️ أدوية تتطلب حذراً خاصاً:

أدوية القلب:
• حاصرات بيتا: قد تقلل معدل ضربات القلب
• مدرات البول: خطر الجفاف
• استشر طبيبك قبل بدء برنامج رياضي

أدوية السكري:
• الإنسولين: قد يحتاج تعديل الجرعة
• راقب مستوى السكر قبل وبعد التمرين

📅 جدول زمني مقترح:

قبل التمرين (2-3 ساعات):
• تجنب الأدوية المهدئة
• تناول وجبة خفيفة متوازنة

أثناء التمرين:
• اشرب الماء بانتظام
• تجنب تناول أي أدوية جديدة

بعد التمرين (30-60 دقيقة):
• وقت مثالي لمكملات البروتين
• يمكن تناول مضادات الالتهاب إذا لزم الأمر

⚠️ علامات تستدعي التوقف:
• دوخة أو غثيان شديد
• ألم في الصدر أو ضيق تنفس
• اضطراب في ضربات القلب
• ضعف أو دوار غير طبيعي

الخلاصة:
التوازن بين الأدوية والرياضة يتطلب فهماً عميقاً ومتابعة مستمرة. استشر دائماً متخصصين مؤهلين!`,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "استشاري الأدوية",
    date: "2024-03-05",
    readTime: "18 دقيقة",
    category: "طب رياضي"
  }
}

export default function ArticlePage() {
  const router = useRouter()
  const { id } = router.query
  const articleId = Array.isArray(id) ? id[0] : id;
  const article = articleId ? articleContent[articleId] : undefined;

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">المقال غير موجود</h1>
          <p className="text-gray-600 dark:text-gray-400">عذراً، لم نتمكن من العثور على المقال المطلوب.</p>
        </div>
      </div>
    )
  }

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
              <div className="relative h-[400px] overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
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
                  className="prose dark:prose-invert max-w-none whitespace-pre-line"
                >
                  {article.content}
                </motion.div>

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