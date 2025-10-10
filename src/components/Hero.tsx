import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Particles } from "./Particles";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle waitlist signup
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Particles */}
      <Particles />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
          <p className="text-sm text-primary font-medium">Aisle 51 Labs</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Veteran commerce &<br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            fulfillment builders
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
