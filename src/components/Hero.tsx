import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { StarfieldCanvas } from "./StarfieldCanvas";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
const HeroContent = memo(({
  email,
  setEmail,
  handleSubmit
}: {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
    <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
      <p className="text-sm text-primary font-medium">Aisle 51 Labs</p>
    </div>
    
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight">
      Certified{" "}
      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
        Offshore Excellence
      </span>
    </h1>
    
    <p className="text-xl md:text-2xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">Less code, more results. We help you build in-house with the right stack for less.</p>
    
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-12">
      <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground" required />
      <Button type="submit" size="lg" className="h-12">
        Connect with us
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
  </div>);
HeroContent.displayName = "HeroContent";
export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('contact_emails').insert([{
        email
      }]);
      if (error) throw error;
      toast.success("Thanks for connecting! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);
  return <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <StarfieldCanvas />
      
      <HeroContent email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
    </section>;
};