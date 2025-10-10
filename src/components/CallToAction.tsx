import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-primary/30 shadow-[0_0_50px_hsl(195_100%_50%/0.2)] relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          
          <div className="relative z-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">Need help?</h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We'll help you assemble an in‑house team you can trust—and ship with.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-base">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Schedule a Call
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              Join companies shipping faster with less complexity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
