import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, Play, Eye, TrendingUp } from "lucide-react";
import Navigation from "@/components/ui/navigation";

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
        return <Badge variant="outline" className="border-cyber text-cyber">PRÓXIMO</Badge>;
      case "finished":
        return <Badge variant="outline" className="border-muted text-muted-foreground">FINALIZADO</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-4">
            Calendário de Jogos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe todos os jogos das principais ligas de LoL
          </p>
        </div>

        {/* League Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {leagues.map((league) => (
            <Button
              key={league}
              variant={selectedLeague === league ? "default" : "outline"}
              onClick={() => setSelectedLeague(league)}
              className={`transition-all duration-300 ${
                selectedLeague === league 
                  ? "bg-gradient-royal text-primary-foreground shadow-royal" 
                  : "hover:bg-gold/10 hover:text-gold hover:border-gold/50"
              }`}
            >
              {league === "all" ? "TODAS" : league}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <Card key={game.id} className="relative overflow-hidden group hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-black/50 border-gold/30 text-gold">
                    {game.league}
                  </Badge>
                  {getStatusBadge(game.status)}
                </div>
                
                <CardTitle className="text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-lg font-bold text-foreground">{game.team1}</span>
                    <span className="text-2xl text-gold">VS</span>
                    <span className="text-lg font-bold text-foreground">{game.team2}</span>
                  </div>
                  {game.score && (
                    <div className="text-2xl font-bold text-gold mt-2">{game.score}</div>
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(game.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{game.time}</span>
                  </div>
                </div>

                {game.viewers && (
                  <div className="flex items-center justify-center space-x-1 text-sm text-cyber mb-4">
                    <Eye className="h-4 w-4" />
                    <span>{game.viewers} espectadores</span>
                  </div>
                )}

                <div className="flex space-x-2">
                  {game.status === "live" && (
                    <Button className="flex-1 bg-gradient-royal hover:shadow-royal transition-all duration-300">
                      <Play className="h-4 w-4 mr-2" />
                      Assistir Agora
                    </Button>
                  )}
                  
                  {game.status === "finished" && (
                    <>
                      <Button variant="outline" className="flex-1 hover:bg-cyber/10 hover:border-cyber hover:text-cyber">
                        <Play className="h-4 w-4 mr-2" />
                        Replay
                      </Button>
                      <Button variant="outline" className="flex-1 hover:bg-magic/10 hover:border-magic hover:text-magic">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Stats
                      </Button>
                    </>
                  )}
                  
                  {game.status === "upcoming" && (
                    <Button variant="outline" className="flex-1 hover:bg-gold/10 hover:border-gold hover:text-gold" disabled>
                      <Clock className="h-4 w-4 mr-2" />
                      Em Breve
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;