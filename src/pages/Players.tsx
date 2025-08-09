import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Users, Trophy, Star } from "lucide-react";
import Header from "@/components/ui/header";
import PlayerCard from "@/components/PlayerCard";
import { motion } from "framer-motion";

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
            <Users className="h-8 w-8 mr-3" />
            Jogadores
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os melhores jogadores das principais ligas de LoL
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
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar jogador ou time..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 focus:border-electric-blue/50 transition-all duration-300"
              />
            </div>

            {/* Position Filter */}
            <div className="flex flex-wrap gap-2">
              {positions.map((position, index) => (
                <motion.div
                  key={position}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Button
                    variant={selectedPosition === position ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPosition(position)}
                    className={`transition-all duration-300 ${
                      selectedPosition === position 
                        ? "bg-gradient-main text-primary-foreground shadow-electric" 
                        : "hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/50"
                    }`}
                  >
                    {position === "all" ? "TODAS" : position}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Team Filter */}
            <div className="flex flex-wrap gap-2">
              {teams.map((team, index) => (
                <motion.div
                  key={team}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    variant={selectedTeam === team ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTeam(team)}
                    className={`transition-all duration-300 ${
                      selectedTeam === team 
                        ? "bg-gradient-magic text-secondary-foreground shadow-magic" 
                        : "hover:bg-lilac-magenta/10 hover:text-lilac-magenta hover:border-lilac-magenta/50"
                    }`}
                  >
                    {team === "all" ? "TODOS" : team}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-electric-blue">{filteredPlayers.length}</div>
            <div className="text-sm text-muted-foreground">Jogadores</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-lilac-magenta">
              {filteredPlayers.filter(p => p.rarity === 'legendary').length}
            </div>
            <div className="text-sm text-muted-foreground">Lendários</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-light">
              {Math.max(...filteredPlayers.map(p => p.rating))}
            </div>
            <div className="text-sm text-muted-foreground">Maior Rating</div>
          </div>
        </motion.div>

        {/* Players Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPlayers.map((player, index) => (
            <motion.div key={player.id} variants={itemVariants}>
              <PlayerCard player={player} />
            </motion.div>
          ))}
        </motion.div>

        {filteredPlayers.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum jogador encontrado
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

export default Players;