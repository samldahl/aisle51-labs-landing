import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CursorGlow } from "@/components/CursorGlow";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Award, TrendingUp, Shield, Volume2, VolumeX } from "lucide-react";
import { Services } from "@/components/Services";
import { useInView } from "@/hooks/use-in-view";
import backgroundMusic from "@/assets/SimonBGSmall.mp3";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const trackRecordSection = useInView();
  const servicesSection = useInView();
  const faqSection = useInView();
  const ctaSection = useInView();

  const text =
    "We bridge the gap between vision and execution. Product clarity, modern engineering, global builders — all at a fraction of traditional cost.";

  const words = text.split(" ");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      // Try to play the audio, handling browser autoplay restrictions
      audioRef.current.play().catch(() => {
        // If autoplay is blocked, mute initially and user can unmute
        setIsMuted(true);
        audioRef.current!.muted = true;
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);

      // Ensure audio is playing when unmuting
      if (!newMutedState && audioRef.current.paused) {
        audioRef.current.play().catch(console.error);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.scrollY;
      const containerHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrolled / containerHeight, 1);
      const wordsToShow = Math.floor(scrollProgress * words.length) + 1;

      setVisibleWords(wordsToShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div className="min-h-screen bg-background">
      <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
      <CursorGlow />
      <StarfieldCanvas />

      <div ref={containerRef} className="relative z-10 pt-[100vh]" style={{ minHeight: "100vh" }}>
        <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[6rem] font-mono font-bold leading-[1.4] md:leading-[1.5] text-left">
              {words.map((word, index) => {
                const isCurrent = index === visibleWords - 1;
                const isPast = index < visibleWords - 1;
                const isFuture = index >= visibleWords;

                return (
                  <span
                    key={index}
                    className={`inline-block mr-4 md:mr-6 mb-2 transition-all duration-500 ease-in-out ${
                      isCurrent
                        ? "opacity-100 text-white blur-0 scale-100"
                        : isPast
                          ? "opacity-70 text-white blur-0 scale-100"
                          : "opacity-0 text-muted-foreground blur-sm scale-95"
                    }`}
                    style={{
                      transitionDelay: `${index * 15}ms`,
                      textShadow: isCurrent ? "0 0 20px rgba(255, 255, 255, 0.15)" : "none",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
      </div>

      {/* Track Record Section */}
      <section
        ref={trackRecordSection.ref as React.RefObject<HTMLElement>}
        className={`relative z-10 py-24 px-4 bg-gradient-to-b from-background via-white/[0.01] to-background transition-all duration-1000 ${
          trackRecordSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">Track record</h2>
            <p className="text-xl text-white/60 font-mono">Built for scale, proven in production</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <Award className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Techstars Alumni</h3>
                <p className="text-white/60 font-mono">We are Alumni of world's top startup accelerator</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">$13 Million Raised</h3>
                <p className="text-white/60 font-mono">Our venture-backed team knows the steps</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <Shield className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-mono font-bold text-white mb-2">Zero to Millions</h3>
                <p className="text-white/60 font-mono">We measure the right data a million ways</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div
        ref={servicesSection.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 ${
          servicesSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Services />
      </div>

      {/* FAQ Section */}
      <div
        ref={faqSection.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 ${
          faqSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FAQ />
      </div>

      {/* Contact CTA */}
      <section
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className={`relative z-10 py-24 px-4 transition-all duration-1000 ${
          ctaSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">Ready to build?</h2>
              <p className="text-xl text-white/60 font-mono mb-8">Let's ship something great together</p>
              <Button size="lg" className="text-lg" onClick={() => setContactFormOpen(true)}>
                Contact Us
              </Button>
              <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
            </div>
          </div>
        </div>
      </section>

      <footer className="h-[20px] w-full" />

      {/* Floating Sound Control */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 group"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        )}
      </button>
    </div>
  );
};

export default Index;
