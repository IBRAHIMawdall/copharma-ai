import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { sanitizeInput } from '../utils/security'

export default function Comments({ articleId }: { articleId: string | string[] }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "أحمد محمد",
      text: "مقال مفيد جداً، شكراً على المعلومات القيمة",
      date: "2024-03-15",
      likes: 5
    }
  ])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    // Sanitize comment text to prevent XSS
    const sanitizedComment = sanitizeInput(comment)
    
    const newComment = {
      id: comments.length + 1,
      user: "زائر",
      text: sanitizedComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }

    setComments([newComment, ...comments])
    setComment('')
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">التعليقات</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="أضف تعليقك..."
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          إرسال التعليق
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((commentItem) => (
          <motion.div
            key={commentItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  {commentItem.user?.[0] || '?'}
                </div>
                <div className="mr-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{commentItem.user}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{commentItem.date}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const updatedComments = comments.map(c => 
                    c.id === commentItem.id ? { ...c, likes: c.likes + 1 } : c
                  )
                  setComments(updatedComments)
                }}
                className="flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400"
              >
                <span className="mr-1">{commentItem.likes}</span>
                ❤️
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {commentItem.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}