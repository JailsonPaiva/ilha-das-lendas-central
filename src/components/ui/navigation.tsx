import { Button } from "@/components/ui/button";
import { Crown, Calendar, Users, Trophy, Info, Target } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Crown },
    { path: "/calendario", label: "Calendário", icon: Calendar },
    { path: "/jogadores", label: "Jogadores", icon: Users },
    { path: "/cartas", label: "Cartas", icon: Trophy },
    { path: "/palpites", label: "Palpites", icon: Target },
    { path: "/sobre", label: "Sobre", icon: Info },
  ];

  return (
    <motion.nav 
      className="bg-card/50 backdrop-blur-md border-b border-border/50 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/lovable-uploads/e1df045f-fcda-4212-ad08-070cf2e14111.png" 
                alt="Ilha das Lendas Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(var(--electric-blue))]"
              />
              <div className="absolute inset-0 bg-electric-blue/20 rounded blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={item.path}>
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
                        <motion.div 
                          className="absolute inset-0 bg-gradient-border opacity-20 rounded-md blur-sm"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={item.path}>
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
                      {isActive && (
                        <motion.div 
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-electric-blue rounded-full"
                          layoutId="mobileActiveTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;