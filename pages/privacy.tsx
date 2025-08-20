import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية - CoPharma.ai</title>
        <meta name="description" content="سياسة الخصوصية وشروط الاستخدام في CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center"
            >
              سياسة الخصوصية
            </motion.h1>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
                <p>
                  نحن في CoPharma.ai نلتزم بحماية خصوصية مستخدمينا. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">المعلومات التي نجمعها</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>معلومات الحساب الشخصي</li>
                  <li>السجل الطبي والدوائي</li>
                  <li>معلومات التواصل</li>
                  <li>تاريخ الاستشارات</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">كيفية استخدام المعلومات</h2>
                <p>نستخدم معلوماتك لـ:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>تقديم الخدمات الطبية والصيدلانية</li>
                  <li>تحسين تجربة المستخدم</li>
                  <li>التواصل بشأن الخدمات والتحديثات</li>
                  <li>ضمان سلامة وأمن الخدمات</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
                <p>
                  نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
                <p>لديك الحق في:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>الوصول إلى معلوماتك الشخصية</li>
                  <li>تصحيح معلوماتك</li>
                  <li>حذف حسابك</li>
                  <li>طلب نسخة من بياناتك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">التواصل معنا</h2>
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
                  <br />
                  البريد الإلكتروني: copharma.ai@gmail.com
                  <br />
                  الهاتف: +971 58 500 4660
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}