import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Sparkles, Zap } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import PlayerCard from "@/components/PlayerCard";

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
    { value: "current", label: "Semana Atual" },
    { value: "8", label: "Semana 8" },
    { value: "7", label: "Semana 7" },
    { value: "6", label: "Semana 6" },
    { value: "5", label: "Semana 5" }
  ];

  const filteredCards = mockCards.filter(card => {
    const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
    const matchesWeek = selectedWeek === "current" || card.weekEarned.includes(selectedWeek);
    
    return matchesRarity && matchesWeek;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary": return "text-gold";
      case "epic": return "text-magic";
      case "rare": return "text-cyber";
      default: return "text-muted-foreground";
    }
  };

  const rarityCount = {
    legendary: mockCards.filter(c => c.rarity === "legendary").length,
    epic: mockCards.filter(c => c.rarity === "epic").length,
    rare: mockCards.filter(c => c.rarity === "rare").length
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-4">
            Coleção de Cartas
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cartas especiais baseadas no desempenho semanal dos jogadores
          </p>
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-card border border-gold/20 rounded-lg p-4 text-center">
            <Trophy className="h-8 w-8 text-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-gold">{rarityCount.legendary}</div>
            <div className="text-sm text-muted-foreground">Lendárias</div>
          </div>
          <div className="bg-gradient-card border border-magic/20 rounded-lg p-4 text-center">
            <Sparkles className="h-8 w-8 text-magic mx-auto mb-2" />
            <div className="text-2xl font-bold text-magic">{rarityCount.epic}</div>
            <div className="text-sm text-muted-foreground">Épicas</div>
          </div>
          <div className="bg-gradient-card border border-cyber/20 rounded-lg p-4 text-center">
            <Zap className="h-8 w-8 text-cyber mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyber">{rarityCount.rare}</div>
            <div className="text-sm text-muted-foreground">Raras</div>
          </div>
          <div className="bg-gradient-card border border-border/20 rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{mockCards.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-md rounded-lg border border-border/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Rarity Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground mb-3">Raridade</h3>
              <div className="flex flex-wrap gap-2">
                {rarities.map((rarity) => {
                  const Icon = rarity.icon;
                  return (
                    <Button
                      key={rarity.value}
                      variant={selectedRarity === rarity.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRarity(rarity.value)}
                      className={`transition-all duration-300 border-2 ${
                        selectedRarity === rarity.value 
                          ? "bg-electric-blue text-white border-electric-blue shadow-electric transform scale-105" 
                          : "hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/50 border-border bg-card"
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {rarity.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Week Filter */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground mb-3">Semana</h3>
              <div className="flex flex-wrap gap-2">
                {weeks.map((week) => (
                  <Button
                    key={week.value}
                    variant={selectedWeek === week.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedWeek(week.value)}
                    className={`transition-all duration-300 ${
                      selectedWeek === week.value 
                        ? "bg-gradient-magic text-secondary-foreground shadow-magic" 
                        : "hover:bg-magic/10 hover:text-magic hover:border-magic/50"
                    }`}
                  >
                    {week.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCards.map((card) => (
            <div key={card.id} className="relative">
              <PlayerCard player={card} />
              <div className="absolute top-2 left-2 z-30">
                <Badge className={`bg-black/80 border-none ${getRarityColor(card.rarity)}`}>
                  {card.achievement}
                </Badge>
              </div>
              <div className="absolute bottom-2 right-2 z-30">
                <Badge variant="outline" className="bg-black/80 border-gold/30 text-gold text-xs">
                  {card.weekEarned}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma carta encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para encontrar cartas específicas
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;