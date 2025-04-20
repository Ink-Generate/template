import { ThemeToggle } from "../components/theme-toggle"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "../components/ui/navigation-menu"
import { MobileNav } from "../components/mobile-nav"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl font-semibold tracking-tight">Writer's Portfolio</h1>
                <ThemeToggle />
            </div>
        </header>
    );
}