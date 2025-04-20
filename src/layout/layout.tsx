import { Main } from "./main";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground">
      <Header />
      <Main><Outlet /></Main>
      <Footer />
    </div>
  );
}