import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Trophy, Calendar, Star, Zap } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendário Completo",
      description: "Acompanhe todos os jogos das principais ligas mundiais com horários e transmissões."
    },
    {
      icon: Users,
      title: "Estatísticas de Jogadores",
      description: "Dados detalhados dos melhores pros, incluindo KDA, win rate e performance semanal."
    },
    {
      icon: Trophy,
      title: "Sistema de Cartas",
      description: "Cartas colecionáveis baseadas no desempenho real dos jogadores nas competições."
    },
    {
      icon: Star,
      title: "Destaques Semanais",
      description: "MVP da semana, times em ascensão e estatísticas que marcaram o cenário."
    }
  ];

  const leagues = [
    { name: "CBLOL", region: "Brasil", teams: "10 times" },
    { name: "LCK", region: "Coreia do Sul", teams: "10 times" },
    { name: "LEC", region: "Europa", teams: "10 times" },
    { name: "LCS", region: "América do Norte", teams: "10 times" },
    { name: "LPL", region: "China", teams: "17 times" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="h-16 w-16 text-gold animate-glow-pulse" />
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-4">
            Sobre a Ilha das Lendas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A plataforma definitiva para fãs de League of Legends acompanharem o cenário competitivo mundial
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Criar uma experiência única para os fãs de LoL, combinando informações em tempo real 
                com um sistema gamificado de cartas que celebra o desempenho dos jogadores. 
                Queremos ser o centro de informações do e-sports brasileiro e mundial.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Recursos da Plataforma
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gold/10 rounded-lg">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Leagues Covered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Ligas Cobertas
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leagues.map((league, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center hover:border-gold/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gold">{league.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-2">{league.region}</p>
                  <Badge variant="outline" className="text-xs border-cyber/30 text-cyber">
                    {league.teams}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Em Números
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-gold/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Jogadores</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-cyber/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cyber mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Times</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-magic/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-magic mb-2">5</div>
                <div className="text-sm text-muted-foreground">Ligas Principais</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Atualizações</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Desenvolvido por Fãs
          </h2>
          
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-magic mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos uma equipe apaixonada por League of Legends e e-sports. Criamos esta plataforma 
                para unir nossa paixão por tecnologia com o amor pelo jogo que nos conecta.
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-gold/10 text-gold border-gold/30">
                  LoL Players
                </Badge>
                <Badge className="bg-cyber/10 text-cyber border-cyber/30">
                  Tech Enthusiasts
                </Badge>
                <Badge className="bg-magic/10 text-magic border-magic/30">
                  E-sports Fans
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;