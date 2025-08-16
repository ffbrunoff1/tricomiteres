import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Pen, Award, Users, Coffee } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: BookOpen, label: 'Livros Publicados', value: '12+' },
    { icon: Heart, label: 'Leitores Satisfeitos', value: '50K+' },
    { icon: Award, label: 'Prêmios Literários', value: '5' },
    { icon: Users, label: 'Comunidade Online', value: '25K+' }
  ]

  const experiences = [
    {
      year: '2018',
      title: 'Primeiro Romance',
      description: 'Estreia na literatura com "Corações Entrelaçados", um sucesso imediato entre os leitores de romance.'
    },
    {
      year: '2020',
      title: 'Trilogia Premiada',
      description: 'Lançamento da trilogia "Destinos Cruzados", ganhadora do Prêmio Nacional de Literatura Romântica.'
    },
    {
      year: '2022',
      title: 'Bestseller Nacional',
      description: 'Alcança o topo das listas de mais vendidos com "Amor Além do Tempo", vendendo mais de 100 mil cópias.'
    },
    {
      year: '2024',
      title: 'Nova Era',
      description: 'Início de uma nova fase literária com histórias mais maduras e profundas sobre relacionamentos modernos.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-6"
          >
            <Pen className="h-4 w-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Sobre o Autor</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            A Jornada de um
            <span className="block gradient-text">Contador de Histórias</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Cada livro é uma janela para mundos onde o amor transcende barreiras e os 
            sentimentos ganham vida através de personagens únicos e envolventes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-3xl blur-3xl transform -rotate-6"></div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                    <Coffee className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">Tricomiteres</h3>
                    <p className="text-primary-600 font-semibold">Escritor de Romances</p>
                  </div>
                </div>
                
                <p className="text-secondary-700 leading-relaxed mb-6">
                  Apaixonado pela arte de contar histórias que tocam o coração, dedico minha vida 
                  a criar narrativas que exploram a complexidade do amor humano. Cada personagem 
                  nasce de uma observação cuidadosa da vida real, transformada em ficção através 
                  da magia das palavras.
                </p>
                
                <p className="text-secondary-700 leading-relaxed mb-6">
                  Acredito que o romance é mais que entretenimento - é uma forma de conectar 
                  pessoas através de experiências universais de amor, perda, esperança e redenção. 
                  Meus livros são convites para jornadas emocionais que deixam marcas duradouras 
                  na alma de quem os lê.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['Romance Contemporâneo', 'Drama Romântico', 'Ficção Emocional'].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Trajetória Literária</h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-6 border-l-2 border-primary-200 last:border-l-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-bold">
                          {exp.year}
                        </span>
                        <h4 className="font-bold text-secondary-900">{exp.title}</h4>
                      </div>
                      <p className="text-secondary-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}