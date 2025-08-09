import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, Trophy, TrendingUp, Crown, Star, Flame, Sparkles, Bell, Settings, User, ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import PlayerCard from "@/components/PlayerCard";
import { motion } from "framer-motion";

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

  const stats = [
    { icon: Users, value: "250+", label: "Happy customer" },
    { icon: Trophy, value: "600+", label: "Completed projects" },
    { icon: Star, value: "1.8K+", label: "Available Resources" },
    { icon: Crown, value: "11K+", label: "Subscribers" }
  ];

  const liveStreams = [
    { id: 1, title: "LOUD vs paiN", viewers: "52.1K" },
    { id: 2, title: "T1 vs GenG", viewers: "45.3K" },
    { id: 3, title: "G2 vs FNC", viewers: "38.7K" },
    { id: 4, title: "Flamengo vs KaBuM", viewers: "29.2K" },
    { id: 5, title: "Cloud9 vs TL", viewers: "33.1K" },
    { id: 6, title: "EDG vs RNG", viewers: "41.5K" }
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Acompanhe as{" "}
                <span className="text-gradient">Lendas</span>
            </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Estatísticas, cartas exclusivas e transmissões ao vivo das principais ligas de LoL
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white transition-all duration-300 text-lg px-8 py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Ver Calendário
                </Button>
                <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 text-lg px-8 py-6">
                  <Trophy className="h-5 w-5 mr-2" />
                  Explorar Cartas
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Smartphone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-96 mx-auto">
                {/* Smartphone Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-dark-purple to-black p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-sm font-semibold">Ilha das Lendas</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                          <div className="w-2 h-2 bg-lilac-magenta rounded-full"></div>
                          <div className="w-2 h-2 bg-cyan-light rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 bg-gradient-to-r from-electric-blue to-lilac-magenta rounded-lg"></div>
                        <div className="h-6 bg-gray-700 rounded"></div>
                        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-12 bg-gradient-to-r from-dark-purple to-black rounded-lg border border-electric-blue/30"></div>
                        <div className="h-8 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-purple/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-card border-electric-blue/20 text-center p-6 glass-effect">
                    <Icon className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Bibendum amet at molestie mattis.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-gradient-card rounded-lg border border-electric-blue/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white rounded-full w-16 h-16">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
                </div>
          </motion.div>

          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center space-x-8 mt-12"
          >
            {["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue"].map((company, index) => (
              <div key={company} className="text-gray-500 font-semibold text-sm">
                {company}
              </div>
            ))}
          </motion.div>
        </div>
        </section>

      {/* Live Streams Section */}
      <section className="py-16 bg-dark-purple/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-electric-blue text-sm font-semibold mb-2">LIVES</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Confira as ultimas transmissões realizada pela lendas.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {liveStreams.map((stream, index) => (
              <motion.div key={stream.id} variants={itemVariants}>
                <Card className="bg-gradient-card border-electric-blue/20 overflow-hidden glass-effect">
                  <div className="aspect-video bg-gradient-to-br from-dark-purple to-black relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-500 text-4xl">×</div>
                        </div>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {stream.viewers}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold text-sm">{stream.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Ver mais
            </Button>
          </motion.div>
            </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-electric-blue text-sm font-semibold mb-2">CAPTION</div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis.
              </h2>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                  Primary Action
                </Button>
                <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                  Secondary Action
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-video bg-gradient-card rounded-lg border border-electric-blue/20 flex items-center justify-center">
                <div className="text-gray-500 text-4xl">×</div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dark-purple/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Depoimentos</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { company: "Zoomerr", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Author Name", role: "Role" },
              { company: "ArtVenue", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Author Name", role: "Role" }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gradient-card border-electric-blue/20 p-6 glass-effect">
                  <div className="text-electric-blue font-semibold mb-4">{testimonial.company}</div>
                  <p className="text-gray-300 mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-lilac-magenta rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                    </div>
              </Card>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </section>

      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-white font-bold">WebbyFrames</div>
              <div className="text-gray-400">for Figma</div>
            </div>
            <div className="text-gray-400 text-sm">
              CompanyName @202X. All rights reserved
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {["Facebook", "Twitter", "YouTube", "Instagram", "LinkedIn"].map((social, index) => (
                  <div key={social} className="w-6 h-6 bg-gray-600 rounded"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 text-sm text-gray-400">
            {["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen"].map((link, index) => (
              <div key={link} className="hover:text-electric-blue cursor-pointer">{link}</div>
            ))}
          </div>
      </div>
      </footer>
    </div>
  );
};

export default Index;