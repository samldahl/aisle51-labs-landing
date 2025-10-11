import { TrendingUp, Users, Code, Shield } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$13M+",
    label: "Raised in Minneapolis",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Users served",
  },
  {
    icon: Code,
    value: "Thousands",
    label: "Lines of code — by design",
  },
  {
    icon: Shield,
    value: "SOC",
    label: "Compliance-ready",
  },
];

export const TrackRecord = () => {
  return (
    <section className="py-24 px-4 relative bg-white/5 border-y border-white/10">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Track record</h2>
          <p className="text-xl text-muted-foreground">Built for scale, proven in production</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
