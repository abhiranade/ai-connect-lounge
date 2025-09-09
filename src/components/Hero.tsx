import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Your Network.{" "}
            <span className="gradient-text">Powered by AI.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            The world's first conversational AI networking platform. Chat with any scanned 
            profile to unlock strategic insights, identify leads, and prepare for meetings.
          </p>
          <div className="animate-slide-up">
            <Button className="btn-hero">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;