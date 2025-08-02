import { Button } from "@/components/ui/button";
import { Crown, Calendar, Users, Trophy, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Crown },
    { path: "/calendario", label: "Calendário", icon: Calendar },
    { path: "/jogadores", label: "Jogadores", icon: Users },
    { path: "/cartas", label: "Cartas", icon: Trophy },
    { path: "/sobre", label: "Sobre", icon: Info },
  ];

  return (
    <nav className="bg-card/50 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/e1df045f-fcda-4212-ad08-070cf2e14111.png" 
                alt="Ilha das Lendas Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(var(--electric-blue))]"
              />
              <div className="absolute inset-0 bg-electric-blue/20 rounded blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`relative transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-main text-primary-foreground shadow-electric" 
                        : "text-foreground hover:text-electric-blue hover:bg-electric-blue/10"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-border opacity-20 rounded-md blur-sm"></div>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`relative transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-main text-primary-foreground shadow-electric" 
                        : "text-foreground hover:text-electric-blue hover:bg-electric-blue/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;