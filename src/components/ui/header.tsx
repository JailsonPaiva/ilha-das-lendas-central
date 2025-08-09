import { Button } from "@/components/ui/button";
import { Bell, Settings, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/calendario", label: "Calendário" },
    { path: "/jogadores", label: "Jogadores" },
    { path: "/cartas", label: "Cartas" },
    { path: "/palpites", label: "Palpites" },
    { path: "/campeonatos", label: "Campeonatos", dropdown: true }
  ];

  return (
    <header className="bg-dark-purple/50 backdrop-blur-md border-b border-electric-blue/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="/BordeIcon/border.png" 
                  alt="Ilha das Lendas Icon" 
                  className="h-8 w-8"
                />
                <div className="text-2xl font-bold text-white">
                  Ilha das Lendas
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-4 w-4 ml-1" />}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Header Icons */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button variant="ghost" size="sm" className="relative text-white hover:text-electric-blue">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Button variant="ghost" size="sm" className="text-white hover:text-electric-blue">
                <Settings className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <Button variant="ghost" size="sm" className="text-white hover:text-electric-blue relative">
                <div 
                  className="relative w-16 h-16 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/BordeIcon/border.png)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="User Profile" 
                      className="mt-4 w-[23px] h-[23px] rounded-full object-cover"
                    />
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
