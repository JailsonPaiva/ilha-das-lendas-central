import Navigation from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

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
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-main bg-clip-text text-transparent">
              Palpites da IDLH
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Ranking dos melhores palpiteiros da comunidade
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <div className="p-6">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 mb-6 pb-4 border-b border-border">
              <div className="col-span-1 text-center">
                <span className="font-bold text-sm text-muted-foreground">#</span>
              </div>
              <div className="col-span-3">
                <span className="font-bold text-sm text-muted-foreground">USUÁRIO</span>
              </div>
              <div className="col-span-6 text-center">
                <span className="font-bold text-sm text-muted-foreground">PALPITES</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-bold text-sm text-muted-foreground">PONTOS</span>
              </div>
            </div>

            {/* Ranking List */}
            <div className="space-y-4">
              {userPredictions.map((user) => (
                <div 
                  key={user.id}
                  className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg transition-all duration-300 hover:bg-card/80 ${
                    user.position <= 3 ? 'bg-gradient-to-r from-electric-blue/10 to-transparent border border-electric-blue/20' : 'bg-card/30'
                  }`}
                >
                  {/* Position */}
                  <div className="col-span-1 text-center flex items-center justify-center">
                    {getPositionIcon(user.position) || (
                      <span className="text-2xl font-bold text-muted-foreground">
                        {user.position}°
                      </span>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-electric-blue/30"
                      />
                      {user.position <= 3 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{user.position}</span>
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-foreground">{user.name}</span>
                  </div>

                  {/* Predictions */}
                  <div className="col-span-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {user.predictions.map((prediction, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2 border border-border/50"
                        >
                          <span className="text-lg">{prediction.teamLogo}</span>
                          <span className="font-bold text-electric-blue text-sm">
                            {prediction.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total Points */}
                  <div className="col-span-2 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${
                      user.position === 1 
                        ? 'bg-gradient-main text-white shadow-electric' 
                        : 'bg-card text-foreground border border-border'
                    }`}>
                      {user.totalPoints}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Notice */}
            <div className="mt-8 p-4 bg-electric-blue/10 border border-electric-blue/20 rounded-lg">
              <p className="text-sm text-electric-blue text-center">
                <strong>📢 Atenção:</strong> Os palpites do chat serão definidos ao vivo, antes do início dos jogos
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Palpites;