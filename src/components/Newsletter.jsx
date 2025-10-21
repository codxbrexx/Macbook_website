import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content", {
        scrollTrigger: {
          trigger: ".newsletter-content",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900"
    >
      <div className="max-w-4xl mx-auto newsletter-content">
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Stay in the loop.
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest news about MacBook Pro and exclusive offers.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500/20 border border-green-500 rounded-full px-6 py-4 text-white font-semibold">
                ✓ Thank you for subscribing!
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
