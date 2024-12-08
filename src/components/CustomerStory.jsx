import { motion } from "framer-motion";

export default function CustomerStory() {
  return (
    <section className="py-20 bg-gradient-to-l from-green-950 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">قصة نجاح</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  alt="محمد"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  محمد السعيد
                </h3>
                <p className="text-lg mb-6">
                  "كنت أبحث عن ساعة تجمع بين الأناقة والجودة العالية. عندما
                  اكتشفت LuxuryTime، علمت فوراً أنها ما كنت أبحث عنه. بعد ستة
                  أشهر من الاستخدام اليومي، لا تزال تبدو كالجديدة وتجذب الإعجاب
                  أينما ذهبت. إنها ليست مجرد ساعة، بل استثمار في الأناقة
                  والجودة."
                </p>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
