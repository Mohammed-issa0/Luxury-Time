import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "كيف أضمن جودة المنتج؟",
    answer: "كل ساعة تأتي مع شهادة ضمان أصالة وجودة معتمدة.",
  },
  {
    question: "هل يمكنني استبدالها أو إرجاعها؟",
    answer: "نعم، نوفر ضمان استبدال أو إرجاع خلال 30 يومًا من تاريخ الشراء.",
  },
  {
    question: "هل تناسب الساعة الاستخدام اليومي؟",
    answer:
      "بالتأكيد، تم تصميمها لتتحمل الظروف اليومية، مع الحفاظ على أناقتها.",
  },
  {
    question: "هل تأتي مع ضمان؟",
    answer: "نعم، الساعة مشمولة بضمان لمدة عامين على جميع العيوب المصنعية.",
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-gray-200 py-4" initial={false}>
      <button
        className="w-full text-right flex flex-row-reverse justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-gold text-2xl"
        >
          +
        </motion.span>
        <span className="text-xl font-semibold">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 mt-4 pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          الأسئلة الشائعة
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
