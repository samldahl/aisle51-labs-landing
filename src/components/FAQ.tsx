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
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Everything you need to know about how we work
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-white/20 rounded-lg px-6 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <AccordionTrigger className="text-left font-mono text-lg text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
