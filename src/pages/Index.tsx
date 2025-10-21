import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Award, TrendingUp, Shield } from "lucide-react";
import { Services } from "@/components/Services";
import { useInView } from "@/hooks/use-in-view";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  const trackRecordSection = useInView();
  const servicesSection = useInView();
  const faqSection = useInView();
  const ctaSection = useInView();

  const text =
    "The best ideas are simple. Most problems stem from poor communication between vision and execution. We get product on track and bundle engineering  at a fraction of traditional costs. Our global network of builders speak modern enterprise technology frameworks.";

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

      <div ref={containerRef} className="relative z-10 pt-[100vh]" style={{ minHeight: "100vh" }}>
        <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[2.475rem] md:text-[3.825rem] lg:text-[6.3rem] font-mono font-bold leading-[1.4] md:leading-[1.5] text-left">
              {words.map((word, index) => {
                const isCurrent = index === visibleWords - 1;
                const isPast = index < visibleWords - 1;
                const isFuture = index >= visibleWords;

                return (
                  <span
                    key={index}
                    className={`inline-block mr-4 md:mr-6 mb-2 transition-all duration-500 ease-in-out ${
                      isCurrent
                        ? "opacity-100 text-white blur-0 scale-100"
                        : isPast
                          ? "opacity-70 text-white blur-0 scale-100"
                          : "opacity-0 text-muted-foreground blur-sm scale-95"
                    }`}
                    style={{
                      transitionDelay: `${index * 15}ms`,
                      textShadow: isCurrent ? "0 0 20px rgba(255, 255, 255, 0.15)" : "none",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>

        </div>
      </div>

      {/* Track Record Section */}
      <section 
        ref={trackRecordSection.ref as React.RefObject<HTMLElement>}
        className={`relative z-10 py-24 px-4 bg-gradient-to-b from-background via-white/[0.01] to-background transition-all duration-1000 ${
          trackRecordSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">Track record</h2>
            <p className="text-xl text-white/60 font-mono">Built for scale, proven in production</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <Award className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Techstars</h3>
                <p className="text-white/60 font-mono">Alumni of world's top accelerator</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">$13M Raised</h3>
                <p className="text-white/60 font-mono">Venture-backed and scaling</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <Shield className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Millions</h3>
                <p className="text-white/60 font-mono">Processed in transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div 
        ref={servicesSection.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 ${
          servicesSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Services />
      </div>

      {/* FAQ Section */}
      <div 
        ref={faqSection.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 ${
          faqSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FAQ />
      </div>

      {/* Contact CTA */}
      <section 
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className={`relative z-10 py-24 px-4 transition-all duration-1000 ${
          ctaSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
                Ready to build?
              </h2>
              <p className="text-xl text-white/60 font-mono mb-8">
                Let's ship something great together
              </p>
              <Button size="lg" className="text-lg" onClick={() => setContactFormOpen(true)}>
                Contact Us
              </Button>
              <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
            </div>
          </div>
        </div>
      </section>

      <footer className="h-[20px] w-full" />
    </div>
  );
};

export default Index;
