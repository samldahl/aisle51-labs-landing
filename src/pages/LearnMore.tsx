import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrackRecord } from "@/components/TrackRecord";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Hero />
      <Services />
      <TrackRecord />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LearnMore;
