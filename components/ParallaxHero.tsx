import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div
      ref={ref}
      className="relative h-[600px] overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>
      <motion.div
        style={{ y: textY }}
        className="relative h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}