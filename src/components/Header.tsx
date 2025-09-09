import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          QRS-Me
        </div>
        <nav className="flex items-center space-x-8">
          <Button 
            className="bg-gradient-to-r from-primary via-accent to-secondary text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:scale-105 animate-pulse"
            variant="ghost"
          >
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;