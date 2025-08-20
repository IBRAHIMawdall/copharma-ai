import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "كيف يمكنني حجز استشارة صيدلانية؟",
    answer: "يمكنك حجز استشارة من خلال الضغط على زر 'احجز استشارة' في الصفحة الرئيسية أو من خلال صفحة الحجز."
  },
  {
    question: "ما هي مواعيد العمل؟",
    answer: "نقدم خدماتنا على مدار الساعة، طوال أيام الأسبوع، مع توفر صيدلي متخصص للرد على استفساراتكم."
  },
  {
    question: "هل تقدمون خدمة توصيل الأدوية؟",
    answer: "نعم، نوفر خدمة توصيل سريعة وآمنة للأدوية في جميع أنحاء أبوظبي."
  },
  {
    question: "كيف يمكنني الحصول على استشارة طارئة؟",
    answer: "للحالات الطارئة، يمكنك التواصل معنا مباشرة على الرقم المخصص للطوارئ أو من خلال خدمة الدردشة الفورية."
  },
  {
    question: "هل تقدمون خدمات المتابعة الدورية؟",
    answer: "نعم، نقدم خدمة متابعة دورية لخطتك العلاجية مع تذكير بمواعيد الدواء من خلال تطبيقنا."
  }
]

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <motion.div 
      className="border-b border-gray-200 dark:border-gray-700"
      initial={false}
    >
      <button
        className="w-full py-4 flex justify-between items-center text-right"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 dark:text-blue-400"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <Head>
        <title>الأسئلة الشائعة - CoPharma.ai</title>
        <meta name="description" content="الأسئلة الشائعة حول خدمات CoPharma.ai" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="max-w-3xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center"
            >
              الأسئلة الشائعة
            </motion.h1>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}