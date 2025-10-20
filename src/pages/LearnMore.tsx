import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { TrackRecord } from "@/components/TrackRecord";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <StarfieldCanvas />
      <Hero />
      <Services />
      <TechStack />
      <TrackRecord />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LearnMore;
