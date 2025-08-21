import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "دور المكملات الغذائية في تعزيز المناعة",
      excerpt: "دليل شامل لأهم الفيتامينات والمعادن التي تعزز مناعة الجسم وتحميه من الأمراض",
      date: "2024-03-15",
      author: "صيدلي إكلينيكي",
      category: "تغذية صحية",
      readTime: "12 دقيقة",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "دليلك الشامل للفيتامينات الأساسية",
      excerpt: "تعرف على أهم الفيتامينات الذائبة في الماء والدهون، وعلامات نقصها وطرق الحصول عليها",
      date: "2024-03-10",
      author: "صيدلانية متخصصة",
      category: "تغذية علاجية",
      readTime: "15 دقيقة",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "الأدوية وممارسة الرياضة: دليل شامل",
      excerpt: "دليل مفصل عن الأدوية التي يجب تجنبها أو تعديلها عند ممارسة الرياضة",
      date: "2024-03-05",
      author: "استشاري الأدوية",
      category: "طب رياضي",
      readTime: "18 دقيقة",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                        <span>🕰️ {post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">👨‍⚕️</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        اقرأ المزيد →
                      </Link>
                    </div>
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