import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, Play, Eye, TrendingUp } from "lucide-react";
import Header from "@/components/ui/header";
import { motion } from "framer-motion";

const Calendar = () => {
  const [selectedLeague, setSelectedLeague] = useState("all");

  const mockGames = [
    {
      id: 1,
      league: "CBLOL",
      team1: "LOUD",
      team2: "paiN",
      date: "2024-08-02",
      time: "19:00",
      status: "live",
      viewers: "45.2K"
    },
    {
      id: 2,
      league: "LCK",
      team1: "T1",
      team2: "GenG",
      date: "2024-08-03",
      time: "06:00",
      status: "upcoming",
      viewers: null
    },
    {
      id: 3,
      league: "LEC",
      team1: "G2",
      team2: "FNC",
      date: "2024-08-03",
      time: "15:00",
      status: "upcoming",
      viewers: null
    },
    {
      id: 4,
      league: "CBLOL",
      team1: "Flamengo",
      team2: "KaBuM",
      date: "2024-08-01",
      time: "20:00",
      status: "finished",
      score: "2-1",
      viewers: "38.7K"
    }
  ];

  const leagues = ["all", "CBLOL", "LCK", "LEC", "LCS"];

  const filteredGames = selectedLeague === "all" 
    ? mockGames 
    : mockGames.filter(game => game.league === selectedLeague);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-red-500 text-white animate-pulse">AO VIVO</Badge>;
      case "upcoming":
        return <Badge variant="outline" className="border-electric-blue text-electric-blue">PRÓXIMO</Badge>;
      case "finished":
        return <Badge variant="outline" className="border-muted text-muted-foreground">FINALIZADO</Badge>;
      default:
        return null;
    }
  };

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
            <CalendarIcon className="h-8 w-8 mr-3" />
            Calendário de Jogos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe todos os jogos das principais ligas de LoL
          </p>
        </motion.div>

        {/* League Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {leagues.map((league, index) => (
            <motion.div
              key={league}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Button
                variant={selectedLeague === league ? "default" : "outline"}
                onClick={() => setSelectedLeague(league)}
                className={`transition-all duration-300 ${
                  selectedLeague === league 
                    ? "bg-gradient-main text-primary-foreground shadow-electric" 
                    : "hover:bg-electric-blue/10 hover:text-electric-blue hover:border-electric-blue/50"
                }`}
              >
                {league === "all" ? "TODAS" : league}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-electric-blue">{filteredGames.length}</div>
            <div className="text-sm text-muted-foreground">Total de Jogos</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-lilac-magenta">
              {filteredGames.filter(g => g.status === 'live').length}
            </div>
            <div className="text-sm text-muted-foreground">Ao Vivo</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-light">
              {filteredGames.filter(g => g.status === 'upcoming').length}
            </div>
            <div className="text-sm text-muted-foreground">Próximos</div>
          </div>
        </motion.div>

        {/* Games Grid */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredGames.map((game, index) => (
            <motion.div key={game.id} variants={itemVariants}>
              <Card className="bg-gradient-card border-electric-blue/20 glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <Badge variant="outline" className="border-electric-blue/30 text-electric-blue mb-2">
                          {game.league}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {new Date(game.date).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="font-bold text-white">{game.team1}</div>
                          {game.status === "finished" && (
                            <div className="text-sm text-muted-foreground">{game.score?.split('-')[0]}</div>
                          )}
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gradient">VS</div>
                          <div className="text-sm text-muted-foreground">{game.time}</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-bold text-white">{game.team2}</div>
                          {game.status === "finished" && (
                            <div className="text-sm text-muted-foreground">{game.score?.split('-')[1]}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(game.status)}
                      
                      {game.viewers && (
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{game.viewers}</span>
                        </div>
                      )}
                      
                      {game.status === "live" && (
                        <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                          <Play className="h-4 w-4 mr-1" />
                          Assistir
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredGames.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CalendarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum jogo encontrado
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

export default Calendar;