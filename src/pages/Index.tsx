
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  FileText,
  Brain,
  LineChart,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Star,
  Award,
  TrendingUp,
  ImagePlus,
  Users,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Análise Rápida de Editais",
    description: "Nossa IA analisa os editais em segundos, extraindo todos os requisitos e informações importantes.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    image: "/images/analise-editais.jpg",
  },
  {
    title: "Geração Inteligente de Propostas",
    description: "Propostas personalizadas que atendem a todos os requisitos do edital, aumentando suas chances de sucesso.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    image: "/images/proposta-inteligente.jpg",
  },
  {
    title: "Monitoramento Proativo",
    description: "Acompanhamento em tempo real dos prazos e status de cada licitação em andamento.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    image: "/images/monitoramento.jpg",
  },
  {
    title: "Economia de Tempo",
    description: "Reduza em até 70% o tempo gasto na análise de editais e preparação de propostas.",
    icon: <Clock className="h-8 w-8 text-primary" />,
    image: "/images/economia-tempo.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Construtora Silva Ltda.",
    quote: "Aumentamos nossa taxa de sucesso em licitações em 45% após começar a usar o CotAi.",
    image: "/images/construtora.jpg",
    stars: 5,
  },
  {
    id: 2,
    name: "Tecnologia Futuro S.A.",
    quote: "A análise automática de editais nos permite participar de 3x mais licitações com a mesma equipe.",
    image: "/images/tecnologia.jpg",
    stars: 5,
  },
  {
    id: 3,
    name: "Serviços Integrados ME",
    quote: "O suporte da equipe CotAi fez toda a diferença na nossa adaptação ao sistema de licitações eletrônicas.",
    image: "/images/servicos.jpg",
    stars: 4,
  },
];

const processSteps = [
  { id: "01", title: "Em andamento", icon: <LineChart className="h-6 w-6" /> },
  { id: "02", title: "Análise de editais", icon: <FileText className="h-6 w-6" /> },
  { id: "03", title: "Extração de requisitos", icon: <Brain className="h-6 w-6" /> },
  { id: "04", title: "Geração de proposta", icon: <Send className="h-6 w-6" /> },
  { id: "05", title: "Submissão da documentação", icon: <CheckCircle className="h-6 w-6" /> },
];

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
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

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const Index = () => {
  const form = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    // Here would go the contact form submission logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/NavBar */}
      <header className="bg-background py-4 px-6 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">CotAi Licitação Hub</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link to="/app/dashboard">Demonstração</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section com Carrossel */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforme sua gestão de licitações com IA CotAi
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Licitação Hub automatiza a análise de editais e geração de propostas, economizando seu tempo e maximizando suas chances de sucesso.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/app/dashboard">
                  Ver Demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/signup">Criar Conta</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden border border-border">
                        <AspectRatio ratio={16/9}>
                          <div className="bg-muted/30 w-full h-full flex items-center justify-center">
                            <img
                              src={image}
                              alt={`Exemplo de uso da plataforma ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://placehold.co/600x400/3f3f46/FFFFFF?text=CotAi+Licitação+Hub";
                              }}
                            />
                          </div>
                        </AspectRatio>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="lg:left-2 -left-4" />
              <CarouselNext className="lg:right-2 -right-4" />
            </Carousel>

            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-center">Dashboard de Licitações</h3>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.id} className="flex items-center p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Recursos que Transformam sua Participação em Licitações
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
                className="hover-scale"
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative w-full h-48">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/600x200/3f3f46/FFFFFF?text=${feature.title.replace(/ /g, '+')}`;
                      }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Casos de Sucesso
          </motion.h2>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <div className="relative w-full h-48">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://placehold.co/600x200/3f3f46/FFFFFF?text=${testimonial.name.replace(/ /g, '+')}`;
                          }}
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/2" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                        <div className="flex">
                          {Array(testimonial.stars).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          Ver Caso Completo
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 -translate-y-1/2" />
            <CarouselNext className="right-2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>

      {/* About Us Section with Image */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <AspectRatio ratio={4/3}>
                <img
                  src="/images/quem-somos.jpg"
                  alt="Equipe CotAi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600/3f3f46/FFFFFF?text=Nossa+Equipe";
                  }}
                />
              </AspectRatio>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <p className="text-lg mb-6">
                A CotAi é uma empresa especializada em soluções de inteligência artificial para o setor 
                de licitações públicas. Nossa missão é democratizar o acesso às oportunidades de 
                negócios com o setor público, fornecendo ferramentas avançadas que simplificam processos 
                complexos e aumentam as chances de sucesso de empresas de todos os portes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>+500 clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>+30% taxa de sucesso</span>
                </div>
                <div className="flex items-center gap-2">
                  <ImagePlus className="h-5 w-5 text-primary" />
                  <span>+5000 editais analisados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Equipe especializada</span>
                </div>
              </div>
              
              <Button variant="outline" asChild>
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="mb-8">
              Estamos aqui para responder suas dúvidas e ajudar sua empresa a conquistar mais contratos públicos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3" />
                <a href="https://telegram.org" target="_blank" rel="noreferrer" className="hover:underline">
                  Telegram: @CotAiLicitacoes
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3" />
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:underline">
                  WhatsApp: +55 11 98765-4321
                </a>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3" />
                <a href="mailto:contato@cotai.com.br" className="hover:underline">
                  Email: contato@cotai.com.br
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu-email@exemplo.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Como podemos ajudar?" {...field} className="min-h-[120px]" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full hover-glow">Enviar Mensagem</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-muted px-6 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 CotAi Licitação Hub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
