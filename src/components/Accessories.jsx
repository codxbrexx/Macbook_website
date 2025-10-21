import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Accessories = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".accessories-title", {
        scrollTrigger: {
          trigger: ".accessories-title",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".accessory-card", {
        scrollTrigger: {
          trigger: ".accessories-grid",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const accessories = [
    {
      name: "Magic Keyboard with Touch ID",
      description: "Wireless keyboard with Touch ID for secure authentication",
      price: "$199",
      image: "⌨️",
      color: "from-purple-900 to-purple-700",
    },
    {
      name: "Magic Mouse",
      description: "Multi-Touch surface lets you perform gestures",
      price: "$99",
      image: "🖱️",
      color: "from-blue-900 to-blue-700",
    },
    {
      name: "Magic Trackpad",
      description: "Force Touch and Multi-Touch gestures",
      price: "$149",
      image: "🖐️",
      color: "from-indigo-900 to-indigo-700",
    },
    {
      name: "USB-C to HDMI Adapter",
      description: "Connect your MacBook to HDMI displays",
      price: "$69",
      image: "🔌",
      color: "from-gray-900 to-gray-700",
    },
    {
      name: "Thunderbolt 4 Cable",
      description: "Up to 40Gb/s data transfer",
      price: "$159",
      image: "⚡",
      color: "from-yellow-900 to-yellow-700",
    },
    {
      name: "Leather Sleeve",
      description: "Premium leather protection for your MacBook",
      price: "$199",
      image: "👜",
      color: "from-amber-900 to-amber-700",
    },
    {
      name: "Studio Display",
      description: "27-inch 5K Retina display with 12MP camera",
      price: "$1,599",
      image: "🖥️",
      color: "from-slate-900 to-slate-700",
    },
    {
      name: "AirPods Pro",
      description: "Active Noise Cancellation with Adaptive Audio",
      price: "$249",
      image: "🎧",
      color: "from-teal-900 to-teal-700",
    },
  ];

  return (
    <section id="accessories" ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="accessories-title text-5xl md:text-6xl font-semibold text-center text-white mb-4">
          Accessories.
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          Essentials that pair perfectly with MacBook Pro.
        </p>

        <div className="accessories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory, index) => (
            <div
              key={index}
              className={`accessory-card bg-gradient-to-br ${accessory.color} rounded-3xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
            >
              <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {accessory.image}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {accessory.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4 min-h-[40px]">
                {accessory.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">
                  {accessory.price}
                </span>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
