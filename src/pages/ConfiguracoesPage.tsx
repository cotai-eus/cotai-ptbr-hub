
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Moon, 
  Sun, 
  Bell, 
  BellOff, 
  Mail, 
  MessageSquare, 
  Shield, 
  Key, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  Smartphone, 
  Lock, 
  LogOut,
  Check,
  Copy,
  Trash,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Tipos
interface SecuritySession {
  id: string;
  device: string;
  location: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
}

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  expires: string;
  lastUsed: string | null;
}

// Mock de dados
const sessions: SecuritySession[] = [
  { 
    id: "session1", 
    device: "Chrome em Windows 10", 
    location: "São Paulo, Brasil", 
    ip: "187.98.123.45", 
    lastActive: "Agora", 
    isCurrent: true 
  },
  { 
    id: "session2", 
    device: "App Android", 
    location: "Rio de Janeiro, Brasil", 
    ip: "201.45.78.92", 
    lastActive: "2 dias atrás", 
    isCurrent: false 
  },
  { 
    id: "session3", 
    device: "Safari em macOS", 
    location: "Curitiba, Brasil", 
    ip: "177.23.156.89", 
    lastActive: "5 dias atrás", 
    isCurrent: false 
  },
];

const notificationSettings: NotificationSetting[] = [
  {
    id: "not1",
    title: "Novas Licitações",
    description: "Notificações sobre novas licitações disponíveis",
    email: true,
    push: true,
    sms: false,
  },
  {
    id: "not2",
    title: "Prazos",
    description: "Alertas sobre prazos se aproximando",
    email: true,
    push: true,
    sms: true,
  },
  {
    id: "not3",
    title: "Atualizações de Status",
    description: "Mudanças no status das suas licitações",
    email: false,
    push: true,
    sms: false,
  },
  {
    id: "not4",
    title: "Mensagens",
    description: "Novas mensagens de outros usuários",
    email: true,
    push: true,
    sms: false,
  },
];

const apiKeys: ApiKey[] = [
  {
    id: "key1",
    name: "API Produção",
    key: "sk_prod_2023xpto42abc",
    created: "15/04/2023",
    expires: "15/04/2024",
    lastUsed: "Hoje, 09:45"
  },
  {
    id: "key2",
    name: "API Homologação",
    key: "sk_hml_2023test67xyz",
    created: "23/01/2023",
    expires: "23/01/2024",
    lastUsed: "3 dias atrás"
  }
];

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState("aparencia");
  const [densidadeUI, setDensidadeUI] = useState("normal");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  // Handlers
  const handleNotificationChange = (settingId: string, channel: "email" | "push" | "sms", value: boolean) => {
    // Aqui implementaríamos a lógica para atualizar o estado real
    toast({
      title: "Configuração atualizada",
      description: "Suas preferências de notificação foram salvas.",
    });
  };

  const handleCreateApiKey = () => {
    toast({
      title: "Nova chave API criada",
      description: "A chave foi gerada com sucesso.",
    });
  };

  const copyApiKey = (key: string, keyId: string) => {
    navigator.clipboard.writeText(key);
    setCopied(keyId);
    setTimeout(() => setCopied(null), 2000);
    
    toast({
      title: "Chave copiada",
      description: "A chave API foi copiada para a área de transferência.",
    });
  };
  
  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmDialogOpen(true);
  };
  
  const handleDelete = () => {
    // Aqui implementaríamos a lógica real de exclusão
    toast({
      title: "Item excluído",
      description: "O item foi removido com sucesso.",
      variant: "destructive",
    });
    
    setConfirmDialogOpen(false);
    setItemToDelete(null);
  };
  
  const handle2FAActivation = () => {
    toast({
      title: "Autenticação de dois fatores ativada",
      description: "Sua conta está mais segura agora.",
    });
  };

  // Componentes específicos
  const SecurityAuditLog = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Sessões ativas</h3>
        <Button variant="outline" size="sm">Encerrar outras sessões</Button>
      </div>
      
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              {session.device.includes("Android") ? (
                <Smartphone className="h-6 w-6 text-muted-foreground" />
              ) : (
                <Smartphone className="h-6 w-6 text-muted-foreground" />
              )}
              <div>
                <div className="flex items-center">
                  <p className="font-medium">{session.device}</p>
                  {session.isCurrent && (
                    <Badge variant="outline" className="ml-2">Sessão atual</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {session.location} • {session.ip} • Ativo: {session.lastActive}
                </p>
              </div>
            </div>
            
            {!session.isCurrent && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-destructive hover:text-destructive/80"
                onClick={() => confirmDelete(session.id)}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Encerrar
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const NotificationScheduler = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="quiet-hours-start">Horário de Início</Label>
          <Input
            id="quiet-hours-start"
            type="time"
            defaultValue="22:00"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="quiet-hours-end">Horário de Término</Label>
          <Input
            id="quiet-hours-end"
            type="time"
            defaultValue="07:00"
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Label className="col-span-2">Dias da Semana</Label>
        
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, index) => (
          <div key={day} className="flex items-center space-x-2">
            <Switch 
              id={`day-${index}`} 
              defaultChecked={index > 0 && index < 6} // Dias úteis selecionados por padrão
            />
            <Label htmlFor={`day-${index}`}>{day}</Label>
          </div>
        ))}
      </div>
      
      <Button className="w-full mt-4">Salvar Configurações</Button>
    </div>
  );

  const ApiKeyGenerator = () => (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Gerar Nova Chave API</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar nova chave API</DialogTitle>
            <DialogDescription>
              Esta chave terá acesso total à sua conta. Mantenha-a em segurança.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="api-key-name">Nome da chave</Label>
              <Input id="api-key-name" placeholder="ex: Integração ERP" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="api-key-expiry">Expiração</Label>
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 mês</SelectItem>
                  <SelectItem value="3">3 meses</SelectItem>
                  <SelectItem value="6">6 meses</SelectItem>
                  <SelectItem value="12">1 ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar senha</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Digite sua senha para confirmar"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {}}>Cancelar</Button>
            <Button onClick={handleCreateApiKey}>Criar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <div className="space-y-4 mt-6">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="p-4 border rounded-lg">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{apiKey.name}</h4>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                    {apiKey.key.substring(0, 10)}•••••••••••
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-1"
                    onClick={() => copyApiKey(apiKey.key, apiKey.id)}
                  >
                    {copied === apiKey.id ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive/80"
                onClick={() => confirmDelete(apiKey.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-x-4 mt-2 text-xs text-muted-foreground">
              <span>Criado: {apiKey.created}</span>
              <span>Expira: {apiKey.expires}</span>
              {apiKey.lastUsed && <span>Último uso: {apiKey.lastUsed}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Renderização principal
  return (
    <div className="container py-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">Configurações</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="aparencia">Aparência</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          {/* Aba de Aparência */}
          <TabsContent value="aparencia" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Aparência</CardTitle>
                <CardDescription>
                  Personalize como o CotAi Licitação Hub aparece para você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Tema</h3>
                    <p className="text-sm text-muted-foreground">
                      Escolha o tema de sua preferência
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-4 hover:border-primary cursor-pointer">
                      <Sun className="h-8 w-8 text-amber-500" />
                      <span>Claro</span>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-4 hover:border-primary cursor-pointer bg-primary/10 border-primary">
                      <Moon className="h-8 w-8 text-indigo-400" />
                      <span>Escuro</span>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-4 hover:border-primary cursor-pointer">
                      <div className="flex">
                        <Sun className="h-8 w-8 text-amber-500" />
                        <Moon className="h-8 w-8 text-indigo-400 ml-1" />
                      </div>
                      <span>Sistema</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Densidade da UI</h3>
                    <p className="text-sm text-muted-foreground">
                      Ajusta o espaçamento entre elementos da interface
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Select
                      defaultValue={densidadeUI}
                      onValueChange={setDensidadeUI}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compacto">Compacto</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="confortavel">Confortável</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <p className="text-sm text-muted-foreground">
                      {densidadeUI === "compacto" && "Menos espaço entre elementos, mais conteúdo visível"}
                      {densidadeUI === "normal" && "Espaçamento balanceado (recomendado)"}
                      {densidadeUI === "confortavel" && "Mais espaço entre elementos para melhor legibilidade"}
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Animações</h3>
                    <p className="text-sm text-muted-foreground">
                      Controle as animações da interface
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="animations" defaultChecked />
                    <Label htmlFor="animations">Ativar animações</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salvar Preferências</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Aba de Notificações */}
          <TabsContent value="notificacoes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>
                  Configure como e quando deseja receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notificações</h3>
                      <p className="text-sm text-muted-foreground">
                        Ativar ou desativar todas as notificações
                      </p>
                    </div>
                    <Switch id="notifications-main" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-6">
                  {notificationSettings.map((setting) => (
                    <div key={setting.id} className="space-y-4">
                      <div>
                        <h3 className="font-medium">{setting.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {setting.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id={`${setting.id}-email`}
                            checked={setting.email}
                            onCheckedChange={(checked) => handleNotificationChange(setting.id, "email", checked)}
                          />
                          <Label htmlFor={`${setting.id}-email`} className="flex items-center">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id={`${setting.id}-push`}
                            checked={setting.push}
                            onCheckedChange={(checked) => handleNotificationChange(setting.id, "push", checked)}
                          />
                          <Label htmlFor={`${setting.id}-push`} className="flex items-center">
                            <Bell className="mr-2 h-4 w-4" />
                            Push
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch 
                            id={`${setting.id}-sms`}
                            checked={setting.sms}
                            onCheckedChange={(checked) => handleNotificationChange(setting.id, "sms", checked)}
                          />
                          <Label htmlFor={`${setting.id}-sms`} className="flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            SMS
                          </Label>
                        </div>
                      </div>
                      
                      {setting.id !== notificationSettings[notificationSettings.length - 1].id && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Horário de Silêncio</h3>
                    <p className="text-sm text-muted-foreground">
                      Defina períodos em que não deseja receber notificações
                    </p>
                  </div>
                  
                  <NotificationScheduler />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Aba de Segurança */}
          <TabsContent value="seguranca" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  Gerenciar senha, autenticação de dois fatores e sessões
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Alterar Senha</h3>
                    <p className="text-sm text-muted-foreground">
                      Recomendamos usar uma senha forte e única
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="••••••••••"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full"
                          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                          {isPasswordVisible ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="••••••••••"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••••"
                        onPaste={(e) => e.preventDefault()}
                      />
                    </div>
                  </div>
                  
                  <Button>Alterar Senha</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Autenticação de Dois Fatores</h3>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handle2FAActivation}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Ativar 2FA
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <SecurityAuditLog />
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Aba de API */}
          <TabsContent value="api" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>API</CardTitle>
                <CardDescription>
                  Gerencie chaves de API para integrações com sistemas externos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Importante</AlertTitle>
                  <AlertDescription>
                    As chaves de API concedem acesso total à sua conta. Mantenha-as seguras e não compartilhe com terceiros.
                  </AlertDescription>
                </Alert>
                
                <ApiKeyGenerator />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      {/* Diálogo de confirmação para ações destrutivas */}
      <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar ação</DialogTitle>
            <DialogDescription>
              Esta ação não pode ser desfeita. Tem certeza que deseja continuar?
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
