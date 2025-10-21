import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Configurator = () => {
  const sectionRef = useRef();
  const [config, setConfig] = useState({
    model: "14",
    chip: "m4-pro",
    memory: "18",
    storage: "512",
    color: "space-gray",
  });

  const prices = {
    model: { 14: 1999, 16: 2499 },
    chip: { "m4-pro": 0, "m4-max": 500 },
    memory: { 18: 0, 36: 400, 48: 800, 64: 1200, 96: 1800, 128: 2400 },
    storage: { 512: 0, "1TB": 400, "2TB": 800, "4TB": 1600, "8TB": 3200 },
    color: { "space-gray": 0, silver: 0 },
  };

  const calculateTotal = () => {
    return (
      prices.model[config.model] +
      prices.chip[config.chip] +
      prices.memory[config.memory] +
      prices.storage[config.storage] +
      prices.color[config.color]
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".configurator-title", {
        scrollTrigger: {
          trigger: ".configurator-title",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".config-section", {
        scrollTrigger: {
          trigger: ".configurator-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ConfigOption = ({ label, options, configKey, value }) => (
    <div className="config-section bg-zinc-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{label}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setConfig({ ...config, [configKey]: option.value })}
            className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
              value === option.value
                ? "bg-blue-600 text-white"
                : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{option.label}</div>
                {option.description && (
                  <div className="text-sm opacity-80 mt-1">
                    {option.description}
                  </div>
                )}
              </div>
              {option.price > 0 && (
                <div className="text-sm font-semibold">+${option.price}</div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="configurator" ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="configurator-title text-5xl md:text-6xl font-semibold text-center text-white mb-4">
          Build your MacBook Pro.
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          Configure it exactly the way you want.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Options */}
          <div className="lg:col-span-2 configurator-grid space-y-6">
            <ConfigOption
              label="Choose your size"
              configKey="model"
              value={config.model}
              options={[
                {
                  value: "14",
                  label: "14-inch MacBook Pro",
                  description: "Compact and portable",
                  price: 0,
                },
                {
                  value: "16",
                  label: "16-inch MacBook Pro",
                  description: "Larger display for pros",
                  price: 500,
                },
              ]}
            />

            <ConfigOption
              label="Choose your chip"
              configKey="chip"
              value={config.chip}
              options={[
                {
                  value: "m4-pro",
                  label: "M4 Pro",
                  description: "14-core CPU, 20-core GPU",
                  price: 0,
                },
                {
                  value: "m4-max",
                  label: "M4 Max",
                  description: "16-core CPU, 40-core GPU",
                  price: 500,
                },
              ]}
            />

            <ConfigOption
              label="Choose your memory"
              configKey="memory"
              value={config.memory}
              options={[
                { value: "18", label: "18GB Unified Memory", price: 0 },
                { value: "36", label: "36GB Unified Memory", price: 400 },
                { value: "48", label: "48GB Unified Memory", price: 800 },
                { value: "64", label: "64GB Unified Memory", price: 1200 },
                { value: "96", label: "96GB Unified Memory", price: 1800 },
                { value: "128", label: "128GB Unified Memory", price: 2400 },
              ]}
            />

            <ConfigOption
              label="Choose your storage"
              configKey="storage"
              value={config.storage}
              options={[
                { value: "512", label: "512GB SSD", price: 0 },
                { value: "1TB", label: "1TB SSD", price: 400 },
                { value: "2TB", label: "2TB SSD", price: 800 },
                { value: "4TB", label: "4TB SSD", price: 1600 },
                { value: "8TB", label: "8TB SSD", price: 3200 },
              ]}
            />

            <ConfigOption
              label="Choose your color"
              configKey="color"
              value={config.color}
              options={[
                { value: "space-gray", label: "Space Gray", price: 0 },
                { value: "silver", label: "Silver", price: 0 },
              ]}
            />
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Your Configuration
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Model</span>
                  <span className="font-semibold text-white">
                    {config.model}" MacBook Pro
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Chip</span>
                  <span className="font-semibold text-white uppercase">
                    {config.chip.replace("-", " ")}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Memory</span>
                  <span className="font-semibold text-white">
                    {config.memory}GB
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Storage</span>
                  <span className="font-semibold text-white">
                    {config.storage} SSD
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Color</span>
                  <span className="font-semibold text-white capitalize">
                    {config.color.replace("-", " ")}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-gray-400">Total</span>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">
                      ${calculateTotal().toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      or ${Math.round(calculateTotal() / 12)}/mo for 12 months
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition-colors duration-200 mb-3">
                Add to Cart
              </button>
              <button className="w-full bg-transparent border-2 border-white text-white font-semibold py-4 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                Save Configuration
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Free delivery and returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
