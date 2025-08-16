import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Calendar, MessageCircle, Award } from 'lucide-react'

export default function Services() {
  const books = [
    {
      title: 'Corações Entrelaçados',
      description: 'Uma história tocante sobre dois destinos que se cruzam de forma inesperada, provando que o amor pode superar qualquer obstáculo.',
      genre: 'Romance Contemporâneo',
      rating: 5,
      status: 'Bestseller',
      icon: Heart
    },
    {
      title: 'Destinos Cruzados',
      description: 'Trilogia premiada que explora as complexidades do amor através de três gerações de uma família, cada uma enfrentando seus próprios desafios.',
      genre: 'Saga Familiar',
      rating: 5,
      status: 'Série Premiada',
      icon: Star
    },
    {
      title: 'Amor Além do Tempo',
      description: 'Um romance que transcende épocas, onde o amor verdadeiro desafia as barreiras do tempo e do espaço para unir duas almas gêmeas.',
      genre: 'Romance Fantástico',
      rating: 5,
      status: 'Mais Vendido',
      icon: Award
    },
    {
      title: 'Sussurros do Coração',
      description: 'Uma narrativa delicada sobre segundas chances e a coragem de amar novamente após grandes perdas e desilusões.',
      genre: 'Drama Romântico',
      rating: 4,
      status: 'Novo Lançamento',
      icon: MessageCircle
    },
    {
      title: 'Primavera Eterna',
      description: 'A história de um amor que floresce na maturidade, provando que nunca é tarde demais para encontrar a felicidade verdadeira.',
      genre: 'Romance Maduro',
      rating: 5,
      status: 'Indicado a Prêmio',
      icon: Calendar
    },
    {
      title: 'Romance Secreto',
      description: 'Em breve: Uma nova obra que promete surpreender os leitores com uma trama envolvente sobre amores proibidos e segredos familiares.',
      genre: 'Romance Mistério',
      rating: null,
      status: 'Em Breve',
      icon: BookOpen
    }
  ]

  const services = [
    {
      title: 'Palestras Literárias',
      description: 'Compartilho minha experiência como escritor em eventos, universidades e clubes de leitura, inspirando novos talentos.',
      icon: MessageCircle,
      highlights: ['Técnicas de escrita', 'Criação de personagens', 'Desenvolvimento de enredo']
    },
    {
      title: 'Mentoria para Escritores',
      description: 'Orientação personalizada para escritores iniciantes que desejam desenvolver suas habilidades no gênero romance.',
      icon: BookOpen,
      highlights: ['Análise de manuscritos', 'Feedback detalhado', 'Plano de desenvolvimento']
    },
    {
      title: 'Eventos e Encontros',
      description: 'Participação em feiras do livro, lançamentos e encontros com leitores para discutir literatura e amor pelos livros.',
      icon: Calendar,
      highlights: ['Sessões de autógrafos', 'Bate-papo com leitores', 'Lançamentos exclusivos']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
            <BookOpen className="h-4 w-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Obras & Serviços</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            Universos de
            <span className="block gradient-text">Romance e Emoção</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Descubra histórias que ficarão para sempre em seu coração e explore oportunidades 
            de crescimento no mundo da literatura romântica.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-12"
          >
            Biblioteca de Romances
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => {

const IconComponent = book.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        book.status === 'Bestseller' ? 'bg-accent-100 text-accent-800' :
                        book.status === 'Série Premiada' ? 'bg-purple-100 text-purple-800' :
                        book.status === 'Mais Vendido' ? 'bg-green-100 text-green-800' :
                        book.status === 'Novo Lançamento' ? 'bg-blue-100 text-blue-800' :
                        book.status === 'Indicado a Prêmio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {book.status}
                      </span>
                      
                      {book.rating && (
                        <div className="flex items-center justify-end mt-2 space-x-1">
                          {[...Array(book.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-secondary-900 mb-3">{book.title}</h4>
                    <p className="text-secondary-600 leading-relaxed mb-4">{book.description}</p>
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                      {book.genre}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="https://www.amazon.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-center block"
                    >
                      {book.status === 'Em Breve' ? 'Notificar Lançamento' : 'Comprar Agora'}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-12"
          >
            Serviços Literários
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {

const IconComponent = service.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div className="text-center flex-grow">
                    <h4 className="text-xl font-bold text-secondary-900 mb-4">{service.title}</h4>
                    <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      {service.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-secondary-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="w-full btn-secondary text-center block"
                    >
                      Saber Mais
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}