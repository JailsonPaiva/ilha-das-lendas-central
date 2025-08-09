import { motion } from "framer-motion";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  color?: "electric-blue" | "magenta" | "cyan-light" | "lime-green";
  text?: string;
}

const Loading = ({ size = "md", color = "electric-blue", text }: LoadingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const colorClasses = {
    "electric-blue": "border-electric-blue",
    "magenta": "border-magenta",
    "cyan-light": "border-cyan-light",
    "lime-green": "border-lime-green"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]} animate-spin`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p 
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loading;
