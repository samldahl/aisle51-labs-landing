import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What tech stacks do you prefer and why?",
    answer: "We select stacks based on your specific needs: React + Node for rapid development, Django + PostgreSQL for complex backends, Go for high-performance systems, and cloud-native solutions on AWS/Azure for scalability. Every choice is driven by what will get you to market faster and scale efficiently."
  },
  {
    question: "Do you build everything clients ask for?",
    answer: "No. We only build when the data tells us to. We help you validate ideas, run experiments, and let real user behavior guide development decisions. This saves you from building features nobody wants."
  },
  {
    question: "Why are you more affordable than other agencies?",
    answer: "We do it way more affordable because of our specific network of gifted friends and colleagues that love to build technology that grows business. Our rates are twice as low given our team's location and general operating costs—without compromising on quality or expertise."
  },
  {
    question: "How do you handle remote work and timezones?",
    answer: "We're all remote and can work in any timezone. Whether you're in San Francisco, New York, London, or Singapore, we'll align our hours to overlap with your team for seamless collaboration."
  },
  {
    question: "What communication tools do you use?",
    answer: "We communicate with Slack or Teams and other secure, consistent communication mediums that keep people organized and in the loop. You'll never wonder what's happening with your project."
  },
  {
    question: "How much cheaper are your rates really?",
    answer: "Our rates are twice as low compared to typical US-based agencies. You get senior-level expertise at mid-level prices, thanks to our team's strategic locations and lean operating model."
  }
];

export const FAQ = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-background via-white/[0.02] to-background">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header with background glow */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 blur-3xl bg-white/[0.03] rounded-full" />
          <h2 className="text-5xl md:text-6xl font-mono font-bold mb-6 text-white relative">
            FAQ
          </h2>
          <p className="text-xl text-white/60 font-mono relative">
            Everything you need to know about how we work
          </p>
        </div>
        
        {/* FAQ Items with card design */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              
              {/* Card content */}
              <div className="relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-8 py-6 text-left font-mono text-lg text-white hover:text-white/90 hover:no-underline">
                      <span className="flex items-start gap-4">
                        <span className="text-white/40 font-bold min-w-[2rem]">0{index + 1}</span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-white/70 font-mono leading-relaxed">
                      <div className="pl-14">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};
