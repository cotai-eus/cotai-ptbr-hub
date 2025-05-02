
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { AnimatePresence, motion } from "framer-motion";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "240px", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-20"
          >
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-auto p-6 bg-perola-50 dark:bg-bluenight-900">
          {children}
        </div>
      </main>
    </div>
  );
}
