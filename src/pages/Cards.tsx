import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Sparkles, Zap, CreditCard } from "lucide-react";
import Header from "@/components/ui/header";
import PlayerCard from "@/components/PlayerCard";
import { motion } from "framer-motion";

const Cards = () => {
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [selectedWeek, setSelectedWeek] = useState("current");

  const mockCards = [
    {
      id: "1",
      name: "brTT",
      team: "LOUD",
      position: "ADC",
      rating: 94,
      image: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
      country: "🇧🇷",
      stats: { kda: "2.8", winRate: "73%", mvpCount: 8 },
      rarity: "legendary" as const,
      weekEarned: "Semana 8",
      achievement: "MVP da Semana"
    },
    {
      id: "2",
      name: "Robo",
      team: "paiN",
      position: "JGL",
      rating: 91,
      image: "/lovable-uploads/8cf85f12-d0de-4acd-a823-495a1e966741.png",
      country: "🇧🇷",
      stats: { kda: "3.2", winRate: "68%", mvpCount: 6 },
      rarity: "epic" as const,
      weekEarned: "Semana 7",
      achievement: "Melhor Jungle"
    },
    {
      id: "3",
      name: "Faker",
      team: "T1",
      position: "MID",
      rating: 98,
      image: "/placeholder.svg",
      country: "🇰🇷",
      stats: { kda: "4.1", winRate: "81%", mvpCount: 12 },
      rarity: "legendary" as const,
      weekEarned: "Semana 8",
      achievement: "Lenda Viva"
    },
    {
      id: "4",
      name: "Caps",
      team: "G2",
      position: "MID",
      rating: 93,
      image: "/placeholder.svg",
      country: "🇩🇰",
      stats: { kda: "3.5", winRate: "72%", mvpCount: 7 },
      rarity: "epic" as const,
      weekEarned: "Semana 6",
      achievement: "Destaque Mid"
    },
    {
      id: "5",
      name: "Gumayusi",
      team: "T1",
      position: "ADC",
      rating: 89,
      image: "/placeholder.svg",
      country: "🇰🇷",
      stats: { kda: "2.9", winRate: "75%", mvpCount: 5 },
      rarity: "rare" as const,
      weekEarned: "Semana 7",
      achievement: "Destaque em Farm"
    },
    {
      id: "6",
      name: "Keria",
      team: "T1",
      position: "SUP",
      rating: 90,
      image: "/placeholder.svg",
      country: "🇰🇷",
      stats: { kda: "1.8", winRate: "79%", mvpCount: 4 },
      rarity: "rare" as const,
      weekEarned: "Semana 5",
      achievement: "Melhor Suporte"
    }
  ];

  const rarities = [
    { value: "all", label: "TODAS", icon: Star },
    { value: "legendary", label: "LENDÁRIA", icon: Trophy },
    { value: "epic", label: "ÉPICA", icon: Sparkles },
    { value: "rare", label: "RARA", icon: Zap }
  ];

  const weeks = [
    { value: "current", label: "SEMANA ATUAL" },
    { value: "week8", label: "SEMANA 8" },
    { value: "week7", label: "SEMANA 7" },
    { value: "week6", label: "SEMANA 6" },
    { value: "week5", label: "SEMANA 5" }
  ];

  const filteredCards = mockCards.filter(card => {
    const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
    const matchesWeek = selectedWeek === "current" || card.weekEarned.includes(selectedWeek.replace("week", "Semana "));
    return matchesRarity && matchesWeek;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center">
            <CreditCard className="h-8 w-8 mr-3" />
            Cartas
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coleção exclusiva de cartas baseada na performance dos jogadores
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="glass-effect rounded-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Rarity Filter */}
            <div className="flex flex-wrap gap-2">
              {rarities.map((rarity, index) => {
                const Icon = rarity.icon;
                return (
                  <motion.div
                    key={rarity.value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <Button
                      variant={selectedRarity === rarity.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRarity(rarity.value)}
                      className={`transition-all duration-300 ${
                        selectedRarity === rarity.value 
                          ? "bg-gradient-main text-primary-foreground shadow-electric" 
                          : "hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/50"
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {rarity.label}
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            {/* Week Filter */}
            <div className="flex flex-wrap gap-2">
              {weeks.map((week, index) => (
                <motion.div
                  key={week.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    variant={selectedWeek === week.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedWeek(week.value)}
                    className={`transition-all duration-300 ${
                      selectedWeek === week.value 
                        ? "bg-gradient-magic text-secondary-foreground shadow-magic" 
                        : "hover:bg-lilac-magenta/10 hover:text-lilac-magenta hover:border-lilac-magenta/50"
                    }`}
                  >
                    {week.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-electric-blue">{filteredCards.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-lilac-magenta">
              {filteredCards.filter(c => c.rarity === 'legendary').length}
            </div>
            <div className="text-sm text-muted-foreground">Lendárias</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-light">
              {filteredCards.filter(c => c.rarity === 'epic').length}
            </div>
            <div className="text-sm text-muted-foreground">Épicas</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-lime-green">
              {filteredCards.filter(c => c.rarity === 'rare').length}
            </div>
            <div className="text-sm text-muted-foreground">Raras</div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCards.map((card, index) => (
            <motion.div key={card.id} variants={itemVariants}>
              <div className="relative">
                <PlayerCard player={card} />
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="text-xs bg-black/70 border-electric-blue/30 text-electric-blue">
                    {card.weekEarned}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge variant="outline" className="text-xs bg-black/70 border-lilac-magenta/30 text-lilac-magenta">
                    {card.achievement}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCards.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CreditCard className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma carta encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para encontrar o que você procura
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cards;