import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import PlayerCard from "@/components/PlayerCard";

const Players = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");

  const mockPlayers = [
    {
      id: "1",
      name: "brTT",
      team: "LOUD",
      position: "ADC",
      rating: 94,
      image: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
      country: "🇧🇷",
      stats: { kda: "2.8", winRate: "73%", mvpCount: 8 },
      rarity: "legendary" as const
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
      rarity: "epic" as const
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
      rarity: "legendary" as const
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
      rarity: "epic" as const
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
      rarity: "rare" as const
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
      rarity: "rare" as const
    }
  ];

  const positions = ["all", "TOP", "JGL", "MID", "ADC", "SUP"];
  const teams = ["all", "LOUD", "paiN", "T1", "G2", "FNC", "GenG"];

  const filteredPlayers = mockPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition === "all" || player.position === selectedPosition;
    const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
    
    return matchesSearch && matchesPosition && matchesTeam;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-4">
            Jogadores
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os melhores jogadores das principais ligas de LoL
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-md rounded-lg border border-border/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar jogador ou time..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 focus:border-gold/50"
              />
            </div>

            {/* Position Filter */}
            <div className="flex flex-wrap gap-2">
              {positions.map((position) => (
                <Button
                  key={position}
                  variant={selectedPosition === position ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPosition(position)}
                  className={`transition-all duration-300 ${
                    selectedPosition === position 
                      ? "bg-gradient-royal text-primary-foreground shadow-royal" 
                      : "hover:bg-gold/10 hover:text-gold hover:border-gold/50"
                  }`}
                >
                  {position === "all" ? "TODAS" : position}
                </Button>
              ))}
            </div>

            {/* Team Filter */}
            <div className="flex flex-wrap gap-2">
              {teams.map((team) => (
                <Button
                  key={team}
                  variant={selectedTeam === team ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTeam(team)}
                  className={`transition-all duration-300 ${
                    selectedTeam === team 
                      ? "bg-gradient-magic text-secondary-foreground shadow-magic" 
                      : "hover:bg-magic/10 hover:text-magic hover:border-magic/50"
                  }`}
                >
                  {team === "all" ? "TODOS" : team}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum jogador encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para encontrar o que você procura
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;