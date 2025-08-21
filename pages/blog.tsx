import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: "كيف تحافظ على صحتك في رمضان",
      excerpt: "نصائح صحية مهمة للصيام الصحي وتنظيم تناول الأدوية",
      date: "2024-03-15",
      author: "د. إبراهيم"
    },
    {
      title: "دليلك الشامل للفيتامينات",
      excerpt: "تعرف على أهم الفيتامينات وفوائدها للجسم",
      date: "2024-03-10",
      author: "د. سارة"
    },
    {
      title: "الأدوية وممارسة الرياضة",
      excerpt: "ما تحتاج معرفته عن تناول الأدوية قبل وبعد التمرين",
      date: "2024-03-05",
      author: "د. أحمد"
    }
  ]

  return (
    <>
      <Head>
        <title>المدونة - CoPharma.ai</title>
        <meta name="description" content="مقالات ونصائح صحية من خبراء CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">المدونة</h1>
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-blue-600">
                      <Link href={`/blog/${post.title}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">بقلم: {post.author}</span>
                    <Link href={`/blog/${post.title}`} className="text-blue-600 hover:underline">
                      اقرأ المزيد
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}