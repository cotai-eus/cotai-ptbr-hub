
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Análise de Editais",
    description: "Análise automática de documentos de licitação com extração de requisitos-chave.",
    color: "bg-perola-100 dark:bg-bluenight-800",
    textColor: "text-bluenight-800 dark:text-perola-100",
  },
  {
    title: "Extração de Requisitos",
    description: "Identificação e organização inteligente dos requisitos técnicos e administrativos.",
    color: "bg-perola-100 dark:bg-bluenight-800",
    textColor: "text-bluenight-800 dark:text-perola-100",
  },
  {
    title: "Geração de Proposta",
    description: "Criação automatizada de propostas personalizadas que atendem a todos os requisitos.",
    color: "bg-perola-100 dark:bg-bluenight-800",
    textColor: "text-bluenight-800 dark:text-perola-100",
  },
  {
    title: "Submissão da Documentação",
    description: "Preparação e organização de toda documentação necessária para o processo licitatório.",
    color: "bg-perola-100 dark:bg-bluenight-800",
    textColor: "text-bluenight-800 dark:text-perola-100",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-perola-50 dark:bg-bluenight-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-bluenight-800 dark:text-perola-50 mb-4">
              CotAi Licitação Hub
            </h1>
            <p className="text-xl text-bluenight-700 dark:text-perola-100 max-w-3xl mx-auto">
              Transforme o processo de participação em licitações públicas com nossa plataforma completa de gestão e automação.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover-glow text-lg px-6 py-5">
              <Link to="/app/dashboard">Ver Demonstração</Link>
            </Button>
            <Button asChild variant="outline" className="hover-glow text-lg px-6 py-5">
              <Link to="/login">Fazer Login Abaixo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-perola-100 dark:bg-bluenight-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-bluenight-800 dark:text-perola-50"
          >
            Nossa Solução Completa
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-lg shadow hover-glow ${feature.color}`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={feature.textColor}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8 text-bluenight-800 dark:text-perola-50"
          >
            Dashboard de Licitações
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-perola-50 dark:bg-bluenight-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-bluenight-800 dark:text-perola-50 mb-4">
                  Licitações Recentes
                </h3>
                <div className="space-y-4">
                  {[
                    { id: "L-2023-001", titulo: "Aquisição de Equipamentos de TI", status: "Em andamento" },
                    { id: "L-2023-002", titulo: "Contratação de Serviços de Limpeza", status: "Pendente" },
                    { id: "L-2023-003", titulo: "Reforma de Prédio Público", status: "Concluído" },
                  ].map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-white dark:bg-bluenight-900 rounded-md shadow">
                      <div>
                        <p className="font-medium text-bluenight-800 dark:text-perola-50">{item.titulo}</p>
                        <p className="text-sm text-bluenight-700 dark:text-perola-100">{item.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Em andamento"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : item.status === "Concluído"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Button asChild className="hover-glow">
                  <Link to="/app/dashboard">Ver Dashboard Completo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
