import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center">
      <div className="absolute inset-0 bg-[url('/watch-bg.jpg')] bg-cover bg-center opacity-50" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-6">LuxuryTime</h1>
          <p className="text-xl mb-8">
            هل ترغب في تحسين أناقتك وتعزيز أسلوبك الشخصي مع لمسة فاخرة تعكس ثقتك وتفردك؟
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold"
          >
            اطلب الآن
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}