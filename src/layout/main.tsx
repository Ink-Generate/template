import { Outlet } from "react-router-dom"
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};
export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">{children}
    </main>
  )
}