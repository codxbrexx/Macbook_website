import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const sectionRef = useRef();
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      company: "Design Studio",
      review:
        "The M4 Max chip is a game-changer. I can edit 8K footage without breaking a sweat. The display is absolutely stunning.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      company: "Tech Startup",
      review:
        "Best laptop I've ever owned. The battery life is incredible - I can code all day without charging. Performance is unmatched.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Emily Watson",
      role: "Music Producer",
      company: "Independent Artist",
      review:
        "The speakers are phenomenal. I can produce entire tracks on this machine. The M4 Pro handles all my plugins effortlessly.",
      rating: 5,
      avatar: "👩‍🎤",
    },
    {
      name: "David Kim",
      role: "3D Artist",
      company: "Animation Studio",
      review:
        "Rendering times are 3x faster than my old machine. The 16-inch display gives me so much room to work. Worth every penny.",
      rating: 5,
      avatar: "👨‍🎨",
    },
    {
      name: "Jessica Parker",
      role: "Data Scientist",
      company: "Research Lab",
      review:
        "Machine learning workflows are buttery smooth. The unified memory architecture makes a huge difference for large datasets.",
      rating: 5,
      avatar: "👩‍🔬",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reviews-title", {
        scrollTrigger: {
          trigger: ".reviews-title",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".active-review",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeReview]);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={sectionRef} className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="reviews-title text-5xl md:text-6xl font-semibold text-center text-white mb-4">
          Loved by professionals.
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">
          See what creators are saying about MacBook Pro.
        </p>

        <div className="relative">
          {/* Main Review Card */}
          <div className="active-review bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "{reviews[activeReview].review}"
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-5xl">{reviews[activeReview].avatar}</div>
              <div>
                <h4 className="text-white font-semibold text-xl">
                  {reviews[activeReview].name}
                </h4>
                <p className="text-gray-400">
                  {reviews[activeReview].role} at{" "}
                  {reviews[activeReview].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevReview}
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 transition-colors duration-200"
              aria-label="Previous review"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeReview ? "bg-white w-8" : "bg-gray-600"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 transition-colors duration-200"
              aria-label="Next review"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              98%
            </div>
            <div className="text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              4.9
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              50K+
            </div>
            <div className="text-gray-400">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              96%
            </div>
            <div className="text-gray-400">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
