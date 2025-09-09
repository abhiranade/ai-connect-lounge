import { MessageCircle, Brain, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Chat with Any Profile",
      description: "Have AI conversations with scanned professional profiles for strategic insights and meeting preparation."
    },
    {
      icon: Brain,
      title: "Contextual Intelligence",
      description: "Adapts based on location, event, and industry. Behavioral learning that improves through AI."
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "Multi-dimensional matching with custom conversation starters and mutual value identification."
    }
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text-alt">AI Connect Technology™</span> - World's First
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Revolutionary AI-powered networking that transforms every professional interaction
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
        {features.map((feature, index) => (
          <div key={index} className="feature-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;