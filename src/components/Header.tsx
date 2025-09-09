const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          QRS-Me
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">
            Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;