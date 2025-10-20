import { Mail, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aisle 51 Labs
            </h3>
            <p className="text-muted-foreground">
              Veteran commerce & fulfillment builders helping startups get Series A–ready or profitable faster.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/learn-more" className="hover:text-primary transition-colors">Learn More</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commerce Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fulfillment Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Operations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@aisle51labs.com"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)]"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)]"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)]"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Minneapolis, MN
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aisle 51 Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
