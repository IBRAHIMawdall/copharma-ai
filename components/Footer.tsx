import Link from 'next/link'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const app = useApp()
  
  if (!app) {
    return null; // Or a loading spinner, or a fallback UI
  }

  const { t } = app;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white tracking-wide">CoPharma.ai</h3>
            <p className="leading-relaxed tracking-wide">
              رعاية دوائية ذكية، إنسانية، ومضمونة
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white tracking-wide">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition duration-300">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition duration-300">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition duration-300">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white tracking-wide">تواصل معنا</h3>
            <ul className="space-y-3 leading-relaxed tracking-wide">
              <li>أبوظبي، الإمارات العربية المتحدة</li>
              <li dir="ltr">+971 4 123 4567</li>
              <li dir="ltr">info@copharma.ai</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="tracking-wide">
            © {new Date().getFullYear()} CoPharma.ai - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}
