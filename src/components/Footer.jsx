import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Obras',
      links: [
        { name: 'Corações Entrelaçados', href: 'https://www.amazon.com.br' },
        { name: 'Destinos Cruzados', href: 'https://www.amazon.com.br' },
        { name: 'Amor Além do Tempo', href: 'https://www.amazon.com.br' },
        { name: 'Sussurros do Coração', href: 'https://www.amazon.com.br' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Palestras Literárias', href: '#contact' },
        { name: 'Mentoria para Escritores', href: '#contact' },
        { name: 'Eventos e Encontros', href: '#contact' },
        { name: 'Consultoria Editorial', href: '#contact' }
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: 'Email', href: 'mailto:ffbrunoff@yahoo.com.br' },
        { name: 'Palestras', href: '#contact' },
        { name: 'Parcerias', href: '#contact' },
        { name: 'Imprensa', href: '#contact' }
      ]
    }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-800 to-secondary-900"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container-custom pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Tricomiteres</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Escritor apaixonado por romances que acalmam a alma e transformam corações. 
                Cada história é uma jornada única através do universo das emoções humanas.
              </p>

              <div className="flex items-center space-x-2 text-accent-300">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-sm">Criando histórias com amor desde 2018</span>
              </div>
            </motion.div>

            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-300 hover:text-accent-300 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>&copy; 2024 Tricomiteres. Todos os direitos reservados.</p>
                <div className="flex items-center space-x-1">
                  <span>Criado com</span>
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors italic font-medium"
                  >
                    Papum
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:from-accent-700 hover:to-accent-800 hover:shadow-lg"
                >
                  Comprar Livros
                </a>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  title="Voltar ao topo"
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-gray-800"
        >
          <div className="container-custom">
            <p className="text-gray-500 text-sm mb-4">
              "As melhores histórias de amor são aquelas que nos fazem acreditar no impossível 
              e nos ensinam que o coração tem razões que a própria razão desconhece."
            </p>
            <p className="text-accent-400 font-medium text-sm">— Tricomiteres</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}