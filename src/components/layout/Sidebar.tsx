
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Clipboard,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  Upload
} from "lucide-react";

interface SidebarProps {
  setSidebarOpen: (open: boolean) => void;
}

const navigationItems = [
  {
    name: "Início",
    icon: <Home className="mr-2 h-5 w-5" />,
    href: "/",
  },
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="mr-2 h-5 w-5" />,
    href: "/app/dashboard",
  },
  {
    name: "Editais",
    icon: <FileText className="mr-2 h-5 w-5" />,
    href: "/app/editais",
  },
  {
    name: "Propostas",
    icon: <Clipboard className="mr-2 h-5 w-5" />,
    href: "/app/propostas",
  },
  {
    name: "Submissões",
    icon: <Upload className="mr-2 h-5 w-5" />,
    href: "/app/submissoes",
  },
  {
    name: "Configurações",
    icon: <Settings className="mr-2 h-5 w-5" />,
    href: "/app/configuracoes",
  },
];

export function Sidebar({ setSidebarOpen }: SidebarProps) {
  return (
    <aside className="w-60 h-screen flex flex-col border-r border-border bg-background">
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <div className="font-semibold">CotAi</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(false)}
          className="hover-glow lg:hidden"
          aria-label="Esconder barra lateral"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
