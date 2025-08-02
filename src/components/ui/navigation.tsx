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
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Crown className="h-8 w-8 text-gold transition-all duration-300 group-hover:text-gold-light group-hover:drop-shadow-[0_0_10px_hsl(var(--gold))]" />
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-royal bg-clip-text text-transparent">
              Ilha das Lendas
            </span>
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
                        ? "bg-gradient-royal text-primary-foreground shadow-royal" 
                        : "text-foreground hover:text-gold hover:bg-gold/10"
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
                        ? "bg-gradient-royal text-primary-foreground shadow-royal" 
                        : "text-foreground hover:text-gold hover:bg-gold/10"
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