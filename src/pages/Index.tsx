import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, Trophy, TrendingUp, Crown, Star, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import PlayerCard from "@/components/PlayerCard";

const Index = () => {
  const liveGame = {
    team1: "LOUD",
    team2: "paiN", 
    league: "CBLOL",
    viewers: "52.1K",
    time: "34:22"
  };

  const featuredPlayer = {
    id: "1",
    name: "brTT",
    team: "LOUD",
    position: "ADC",
    rating: 94,
    image: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
    country: "🇧🇷",
    stats: { kda: "2.8", winRate: "73%", mvpCount: 8 },
    rarity: "legendary" as const
  };

  const upcomingGames = [
    { team1: "T1", team2: "GenG", league: "LCK", time: "06:00" },
    { team1: "G2", team2: "FNC", league: "LEC", time: "15:00" },
    { team1: "Flamengo", team2: "KaBuM", league: "CBLOL", time: "20:00" }
  ];

  const weekHighlights = [
    { title: "Time em Ascensão", team: "LOUD", change: "+15%" },
    { title: "Maior KDA", player: "Faker", value: "4.1" },
    { title: "MVP Total", player: "brTT", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-card/30 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Crown className="h-16 w-16 text-gold animate-glow-pulse" />
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-royal bg-clip-text text-transparent">
                Ilha das Lendas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A plataforma definitiva para acompanhar estatísticas, cartas e transmissões de League of Legends
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calendario">
                <Button size="lg" className="bg-gradient-royal hover:shadow-royal transition-all duration-300 text-lg px-8 py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Ver Calendário
                </Button>
              </Link>
              <Link to="/cartas">
                <Button size="lg" variant="outline" className="hover:bg-gold/10 hover:border-gold hover:text-gold transition-all duration-300 text-lg px-8 py-6">
                  <Trophy className="h-5 w-5 mr-2" />
                  Explorar Cartas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Live Game Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">🔴 AO VIVO AGORA</h2>
          </div>
          
          <Card className="relative overflow-hidden bg-gradient-card border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.3)] max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
            
            <CardHeader className="text-center relative">
              <Badge className="bg-red-500 text-white animate-pulse mx-auto mb-4">
                AO VIVO • {liveGame.viewers} espectadores
              </Badge>
              
              <CardTitle className="text-2xl">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-foreground font-bold">{liveGame.team1}</span>
                  <span className="text-3xl text-gold">VS</span>
                  <span className="text-foreground font-bold">{liveGame.team2}</span>
                </div>
              </CardTitle>
              
              <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="border-gold/30 text-gold">{liveGame.league}</Badge>
                <span>•</span>
                <span>{liveGame.time}</span>
              </div>
            </CardHeader>
            
            <CardContent className="text-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white transition-all duration-300">
                <Play className="h-5 w-5 mr-2" />
                Assistir Agora
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Player of the Week */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Star className="h-6 w-6 text-gold mr-2" />
              Jogador da Semana
            </h3>
            <PlayerCard player={featuredPlayer} />
          </div>

          {/* Upcoming Games */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-cyber mr-2" />
              Próximos Jogos
            </h3>
            
            <div className="space-y-4">
              {upcomingGames.map((game, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-gold/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="border-cyber/30 text-cyber">
                          {game.league}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-foreground">{game.team1}</span>
                          <span className="text-gold">VS</span>
                          <span className="font-semibold text-foreground">{game.team2}</span>
                        </div>
                      </div>
                      <div className="text-muted-foreground">{game.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6">
              <Link to="/calendario">
                <Button variant="outline" className="w-full hover:bg-cyber/10 hover:border-cyber hover:text-cyber transition-all duration-300">
                  Ver Calendário Completo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Week Highlights */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Flame className="h-6 w-6 text-magic mr-2" />
            Destaques da Semana
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {weekHighlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {highlight.team && (
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-2">{highlight.team}</div>
                      <div className="text-green-400 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {highlight.change}
                      </div>
                    </div>
                  )}
                  {highlight.player && (
                    <div>
                      <div className="text-2xl font-bold text-gold mb-2">{highlight.player}</div>
                      <div className="text-xl text-magic">{highlight.value}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Explorar Mais</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/jogadores">
              <Card className="bg-gradient-card border-border/50 hover:border-gold/30 hover:shadow-royal transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Jogadores</h4>
                  <p className="text-muted-foreground">Estatísticas completas dos pros</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/cartas">
              <Card className="bg-gradient-card border-border/50 hover:border-magic/30 hover:shadow-magic transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-magic mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Cartas</h4>
                  <p className="text-muted-foreground">Coleção baseada em performance</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/calendario">
              <Card className="bg-gradient-card border-border/50 hover:border-cyber/30 hover:shadow-cyber transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-cyber mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Agenda</h4>
                  <p className="text-muted-foreground">Todos os jogos e horários</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;