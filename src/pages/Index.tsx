import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
      const wordsToShow = Math.floor(scrollProgress * words.length) + 1;
      
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
        className="relative z-10 pt-[50vh]"
        style={{ minHeight: '120vh' }}
      >
        <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-mono font-bold leading-[1.4] md:leading-[1.5] text-center md:text-left">
              {words.map((word, index) => {
                const isCurrent = index === visibleWords - 1;
                const isPast = index < visibleWords - 1;
                const isFuture = index >= visibleWords;
                
                return (
                  <span
                    key={index}
                    className={`inline-block mr-4 md:mr-6 mb-2 transition-all duration-700 ease-out ${
                      isCurrent
                        ? "opacity-100 text-foreground blur-0 scale-100"
                        : isPast
                        ? "opacity-40 text-muted-foreground blur-0 scale-100"
                        : "opacity-0 text-muted-foreground blur-sm scale-95"
                    }`}
                    style={{
                      transitionDelay: `${(index % 8) * 40}ms`,
                      textShadow: isCurrent ? '0 0 20px rgba(255, 255, 255, 0.15)' : 'none',
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>
          
          {visibleWords >= words.length && (
            <Link to="/learn-more" className="absolute bottom-20 animate-fade-in">
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
