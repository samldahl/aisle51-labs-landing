import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrackRecord } from "@/components/TrackRecord";
import { TechStack } from "@/components/TechStack";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <TrackRecord />
      <TechStack />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
