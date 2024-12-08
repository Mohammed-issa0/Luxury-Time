import { motion } from "framer-motion";
export default function Cta() {
  return (
    <motion.button
      initial={{ scale: 0.95 }}
      animate={{ scale: 1.1 }}
      whileHover={{
        scale: 1.1,
        background: "rgb(205 157 0)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className="bg-gold text-black px-6 py-2 rounded-lg text-2xl font-bold"
    >
      اطلب الآن
    </motion.button>
  );
}
