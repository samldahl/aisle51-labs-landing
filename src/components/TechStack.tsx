import { Database, Boxes, Workflow, Cloud, Server, Code2 } from "lucide-react";

const technologies = [
  { name: "SQL", icon: Database },
  { name: "Django", icon: Server },
  { name: "React", icon: Code2 },
  { name: "Node", icon: Boxes },
  { name: "Go", icon: Workflow },
  { name: "Azure", icon: Cloud },
  { name: "AWS", icon: Cloud },
];

export const TechStack = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experienced across the stack
          </h2>
          <p className="text-xl text-muted-foreground">…and the works</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative aspect-square p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium relative z-10">{tech.name}</span>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            Plus PostgreSQL, TypeScript, Kubernetes, Docker, and more
          </p>
        </div>
      </div>
    </section>
  );
};
