// main app layout
import * as React from "react";
import { Main } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { Header1 } from "@/components/ui/header";

export const MainLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="swap.flint-ui-theme">
      <Main className="px-3 md:px-0">
        <Header1 />
        {children}
      </Main>
    </ThemeProvider>
  );
}

