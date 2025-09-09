import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="waitlist" className="hero-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Waitlist -{" "}
            <span className="gradient-text-alt">Limited Beta Access</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Be among the first to experience the future of AI-powered networking. 
            Early access members get exclusive features and priority support.
          </p>
          <div className="animate-slide-up">
            <Button className="btn-hero">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;