import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  WrenchIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "تصميم أنيق وفريد",
    description: "تم تصميمها لتلائم جميع الأذواق، مما يجعلها قطعة مميزة في خزانة أي رجل أو امرأة.",
    icon: SparklesIcon
  },
  {
    title: "مواد عالية الجودة",
    description: "مصنوعة من فولاذ مقاوم للصدأ مع زجاج Sapphire عالي التحمل.",
    icon: ShieldCheckIcon
  },
  {
    title: "دقة لا تُضاهى",
    description: "حركة سويسرية فائقة الدقة لضمان ضبط الوقت بشكل مثالي.",
    icon: ClockIcon
  },
  {
    title: "مقاومة للماء",
    description: "تتحمل حتى 50 مترًا من العمق، مما يجعلها مناسبة لجميع الظروف اليومية.",
    icon: WrenchIcon
  },
  {
    title: "راحة استثنائية",
    description: "توفر حزامًا جلديًا ناعمًا أو معدنيًا متينًا لتجربة ارتداء لا تُنسى.",
    icon: HeartIcon
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">لماذا ساعة LuxuryTime؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gold/10 mx-auto">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}