import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrackRecord } from "@/components/TrackRecord";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <TrackRecord />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
