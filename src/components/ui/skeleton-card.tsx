import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface SkeletonCardProps {
  className?: string;
  height?: string;
  shimmer?: boolean;
}

const SkeletonCard = ({ className = "", height = "h-48", shimmer = true }: SkeletonCardProps) => {
  return (
    <Card className={`${className} ${height} relative overflow-hidden glass-effect`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-card/20 to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="h-full bg-gradient-card animate-pulse"></div>
    </Card>
  );
};

export default SkeletonCard;
