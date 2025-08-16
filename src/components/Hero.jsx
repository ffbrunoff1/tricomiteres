import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Heart, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-600/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 mb-6"
              >
                <BookOpen className="h-6 w-6 text-accent-400" />
                <span className="text-accent-400 font-semibold uppercase tracking-wider text-sm">
                  Escritor de Romances
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block">Tricomiteres</span>
                <span className="block text-transparent bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text">
                  Histórias que
                </span>
                <span className="block">acalmam</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                Mergulhe em universos de romance e emoção. Cada página é uma jornada através 
                de sentimentos profundos e personagens inesquecíveis que ficarão para sempre 
                em seu coração.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-2xl hover:scale-105 group"
                >
                  Descobrir Livros
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a
                  href="#about"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                >
                  Conhecer o Autor
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center space-x-8"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent-400 fill-current" />
                  <span className="text-gray-300">Histórias Premiadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-accent-400 fill-current" />
                  <span className="text-gray-300">Leitores Apaixonados</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full flex items-center justify-center"
                    >
                      <BookOpen className="h-12 w-12 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Próximo Lançamento
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      Uma nova história de amor que promete emocionar e surpreender. 
                      Prepare-se para uma jornada inesquecível.
                    </p>
                    
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                      <div className="text-accent-400 font-semibold mb-2">Em Breve</div>
                      <div className="text-white font-bold text-lg">Romance Secreto</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}