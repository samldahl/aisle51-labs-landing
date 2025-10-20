import { useEffect, useRef } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Footer } from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-20");
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const sections = [
    {
      text: "We believe the best ideas",
      emphasis: "are inherently simple",
    },
    {
      text: "In a seemingly",
      emphasis: "complicated market",
    },
    {
      text: "All problems stem from",
      emphasis: "poor communication",
      subtext: "with stakeholders",
    },
    {
      text: "We overhaul product teams",
      emphasis: "design and engineering bundled",
      subtext: "at a fraction of the cost",
    },
    {
      text: "Through our unique",
      emphasis: "GenZ global network",
      subtext: "of trusted builders",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <StarfieldCanvas />
      
      <div className="relative z-10">
        {sections.map((section, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="min-h-screen flex items-center justify-center px-4 py-20 opacity-0 translate-y-20 transition-all duration-1000"
          >
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight">
                {section.text}
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                {section.emphasis}
              </h1>
              {section.subtext && (
                <p className="text-3xl md:text-5xl font-mono text-muted-foreground">
                  {section.subtext}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
