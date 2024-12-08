import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const specifications = [
  {
    title: "زجاج Sapphire مقاوم للخدش",
    description: "يوفر وضوحًا ممتازًا ومتانة عالية",
    icon: SparklesIcon
  },
  {
    title: "حزام فاخر",
    description: "خيار بين الحزام الجلدي أو المعدني حسب ذوقك",
    icon: ShieldCheckIcon
  },
  {
    title: "مقاومة للماء",
    description: "تتحمل حتى عمق 50 مترًا لتناسب أنشطتك اليومية والرياضية",
    icon: BeakerIcon
  },
  {
    title: "ضمان لمدة عامين",
    description: "شامل لتأكيد الجودة والأداء",
    icon: ClockIcon
  }
];

export default function Specifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">المواصفات الأساسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-gold p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gold/10 mx-auto">
                <spec.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold text-center">{spec.title}</h3>
              <p className="text-gray-300 text-center">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}