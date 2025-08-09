import Header from "@/components/ui/header";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Target } from "lucide-react";
import { motion } from "framer-motion";

interface TeamPrediction {
  teamLogo: string;
  teamName: string;
  score: string;
}

interface UserPrediction {
  id: number;
  position: number;
  name: string;
  avatar: string;
  predictions: TeamPrediction[];
  totalPoints: number;
}

const Palpites = () => {
  // Dados mockados baseados na imagem
  const userPredictions: UserPrediction[] = [
    {
      id: 1,
      position: 1,
      name: "BAIANO",
      avatar: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
      predictions: [
        { teamLogo: "🐆", teamName: "FURIA", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x1" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x0" }
      ],
      totalPoints: 21
    },
    {
      id: 2,
      position: 2,
      name: "TAY",
      avatar: "/lovable-uploads/8cf85f12-d0de-4acd-a823-495a1e966741.png",
      predictions: [
        { teamLogo: "🐆", teamName: "FURIA", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x0" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x0" }
      ],
      totalPoints: 19
    },
    {
      id: 3,
      position: 3,
      name: "ACGEZ",
      avatar: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
      predictions: [
        { teamLogo: "🐆", teamName: "FURIA", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x1" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x0" }
      ],
      totalPoints: 17
    },
    {
      id: 4,
      position: 4,
      name: "BRUCER",
      avatar: "/lovable-uploads/8cf85f12-d0de-4acd-a823-495a1e966741.png",
      predictions: [
        { teamLogo: "🐆", teamName: "FURIA", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x1" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x1" }
      ],
      totalPoints: 17
    },
    {
      id: 5,
      position: 5,
      name: "ESA",
      avatar: "/lovable-uploads/355b31b9-1f1e-45ea-84bf-0c92536aad2b.png",
      predictions: [
        { teamLogo: "🐆", teamName: "FURIA", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x1" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x0" }
      ],
      totalPoints: 17
    },
    {
      id: 6,
      position: 6,
      name: "MYLON",
      avatar: "/lovable-uploads/8cf85f12-d0de-4acd-a823-495a1e966741.png",
      predictions: [
        { teamLogo: "🏆", teamName: "PAIN", score: "2x1" },
        { teamLogo: "⚡", teamName: "SANTOS", score: "2x1" },
        { teamLogo: "🔘", teamName: "QWERTY", score: "2x0" },
        { teamLogo: "🔴", teamName: "TEAM LIQUID", score: "2x0" }
      ],
      totalPoints: 17
    }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{position}</span>;
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
            <Target className="h-8 w-8 mr-3" />
            Palpites
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ranking dos melhores prognosticadores da comunidade
          </p>
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-electric-blue">{userPredictions.length}</div>
            <div className="text-sm text-muted-foreground">Participantes</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-lilac-magenta">
              {Math.max(...userPredictions.map(u => u.totalPoints))}
            </div>
            <div className="text-sm text-muted-foreground">Maior Pontuação</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-light">
              {userPredictions.filter(u => u.totalPoints >= 15).length}
            </div>
            <div className="text-sm text-muted-foreground">Acima de 15pts</div>
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {userPredictions.map((user, index) => (
            <motion.div key={user.id} variants={itemVariants}>
              <Card className="bg-gradient-card border-electric-blue/20 glass-effect">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getPositionIcon(user.position)}
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.totalPoints} pontos</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {user.predictions.map((prediction, predIndex) => (
                      <div key={predIndex} className="text-center p-3 bg-dark-purple/30 rounded-lg">
                        <div className="text-2xl mb-1">{prediction.teamLogo}</div>
                        <div className="text-sm font-semibold text-white">{prediction.teamName}</div>
                        <div className="text-xs text-muted-foreground">{prediction.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Palpites;