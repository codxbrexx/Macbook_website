import { useEffect, useRef } from "react";


const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate =3;
    }, []);
  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="Macbook title" />    

        </div>

        <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            muted
            playsInline
        />
        <button>Buy Now</button>
        <p>From $1999 or  <span> $83.29/mo. for 24 mo. * </span></p>
    </section>

  )
}

export { Hero };
