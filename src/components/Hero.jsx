import { motion } from "framer-motion";
import Cta from "./Cta";
import logo from "../../public/2-2.png";
export default function Hero() {
  return (
    <div className="relative  min-h-screen bg-gradient-to-r from-green-950 to-green-900 text-white flex items-center">
      <div className="absolute inset-0 bg-[url('/watch-bg.jpg')] bg-cover bg-center opacity-50" />
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gold">Luxury</span>Time
          </h1>
          <p className="text-xl mb-8">
            هل ترغب في تحسين أناقتك وتعزيز أسلوبك الشخصي مع لمسة فاخرة تعكس ثقتك
            وتفردك؟
          </p>
          <Cta />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <img src={logo} />
        </motion.div>
      </div>
    </div>
  );
}
