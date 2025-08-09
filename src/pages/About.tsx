import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Trophy, Calendar, Star, Zap, Info } from "lucide-react";
import Header from "@/components/ui/header";
import { motion } from "framer-motion";

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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Crown className="h-16 w-16 text-electric-blue animate-glow-pulse" />
              <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-xl animate-pulse"></div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center">
            <Info className="h-8 w-8 mr-3" />
            Sobre a Ilha das Lendas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A plataforma definitiva para fãs de League of Legends acompanharem o cenário competitivo mundial
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-card border-electric-blue/20 glass-effect max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Criar uma experiência única para os fãs de LoL, combinando informações em tempo real 
                com um sistema gamificado de cartas que celebra o desempenho dos jogadores. 
                Queremos ser o centro de informações do e-sports brasileiro e mundial.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Features */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Recursos da Plataforma
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-card border-electric-blue/20 glass-effect hover:shadow-electric transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-electric-blue/10 rounded-lg">
                          <Icon className="h-6 w-6 text-electric-blue" />
                        </div>
                        <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Leagues */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ligas Cobertas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leagues.map((league, index) => (
              <motion.div
                key={league.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Card className="bg-gradient-card border-lilac-magenta/20 glass-effect text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{league.name}</h3>
                    <p className="text-muted-foreground mb-2">{league.region}</p>
                    <Badge variant="outline" className="border-cyan-light/30 text-cyan-light">
                    {league.teams}
                  </Badge>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">5+</div>
              <div className="text-muted-foreground">Ligas Principais</div>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-lilac-magenta mb-2">50+</div>
              <div className="text-muted-foreground">Times Profissionais</div>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-light mb-2">24/7</div>
              <div className="text-muted-foreground">Cobertura Completa</div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Card className="bg-gradient-card border-electric-blue/20 glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Entre em Contato</h3>
              <p className="text-muted-foreground mb-6">
                Tem sugestões ou quer fazer parte da nossa comunidade? Entre em contato conosco!
              </p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline" className="border-electric-blue/30 text-electric-blue">
                  Discord
                </Badge>
                <Badge variant="outline" className="border-lilac-magenta/30 text-lilac-magenta">
                  Twitter
                </Badge>
                <Badge variant="outline" className="border-cyan-light/30 text-cyan-light">
                  Email
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;