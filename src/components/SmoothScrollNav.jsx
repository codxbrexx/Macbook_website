import { useEffect, useState, useMemo } from "react";

const SmoothScrollNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "product-viewer", label: "Product" },
      { id: "showcase", label: "Showcase" },
      { id: "performance", label: "Performance" },
      { id: "features", label: "Features" },
      { id: "comparison", label: "Compare" },
      { id: "configurator", label: "Configure" },
      { id: "accessories", label: "Accessories" },
      { id: "reviews", label: "Reviews" },
      { id: "faq", label: "FAQ" },
      { id: "highlights", label: "Highlights" },
      { id: "newsletter", label: "Newsletter" },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            aria-label={`Scroll to ${section.label}`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white border-white scale-125"
                  : "bg-transparent border-gray-500 hover:border-white"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmoothScrollNav;
