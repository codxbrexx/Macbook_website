import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";
import Comparison from "./components/Comparison.jsx";
import Accessories from "./components/Accessories.jsx";
import Reviews from "./components/Reviews.jsx";
import Configurator from "./components/Configurator.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import SmoothScrollNav from "./components/SmoothScrollNav.jsx";
import Newsletter from "./components/Newsletter.jsx";
import FAQ from "./components/FAQ.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      {!isLoading && (
        <>
          <ScrollProgress />
          <SmoothScrollNav />
          <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Comparison />
            <Configurator />
            <Accessories />
            <Reviews />
            <FAQ />
            <Highlights />
            <Newsletter />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default App;
