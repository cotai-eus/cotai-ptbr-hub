
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Filter, Plus, Calendar, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock kanban data
const mockBids = [
  {
    id: "bid-1",
    title: "Aquisição de Equipamentos de TI",
    organization: "Prefeitura de São Paulo",
    number: "2025/001",
    deadline: new Date(2025, 5, 15),
    status: "novos",
  },
  {
    id: "bid-2",
    title: "Serviços de Limpeza e Conservação",
    organization: "Governo do Estado de Minas Gerais",
    number: "2025/045",
    deadline: new Date(2025, 4, 20),
    status: "novos",
  },
  {
    id: "bid-3",
    title: "Fornecimento de Material de Escritório",
    organization: "Tribunal Regional do Trabalho",
    number: "2025/078",
    deadline: new Date(2025, 4, 10),
    status: "em_analise",
  },
  {
    id: "bid-4",
    title: "Serviços de Consultoria em TI",
    organization: "Ministério da Educação",
    number: "2025/023",
    deadline: new Date(2025, 5, 5),
    status: "em_analise",
  },
  {
    id: "bid-5",
    title: "Construção de Escola Municipal",
    organization: "Prefeitura de Curitiba",
    number: "2025/102",
    deadline: new Date(2025, 6, 25),
    status: "pronto_para_assinar",
  },
  {
    id: "bid-6",
    title: "Fornecimento de Medicamentos",
    organization: "Secretaria de Saúde de SP",
    number: "2025/125",
    deadline: new Date(2025, 4, 18),
    status: "enviado",
  },
  {
    id: "bid-7",
    title: "Implementação de Sistema ERP",
    organization: "Empresa de Transportes Públicos",
    number: "2025/078",
    deadline: new Date(2025, 5, 30),
    status: "concluido",
  },
];

const columns = [
  { id: "novos", title: "Novos" },
  { id: "em_analise", title: "Em análise" },
  { id: "pronto_para_assinar", title: "Pronto para assinar" },
  { id: "enviado", title: "Enviado" },
  { id: "concluido", title: "Concluído" },
];

const AcompanhamentoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [selectedBid, setSelectedBid] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAction = (bidId: string, action: string) => {
    if (action === "assinar") {
      setSelectedBid(bidId);
      setIsPasswordDialogOpen(true);
    } else {
      // Handle other actions
      toast({
        title: "Ação executada",
        description: `A ação "${action}" foi executada com sucesso.`,
      });
    }
  };

  const handlePasswordConfirm = () => {
    // Simulate password verification
    if (password.length >= 4) {
      toast({
        title: "Documento assinado",
        description: "O documento foi assinado com sucesso.",
      });
      setIsPasswordDialogOpen(false);
      setPassword("");
    } else {
      toast({
        title: "Erro",
        description: "Senha inválida. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const filteredBids = mockBids.filter(
    (bid) =>
      bid.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.number.includes(searchTerm)
  );

  // Group bids by status
  const groupedBids = columns.reduce((acc, column) => {
    acc[column.id] = filteredBids.filter((bid) => bid.status === column.id);
    return acc;
  }, {} as Record<string, typeof mockBids>);

  // Calculate days remaining
  const getDaysRemaining = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Get badge color based on days remaining
  const getBadgeVariant = (daysRemaining: number) => {
    if (daysRemaining < 0) return "destructive";
    if (daysRemaining <= 7) return "destructive";
    if (daysRemaining <= 14) return "yellow";
    return "default";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-6 h-full"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Acompanhamento</h1>
          <p className="text-muted-foreground mt-1">
            Acompanhe o status das suas licitações em andamento
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar licitação..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <Button variant="outline" className="flex-shrink-0">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          
          <Button asChild className="flex-shrink-0">
            <Link to="/app/nova-licitacao">
              <Plus className="h-4 w-4 mr-2" />
              Nova Licitação
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 overflow-x-auto pb-6">
        {columns.map((column) => (
          <div key={column.id} className="w-full min-w-[250px]">
            <div className="bg-muted rounded-t-lg px-3 py-2 font-medium border-b border-border">
              <div className="flex items-center justify-between">
                <span>{column.title}</span>
                <Badge variant="outline">{groupedBids[column.id]?.length || 0}</Badge>
              </div>
            </div>
            
            <div className="bg-card/50 rounded-b-lg h-[calc(100vh-220px)] overflow-y-auto p-2 space-y-2">
              {groupedBids[column.id]?.map((bid) => {
                const daysRemaining = getDaysRemaining(bid.deadline);
                return (
                  <Card key={bid.id} className="hover-scale">
                    <CardHeader className="p-3 pb-1">
                      <CardTitle className="text-sm font-medium">
                        {bid.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 text-xs text-muted-foreground space-y-2">
                      <div className="flex justify-between">
                        <span>{bid.organization}</span>
                        <span>#{bid.number}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {format(bid.deadline, "dd/MM/yyyy", { locale: ptBR })}
                        </span>
                        <Badge variant={getBadgeVariant(daysRemaining)}>
                          {daysRemaining < 0
                            ? `${Math.abs(daysRemaining)}d atrasado`
                            : `${daysRemaining}d restantes`}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 gap-2">
                      {column.id === "novos" && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => handleAction(bid.id, "analisar")}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Analisar
                        </Button>
                      )}
                      {column.id === "em_analise" && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full"
                          onClick={() => handleAction(bid.id, "revisado")}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Revisado
                        </Button>
                      )}
                      {column.id === "pronto_para_assinar" && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full"
                          onClick={() => handleAction(bid.id, "assinar")}
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          Assinar
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                )
              })}
              {(!groupedBids[column.id] || groupedBids[column.id].length === 0) && (
                <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
                  <AlertCircle className="h-6 w-6 mb-2" />
                  <p className="text-sm">Nenhuma licitação</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Password Confirmation Dialog */}
      <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar assinatura</DialogTitle>
            <DialogDescription>
              Digite sua senha para assinar o documento.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handlePasswordConfirm}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default AcompanhamentoPage;
