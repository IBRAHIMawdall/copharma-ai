import { motion } from 'framer-motion'

export function AnimatedFeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.2 }}
        className="text-4xl mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}