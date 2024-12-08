import Hero from "./components/Hero";
import Features from "./components/Features";
import CustomerStory from "./components/CustomerStory";
import Testimonials from "./components/Testimonials";
import Specifications from "./components/Specifications";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div dir="rtl" className=" ">
      <Hero />
      <Features />
      <CustomerStory />
      <Specifications />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;
