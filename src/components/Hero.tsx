import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { StarfieldCanvas } from "./StarfieldCanvas";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle waitlist signup
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <StarfieldCanvas />
      
      {/* Mouse glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 70%)`,
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
          <p className="text-sm text-primary font-medium">Aisle 51 Labs</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight">
          Building future{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            sh*t
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Less code, more results. We help you get Series A–ready or profitable faster.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
            required
          />
          <Button type="submit" size="lg" className="h-12">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        
        <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Commerce • Fulfillment • Ops</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Design Systems • Product Engines</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Series A Readiness • Profitability</span>
          </div>
        </div>
      </div>
    </section>
  );
};
