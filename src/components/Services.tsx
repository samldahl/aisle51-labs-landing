import { ShoppingCart, Package, Settings, Palette, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Commerce",
    description: "Build scalable e-commerce platforms that convert and grow with your business.",
  },
  {
    icon: Package,
    title: "Fulfillment",
    description: "Streamline operations with custom fulfillment solutions built for efficiency.",
  },
  {
    icon: Settings,
    title: "Operations",
    description: "Optimize your workflows with purpose-built operational systems.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Create cohesive, scalable design systems that accelerate development.",
  },
  {
    icon: Rocket,
    title: "Product Engines",
    description: "Ship faster with reusable product frameworks and component libraries.",
  },
  {
    icon: TrendingUp,
    title: "Series A Readiness",
    description: "Get investment-ready with robust infrastructure and proven metrics.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What we do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions for modern commerce and fulfillment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
