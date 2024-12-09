import { motion } from "framer-motion";
import Cta from "./Cta";
export default function Pricing() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-4">السعر</h2>
          <p className="text-gray-500 line-through text-xl">500 ريال سعودي</p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl font-bold text-gold my-4"
          >
            250 ريال فقط!
          </motion.div>
          <p className="text-black mb-8">وفر 50% لفترة محدودة!</p>
          <Cta />
          <p className="mt-4 text-gold">متبقي 7 قطع فقط من أصل 50!</p>
        </div>
      </div>
    </section>
  );
}
