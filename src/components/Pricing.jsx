import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">السعر</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-500 line-through text-2xl">500 ريال سعودي</p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl font-bold text-gold my-4"
          >
            250 ريال فقط!
          </motion.div>
          <p className="text-green-600 mb-8">وفر 50% لفترة محدودة!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold"
          >
            اطلب الآن
          </motion.button>
          <p className="mt-4 text-red-600">متبقي 7 قطع فقط من أصل 50!</p>
        </div>
      </div>
    </section>
  );
}