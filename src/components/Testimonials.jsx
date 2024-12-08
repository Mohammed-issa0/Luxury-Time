import { motion } from "framer-motion";
import Slider from "react-slick";

const testimonials = [
  {
    text: "كانت ساعة LuxuryTime أفضل إضافة لخزانة أكسسواراتي. الجميع يسألني عنها.",
    author: "عمر، 35 سنة",
    rating: 5,
  },
  {
    text: "لم أكن أتوقع هذا القدر من الأناقة والجودة. التفاصيل تعكس الحرفية العالية.",
    author: "خالد، 42 سنة",
    rating: 5,
  },
  {
    text: "هدية رائعة من زوجي، أصبحت جزءًا من حياتي اليومية.",
    author: "سارة، 28 سنة",
    rating: 5,
  },
  {
    text: "تصميمها الكلاسيكي يجعلها مثالية لكل المناسبات، سواء كانت رسمية أو يومية.",
    author: "أحمد، 40 سنة",
    rating: 5,
  },
  {
    text: "لم أكن أتوقع هذا القدر من الأناقة والجودة. التفاصيل تعكس الحرفية العالية.",
    author: "خالد، 42 سنة",
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    arrows: false,
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">تجارب عملائنا</h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4 text-right"
              >
                <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                  <p className="text-gold font-semibold">
                    {testimonial.author}
                  </p>
                  <div className="flex flex-row-reverse mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                  <p className="text-xl mb-6" dir="rtl">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
