import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlayerCardProps {
  player: {
    id: string;
    name: string;
    team: string;
    position: string;
    rating: number;
    image: string;
    country: string;
    stats: {
      kda: string;
      winRate: string;
      mvpCount: number;
    };
    rarity: "common" | "rare" | "epic" | "legendary";
  };
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const rarityStyles = {
    common: {
      border: "border-muted",
      glow: "shadow-card",
      gradient: "bg-gradient-to-br from-muted/20 to-card"
    },
    rare: {
      border: "border-cyber/50",
      glow: "shadow-cyber",
      gradient: "bg-gradient-to-br from-cyber/10 to-card"
    },
    epic: {
      border: "border-magic/50",
      glow: "shadow-magic",
      gradient: "bg-gradient-to-br from-magic/10 to-card"
    },
    legendary: {
      border: "border-gold/50",
      glow: "shadow-royal",
      gradient: "bg-gradient-to-br from-gold/10 to-card"
    }
  };

  const positionIcons = {
    TOP: "🛡️",
    JGL: "🌿",
    MID: "⚡",
    ADC: "🏹",
    SUP: "💎"
  };

  const style = rarityStyles[player.rarity];

  return (
    <Card className={`
      relative overflow-hidden group cursor-pointer
      ${style.border} ${style.glow} ${style.gradient}
      border-2 transition-all duration-500 ease-out
      hover:scale-105 hover:${style.glow}
      before:absolute before:inset-0 before:bg-gradient-border before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-20
      before:animate-shimmer before:bg-[length:200%_100%]
    `}>
      {/* Ornamental Border Effect */}
      <div className="absolute inset-0 bg-gradient-border opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>
      
      {/* Card Header */}
      <div className="relative p-4 bg-gradient-to-b from-card/80 to-transparent">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs font-bold bg-black/50 border-gold/30 text-gold">
            {player.team}
          </Badge>
          <div className="text-right">
            <div className="text-3xl font-bold text-gold drop-shadow-[0_0_10px_hsl(var(--gold))]">
              {player.rating}
            </div>
            <div className="text-xs text-muted-foreground">RATING</div>
          </div>
        </div>
        
        {/* Player Name */}
        <h3 className="text-xl font-bold text-center text-foreground mb-1 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
          {player.name}
        </h3>
      </div>

      {/* Player Image */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10"></div>
        <img 
          src={player.image} 
          alt={player.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Position & Country */}
        <div className="absolute top-2 left-2 z-20">
          <div className="flex items-center space-x-1 bg-black/70 rounded-full px-2 py-1">
            <span className="text-lg">{positionIcons[player.position as keyof typeof positionIcons]}</span>
            <span className="text-xs font-bold text-foreground">{player.position}</span>
          </div>
        </div>
        
        <div className="absolute top-2 right-2 z-20">
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-sm">{player.country}</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative p-4 bg-gradient-to-t from-card to-transparent">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-sm font-bold text-gold">{player.stats.kda}</div>
            <div className="text-xs text-muted-foreground">KDA</div>
          </div>
          <div>
            <div className="text-sm font-bold text-cyber">{player.stats.winRate}</div>
            <div className="text-xs text-muted-foreground">WIN%</div>
          </div>
          <div>
            <div className="text-sm font-bold text-magic">{player.stats.mvpCount}</div>
            <div className="text-xs text-muted-foreground">MVP</div>
          </div>
        </div>
      </div>

      {/* Rarity Indicator */}
      <div className="absolute bottom-2 left-2">
        <div className={`
          w-3 h-3 rounded-full transition-all duration-300
          ${player.rarity === 'legendary' ? 'bg-gold animate-glow-pulse' :
            player.rarity === 'epic' ? 'bg-magic' :
            player.rarity === 'rare' ? 'bg-cyber' : 'bg-muted'}
        `}></div>
      </div>
    </Card>
  );
};

export default PlayerCard;