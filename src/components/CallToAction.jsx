import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">لماذا تختار LuxuryTime اليوم؟</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl mb-8">
            مع قرب نفاد الكمية، لا تفوت الفرصة للحصول على هذه التحفة الفاخرة بسعر العرض الخاص.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-red-600 font-bold text-2xl mb-4">تبقى أقل من 10 قطع فقط!</p>
            <p className="text-green-600">اطلب الآن واستمتع بالشحن المجاني!</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold"
          >
            اطلب الآن
          </motion.button>
          <p className="mt-8 text-gray-600 italic">
            LuxuryTime – لأن التفاصيل الصغيرة تصنع الفرق الكبير.
          </p>
        </motion.div>
      </div>
    </section>
  );
}