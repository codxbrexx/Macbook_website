import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".comparison-heading", {
        scrollTrigger: {
          trigger: ".comparison-heading",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate comparison cards
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        });
      });

      // Animate spec items
      gsap.from(".spec-item", {
        scrollTrigger: {
          trigger: ".specs-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const models = [
    {
      size: '14"',
      name: 'MacBook Pro 14"',
      image: "/models/macbook-14.png",
      chip: "M4 Pro or M4 Max",
      display: "14.2-inch Liquid Retina XDR",
      memory: "Up to 128GB",
      storage: "Up to 8TB",
      battery: "Up to 24 hours",
      price: "From $1,999",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    {
      size: '16"',
      name: 'MacBook Pro 16"',
      image: "/models/macbook-16.png",
      chip: "M4 Pro or M4 Max",
      display: "16.2-inch Liquid Retina XDR",
      memory: "Up to 128GB",
      storage: "Up to 8TB",
      battery: "Up to 22 hours",
      price: "From $2,499",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
    },
  ];

  const specifications = [
    {
      category: "Performance",
      specs: [
        {
          label: "Chip",
          model14: "M4 Pro / M4 Max",
          model16: "M4 Pro / M4 Max",
        },
        { label: "CPU Cores", model14: "Up to 14", model16: "Up to 16" },
        { label: "GPU Cores", model14: "Up to 40", model16: "Up to 40" },
        { label: "Memory", model14: "Up to 128GB", model16: "Up to 128GB" },
      ],
    },
    {
      category: "Display",
      specs: [
        { label: "Size", model14: '14.2"', model16: '16.2"' },
        { label: "Resolution", model14: "3024 x 1964", model16: "3456 x 2234" },
        {
          label: "Brightness",
          model14: "1600 nits peak",
          model16: "1600 nits peak",
        },
        {
          label: "Refresh Rate",
          model14: "ProMotion 120Hz",
          model16: "ProMotion 120Hz",
        },
      ],
    },
    {
      category: "Connectivity",
      specs: [
        { label: "Thunderbolt", model14: "3 ports", model16: "3 ports" },
        { label: "HDMI", model14: "Yes", model16: "Yes" },
        { label: "SD Card", model14: "Yes", model16: "Yes" },
        { label: "Wi-Fi", model14: "Wi-Fi 6E", model16: "Wi-Fi 6E" },
      ],
    },
  ];

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-20 px-4 bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="comparison-heading text-5xl md:text-6xl font-semibold text-center mb-4">
          Choose your size.
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          Both models. Unbelievable performance.
        </p>

        {/* Model Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {models.map((model, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${model.color} rounded-3xl p-8 text-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold mb-2">{model.name}</h3>
                <p className="text-2xl text-gray-300">{model.price}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Chip</span>
                  <span className="font-semibold">{model.chip}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Display</span>
                  <span className="font-semibold">{model.display}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Memory</span>
                  <span className="font-semibold">{model.memory}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Storage</span>
                  <span className="font-semibold">{model.storage}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Battery</span>
                  <span className="font-semibold">{model.battery}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors duration-200">
                Buy {model.size}
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Specifications  */}
        <div className="specs-grid">
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            Technical Specifications
          </h3>
          {specifications.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h4 className="text-2xl font-semibold text-blue-500 mb-6">
                {section.category}
              </h4>
              <div className="bg-zinc-800 rounded-2xl overflow-hidden">
                {section.specs.map((spec, specIdx) => (
                  <div
                    key={specIdx}
                    className="spec-item grid grid-cols-3 gap-4 p-4 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-750 transition-colors"
                  >
                    <div className="text-gray-400">{spec.label}</div>
                    <div className="text-white text-center">{spec.model14}</div>
                    <div className="text-white text-center">{spec.model16}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
