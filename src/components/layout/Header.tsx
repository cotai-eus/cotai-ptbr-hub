
import React from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="h-16 px-4 border-b border-border flex items-center justify-between bg-background">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover-glow mr-4"
          aria-label={sidebarOpen ? "Esconder barra lateral" : "Mostrar barra lateral"}
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
        <h1 className="text-xl font-semibold">CotAi Licitação Hub</h1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
