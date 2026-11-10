import type { ReactNode } from "react";
import { Footer, FloatingActions } from "./sections";
import { Nav } from "./nav";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="min-h-screen pt-24">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}