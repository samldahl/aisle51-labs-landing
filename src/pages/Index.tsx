import { useEffect, useRef, useState } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Footer } from "@/components/Footer";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);

  const text = "The best ideas are simple. Most problems stem from poor communication between vision and execution. We overhaul product teams—design and engineering bundled—at a fraction of traditional costs. Our global network of GenZ builders speaks modern technology natively. We're not consultants. We're co-creators simplifying the future.";
  
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.scrollY;
      const containerHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrolled / containerHeight, 1);
      const wordsToShow = Math.floor(scrollProgress * words.length);
      
      setVisibleWords(wordsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <StarfieldCanvas />
      
      <div 
        ref={containerRef}
        className="relative z-10 min-h-[200vh]"
      >
        <div className="sticky top-0 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-relaxed">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-3 md:mr-4 transition-all duration-500 ${
                    index < visibleWords
                      ? "opacity-100 text-foreground"
                      : "opacity-0 text-muted-foreground"
                  }`}
                  style={{
                    transitionDelay: `${(index % 10) * 50}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
