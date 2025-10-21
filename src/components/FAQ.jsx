import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        scrollTrigger: {
          trigger: ".faq-title",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What makes the M4 chip so powerful?",
      answer:
        "The M4 chip features up to a 16-core CPU and 40-core GPU with unified memory architecture, delivering incredible performance for demanding tasks like 8K video editing, 3D rendering, and machine learning workflows.",
    },
    {
      question: "How long does the battery last?",
      answer:
        'MacBook Pro 14" offers up to 24 hours of battery life, while the 16" model provides up to 22 hours. This is the longest battery life ever in a Mac notebook.',
    },
    {
      question: "Can I upgrade the memory and storage later?",
      answer:
        "No, the memory and storage are integrated into the motherboard and cannot be upgraded after purchase. We recommend choosing the configuration that best fits your needs from the start.",
    },
    {
      question: "What's included in the box?",
      answer:
        "Your MacBook Pro comes with a USB-C to MagSafe 3 Cable, USB-C Power Adapter (67W, 96W, or 140W depending on configuration), and documentation. Additional accessories are sold separately.",
    },
    {
      question: "Does it support external displays?",
      answer:
        "Yes! You can connect up to four external displays (up to three 6K displays at 60Hz over Thunderbolt and one 4K display at 144Hz over HDMI).",
    },
    {
      question: "What is the return policy?",
      answer:
        "You have 14 days from the date you receive your MacBook Pro to return it for a full refund. The product must be in like-new condition with all original packaging and accessories.",
    },
    {
      question: "Is AppleCare+ worth it?",
      answer:
        "AppleCare+ extends your coverage to three years and includes unlimited incidents of accidental damage protection. It also includes 24/7 priority access to Apple experts.",
    },
    {
      question: "Can it run Windows or Linux?",
      answer:
        "You can run Windows and Linux through virtualization software like Parallels Desktop or VMware Fusion. However, Boot Camp is not supported on Apple silicon Macs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="faq-title text-5xl md:text-6xl font-semibold text-center text-white mb-4">
          Frequently asked.
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          Get answers to common questions about MacBook Pro.
        </p>

        <div className="faq-container space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-750 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
